import type { DepartmentItem } from '../types/agency';

export const DEPARTMENTS: DepartmentItem[] = [
  {
    id: 'digital-technology',
    number: '01',
    name: 'Digital & Technology Solutions',
    summary:
      'Engineering, storefront architecture, practical AI workflows, and cross-border digital infrastructure designed for reliable business operations.',
    capabilities: [
      'Web Development',
      'Website Solutions',
      'Ecommerce Development',
      'Shopify Solutions',
      'Dropshipping Solutions',
      'AI Automation',
      'International Business Assistance',
    ],
    serviceSlugs: [
      'web-development-website-solutions',
      'ecommerce-dropshipping-solutions',
      'ai-content-creation-automation',
      'international-business-account-setup-assistance',
    ],
  },
  {
    id: 'marketing-growth',
    number: '02',
    name: 'Marketing & Growth Solutions',
    summary:
      'Performance advertising, search visibility, social channel management, and structured lead generation across international markets.',
    capabilities: [
      'Digital Marketing',
      'Meta Ads',
      'TikTok Ads',
      'Google Ads',
      'SEO',
      'Social Media Management',
      'Lead Generation',
    ],
    serviceSlugs: [
      'digital-marketing-advertising',
      'social-media-channel-management',
    ],
  },
  {
    id: 'creative-media',
    number: '03',
    name: 'Creative & Media Solutions',
    summary:
      'Post-production video editing, high-clarity graphic design, AI-assisted visual media, and creator channel production.',
    capabilities: [
      'Video Editing',
      'Graphic Design',
      'AI Content Creation',
      'YouTube Solutions',
      'Gaming Content',
      'Creator Services',
      'Promotional Content',
    ],
    serviceSlugs: [
      'video-editing-content-production',
      'graphic-design-creative-services',
      'youtube-gaming-creator-solutions',
    ],
  },
  {
    id: 'business-professional',
    number: '04',
    name: 'Business & Professional Solutions',
    summary:
      'Digital product storefronts, business and executive branding, and focused 1-to-1 strategic advisory for founders and creators.',
    capabilities: [
      'Etsy Business Solutions',
      'Digital Products',
      'Business Branding',
      'Personal Branding',
      'Consultation',
      'Professional Guidance',
    ],
    serviceSlugs: [
      'digital-products-etsy-business-solutions',
      'business-personal-branding',
      'consultation-professional-guidance',
    ],
  },
];
