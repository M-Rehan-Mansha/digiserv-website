import React, { createContext, useContext, useEffect, useState } from 'react';
import type {
  AgencySettings,
  FaqItem,
  InquiryRecord,
  PortfolioProject,
  TestimonialItem,
} from '../types/agency';
import { INITIAL_PORTFOLIO_PROJECTS } from '../data/portfolio';
import { INITIAL_FAQS } from '../data/faqs';
import { INITIAL_TESTIMONIALS } from '../data/testimonials';

const DEFAULT_SETTINGS: AgencySettings = {
  agencyName: 'DIGISERV',
  tagline: 'One Agency. Multiple Services. Endless Possibilities.',
  contactEmail: '',
  whatsappNumber: '',
  primaryRegions: ['United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia', 'Worldwide'],
  officeNote: 'Configurable via Agency Admin Settings — enter your official agency email, WhatsApp number, and social URLs.',
  crmWebhookUrl: '',
  analyticsId: '',
  socialLinks: {
    linkedin: '',
    instagram: '',
    facebook: '',
    youtube: '',
    x: '',
  },
  updatedAt: '',
};

interface AgencyContextValue {
  settings: AgencySettings;
  portfolio: PortfolioProject[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
  loading: boolean;
  cookieConsent: 'pending' | 'accepted' | 'essential';
  setCookieConsent: (choice: 'accepted' | 'essential') => void;
  refreshData: () => Promise<void>;
  saveSettings: (next: AgencySettings) => Promise<{ ok: boolean; error?: string; message?: string }>;
  saveContent: (next: {
    portfolio?: PortfolioProject[];
    faqs?: FaqItem[];
    testimonials?: TestimonialItem[];
  }) => Promise<{ ok: boolean; error?: string }>;
  submitInquiry: (
    payload: Omit<InquiryRecord, 'id' | 'createdAt'> & { websiteTrap?: string }
  ) => Promise<{ ok: boolean; inquiry?: InquiryRecord; error?: string; message?: string }>;
}

const AgencyContext = createContext<AgencyContextValue | null>(null);

export function AgencyProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AgencySettings>(DEFAULT_SETTINGS);
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>(INITIAL_PORTFOLIO_PROJECTS);
  const [faqs, setFaqs] = useState<FaqItem[]>(INITIAL_FAQS);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [loading, setLoading] = useState(true);
  const [cookieConsent, setCookieConsentState] = useState<'pending' | 'accepted' | 'essential'>(() => {
    try {
      const saved = window.localStorage.getItem('digiserv_cookie_consent');
      if (saved === 'accepted' || saved === 'essential') return saved;
    } catch {
      // ignore storage access issues
    }
    return 'pending';
  });

  const setCookieConsent = (choice: 'accepted' | 'essential') => {
    setCookieConsentState(choice);
    try {
      window.localStorage.setItem('digiserv_cookie_consent', choice);
    } catch {
      // ignore storage errors
    }
  };

  const refreshData = async () => {
    try {
      const [settingsRes, contentRes] = await Promise.all([
        fetch('/api/settings'),
        fetch('/api/content'),
      ]);
      if (settingsRes.ok) {
        const data = (await settingsRes.json()) as { settings?: AgencySettings };
        if (data.settings) setSettings(data.settings);
      }
      if (contentRes.ok) {
        const contentData = (await contentRes.json()) as {
          portfolio?: PortfolioProject[] | null;
          faqs?: FaqItem[] | null;
          testimonials?: TestimonialItem[] | null;
        };
        if (Array.isArray(contentData.portfolio) && contentData.portfolio.length > 0) {
          setPortfolio(contentData.portfolio);
        }
        if (Array.isArray(contentData.faqs) && contentData.faqs.length > 0) {
          setFaqs(contentData.faqs);
        }
        if (Array.isArray(contentData.testimonials) && contentData.testimonials.length > 0) {
          setTestimonials(contentData.testimonials);
        }
      }
    } catch {
      // keep default data cleanly if network unavailable
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refreshData();
  }, []);

  const saveSettings = async (next: AgencySettings) => {
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
      });
      const data = (await res.json()) as { settings?: AgencySettings; error?: string; message?: string };
      if (!res.ok) {
        return { ok: false, error: data.error || 'Failed to update settings.' };
      }
      if (data.settings) setSettings(data.settings);
      return { ok: true, message: data.message };
    } catch {
      return { ok: false, error: 'Network error while saving settings.' };
    }
  };

  const saveContent = async (next: {
    portfolio?: PortfolioProject[];
    faqs?: FaqItem[];
    testimonials?: TestimonialItem[];
  }) => {
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
      });
      const data = (await res.json()) as {
        portfolio?: PortfolioProject[] | null;
        faqs?: FaqItem[] | null;
        testimonials?: TestimonialItem[] | null;
        error?: string;
      };
      if (!res.ok) return { ok: false, error: data.error || 'Failed to save content.' };
      if (Array.isArray(data.portfolio)) setPortfolio(data.portfolio);
      if (Array.isArray(data.faqs)) setFaqs(data.faqs);
      if (Array.isArray(data.testimonials)) setTestimonials(data.testimonials);
      return { ok: true };
    } catch {
      return { ok: false, error: 'Network error while updating content.' };
    }
  };

  const submitInquiry = async (
    payload: Omit<InquiryRecord, 'id' | 'createdAt'> & { websiteTrap?: string }
  ) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        inquiry?: InquiryRecord;
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        return { ok: false, error: data.error || 'Unable to submit request.' };
      }
      return { ok: true, inquiry: data.inquiry, message: data.message };
    } catch {
      return { ok: false, error: 'Network error submitting your request. Please try again.' };
    }
  };

  return (
    <AgencyContext.Provider
      value={{
        settings,
        portfolio,
        faqs,
        testimonials,
        loading,
        cookieConsent,
        setCookieConsent,
        refreshData,
        saveSettings,
        saveContent,
        submitInquiry,
      }}
    >
      {children}
    </AgencyContext.Provider>
  );
}

export function useAgency() {
  const ctx = useContext(AgencyContext);
  if (!ctx) throw new Error('useAgency must be used within AgencyProvider');
  return ctx;
}
