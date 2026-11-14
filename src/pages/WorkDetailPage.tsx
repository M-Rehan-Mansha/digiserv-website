import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';
import { InteractiveCard } from '../components/InteractiveCard';
import { useAgency } from '../context/AgencyContext';
import { getServiceBySlug } from '../data/services';

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { portfolio } = useAgency();

  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-24 bg-[#08080D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="font-display text-3xl font-bold text-white">Project Showcase Not Found</h1>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#762BFF] text-white text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>
    );
  }

  const linkedService = getServiceBySlug(project.serviceSlug);

  return (
    <>
      <SeoHead
        title={`${project.title} | DIGISERV Portfolio`}
        description={project.summary}
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#A5A5B5]">
            <Link to="/work" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#A855F7]">{project.sampleLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs sm:text-sm font-medium text-[#A855F7]">
                {project.category} · {project.sampleLabel}
              </p>
              <h1
                className="font-display font-bold tracking-tight text-white leading-tight"
                style={{ fontSize: 'clamp(1.85rem, 3.6vw, 3rem)', textWrap: 'balance' }}
              >
                {project.title}
              </h1>
              <p className="text-base text-[#A5A5B5] leading-relaxed">{project.overview}</p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/quote?service=${encodeURIComponent(linkedService?.title || '')}`}
                  className="min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium cta-glow"
                >
                  Request a Similar Build
                </Link>
                {linkedService ? (
                  <Link
                    to={`/services/${linkedService.slug}`}
                    className="px-6 py-3 rounded-lg border border-[#292638] bg-[#101019] hover:border-[#762BFF] text-white text-sm font-medium transition-colors"
                  >
                    Explore Related Service
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#292638] bg-[#101019]">
              <ResilientImage
                src={project.imageUrl}
                alt={project.imageAlt}
                className="w-full aspect-[4/3] object-cover"
                fallbackLabel={project.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101019] py-16">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <InteractiveCard className="bg-[#08080D] p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-white">Representative Scope</h2>
            <ul className="space-y-2.5 text-sm text-[#A5A5B5]">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InteractiveCard>

          <InteractiveCard className="bg-[#08080D] p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-white">Key Deliverables</h2>
            <ul className="space-y-2.5 text-sm text-[#A5A5B5]">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InteractiveCard>

          <InteractiveCard className="bg-[#08080D] p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-white">Execution Approach</h2>
            <ul className="space-y-2.5 text-sm text-[#A5A5B5]">
              {project.approach.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InteractiveCard>
        </Reveal>
      </section>
    </>
  );
}
