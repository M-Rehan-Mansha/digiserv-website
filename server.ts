import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const STORE_FILE = path.join(DATA_DIR, 'digiserv-store.json');

interface StoreSettings {
  agencyName: string;
  tagline: string;
  contactEmail: string;
  whatsappNumber: string;
  primaryRegions: string[];
  officeNote: string;
  crmWebhookUrl: string;
  analyticsId: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
    x: string;
  };
  updatedAt: string;
}

interface InquiryPayload {
  id: string;
  type: 'contact' | 'quote' | 'consultation' | 'package';
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  companyName: string;
  serviceRequired: string;
  budget: string;
  preferredContactMethod: string;
  description: string;
  packageCategory?: string;
  packageTier?: string;
  consultationDate?: string;
  consultationTimezone?: string;
  selectedSubServices?: string[];
  privacyConsent: boolean;
  createdAt: string;
}

interface StoreData {
  settings: StoreSettings;
  inquiries: InquiryPayload[];
  customPortfolio: unknown[] | null;
  customFaqs: unknown[] | null;
  customTestimonials: unknown[] | null;
}

const DEFAULT_STORE: StoreData = {
  settings: {
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
    updatedAt: new Date().toISOString(),
  },
  inquiries: [],
  customPortfolio: null,
  customFaqs: null,
  customTestimonials: null,
};

const SERVICE_SLUGS = [
  'web-development-website-solutions',
  'digital-marketing-advertising',
  'social-media-channel-management',
  'video-editing-content-production',
  'graphic-design-creative-services',
  'ai-content-creation-automation',
  'ecommerce-dropshipping-solutions',
  'digital-products-etsy-business-solutions',
  'international-business-account-setup-assistance',
  'youtube-gaming-creator-solutions',
  'business-personal-branding',
  'consultation-professional-guidance',
];

const SAMPLE_WORK_SLUGS = [
  'sample-b2b-operations-web-platform',
  'sample-luxury-shopify-storefront',
  'sample-creator-post-production-suite',
  'sample-corporate-brand-identity-system',
  'sample-social-channel-editorial-system',
  'sample-performance-ad-creative-framework',
  'sample-commercial-graphic-design-suite',
  'sample-ai-content-automation-pipeline',
];

let memoryStore: StoreData = structuredClone(DEFAULT_STORE);

async function loadStore(): Promise<StoreData> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const raw = await fs.readFile(STORE_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<StoreData>;
    memoryStore = {
      settings: { ...DEFAULT_STORE.settings, ...(parsed.settings || {}) },
      inquiries: Array.isArray(parsed.inquiries) ? parsed.inquiries : [],
      customPortfolio: parsed.customPortfolio ?? null,
      customFaqs: parsed.customFaqs ?? null,
      customTestimonials: parsed.customTestimonials ?? null,
    };
  } catch {
    await saveStore(memoryStore);
  }
  return memoryStore;
}

