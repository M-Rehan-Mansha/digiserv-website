import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { useAgency } from '../context/AgencyContext';
import type { PortfolioCategory } from '../types/agency';

export function WorkPage() {
  const { portfolio } = useAgency();
  const [selectedCategory, setSelectedCategory] = useState<'All' | PortfolioCategory>('All');

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

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Portfolio / Our Work</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            Creative Work. Real Solutions.
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
        </div>
      </section>

      <section className="bg-[#08080D] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group rounded-xl border border-[#292638] bg-[#101019] overflow-hidden flex flex-col hover:border-[#762BFF] transition-colors"
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
                    <h2 className="font-display text-lg font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#A5A5B5] leading-relaxed">{project.summary}</p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
