import type { PortfolioCategory, PortfolioProject } from '../types/agency';
import { AGENCY_MEDIA } from '../assets/media';

export const PORTFOLIO_CATEGORIES: ('All' | PortfolioCategory)[] = [
  'All',
  'Websites',
  'Ecommerce Stores',
  'Graphic Design',
  'Video Editing',
  'Social Media',
  'Marketing Campaigns',
  'Branding',
  'AI Content',
];

export const INITIAL_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'sample-01',
    slug: 'sample-b2b-operations-web-platform',
    title: 'B2B Enterprise Web Platform Concept',
    category: 'Websites',
    serviceSlug: 'web-development-website-solutions',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative corporate web platform and client portal architecture demonstrating clean navigation, responsive grids, and technical SEO structure.',
    overview:
      'This sample showcase illustrates how DIGISERV structures B2B corporate websites and interactive web portals. Designed around fast content scanability, clear service hierarchies, and validated lead-capture flows, this template demonstrates our production engineering standards before custom brand tailoring.',
    scope: [
      'Information architecture & responsive UI design',
      'Custom React & TypeScript frontend build',
      'Technical SEO schema & performance optimization',
      'Validated inquiry & quote routing integration',
    ],
    deliverables: [
      'Responsive multi-page web platform',
      'Modular design system components',
      'XML sitemap & structured schema implementation',
      'Deployment & speed optimization checklist',
    ],
    approach: [
      'Mapped clear buyer journeys from homepage value proposition to service-specific inquiry forms.',
      'Structured modular layout grids with strict typographic hierarchy and WCAG AA contrast.',
      'Integrated clean server-side validation for contact and quote submissions.',
    ],
    imageUrl: AGENCY_MEDIA.workWebPlatform,
    imageAlt: 'Sample B2B enterprise web platform interface displayed on a studio monitor',
  },
  {
    id: 'sample-02',
    slug: 'sample-luxury-shopify-storefront',
    title: 'Direct-to-Consumer Shopify Storefront Concept',
    category: 'Ecommerce Stores',
    serviceSlug: 'ecommerce-dropshipping-solutions',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative minimalist ecommerce storefront built to highlight product photography, streamlined collection filtering, and mobile checkout clarity.',
    overview:
      'This sample ecommerce build showcases our approach to Shopify store design and theme customization. Rather than cluttering product pages with distracting popups, the layout emphasizes editorial product grids, transparent shipping policies, and friction-free mobile navigation.',
    scope: [
      'Shopify theme architecture & custom sections',
      'Collection filtering & product page hierarchy',
      'Payment gateway & international shipping setup',
      'On-page ecommerce SEO structure',
    ],
    deliverables: [
      'Custom-configured Shopify storefront',
      'Mobile-optimized product & cart drawer templates',
      'SEO-ready collection & product descriptions',
      'Store launch & QA checklist',
    ],
    approach: [
      'Prioritized crisp product imagery and clean variant selectors above the fold.',
      'Configured structured international shipping and multi-currency display readiness.',
      'Embedded clear return, delivery, and support information to strengthen buyer confidence.',
    ],
    imageUrl: AGENCY_MEDIA.workEcommerceStore,
    imageAlt: 'Sample luxury ecommerce storefront displayed across laptop and tablet',
  },
  {
    id: 'sample-03',
    slug: 'sample-creator-post-production-suite',
    title: 'Multi-Format Video & Creator Production Workflow',
    category: 'Video Editing',
    serviceSlug: 'video-editing-content-production',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative post-production pipeline transforming long-form recordings into color-graded YouTube episodes and captioned vertical Shorts.',
    overview:
      'This sample media production case illustrates how DIGISERV turns a single long-form studio or podcast recording into a coordinated multi-platform release. Our workflow covers narrative cutting, motion graphic callouts, balanced sound mixing, and vertical short-form repurposing.',
    scope: [
      'Long-form YouTube assembly & pacing edit',
      'Color grading & studio audio mastering',
      'Custom motion graphics & dynamic captions',
      'Vertical Reels, TikTok & Shorts repurposing',
    ],
    deliverables: [
      '16:9 YouTube master export',
      'Series of 9:16 captioned short-form clips',
      'Custom intro/outro & lower-third templates',
      'Thumbnail visual concepts',
    ],
    approach: [
      'Structured the opening 15 seconds around the core insight to strengthen early viewer retention.',
      'Applied consistent color grading and loudness normalization across long and short exports.',
      'Packaged each video with clear title angles and thumbnail contrast hierarchy.',
    ],
    imageUrl: AGENCY_MEDIA.workCreativeMedia,
    imageAlt: 'Sample video editing timeline and color grading monitor in a dark studio',
  },
  {
    id: 'sample-04',
    slug: 'sample-corporate-brand-identity-system',
    title: 'International Agency Visual Identity Concept',
    category: 'Branding',
    serviceSlug: 'business-personal-branding',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative business branding system uniting executive positioning, typography, presentation decks, and cohesive social profile kits.',
    overview:
      'This sample branding package demonstrates how DIGISERV translates a company’s positioning into a disciplined visual and verbal identity. Designed for modern technology and service firms, the framework covers brand guidelines, executive bios, social headers, and client pitch decks.',
    scope: [
      'Brand positioning & communication framework',
      'Visual identity & typography guidelines',
      'Executive LinkedIn & social profile suite',
      'Client presentation deck template',
    ],
    deliverables: [
      'Comprehensive Brand Guidelines PDF',
      'Logo lockups & social profile graphics',
      'Editable corporate presentation template',
      'Founder & company bio copy deck',
    ],
    approach: [
      'Aligned visual restraint and typographic precision with international B2B buyer expectations.',
      'Eliminated inconsistent templates by standardizing spacing, color tokens, and slide layouts.',
    ],
    imageUrl: AGENCY_MEDIA.aboutCreativeTeam,
    imageAlt: 'Modern architectural studio conference room representing corporate branding showcase',
  },
  {
    id: 'sample-05',
    slug: 'sample-social-channel-editorial-system',
    title: 'Multi-Channel Social Editorial System',
    category: 'Social Media',
    serviceSlug: 'social-media-channel-management',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative monthly content calendar, carousel design framework, and cross-platform publishing system for LinkedIn and Instagram.',
    overview:
      'This sample illustrates our structured approach to Social Media & Channel Management. Instead of ad-hoc posting, we organize weekly educational carousels, short-form video hooks, and consistent community engagement workflows.',
    scope: [
      'Monthly content pillar & calendar planning',
      'Carousel & static post template design',
      'Profile optimization & hashtag architecture',
      'Scheduled publishing & monthly review',
    ],
    deliverables: [
      '30-day structured content calendar',
      'Custom Instagram & LinkedIn carousel templates',
      'Optimized channel bios & highlight covers',
      'Monthly engagement summary template',
    ],
    approach: [
      'Balanced educational breakdowns, behind-the-scenes process posts, and direct service invitations.',
      'Maintained strict visual consistency across every carousel slide and cover frame.',
    ],
    imageUrl: AGENCY_MEDIA.heroAgencyStudio,
    imageAlt: 'Digital studio environment representing coordinated social media management',
  },
  {
    id: 'sample-06',
    slug: 'sample-performance-ad-creative-framework',
    title: 'Multi-Platform Paid Acquisition Creative Kit',
    category: 'Marketing Campaigns',
    serviceSlug: 'digital-marketing-advertising',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative Meta, TikTok, and Google campaign framework pairing structured audience segmentation with modular creative testing.',
    overview:
      'This sample marketing showcase outlines how DIGISERV prepares paid advertising launches. We combine clean static ad creatives, UGC-style video hooks, conversion tracking setup, and structured retargeting sequences.',
    scope: [
      'Competitor research & offer positioning',
      'Meta, TikTok & Google campaign architecture',
      'Static & video ad creative variations',
      'Conversion event & pixel verification',
    ],
    deliverables: [
      'Multi-angle ad creative matrix',
      'Campaign & retargeting funnel blueprint',
      'Landing page conversion audit notes',
      'Weekly reporting dashboard template',
    ],
    approach: [
      'Built distinct creative hooks for cold prospecting versus warm retargeting audiences.',
      'Aligned ad copy directly with landing page headlines to preserve message match.',
    ],
    imageUrl: AGENCY_MEDIA.workWebPlatform,
    imageAlt: 'Analytics and campaign management layout on studio display',
  },
  {
    id: 'sample-07',
    slug: 'sample-commercial-graphic-design-suite',
    title: 'Digital & Print Marketing Collateral Suite',
    category: 'Graphic Design',
    serviceSlug: 'graphic-design-creative-services',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative collection of ecommerce banners, YouTube thumbnails, product packaging concepts, and executive infographics.',
    overview:
      'This sample graphic design showcase demonstrates cross-format visual production across both high-contrast digital placements and print-ready marketing assets.',
    scope: [
      'Website hero banners & ecommerce graphics',
      'YouTube thumbnail visual system',
      'Brochure, flyer & packaging layout',
      'Structured presentation infographics',
    ],
    deliverables: [
      'Print-ready CMYK & web RGB asset exports',
      'Modular social & banner graphic templates',
      'Packaging dieline & visual mockups',
    ],
    approach: [
      'Applied disciplined grid spacing and clear focal hierarchy so messaging reads cleanly at thumbnail scale.',
      'Delivered organized, clearly named source and export packages.',
    ],
    imageUrl: AGENCY_MEDIA.workEcommerceStore,
    imageAlt: 'Minimalist commercial layout showcasing structured graphic design grid',
  },
  {
    id: 'sample-08',
    slug: 'sample-ai-content-automation-pipeline',
    title: 'AI Media & Support Automation Blueprint',
    category: 'AI Content',
    serviceSlug: 'ai-content-creation-automation',
    isSample: true,
    sampleLabel: 'Sample Showcase',
    summary:
      'Representative custom AI workflow combining structured product image generation, script pipelines, and lead-routing chatbot setup.',
    overview:
      'This sample AI showcase highlights practical automation and curated media workflows—reducing repetitive manual formatting while keeping human editorial review in control.',
    scope: [
      'AI product scene & promotional creative workflow',
      'Customer FAQ chatbot & lead capture setup',
      'Long-form content repurposing automation',
      'CRM & notification webhook integration',
    ],
    deliverables: [
      'Curated AI visual & script asset library',
      'Configured knowledge-base support chatbot',
      'Automated lead routing workflow documentation',
    ],
    approach: [
      'Integrated human quality gates before any generated copy or media goes live.',
      'Connected form and chat inquiries directly into structured team notification channels.',
    ],
    imageUrl: AGENCY_MEDIA.workCreativeMedia,
    imageAlt: 'Production desk representing AI content creation and workflow automation',
  },
];
