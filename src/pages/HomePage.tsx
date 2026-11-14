import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { ResilientImage } from '../components/ResilientImage';
import { GlobalNetworkGraphic } from '../components/GlobalNetworkGraphic';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { InteractiveCard } from '../components/InteractiveCard';
import { ParallaxLayer, Reveal, RevealItem, RevealStagger } from '../components/Reveal';
import { SERVICES } from '../data/services';
import { DEPARTMENTS } from '../data/departments';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { AGENCY_MEDIA } from '../assets/media';
import { useAgency } from '../context/AgencyContext';
import type { PortfolioCategory } from '../types/agency';

const TRUST_HIGHLIGHTS = [
  {
    num: '01',
    title: 'Multiple Services Under One Roof',
    description:
      'Unite web engineering, paid acquisition, creative media, and business branding under a single coordinated team.',
  },
  {
    num: '02',
    title: 'Dedicated Professional Support',
    description:
      'Work directly with specialists accountable for project milestones, clear revisions, and reliable delivery.',
  },
  {
    num: '03',
    title: 'Customized Solutions',
    description:
      'Every engagement is scoped to your stage, market, and objectives rather than forced into rigid templates.',
  },
  {
    num: '04',
    title: 'Worldwide Client Support',
    description:
      'Structured communication and remote project delivery across the USA, UK, UAE, Canada, Australia, and worldwide.',
  },
];

const WHY_CHOOSE_ITEMS = [
  'Complete Solutions Under One Roof',
  'Professional & Creative Approach',
  'Customized Service Packages',
  'Transparent Communication',
  'Flexible Project Solutions',
  'Dedicated Client Support',
  'International Service Availability',
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the client’s goals, requirements and challenges.',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Develop a customized solution and project plan.',
  },
  {
    step: '03',
    title: 'Create & Deliver',
    description: 'Our team executes the project with professional standards.',
  },
  {
    step: '04',
    title: 'Grow & Support',
    description: 'Provide ongoing support, improvements and growth solutions where required.',
  },
];

const MARKETS = ['USA', 'UK', 'UAE', 'PK', 'Canada', 'Australia', 'Worldwide'];