async function saveStore(data: StoreData): Promise<void> {
  memoryStore = data;
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(STORE_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not persist store file, retaining in memory:', err);
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function sanitizeText(val: unknown, maxLen = 2000): string {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLen);
}

async function createApp() {
  await loadStore();

  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '1mb' }));

  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'digiserv-api' });
  });

  app.get('/api/settings', (_req, res) => {
    res.json({ settings: memoryStore.settings });
  });

  app.put('/api/settings', async (req, res) => {
    const body = req.body as Partial<StoreSettings> | undefined;
    if (!body || typeof body !== 'object') {
      res.status(400).json({ error: 'Invalid settings payload.' });
      return;
    }

    const contactEmail = sanitizeText(body.contactEmail, 160);
    if (contactEmail && !isValidEmail(contactEmail)) {
      res.status(400).json({ error: 'Please provide a valid contact email address.' });
      return;
    }

    const updated: StoreSettings = {
      ...memoryStore.settings,
      contactEmail,
      whatsappNumber: sanitizeText(body.whatsappNumber, 40),
      officeNote: sanitizeText(body.officeNote, 400) || memoryStore.settings.officeNote,
      crmWebhookUrl: sanitizeText(body.crmWebhookUrl, 400),
      analyticsId: sanitizeText(body.analyticsId, 80),
      socialLinks: {
        linkedin: sanitizeText(body.socialLinks?.linkedin, 300),
        instagram: sanitizeText(body.socialLinks?.instagram, 300),
        facebook: sanitizeText(body.socialLinks?.facebook, 300),
        youtube: sanitizeText(body.socialLinks?.youtube, 300),
        x: sanitizeText(body.socialLinks?.x, 300),
      },
      updatedAt: new Date().toISOString(),
    };

    await saveStore({ ...memoryStore, settings: updated });
    res.json({ settings: updated, message: 'Agency settings saved successfully.' });
  });

  app.get('/api/content', (_req, res) => {
    res.json({
      portfolio: memoryStore.customPortfolio,
      faqs: memoryStore.customFaqs,
      testimonials: memoryStore.customTestimonials,
    });
  });

  app.put('/api/content', async (req, res) => {
    const body = req.body as
      | { portfolio?: unknown[]; faqs?: unknown[]; testimonials?: unknown[] }
      | undefined;
    if (!body || typeof body !== 'object') {
      res.status(400).json({ error: 'Invalid content payload.' });
      return;
    }
    const nextStore: StoreData = {
      ...memoryStore,
      customPortfolio: Array.isArray(body.portfolio) ? body.portfolio : memoryStore.customPortfolio,
      customFaqs: Array.isArray(body.faqs) ? body.faqs : memoryStore.customFaqs,
      customTestimonials: Array.isArray(body.testimonials)
        ? body.testimonials
        : memoryStore.customTestimonials,
    };
    await saveStore(nextStore);
    res.json({
      portfolio: nextStore.customPortfolio,
      faqs: nextStore.customFaqs,
      testimonials: nextStore.customTestimonials,
      message: 'Content configuration updated.',
    });
  });

  app.get('/api/inquiries', (_req, res) => {
    res.json({ inquiries: memoryStore.inquiries });
  });

  app.post('/api/inquiries', async (req, res) => {
    const body = req.body as Record<string, unknown> | undefined;
    if (!body || typeof body !== 'object') {
      res.status(400).json({ error: 'Invalid submission payload.' });
      return;
    }

    // Honeypot anti-spam field
    if (typeof body.websiteTrap === 'string' && body.websiteTrap.trim().length > 0) {
      res.status(400).json({ error: 'Submission rejected by spam protection.' });
      return;
    }

    const fullName = sanitizeText(body.fullName, 140);
    const email = sanitizeText(body.email, 160);
    const whatsapp = sanitizeText(body.whatsapp, 50);
    const country = sanitizeText(body.country, 100);
    const companyName = sanitizeText(body.companyName, 160);
    const serviceRequired = sanitizeText(body.serviceRequired, 160);
    const budget = sanitizeText(body.budget, 100);
    const preferredContactMethod = sanitizeText(body.preferredContactMethod, 60);
    const description = sanitizeText(body.description, 4000);
    const privacyConsent = body.privacyConsent === true;

    if (!fullName || fullName.length < 2) {
      res.status(400).json({ error: 'Full Name is required.' });
      return;
    }
    if (!email || !isValidEmail(email)) {
      res.status(400).json({ error: 'A valid Email Address is required.' });
      return;
    }
    if (!country) {
      res.status(400).json({ error: 'Country is required.' });
      return;
    }
    if (!serviceRequired) {
      res.status(400).json({ error: 'Please select the service required.' });
      return;
    }
    if (!description || description.length < 10) {
      res.status(400).json({ error: 'Please provide a brief project description (at least 10 characters).' });
      return;
    }
    if (!privacyConsent) {
      res.status(400).json({ error: 'Privacy policy consent is required before submitting.' });
      return;
    }

    const rawType = sanitizeText(body.type, 30);
    const type: InquiryPayload['type'] =
      rawType === 'quote' || rawType === 'consultation' || rawType === 'package' ? rawType : 'contact';

    const record: InquiryPayload = {
      id: `inq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      type,
      fullName,
      email,
      whatsapp,
      country,
      companyName,
      serviceRequired,
      budget: budget || 'To be discussed',
      preferredContactMethod: preferredContactMethod || 'Email',
      description,
      packageCategory: sanitizeText(body.packageCategory, 140) || undefined,
      packageTier: sanitizeText(body.packageTier, 80) || undefined,
      consultationDate: sanitizeText(body.consultationDate, 80) || undefined,
      consultationTimezone: sanitizeText(body.consultationTimezone, 80) || undefined,
      selectedSubServices: Array.isArray(body.selectedSubServices)
        ? body.selectedSubServices.map((s) => sanitizeText(s, 120)).filter(Boolean)
        : undefined,
      privacyConsent,
      createdAt: new Date().toISOString(),
    };

    const updatedInquiries = [record, ...memoryStore.inquiries].slice(0, 250);
    await saveStore({ ...memoryStore, inquiries: updatedInquiries });

    // Optional forward to configured CRM webhook
    if (memoryStore.settings.crmWebhookUrl && memoryStore.settings.crmWebhookUrl.startsWith('http')) {
      try {
        await fetch(memoryStore.settings.crmWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        });
      } catch (webhookErr) {
        console.warn('CRM webhook forward failed:', webhookErr);
      }
    }

    res.status(201).json({
      inquiry: record,
      message: 'Your submission has been received. Our team will respond via your preferred contact method.',
    });
  });

  app.get('/robots.txt', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    res.type('text/plain').send(
      `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${baseUrl}/sitemap.xml\n`
    );
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    const staticRoutes = [
      '/',
      '/about',
      '/services',
      '/departments',
      '/work',
      '/pricing',
      '/contact',
      '/consultation',
      '/quote',
      '/faq',
      '/privacy-policy',
      '/terms',
    ];
    const allRoutes = [
      ...staticRoutes,
      ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
      ...SAMPLE_WORK_SLUGS.map((slug) => `/work/${slug}`),
    ];

    const today = new Date().toISOString().split('T')[0];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.type('application/xml').send(xml);
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`DIGISERV server running on http://0.0.0.0:${port}`);
  });
}

createApp().catch((err) => {
  console.error('Failed to start DIGISERV server:', err);
  process.exit(1);
});
