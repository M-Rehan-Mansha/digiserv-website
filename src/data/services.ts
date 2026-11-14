import type { ServiceItem } from '../types/agency';

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    slug: 'web-development-website-solutions',
    title: 'Web Development & Website Solutions',
    shortDescription:
      'Custom corporate websites, Shopify and WordPress builds, landing pages, speed optimization, and ongoing technical maintenance.',
    overview: [
      'Your website serves as the central hub of your business credibility, lead capture, and customer conversion. DIGISERV architects fast, responsive, search-ready websites engineered for clean user journeys across desktop, tablet, and mobile devices.',
      'Whether you need a custom corporate platform, a conversion-focused landing page, a Shopify storefront, or technical maintenance and speed tuning on an existing site, our engineering team delivers clean code and reliable infrastructure.',
    ],
    departmentId: 'digital-technology',
    departmentName: 'Digital & Technology Solutions',
    iconName: 'Code2',
    subServices: [
      'Business & Corporate Websites',
      'Ecommerce Websites',
      'Shopify Store Development',
      'WordPress Development',
      'Custom Website Development',
      'Landing Pages',
      'Portfolio Websites',
      'Website Redesign',
      'Website Maintenance',
      'Speed Optimization',
      'Mobile Responsive Design',
      'Bug Fixing',
      'Domain & Hosting Setup',
      'Payment Gateway Integration',
      'Website SEO',
    ],
    benefits: [
      {
        title: 'Responsive Architecture',
        description:
          'Every layout is engineered for seamless readability and interaction from 320px mobile screens to wide desktop displays.',
      },
      {
        title: 'Technical SEO Foundation',
        description:
          'Semantic HTML hierarchy, metadata structure, clean URLs, and schema markup built directly into the codebase.',
      },
      {
        title: 'Performance & Core Web Vitals',
        description:
          'Lean asset delivery, optimized images, and clean scripts for responsive page loads and smooth interactions.',
      },
      {
        title: 'End-to-End Deployment',
        description:
          'Domain configuration, SSL security, payment gateway integration, and structured post-launch support.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Audit your business goals, target audience, technical requirements, and existing web infrastructure.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Define site architecture, page wireframes, tech stack selection, and milestone deliverables.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Build responsive interfaces, configure integrations, run cross-device QA, and launch cleanly.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Monitor performance, apply updates, fix bugs, and scale new features as your business expands.',
      },
    ],
    faqs: [
      {
        question: 'Which platforms and technologies do you build with?',
        answer:
          'We build custom modern web applications (React, TypeScript, Node.js), Shopify storefronts, and WordPress websites depending on your operational requirements and budget.',
      },
      {
        question: 'Can you redesign or fix an existing website instead of starting from scratch?',
        answer:
          'Yes. We regularly handle website redesigns, speed optimization, mobile responsiveness fixes, bug resolution, and technical SEO upgrades on live sites.',
      },
      {
        question: 'Do you handle domain, hosting, and payment gateway setup?',
        answer:
          'Yes. We assist with domain registration configuration, hosting deployment, SSL setup, and compliant payment gateway integration.',
      },
    ],
    relatedSlugs: [
      'ecommerce-dropshipping-solutions',
      'digital-marketing-advertising',
      'business-personal-branding',
    ],
  },
  {
    id: '02',
    slug: 'digital-marketing-advertising',
    title: 'Digital Marketing & Advertising',
    shortDescription:
      'Structured performance marketing across Meta, TikTok, Google, and YouTube paired with SEO and conversion optimization.',
    overview: [
      'Visibility without conversion wastes ad spend. DIGISERV plans, launches, and manages structured digital advertising and search campaigns designed to reach qualified buyers across international markets.',
      'From Meta and TikTok paid social campaigns to Google Search, YouTube ads, SEO, and landing page conversion optimization, we unify audience research, creative strategy, and transparent reporting under one team.',
    ],
    departmentId: 'marketing-growth',
    departmentName: 'Marketing & Growth Solutions',
    iconName: 'TrendingUp',
    subServices: [
      'Facebook & Instagram Ads',
      'Meta Ads Management',
      'TikTok Ads',
      'Google Ads',
      'YouTube Ads',
      'SEO',
      'Search Engine Marketing',
      'Lead Generation',
      'Ecommerce Advertising',
      'Conversion Rate Optimization',
      'Retargeting',
      'Marketing Strategy',
      'Competitor Research',
      'Ad Creative Strategy',
      'Campaign Reporting',
    ],
    benefits: [
      {
        title: 'Multi-Channel Alignment',
        description:
          'Coordinate Meta, TikTok, Google, and YouTube campaigns so messaging reinforces every touchpoint.',
      },
      {
        title: 'Creative & Funnel Cohesion',
        description:
          'Pair ad creative testing directly with retargeting sequences and landing page conversion improvements.',
      },
      {
        title: 'Research-Backed Targeting',
        description:
          'Structured competitor analysis and audience segmentation tailored to US, UK, UAE, Canadian, and Australian markets.',
      },
      {
        title: 'Clear Campaign Reporting',
        description:
          'Transparent reporting on spend, reach, click behavior, and lead quality without vanity metrics.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Review your offer, historical campaign data, unit economics, and regional market competition.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Map channel mix, funnel structure, audience segments, tracking pixels, and creative angles.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Produce ad creatives, configure campaign structures, verify conversion events, and launch.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Refine bids, rotate fresh creatives, expand winning audiences, and deliver regular performance reports.',
      },
    ],
    faqs: [
      {
        question: 'Is ad spend included in your marketing packages?',
        answer:
          'Ad spend is paid directly by you to platforms like Meta, Google, or TikTok. Our service covers strategy, setup, creative direction, management, and reporting.',
      },
      {
        question: 'Can you produce the ad creatives as well as manage the campaigns?',
        answer:
          'Yes. Because our creative, video editing, and graphic design teams sit under the same roof, we handle both ad creative production and media buying.',
      },
      {
        question: 'Do you offer standalone SEO alongside paid advertising?',
        answer:
          'Yes. You can engage us for technical and on-page SEO independently or alongside paid search and social campaigns.',
      },
    ],
    relatedSlugs: [
      'social-media-channel-management',
      'video-editing-content-production',
      'ecommerce-dropshipping-solutions',
    ],
  },
  {
    id: '03',
    slug: 'social-media-channel-management',
    title: 'Social Media & Channel Management',
    shortDescription:
      'Consistent planning, profile optimization, scheduling, and community management across major social channels.',
    overview: [
      'Maintaining an active, cohesive presence across Instagram, Facebook, TikTok, LinkedIn, YouTube, and Pinterest requires steady planning, design coordination, and audience engagement.',
      'DIGISERV manages your content calendars, profile optimization, hashtag research, publishing schedules, and community interactions so your brand stays visible and responsive while you focus on core operations.',
    ],
    departmentId: 'marketing-growth',
    departmentName: 'Marketing & Growth Solutions',
    iconName: 'Share2',
    subServices: [
      'Facebook Management',
      'Instagram Management',
      'TikTok Management',
      'LinkedIn Management',
      'YouTube Management',
      'Pinterest Management',
      'Content Planning',
      'Content Scheduling',
      'Profile Optimization',
      'Community Management',
      'Audience Engagement',
      'Hashtag Research',
      'Social Media Growth Strategy',
      'Content Calendars',
      'Performance Reporting',
    ],
    benefits: [
      {
        title: 'Unified Brand Voice',
        description:
          'Maintain consistent messaging and visual cadence across every social platform your audience uses.',
      },
      {
        title: 'Structured Content Calendars',
        description:
          'Monthly editorial planning approved in advance with zero last-minute scrambling for posts.',
      },
      {
        title: 'Active Community Care',
        description:
          'Timely comment moderation, direct audience engagement, and profile hygiene.',
      },
      {
        title: 'Cross-Team Production',
        description:
          'Seamless collaboration with DIGISERV graphic designers and video editors for ready-to-publish assets.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Audit existing social profiles, audience demographics, content gaps, and brand tone.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Optimize channel bios, define content pillars, and build a monthly publishing calendar.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Produce posts, reels, captions, and hashtag sets, then schedule and publish on cadence.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Engage with your community, analyze reach and retention patterns, and iterate monthly.',
      },
    ],
    faqs: [
      {
        question: 'Which social media platforms can DIGISERV manage?',
        answer:
          'We manage Instagram, Facebook, TikTok, LinkedIn, YouTube, and Pinterest—either as a unified multi-channel plan or focused on your primary channels.',
      },
      {
        question: 'Do I get to approve the content calendar before posts go live?',
        answer:
          'Yes. We share structured content calendars and creative previews for your review prior to scheduling.',
      },
      {
        question: 'Can this service be paired with Video Editing or Graphic Design?',
        answer:
          'Yes. Most clients pair channel management with our graphic design and short-form video editing workflows for complete end-to-end production.',
      },
    ],
    relatedSlugs: [
      'graphic-design-creative-services',
      'video-editing-content-production',
      'digital-marketing-advertising',
    ],
  },
  {
    id: '04',
    slug: 'video-editing-content-production',
    title: 'Video Editing & Content Production',
    shortDescription:
      'Long-form YouTube editing, Reels, TikToks, Shorts, podcasts, UGC ads, motion graphics, and audio-visual finishing.',
    overview: [
      'Modern audiences judge brand quality within seconds of watching a video. DIGISERV transforms raw footage into crisp, engaging edits tailored for YouTube, Instagram Reels, TikTok, podcasts, and paid UGC advertisements.',
      'Our editors handle pacing, color grading, sound design, custom motion graphics, subtitles, and multi-format repurposing so one recording session feeds every distribution channel.',
    ],
    departmentId: 'creative-media',
    departmentName: 'Creative & Media Solutions',
    iconName: 'Film',
    subServices: [
      'YouTube Video Editing',
      'YouTube Shorts',
      'Instagram Reels',
      'TikTok Videos',
      'Facebook Reels',
      'Podcast Editing',
      'Gaming Videos',
      'Vlog Editing',
      'Cinematic Editing',
      'Promotional Videos',
      'UGC Ad Editing',
      'Talking Head Editing',
      'Documentary Editing',
      'Motion Graphics',
      'Subtitles & Captions',
      'Color Grading',
      'Sound Design',
      'Intro & Outro Creation',
      'Long-Form to Short-Form Repurposing',
    ],
    benefits: [
      {
        title: 'Platform-Native Pacing',
        description:
          'Edits calibrated specifically for long-form retention on YouTube and fast-hook engagement on Shorts and Reels.',
      },
      {
        title: 'Broadcast-Clean Finishing',
        description:
          'Balanced audio levels, cohesive color grading, accurate captions, and custom motion graphics.',
      },
      {
        title: 'Content Multiplication',
        description:
          'Turn podcasts, interviews, and long-form videos into a steady pipeline of vertical short-form clips.',
      },
      {
        title: 'Ad-Ready Formats',
        description:
          'Deliver multiple aspect ratios and hook variations ready for Meta and TikTok ad testing.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Review raw footage, reference styles, target platforms, and brand visual guidelines.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Outline narrative structure, hook pacing, graphic callouts, and deliverable aspect ratios.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Execute assembly cut, motion graphics, captions, color grading, and sound mixing.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Incorporate feedback revisions and establish a repeatable ongoing editing pipeline.',
      },
    ],
    faqs: [
      {
        question: 'How do I share large raw video files with your team?',
        answer:
          'You can share raw footage via Google Drive, Dropbox, Frame.io, or WeTransfer, and we return final masters in your preferred cloud folder.',
      },
      {
        question: 'Do you provide revisions on edited videos?',
        answer:
          'Yes. Every video package includes structured revision rounds to fine-tune pacing, captions, graphics, or music.',
      },
      {
        question: 'Can you repurpose our long-form podcasts or webinars into Shorts and Reels?',
        answer:
          'Yes. Long-form to short-form repurposing is one of our core workflows, complete with vertical framing and dynamic captions.',
      },
    ],
    relatedSlugs: [
      'youtube-gaming-creator-solutions',
      'graphic-design-creative-services',
      'ai-content-creation-automation',
    ],
  },
  {
    id: '05',
    slug: 'graphic-design-creative-services',
    title: 'Graphic Design & Creative Services',
    shortDescription:
      'Visual identity systems, logos, ad creatives, social carousels, thumbnails, packaging, and corporate collateral.',
    overview: [
      'Strong visual design communicates authority before a single word is read. DIGISERV delivers cohesive graphic design across digital campaigns, social channels, ecommerce storefronts, and print-ready brand collateral.',
      'From foundational logos and brand identity kits to high-CTR YouTube thumbnails, conversion-focused ad creatives, pitch decks, and product packaging, every asset follows strict visual hierarchy.',
    ],
    departmentId: 'creative-media',
    departmentName: 'Creative & Media Solutions',
    iconName: 'Palette',
    subServices: [
      'Logo Design',
      'Brand Identity',
      'Business Cards',
      'Social Media Posts',
      'Instagram Carousels',
      'YouTube Thumbnails',
      'YouTube Banners',
      'Facebook Covers',
      'Website Banners',
      'Ad Creatives',
      'Posters',
      'Flyers',
      'Brochures',
      'Ecommerce Graphics',
      'Presentations',
      'Infographics',
      'Menus & Catalogues',
      'Packaging Design',
    ],
    benefits: [
      {
        title: 'Cohesive Visual Language',
        description:
          'Keep typography, color discipline, and layout grids consistent across web, social, and print.',
      },
      {
        title: 'Digital & Print Ready',
        description:
          'Receive properly formatted source files and exports for both RGB digital displays and CMYK commercial print.',
      },
      {
        title: 'Campaign-Focused Creative',
        description:
          'Thumbnails, carousels, and ad creatives built for visual clarity and clear focal points.',
      },
      {
        title: 'Scalable Asset Delivery',
        description:
          'Single-project deliverables or ongoing monthly creative support tailored to your launch schedule.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Gather your brand guidelines, audience profile, dimensions, and creative brief.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Establish visual direction, moodboards, typographic pairing, and layout concepts.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Design high-resolution concepts, refine through feedback, and export final production files.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Supply editable templates and ongoing seasonal or campaign graphic variations.',
      },
    ],
    faqs: [
      {
        question: 'Do I receive editable source files for my designs?',
        answer:
          'Yes. Depending on the project, we deliver clean export formats (PNG, JPG, PDF, SVG) along with editable source or template files as scoped.',
      },
      {
        question: 'Can you design both digital ads and physical packaging or brochures?',
        answer:
          'Yes. Our graphic design team supports both digital-first marketing assets and print-ready collateral including packaging, flyers, and catalogues.',
      },
      {
        question: 'What if I already have a logo and only need thumbnails or social posts?',
        answer:
          'We adapt directly to your existing brand guidelines to produce thumbnails, carousels, banners, and ad creatives.',
      },
    ],
    relatedSlugs: [
      'business-personal-branding',
      'social-media-channel-management',
      'video-editing-content-production',
    ],
  },
  {
    id: '06',
    slug: 'ai-content-creation-automation',
    title: 'AI Content Creation & Automation',
    shortDescription:
      'AI-assisted visual media, avatars, voiceovers, copy workflows, chatbots, and practical business process automation.',
    overview: [
      'Applied thoughtfully, modern AI tools accelerate creative production and eliminate repetitive operational bottlenecks. DIGISERV helps businesses adopt practical AI media generation and workflow automation without sacrificing brand quality.',
      'From AI product imagery, avatar explainer videos, and editorial content pipelines to automated customer support chatbots and custom multi-tool workflows, we build systems designed around real business use cases.',
    ],
    departmentId: 'digital-technology',
    departmentName: 'Digital & Technology Solutions',
    iconName: 'Cpu',
    subServices: [
      'AI Image Generation',
      'AI Video Generation',
      'AI Voiceovers',
      'AI Avatar Videos',
      'AI Social Media Content',
      'AI Ad Creatives',
      'AI Product Images',
      'AI Promotional Videos',
      'AI Content Writing',
      'AI Blogs & Articles',
      'AI Script Writing',
      'AI Presentations',
      'Chatbot Setup',
      'Customer Support Automation',
      'Workflow Automation',
      'AI Content Repurposing',
      'AI Tool Integration',
      'Custom AI Workflows',
    ],
    benefits: [
      {
        title: 'Practical Workflow Integration',
        description:
          'Connect AI tools directly with your CRM, support inbox, and publishing stack for measurable time savings.',
      },
      {
        title: 'Human-Curated Creative Quality',
        description:
          'Every AI-generated image, video, script, or article undergoes human creative direction and quality review.',
      },
      {
        title: 'Rapid Creative Iteration',
        description:
          'Produce product visuals, localized voiceovers, and ad creative variants at a fraction of traditional studio timelines.',
      },
      {
        title: 'Custom Support Chatbots',
        description:
          'Configure structured knowledge-base assistants to answer common customer inquiries and route qualified leads.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Identify repetitive tasks, content bottlenecks, and customer inquiry patterns across your operations.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Select appropriate AI models, automation triggers, human review checkpoints, and creative standards.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Build custom workflows, configure chatbots, or generate curated AI media assets ready for deployment.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Monitor output accuracy, refine prompts and automations, and expand capabilities as new tools mature.',
      },
    ],
    faqs: [
      {
        question: 'Is AI-generated content reviewed by humans before delivery?',
        answer:
          'Always. We combine AI production speed with human creative direction, editing, and fact/brand checks so outputs look refined rather than automated.',
      },
      {
        question: 'What kind of business workflows can you automate?',
        answer:
          'We automate lead routing, customer support FAQ chatbots, content repurposing pipelines, CRM notifications, and multi-app data synchronization.',
      },
      {
        question: 'Can you create AI product photography and promotional videos for ecommerce?',
        answer:
          'Yes. We produce clean AI product scenes, promotional clips, voiceovers, and ad creative variations tailored to ecommerce brands.',
      },
    ],
    relatedSlugs: [
      'web-development-website-solutions',
      'video-editing-content-production',
      'ecommerce-dropshipping-solutions',
    ],
  },
  {
    id: '07',
    slug: 'ecommerce-dropshipping-solutions',
    title: 'Ecommerce & Dropshipping Solutions',
    shortDescription:
      'Complete Shopify store setup, custom theme design, product research, supplier sourcing, and conversion optimization.',
    overview: [
      'Launching and scaling an online store requires far more than installing a default theme. DIGISERV builds structured, brand-led ecommerce storefronts engineered for trust, smooth checkout flows, and paid traffic conversion.',
      'Whether you are launching a private-label brand or a curated dropshipping store, we handle store architecture, theme customization, product and supplier research, copywriting, shipping and payment setup, and ad readiness.',
    ],
    departmentId: 'digital-technology',
    departmentName: 'Digital & Technology Solutions',
    iconName: 'ShoppingBag',
    subServices: [
      'Shopify Store Setup',
      'Shopify Store Design',
      'Theme Customization',
      'Product Research',
      'Winning Product Research',
      'Supplier Research',
      'Dropshipping Setup',
      'Product Listing',
      'Product Description Writing',
      'Product Image Optimization',
      'Store Branding',
      'Ecommerce SEO',
      'Payment Configuration',
      'Shipping Configuration',
      'Order Management Setup',
      'Ecommerce Marketing',
      'Meta & TikTok Ads Setup',
      'Conversion Optimization',
      'Ecommerce Consultation',
    ],
    benefits: [
      {
        title: 'Brand-First Storefront Design',
        description:
          'Custom-configured storefronts with clear navigation, mobile-first product pages, and trust architecture.',
      },
      {
        title: 'Structured Product & Supplier Vetting',
        description:
          'Methodical product research, clear supplier evaluation criteria, and optimized product listings.',
      },
      {
        title: 'Operational Readiness',
        description:
          'Properly configured tax zones, shipping rates, order workflows, and compliant payment gateways.',
      },
      {
        title: 'Traffic & Conversion Alignment',
        description:
          'Connect pixel tracking, ecommerce SEO, and Meta/TikTok ad foundations right from launch.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Define niche positioning, target countries, product model (branded vs. dropshipping), and store goals.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Select products and suppliers, structure store collections, and plan visual branding.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Build and customize the store, upload optimized listings, configure payments/shipping, and test checkout.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Launch marketing campaigns, monitor conversion bottlenecks, and iterate product offers.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with both private-label brands and dropshipping stores?',
        answer:
          'Yes. We build custom Shopify and ecommerce stores for established physical product brands as well as new dropshipping ventures.',
      },
      {
        question: 'Can you help configure international shipping and multi-currency payments?',
        answer:
          'Yes. We configure regional shipping profiles, supported payment gateways, and multi-market store settings for US, UK, UAE, Canadian, and Australian audiences.',
      },
      {
        question: 'Can I book a consultation before committing to a full store build?',
        answer:
          'Yes. You can book a 1-to-1 Ecommerce or Dropshipping Consultation to validate your niche and roadmap first.',
      },
    ],
    relatedSlugs: [
      'web-development-website-solutions',
      'digital-marketing-advertising',
      'digital-products-etsy-business-solutions',
    ],
  },
  {
    id: '08',
    slug: 'digital-products-etsy-business-solutions',
    title: 'Digital Products & Etsy Business Solutions',
    shortDescription:
      'Etsy shop launch, digital product creation, Canva templates, planners, Etsy SEO, mockups, and shop management.',
    overview: [
      'Digital downloads offer scalable, inventory-free revenue streams when built around real buyer demand and marketplace search intent. DIGISERV helps creators and entrepreneurs launch, brand, and optimize Etsy storefronts and digital product catalogs.',
      'From market research and designing printable planners, Canva templates, ebooks, and wall art to crafting keyword-rich Etsy listings and polished product mockups, we handle the full digital product lifecycle.',
    ],
    departmentId: 'business-professional',
    departmentName: 'Business & Professional Solutions',
    iconName: 'Layers',
    subServices: [
      'Etsy Shop Setup',
      'Etsy Branding',
      'Etsy Optimization',
      'Digital Product Research',
      'Digital Product Creation',
      'Printable Planners',
      'Digital Planners',
      'Canva Templates',
      'Social Media Templates',
      'Resume Templates',
      'Digital Wall Art',
      'Printable Worksheets',
      'Ebooks',
      'Digital Guides',
      'Invitation Templates',
      'Etsy Listing Creation',
      'Etsy SEO',
      'Product Mockups',
      'Digital Product Marketing',
      'Etsy Shop Management',
    ],
    benefits: [
      {
        title: 'Demand-Led Product Design',
        description:
          'Research underserved marketplace niches before designing planners, templates, guides, or printables.',
      },
      {
        title: 'Marketplace Search Optimization',
        description:
          'Structured titles, tags, attributes, and descriptions aligned with how buyers search on Etsy.',
      },
      {
        title: 'High-Clarity Listing Mockups',
        description:
          'Clean thumbnail and gallery mockups that clearly communicate file contents, dimensions, and usage.',
      },
      {
        title: 'Repeatable Catalog Growth',
        description:
          'Expand from your initial launch collection into cohesive product lines and ongoing shop management.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Evaluate your target niche, digital product format, and marketplace competition.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Plan product suite, shop branding, keyword architecture, and listing presentation style.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Design original digital products, build listing mockups, write SEO copy, and publish cleanly.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Track search impressions, refine seasonal listings, and expand winning digital categories.',
      },
    ],
    faqs: [
      {
        question: 'What types of digital products can DIGISERV create for my shop?',
        answer:
          'We design printable and hyperlinked digital planners, Canva social media and business templates, resume kits, ebooks, guides, wall art, worksheets, and invitation suites.',
      },
      {
        question: 'Do I own the rights to the digital products you create for me?',
        answer:
          'Yes. Custom digital products created under your project scope are delivered for your commercial storefront use.',
      },
      {
        question: 'Can you optimize an existing Etsy shop that already has listings?',
        answer:
          'Yes. We perform full Etsy shop audits, SEO title/tag restructuring, and mockup upgrades on existing shops.',
      },
    ],
    relatedSlugs: [
      'graphic-design-creative-services',
      'ecommerce-dropshipping-solutions',
      'consultation-professional-guidance',
    ],
  },
  {
    id: '09',
    slug: 'international-business-account-setup-assistance',
    title: 'International Business & Account Setup Assistance',
    shortDescription:
      'Compliant guidance for UK/USA business formation workflows, business email setup, marketplace onboarding, and verification readiness.',
    overview: [
      'Expanding into international markets requires organized documentation, consistent digital infrastructure, and strict adherence to platform verification policies. DIGISERV provides structured advisory and technical setup assistance for entrepreneurs establishing an international digital footprint.',
      'We help organize business formation guidance, configure custom domain business emails, build compliant company websites and social profiles, and prepare accurate documentation checklists for payment platforms and marketplaces.',
    ],
    departmentId: 'digital-technology',
    departmentName: 'Digital & Technology Solutions',
    iconName: 'Globe',
    subServices: [
      'UK Business Formation Guidance',
      'USA Business Formation Guidance',
      'Business Registration Assistance',
      'Company Documentation Guidance',
      'Business Email Setup',
      'Professional Email Configuration',
      'Business Website Setup',
      'Business Profile Creation',
      'Social Media Business Account Setup',
      'Marketplace Onboarding Assistance',
      'Payment Platform Setup Guidance',
      'Business Verification Guidance',
      'Platform Compliance Guidance',
      'International Ecommerce Consultation',
    ],
    benefits: [
      {
        title: 'Structured Onboarding Readiness',
        description:
          'Align your company website, domain email, and corporate profiles so platforms see a consistent, legitimate business presence.',
      },
      {
        title: 'Cross-Border Infrastructure',
        description:
          'Technical setup of Google Workspace or Microsoft business email, DNS records (SPF/DKIM/DMARC), and corporate sites.',
      },
      {
        title: 'Compliance-First Guidance',
        description:
          'Clear checklists on identity verification, authentic documentation, and platform terms of service.',
      },
      {
        title: 'International Ecommerce Context',
        description:
          'Practical guidance tailored to founders serving the US, UK, UAE, Canada, and Australia.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Assess your target jurisdiction, business model, existing documentation, and platform goals.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Map formation guidance steps, domain/email infrastructure, and compliance preparation checklists.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Configure professional business emails, corporate website presence, and guide compliant onboarding workflows.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Provide ongoing digital infrastructure support and consultation as your international operations expand.',
      },
    ],
    faqs: [
      {
        question: 'Does DIGISERV guarantee approval on third-party payment or marketplace platforms?',
        answer:
          'No. Final approval decisions always rest with the respective government registries, financial institutions, or platforms. We help you prepare accurate, compliant infrastructure and documentation using your own legitimate business and identity details.',
      },
      {
        question: 'What does business email and profile configuration include?',
        answer:
          'We configure custom domain email addresses, authentication records (SPF, DKIM, DMARC) for deliverability, and cohesive corporate websites and official social business pages.',
      },
      {
        question: 'Do you provide legal or tax representation?',
        answer:
          'We provide operational guidance, digital infrastructure setup, and onboarding checklists—not formal legal or CPA tax advice. For statutory legal or tax filings, we recommend consulting a licensed attorney or accountant in the relevant jurisdiction.',
      },
    ],
    relatedSlugs: [
      'web-development-website-solutions',
      'ecommerce-dropshipping-solutions',
      'consultation-professional-guidance',
    ],
    complianceNotice:
      'Compliance Standard: All business formation, marketplace onboarding, and account-related assistance strictly complies with applicable laws, identity verification rules, and platform policies. DIGISERV never promises guaranteed platform approvals and never offers fabricated identity or document services. Clients must provide authentic, accurate personal and business information.',
  },
  {
    id: '10',
    slug: 'youtube-gaming-creator-solutions',
    title: 'YouTube, Gaming & Creator Solutions',
    shortDescription:
      'Channel branding, YouTube SEO, high-impact thumbnails, gaming montages, stream overlays, and creator strategy.',
    overview: [
      'Independent creators, streamers, and gaming channels compete in high-velocity feeds where packaging, pacing, and consistency determine channel momentum. DIGISERV acts as your dedicated behind-the-scenes creative studio.',
      'From initial channel setup, banner and overlay design, and Twitch/stream graphics to YouTube SEO, custom thumbnails, gaming montages, and multi-platform Shorts repurposing, we help creators publish at a professional standard.',
    ],
    departmentId: 'creative-media',
    departmentName: 'Creative & Media Solutions',
    iconName: 'Gamepad2',
    subServices: [
      'YouTube Channel Setup',
      'Channel Branding',
      'Channel Optimization',
      'YouTube SEO',
      'Thumbnail Design',
      'Channel Banner Design',
      'Video Editing',
      'Shorts Creation',
      'Gaming Editing',
      'Gaming Montages',
      'Gaming Highlights',
      'Stream Graphics',
      'Stream Overlays',
      'Twitch Graphics',
      'Intro & Outro',
      'Content Strategy',
      'Channel Growth Consultation',
      'Creator Branding',
      'Content Repurposing',
    ],
    benefits: [
      {
        title: 'Click-Worthy Packaging',
        description:
          'Cohesive thumbnails, titles, and channel art designed to stand out cleanly on mobile and desktop feeds.',
      },
      {
        title: 'High-Retention Gaming & Creator Edits',
        description:
          'Dynamic pacing, sound effects, motion callouts, and highlight structuring built for gaming and creator audiences.',
      },
      {
        title: 'Complete Stream Identity',
        description:
          'Unified overlays, offline screens, alerts, and banners across YouTube, Twitch, and Kick.',
      },
      {
        title: 'Consistent Publishing Cadence',
        description:
          'Offload post-production and Shorts repurposing so you can stay focused on recording and streaming.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Audit your channel niche, visual identity, content schedule, and target viewer profile.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Define channel packaging templates, YouTube SEO approach, and production turnaround rhythm.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Deliver channel branding, stream graphics, edited videos, thumbnails, and Shorts clips.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Review audience retention and click-through trends to sharpen upcoming uploads.',
      },
    ],
    faqs: [
      {
        question: 'Can you turn long Twitch or YouTube streams into edited videos and Shorts?',
        answer:
          'Yes. Send us your VODs or highlight clips and we edit both full YouTube highlight episodes and vertical Shorts/TikToks.',
      },
      {
        question: 'Do you design static and animated stream overlays?',
        answer:
          'Yes. We design cohesive stream packages including webcam frames, starting/BRB/ending screens, panels, and intros/outros.',
      },
      {
        question: 'Can I bundle thumbnails and video editing into one ongoing package?',
        answer:
          'Yes. We offer custom creator retainers combining editing, thumbnail design, and channel optimization.',
      },
    ],
    relatedSlugs: [
      'video-editing-content-production',
      'graphic-design-creative-services',
      'social-media-channel-management',
    ],
  },
  {
    id: '11',
    slug: 'business-personal-branding',
    title: 'Business & Personal Branding',
    shortDescription:
      'Founder and corporate brand positioning, visual identity, brand guidelines, LinkedIn optimization, and executive content.',
    overview: [
      'In competitive global markets, people buy from brands and leaders they recognize and trust. DIGISERV shapes authoritative business and personal brands that align visual identity with clear positioning and communication.',
      'Whether you are a founder building executive authority on LinkedIn and Instagram or a company establishing comprehensive brand guidelines, bio messaging, and portfolio assets, we build brands designed for longevity.',
    ],
    departmentId: 'business-professional',
    departmentName: 'Business & Professional Solutions',
    iconName: 'Award',
    subServices: [
      'Personal Brand Strategy',
      'Business Brand Strategy',
      'Brand Identity',
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Professional Social Profiles',
      'LinkedIn Optimization',
      'Instagram Personal Branding',
      'Facebook Business Branding',
      'Founder & CEO Branding',
      'Content Strategy',
      'Personal Brand Content',
      'Professional Bio Writing',
      'Brand Positioning',
      'Brand Communication',
      'Portfolio Development',
      'Brand Presentations',
      'Online Reputation Management',
    ],
    benefits: [
      {
        title: 'Distinct Market Positioning',
        description:
          'Clarify who you serve, what differentiates your expertise, and how your value is communicated.',
      },
      {
        title: 'Executive-Grade Profiles',
        description:
          'Overhaul LinkedIn, Instagram, and portfolio touchpoints with sharp bios, banners, and structured messaging.',
      },
      {
        title: 'Documented Brand Guidelines',
        description:
          'Clear typography, palette, and voice rules that any future team member or partner can follow consistently.',
      },
      {
        title: 'Cohesive Pitch & Portfolio Assets',
        description:
          'Present your company or personal expertise with polished decks, bios, and digital portfolios.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Interview founders or stakeholders to capture expertise, market positioning, and audience perception.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Define brand pillars, messaging hierarchy, visual direction, and priority channel rollout.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Craft visual identity, brand guidelines, profile copy, portfolio pages, and launch content assets.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Support ongoing founder content production, presentation updates, and reputation alignment.',
      },
    ],
    faqs: [
      {
        question: 'Who is personal branding designed for?',
        answer:
          'Founders, CEOs, consultants, creators, and independent professionals who want their online presence to attract clients, partnerships, and speaking opportunities.',
      },
      {
        question: 'What is included in Brand Guidelines?',
        answer:
          'Logo usage rules, primary and secondary color specifications, typography hierarchy, tone-of-voice principles, and layout examples.',
      },
      {
        question: 'Can you rebuild my LinkedIn profile and executive bio together?',
        answer:
          'Yes. LinkedIn optimization, banner design, and professional bio writing are core components of our personal branding scope.',
      },
    ],
    relatedSlugs: [
      'graphic-design-creative-services',
      'social-media-channel-management',
      'web-development-website-solutions',
    ],
  },
  {
    id: '12',
    slug: 'consultation-professional-guidance',
    title: '1-to-1 Consultation & Professional Guidance',
    shortDescription:
      'Focused one-on-one strategy sessions covering Shopify, marketing, Meta/TikTok ads, AI tools, YouTube, and business growth.',
    overview: [
      'Sometimes the fastest path forward is direct clarity from an experienced specialist before investing in full execution. DIGISERV offers structured 1-to-1 consultation sessions for founders, creators, and teams worldwide.',
      'Each session focuses on your exact situation—whether auditing a Shopify store, troubleshooting ad accounts, mapping a website build, structuring an Etsy digital catalog, or designing an international business launch roadmap.',
    ],
    departmentId: 'business-professional',
    departmentName: 'Business & Professional Solutions',
    iconName: 'Compass',
    subServices: [
      'Shopify Consultation',
      'Ecommerce Guidance',
      'Dropshipping Consultation',
      'Digital Marketing Consultation',
      'Meta Ads Consultation',
      'TikTok Ads Consultation',
      'Website Development Guidance',
      'Business Startup Consultation',
      'Etsy Business Guidance',
      'Digital Product Consultation',
      'Personal Branding Guidance',
      'Social Media Growth Strategy',
      'YouTube Consultation',
      'Content Creation Guidance',
      'AI Tools Consultation',
      'Business Growth Strategy',
      'International Business Guidance',
      'One-to-One Mentorship',
    ],
    benefits: [
      {
        title: 'Actionable Clarity',
        description:
          'Leave every session with prioritized next steps rather than generic high-level advice.',
      },
      {
        title: 'Live Asset & Account Audits',
        description:
          'Review your actual storefront, website, ad manager structure, or channel directly during the call.',
      },
      {
        title: 'Avoid Costly Missteps',
        description:
          'Validate technology choices, platform policies, and marketing budgets before committing capital.',
      },
      {
        title: 'Global Timezone Flexibility',
        description:
          'Schedule sessions across US, UK, UAE, Canadian, Australian, and international timezones.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        description:
          'Submit your topic, store/channel links, and key questions when booking your consultation.',
      },
      {
        step: '02',
        title: 'Strategize',
        description:
          'Our specialist prepares a focused agenda tailored to your specific bottleneck or launch goal.',
      },
      {
        step: '03',
        title: 'Create & Deliver',
        description:
          'Conduct a live 1-to-1 working session with direct feedback, structural reviews, and Q&A.',
      },
      {
        step: '04',
        title: 'Grow & Support',
        description:
          'Receive a clear action summary with optional follow-up mentorship or agency execution support.',
      },
    ],
    faqs: [
      {
        question: 'How should I prepare for a 1-to-1 consultation?',
        answer:
          'Share your current website, store, social channel, or business idea in the booking form along with your top 2–3 questions so we can audit them beforehand.',
      },
      {
        question: 'Can I book ongoing mentorship rather than a single session?',
        answer:
          'Yes. We offer single strategy calls as well as structured recurring mentorship engagements.',
      },
      {
        question: 'If I decide to hire DIGISERV for full execution afterward, can we transition smoothly?',
        answer:
          'Yes. The roadmap built during your consultation seamlessly becomes the project brief for our execution departments.',
      },
    ],
    relatedSlugs: [
      'ecommerce-dropshipping-solutions',
      'digital-marketing-advertising',
      'international-business-account-setup-assistance',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
