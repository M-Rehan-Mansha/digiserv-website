import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ShieldAlert } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { FaqAccordion } from '../components/FaqAccordion';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal';
import { InteractiveCard } from '../components/InteractiveCard';
import { SERVICES, getServiceBySlug } from '../data/services';
import { useAgency } from '../context/AgencyContext';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { portfolio } = useAgency();

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <section className="py-24 bg-[#08080D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="font-display text-3xl font-bold text-white">Service Not Found</h1>
          <p className="text-[#A5A5B5]">
            The requested service page could not be located. Browse our complete 12-service
            directory below.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#762BFF] text-white text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Services</span>
          </Link>
        </div>
      </section>
    );
  }

  const relevantWork = portfolio.filter((p) => p.serviceSlug === service.slug);
  const displayWork = relevantWork.length > 0 ? relevantWork : portfolio.slice(0, 2);
  const relatedServices = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <SeoHead
        title={`${service.title} | DIGISERV`}
        description={service.shortDescription}
        schema={{
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          provider: {
            '@type': 'Organization',
            name: 'DIGISERV',
          },
          areaServed: ['US', 'GB', 'AE', 'CA', 'AU', 'PK', 'Worldwide'],
          serviceType: service.departmentName,
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#292638] bg-[#08080D] py-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/3 w-[380px] h-[380px] rounded-full bg-[#762BFF]/16 blur-[120px] animate-luxury-float"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-agency-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#A5A5B5]">
            <Link to="/services" className="hover:text-white transition-colors py-1">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={`/departments#${service.departmentId}`} className="hover:text-white transition-colors py-1">
              {service.departmentName}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#A855F7]">Service {service.id}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-3 text-sm text-[#A855F7]">
                <ServiceIcon name={service.iconName} className="w-5 h-5" />
                <span>{service.departmentName}</span>
              </div>

              <h1
                className="font-display font-bold tracking-tight text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
              >
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium cta-glow whitespace-nowrap"
                >
                  Get a Quote for This Service
                </Link>
                <Link
                  to={`/consultation?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#292638] bg-[#101019] hover:border-[#762BFF] text-white text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-4">
              <h2 className="text-sm font-semibold text-white">Service Scope Summary</h2>
              <div className="space-y-2.5 text-sm text-[#A5A5B5]">
                <p>
                  Capabilities Covered:{' '}
                  <span className="font-mono-tabular text-white font-medium">
                    {service.subServices.length}
                  </span>
                </p>
                <p>
                  Division: <span className="text-white">{service.departmentName}</span>
                </p>
                <p>
                  Availability: <span className="text-white">Worldwide Remote Delivery</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & Compliance Notice */}
      <section className="border-b border-[#292638] bg-[#101019] py-14 sm:py-16">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Service Overview
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-base text-[#A5A5B5] leading-relaxed">
              {service.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {service.complianceNotice ? (
            <div className="rounded-xl border border-[#762BFF]/40 bg-[#08080D] p-6 flex items-start gap-4">
              <ShieldAlert className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#A5A5B5] leading-relaxed">{service.complianceNotice}</p>
            </div>
          ) : null}
        </Reveal>
      </section>

      {/* Detailed List of Sub-Services */}
      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Detailed Capabilities &amp; Sub-Services
            </h2>
            <p className="text-base text-[#A5A5B5]">
              Select any capability below to request a custom quote tailored to that deliverable.
            </p>
          </div>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {service.subServices.map((sub, index) => (
              <RevealItem key={sub}>
                <InteractiveCard className="bg-[#101019]">
                  <Link
                    to={`/quote?service=${encodeURIComponent(service.title)}&focus=${encodeURIComponent(sub)}`}
                    className="group min-h-[54px] px-5 py-4 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Check className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-white group-hover:text-[#A855F7] transition-colors truncate">
                        {sub}
                      </span>
                    </div>
                    <span className="font-mono-tabular text-xs text-[#A5A5B5]/70 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="border-b border-[#292638] bg-[#101019] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Key Benefits
          </h2>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.benefits.map((benefit) => (
              <RevealItem key={benefit.title}>
                <InteractiveCard className="h-full bg-[#08080D] p-6 space-y-2">
                  <h3 className="font-display text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm text-[#A5A5B5] leading-relaxed">{benefit.description}</p>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </section>

      {/* Working Process */}
      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Our Working Process
          </h2>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <RevealItem key={step.step}>
                <InteractiveCard className="h-full bg-[#101019] p-6 space-y-3">
                  <span className="font-mono-tabular text-xs text-[#A855F7]">Step {step.step}</span>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-[#A5A5B5] leading-relaxed">{step.description}</p>
                </InteractiveCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </section>

      {/* Relevant Portfolio Examples */}
      <section className="border-b border-[#292638] bg-[#101019] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Relevant Portfolio Examples
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5B5]">
                Sample showcase templates demonstrating project structure and execution standards.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors py-1"
            >
              <span>All Sample Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayWork.map((project) => (
              <InteractiveCard key={project.id} className="bg-[#08080D]">
                <Link
                  to={`/work/${project.slug}`}
                  className="group h-full flex flex-col sm:flex-row"
                >
                  <div className="sm:w-52 aspect-[4/3] sm:aspect-auto shrink-0 border-b sm:border-b-0 sm:border-r border-[#292638] overflow-hidden">
                    <ResilientImage
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      fallbackLabel={project.title}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <span className="text-xs text-[#A855F7]">
                        {project.category} · {project.sampleLabel}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A5A5B5] leading-relaxed">{project.summary}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                      <span>Inspect Template</span>
                      <ArrowRight className="w-4 h-4 text-[#A855F7] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </InteractiveCard>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Service FAQs */}
      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={service.faqs} />
        </Reveal>
      </section>

      {/* Related Services + Get a Quote CTA */}
      <section className="bg-[#101019] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-white">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <InteractiveCard key={rel.id} className="bg-[#08080D]">
                  <Link
                    to={`/services/${rel.slug}`}
                    className="block h-full p-6 space-y-3"
                  >
                    <div className="flex items-center gap-3 text-[#A855F7]">
                      <ServiceIcon name={rel.iconName} className="w-5 h-5" />
                      <span className="font-mono-tabular text-xs">{rel.id}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{rel.title}</h3>
                    <p className="text-sm text-[#A5A5B5] leading-relaxed">{rel.shortDescription}</p>
                  </Link>
                </InteractiveCard>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[#292638] bg-[#08080D] p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#762BFF]/16 blur-[80px]"
            />
            <div className="relative space-y-2 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Ready to Scope Your {service.title} Project?
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5B5]">
                Tell us which deliverables you need and receive a clear, customized proposal.
              </p>
            </div>
            <div className="relative w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to={`/quote?service=${encodeURIComponent(service.title)}`}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium cta-glow whitespace-nowrap"
              >
                Get a Quote
              </Link>
              <Link
                to={`/consultation?service=${encodeURIComponent(service.title)}`}
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#292638] bg-[#101019] hover:border-[#762BFF] text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