export function HomePage() {
  const { portfolio } = useAgency();
  const [activeCategory, setActiveCategory] = useState<'All' | PortfolioCategory>('All');
  const prefersReduced = useReducedMotion();

  const filteredWork =
    activeCategory === 'All'
      ? portfolio.slice(0, 6)
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <>
      <SeoHead
        title="DIGISERV — Full-Service Digital, Creative & Business Solutions Agency"
        description="Everything your business needs under one roof. Web development, digital marketing, social media, video editing, AI solutions, and ecommerce worldwide."
        schema={{
          '@type': 'WebSite',
          name: 'DIGISERV',
          description:
            'Full-service digital, creative, technological and business solutions agency serving clients worldwide.',
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#292638] bg-[#08080D]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-agency-grid [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 right-[-6%] w-[560px] h-[560px] rounded-full bg-[#762BFF]/16 blur-[140px] animate-luxury-float"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[-8%] w-[460px] h-[460px] rounded-full bg-[#A855F7]/10 blur-[140px] animate-luxury-drift"
        />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <p className="text-xs sm:text-sm font-medium text-[#A855F7] tracking-wide">
                Serving Businesses, Entrepreneurs &amp; Creators Worldwide.
              </p>

              <h1
                className="font-display font-bold tracking-tight text-white leading-[1.08]"
                style={{
                  fontSize: 'clamp(2.15rem, 4.3vw, 3.85rem)',
                  textWrap: 'balance',
                }}
              >
                Everything Your Business Needs.{' '}
                <span className="silver-accent-text">All Under One Roof.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
                From websites and digital marketing to creative content, AI solutions and ecommerce
                development — DIGISERV helps businesses, entrepreneurs and creators build, grow and
                succeed in the digital world.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
                <Link
                  to="/services"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium cta-glow whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/consultation"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#292638] bg-[#101019]/90 hover:border-[#762BFF] hover:bg-[#141221] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  <span>Let’s Discuss Your Project</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex"
            >
              <ParallaxLayer offset={14} className="w-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#292638] bg-[#101019] min-h-[260px] sm:min-h-[340px] lg:min-h-[430px] shadow-[0_24px_70px_-30px_rgba(118,43,255,0.45)]">
                  <ResilientImage
                    src={AGENCY_MEDIA.heroAgencyStudio}
                    alt="DIGISERV digital technology and creative agency studio environment"
                    className="w-full h-full object-cover"
                    fallbackLabel="DIGISERV Global Agency Studio"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#08080D]/88 via-[#08080D]/15 to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span>4 Specialized Departments</span>
                    <span aria-hidden="true" className="text-[#A855F7]">·</span>
                    <span>12 Core Disciplines</span>
                  </div>
                </div>
              </ParallaxLayer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="max-w-3xl space-y-4">
            <h2
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              One Agency. Multiple Services. Endless Possibilities.
            </h2>
            <p className="text-base text-[#A5A5B5] leading-relaxed">
              Why work with multiple service providers when you can access complete digital,
              creative and business solutions through one professional agency?
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TRUST_HIGHLIGHTS.map((item) => (
              <RevealItem key={item.num} className="h-full">
                <InteractiveCard className="h-full bg-[#08080D] p-6">
                  <div className="space-y-3">
                    <span className="font-mono-tabular text-xs font-medium text-[#A855F7]">
                      {item.num}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A5A5B5] leading-relaxed">{item.description}</p>
                  </div>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Main Services Section (12 Cards) */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#292638] bg-[#08080D]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[780px] h-[360px] rounded-full bg-[#762BFF]/8 blur-[160px]"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Everything You Need to Grow Digitally
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Explore our complete range of professional services designed to help individuals and
                businesses establish, manage and grow their digital presence.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>View Full Service Directory</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <RevealStagger
            staggerDelay={0.035}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {SERVICES.map((service) => (
              <RevealItem key={service.id} className="h-full">
                <InteractiveCard className="h-full bg-[#101019]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="h-full p-6 flex flex-col justify-between gap-6 focus-visible:outline-none"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-11 h-11 rounded-lg border border-[#292638] bg-[#08080D] flex items-center justify-center text-[#A855F7] group-hover:border-[#762BFF]/80 group-hover:text-white group-hover:shadow-[0_0_22px_-4px_rgba(118,43,255,0.65)] transition-[border-color,color,box-shadow] duration-200">
                          <ServiceIcon name={service.iconName} className="w-5 h-5" />
                        </div>
                        <span className="font-mono-tabular text-xs text-[#A5A5B5]">
                          {service.id} · {service.subServices.length} Capabilities
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#A5A5B5] leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#292638] flex items-center justify-between text-sm font-medium text-white">
                      <span>Explore Service</span>
                      <ArrowRight
                        className="w-4 h-4 text-[#A855F7] group-hover:translate-x-1.5 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Our Four Departments */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 w-[480px] h-[480px] rounded-full bg-[#762BFF]/10 blur-[150px] animate-luxury-drift"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Our Four Specialized Departments
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Twelve multidisciplinary capabilities organized into four cohesive agency divisions.
              </p>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEPARTMENTS.map((dept) => (
              <RevealItem key={dept.id} className="h-full">
                <InteractiveCard className="h-full bg-[#08080D] p-6 sm:p-8">
                  <div className="h-full flex flex-col justify-between space-y-5">
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <span className="font-mono-tabular text-xs text-[#A855F7]">
                          Department {dept.number}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {dept.number}. {dept.name}
                        </h3>
                        <p className="text-sm text-[#A5A5B5] leading-relaxed">{dept.summary}</p>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#292638] text-sm text-[#A5A5B5]">
                        {dept.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/departments#${dept.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#A855F7] transition-colors py-1"
                      >
                        <span>View Division Services</span>
                        <ArrowRight
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Why Choose DIGISERV */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#08080D] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <Reveal direction="right" className="lg:col-span-6">
              <ParallaxLayer offset={16} className="h-full">
                <div className="h-full rounded-xl overflow-hidden border border-[#292638] bg-[#101019] min-h-[260px] sm:min-h-[340px] shadow-[0_24px_60px_-32px_rgba(118,43,255,0.4)]">
                  <ResilientImage
                    src={AGENCY_MEDIA.aboutCreativeTeam}
                    alt="DIGISERV leadership and creative planning conference space"
                    className="w-full h-full object-cover"
                    fallbackLabel="DIGISERV Strategy & Execution"
                  />
                </div>
              </ParallaxLayer>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  Your Growth. Our Expertise.
                </h2>
                <p className="text-base text-[#A5A5B5] leading-relaxed">
                  Built for startups, creators, ecommerce operators, and established companies that
                  value clear execution over fragmented outsourcing.
                </p>
              </div>

              <RevealStagger
                staggerDelay={0.04}
                className="divide-y divide-[#292638] border-y border-[#292638]"
              >
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <RevealItem key={item}>
                    <div className="py-3.5 flex items-center gap-3 text-sm sm:text-base text-white">
                      <Check className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors py-1"
                >
                  <span>About DIGISERV</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-base text-[#A5A5B5] leading-relaxed">
              A disciplined four-step delivery process designed for clarity from discovery call to
              ongoing support.
            </p>
          </Reveal>

          <div className="relative">
            {!prefersReduced && (
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block absolute top-11 left-12 right-12 h-px origin-left bg-gradient-to-r from-[#762BFF]/60 via-[#A855F7]/70 to-[#E2E2F0]/40 pointer-events-none"
              />
            )}

            <RevealStagger className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {PROCESS_STEPS.map((item) => (
                <RevealItem key={item.step} className="h-full">
                  <InteractiveCard className="h-full bg-[#08080D] p-6">
                    <div className="space-y-3">
                      <span className="font-mono-tabular text-xs font-medium text-[#A855F7]">
                        Step {item.step}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A5A5B5] leading-relaxed">{item.description}</p>
                    </div>
                  </InteractiveCard>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Work */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#08080D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Creative Work. Real Solutions.
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Representative sample showcases illustrating our capabilities across web,
                ecommerce, creative media, branding, and AI workflows.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div
            className="flex sm:flex-wrap items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
            role="tablist"
            aria-label="Filter portfolio by category"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`relative min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-white'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white hover:border-[#762BFF]/60'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId={prefersReduced ? undefined : 'home-work-filter'}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-[#762BFF] shadow-[0_6px_20px_-6px_rgba(118,43,255,0.7)]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>

          <RevealStagger
            key={activeCategory}
            staggerDelay={0.04}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWork.map((project) => (
              <RevealItem key={project.id} className="h-full">
                <InteractiveCard className="h-full bg-[#101019]">
                  <Link to={`/work/${project.slug}`} className="h-full flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#292638] bg-[#08080D]">
                      <ResilientImage
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300 ease-out"
                        fallbackLabel={project.title}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-[#A5A5B5]">
                          <span className="text-[#A855F7]">{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.sampleLabel}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#A5A5B5] leading-relaxed">{project.summary}</p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                        <span>View Case Template</span>
                        <ArrowRight
                          className="w-4 h-4 text-[#A855F7] group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Supporting Businesses Worldwide.
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Structured digital, creative, and business support across timezones for founders,
                creators, and organizations operating globally.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white">
              {MARKETS.map((market, index) => (
                <span key={market} className="inline-flex items-center gap-3">
                  <span>{market}</span>
                  {index < MARKETS.length - 1 ? (
                    <span className="text-[#292638]" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <GlobalNetworkGraphic />
        </Reveal>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials backgroundClass="bg-[#08080D]" />

      {/* Consultation CTA */}
      <section className="py-16 sm:py-24 bg-[#101019]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-[#292638] bg-gradient-to-br from-[#08080D] via-[#131123] to-[#101019] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-[-10%] w-[360px] h-[360px] rounded-full bg-[#762BFF]/16 blur-[110px] animate-luxury-float"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent"
            />

            <div className="relative z-10 max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Whether you’re launching a new business, growing an existing brand or looking for
                creative and digital support, we’re ready to help.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0">
              <Link
                to="/consultation"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#292638] bg-[#08080D]/90 hover:border-[#762BFF] text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                Book a Consultation
              </Link>
              <Link
                to="/quote"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium cta-glow whitespace-nowrap"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
