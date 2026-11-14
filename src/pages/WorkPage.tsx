import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { InteractiveCard } from '../components/InteractiveCard';
import { RevealItem, RevealStagger } from '../components/Reveal';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { useAgency } from '../context/AgencyContext';
import type { PortfolioCategory } from '../types/agency';

export function WorkPage() {
  const { portfolio } = useAgency();
  const [selectedCategory, setSelectedCategory] = useState<'All' | PortfolioCategory>('All');
  const prefersReduced = useReducedMotion();

  const items =
    selectedCategory === 'All'
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SeoHead
        title="Our Work & Portfolio Showcases | DIGISERV"
        description="Explore DIGISERV sample showcases across websites, ecommerce stores, graphic design, video editing, social media, marketing campaigns, branding, and AI content."
      />

      <section className="relative overflow-hidden border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-[#762BFF]/12 blur-[140px] animate-luxury-float"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Portfolio / Our Work</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            Creative Work. <span className="silver-accent-text">Real Solutions.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
            Every entry below is clearly marked as a representative sample showcase illustrating how
            our teams structure and deliver real client engagements across disciplines.
          </p>

          <div
            className="flex sm:flex-wrap items-center gap-2 pt-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
            role="tablist"
            aria-label="Portfolio category filters"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-white'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white hover:border-[#762BFF]/60'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId={prefersReduced ? undefined : 'workpage-filter-pill'}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-[#762BFF] shadow-[0_6px_20px_-6px_rgba(118,43,255,0.7)]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#08080D] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <RevealStagger
            key={selectedCategory}
            staggerDelay={0.04}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((project) => (
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
                        <h2 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-sm text-[#A5A5B5] leading-relaxed">{project.summary}</p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                        <span>View Project Details</span>
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
    </>
  );
}
