export type DepartmentId =
  | 'digital-technology'
  | 'marketing-growth'
  | 'creative-media'
  | 'business-professional';

export type PortfolioCategory =
  | 'Websites'
  | 'Ecommerce Stores'
  | 'Graphic Design'
  | 'Video Editing'
  | 'Social Media'
  | 'Marketing Campaigns'
  | 'Branding'
  | 'AI Content';

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string[];
  departmentId: DepartmentId;
  departmentName: string;
  iconName: string;
  subServices: string[];
  benefits: { title: string; description: string }[];
  process: ServiceProcessStep[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  complianceNotice?: string;
}

export interface DepartmentItem {
  id: DepartmentId;
  number: string;
  name: string;
  summary: string;
  capabilities: string[];
  serviceSlugs: string[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  serviceSlug: string;
  isSample: boolean;
  sampleLabel: string;
  summary: string;
  overview: string;
  scope: string[];
  deliverables: string[];
  approach: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface PricingTier {
  id: 'starter' | 'professional' | 'premium' | 'enterprise';
  name: string;
  tagline: string;
  pricingLabel: string;
  recommendedFor: string;
  deliverables: string[];
  turnaround: string;
  supportLevel: string;
  highlighted?: boolean;
}

export interface PricingCategory {
  id: string;
  name: string;
  serviceSlug: string;
  description: string;
  tiers: PricingTier[];
  comparisonRows: {
    feature: string;
    starter: string;
    professional: string;
    premium: string;
    enterprise: string;
  }[];
}

export interface AgencySettings {
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

export interface InquiryRecord {
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

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  serviceCategory: string;
  region: string;
  feedback: string;
  isPlaceholder?: boolean;
}
