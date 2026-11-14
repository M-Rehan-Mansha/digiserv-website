import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { ResilientImage } from '../components/ResilientImage';
import { GlobalNetworkGraphic } from '../components/GlobalNetworkGraphic';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { Reveal } from '../components/Reveal';
import { SERVICES } from '../data/services';
import { DEPARTMENTS } from '../data/departments';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
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
          className="pointer-events-none absolute inset-0 bg-agency-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 right-0 w-[620px] h-[620px] rounded-full bg-[#762BFF]/14 blur-[150px]"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
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
                Everything Your Business Needs. All Under One Roof.
              </h1>

              <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
                From websites and digital marketing to creative content, AI solutions and ecommerce
                development — DIGISERV helps businesses, entrepreneurs and creators build, grow and
                succeed in the digital world.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/consultation"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#292638] bg-[#101019] hover:border-[#762BFF] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  <span>Let’s Discuss Your Project</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#292638] bg-[#101019] min-h-[260px] sm:min-h-[340px] lg:min-h-[430px]">
                <ResilientImage
                  src="/src/assets/images/hero_agency_studio_1794678619347.jpg"
                  alt="DIGISERV digital technology and creative agency studio environment"
                  className="w-full h-full object-cover"
                  fallbackLabel="DIGISERV Global Agency Studio"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#08080D]/85 via-[#08080D]/15 to-transparent"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/85">
                  <span>4 Specialized Departments</span>
                  <span aria-hidden="true" className="text-[#A855F7]">·</span>
                  <span>12 Core Disciplines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TRUST_HIGHLIGHTS.map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-[#292638] bg-[#08080D] p-6 space-y-3 hover:border-[#3E3954] transition-colors"
              >
                <span className="font-mono-tabular text-xs font-medium text-[#A855F7]">
                  {item.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[#A5A5B5] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Main Services Section (12 Cards) */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#08080D]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>View Full Service Directory</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-xl border border-[#292638] bg-[#101019] p-6 flex flex-col justify-between gap-6 hover:border-[#762BFF] hover:-translate-y-0.5 transition-[transform,border-color] duration-200"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-11 h-11 rounded-lg border border-[#292638] bg-[#08080D] flex items-center justify-center text-[#A855F7] group-hover:border-[#762BFF]/70 group-hover:text-white transition-colors">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-mono-tabular text-xs text-[#A5A5B5]">
                      {service.id} · {service.subServices.length} Capabilities
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors">
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
                    className="w-4 h-4 text-[#A855F7] group-hover:translate-x-1 transition-transform duration-150"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Our Four Departments */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="rounded-xl border border-[#292638] bg-[#08080D] p-6 sm:p-8 space-y-5 hover:border-[#3E3954] transition-colors"
              >
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

                <div className="pt-2">
                  <Link
                    to={`/departments#${dept.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#A855F7] transition-colors py-1"
                  >
                    <span>View Division Services</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Why Choose DIGISERV */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#08080D]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#292638] bg-[#101019] min-h-[260px] sm:min-h-[340px]">
              <ResilientImage
                src="/src/assets/images/about_creative_team_1794678619682.jpg"
                alt="DIGISERV leadership and creative planning conference space"
                className="w-full h-full object-cover"
                fallbackLabel="DIGISERV Strategy & Execution"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  Your Growth. Our Expertise.
                </h2>
                <p className="text-base text-[#A5A5B5] leading-relaxed">
                  Built for startups, creators, ecommerce operators, and established companies that
                  value clear execution over fragmented outsourcing.
                </p>
              </div>

              <ul className="divide-y divide-[#292638] border-y border-[#292638]">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item} className="py-3.5 flex items-center gap-3 text-sm sm:text-base text-white">
                    <Check className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors py-1"
                >
                  <span>About DIGISERV</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#101019]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-base text-[#A5A5B5] leading-relaxed">
              A disciplined four-step delivery process designed for clarity from discovery call to
              ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#292638] bg-[#08080D] p-6 space-y-3"
              >
                <span className="font-mono-tabular text-xs font-medium text-[#A855F7]">
                  Step {item.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[#A5A5B5] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Portfolio / Featured Work */}
      <section className="py-16 sm:py-24 border-b border-[#292638] bg-[#08080D]">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

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
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#762BFF] text-white'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWork.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group rounded-xl border border-[#292638] bg-[#101019] overflow-hidden flex flex-col hover:border-[#762BFF] hover:-translate-y-0.5 transition-[transform,border-color] duration-200"
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#292638] bg-[#08080D]">
                  <ResilientImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
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
                    <ArrowRight className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
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
          <div className="rounded-xl border border-[#292638] bg-gradient-to-br from-[#08080D] via-[#131123] to-[#101019] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-base text-[#A5A5B5] leading-relaxed">
                Whether you’re launching a new business, growing an existing brand or looking for
                creative and digital support, we’re ready to help.
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0">
              <Link
                to="/consultation"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                Book a Consultation
              </Link>
              <Link
                to="/quote"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors whitespace-nowrap"
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
