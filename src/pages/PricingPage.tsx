import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { InteractiveCard } from '../components/InteractiveCard';
import { Reveal } from '../components/Reveal';
import { PRICING_CATEGORIES } from '../data/pricing';
import { getServiceBySlug } from '../data/services';

export function PricingPage() {
  const [activeId, setActiveId] = useState(PRICING_CATEGORIES[0].id);
  const prefersReduced = useReducedMotion();

  const activeCategory =
    PRICING_CATEGORIES.find((c) => c.id === activeId) || PRICING_CATEGORIES[0];
  const matchedService = getServiceBySlug(activeCategory.serviceSlug);

  return (
    <>
      <SeoHead
        title="Pricing & Packages | DIGISERV — Custom Agency Solutions"
        description="Explore flexible Starter, Professional, Premium, and Custom Enterprise packages across websites, marketing, social media, video editing, design, ecommerce, branding, and consultation."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Pricing &amp; Packages</p>
            <h1
              className="font-display font-bold tracking-tight text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
            >
              Flexible Packages Tailored to Your Scope.
            </h1>
            <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed">
              Every project has unique requirements. Select a service category below to compare
              Starter, Professional, Premium, and Custom Enterprise tiers and request a custom
              quote.
            </p>
          </div>

          <div
            className="flex sm:flex-wrap items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
            role="tablist"
            aria-label="Pricing package categories"
          >
            {PRICING_CATEGORIES.map((category) => {
              const active = category.id === activeCategory.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveId(category.id)}
                  className={`relative min-h-[42px] px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-white'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white hover:border-[#762BFF]/60'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId={prefersReduced ? undefined : 'pricing-category-tab'}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-[#762BFF] shadow-[0_6px_20px_-6px_rgba(118,43,255,0.7)]"
                    />
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-16">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                {activeCategory.name}
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5B5]">{activeCategory.description}</p>
            </div>
            {matchedService ? (
              <Link
                to={`/services/${matchedService.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                <span>View Full Service Details</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCategory.tiers.map((tier) => (
              <InteractiveCard
                key={tier.id}
                className={`h-full p-6 ${
                  tier.highlighted ? '!border-[#762BFF] bg-[#131124]' : 'bg-[#101019]'
                }`}
              >
                <div className="h-full flex flex-col justify-between gap-6">
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
                        {tier.highlighted ? (
                          <span className="text-xs font-medium text-[#A855F7]">Popular Choice</span>
                        ) : null}
                      </div>
                      <p className="text-xs text-[#A5A5B5] leading-relaxed">{tier.tagline}</p>
                    </div>

                    <div className="pt-4 border-t border-[#292638]">
                      <p className="font-display text-lg font-semibold text-white">
                        {tier.pricingLabel}
                      </p>
                      <p className="text-xs text-[#A5A5B5] mt-1">Ideal for: {tier.recommendedFor}</p>
                    </div>

                    <ul className="space-y-2.5 text-sm text-[#A5A5B5]">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#292638]">
                    <div className="text-xs text-[#A5A5B5] space-y-1">
                      <p>Timeline: {tier.turnaround}</p>
                      <p>Support: {tier.supportLevel}</p>
                    </div>
                    <Link
                      to={`/quote?service=${encodeURIComponent(
                        matchedService?.title || activeCategory.name
                      )}&package=${encodeURIComponent(activeCategory.name)}&tier=${encodeURIComponent(
                        tier.name
                      )}`}
                      className={`w-full min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium ${
                        tier.highlighted
                          ? 'bg-[#762BFF] hover:bg-[#8844FF] text-white cta-glow'
                          : 'bg-[#08080D] border border-[#292638] hover:border-[#762BFF] text-white transition-colors'
                      }`}
                    >
                      Inquire About {tier.name}
                    </Link>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#101019] py-14 sm:py-20">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Package Comparison — {activeCategory.name}
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5B5]">
              Compare deliverables across tiers before requesting a tailored proposal.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#292638] bg-[#08080D]">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#292638] text-xs uppercase tracking-wider text-[#A5A5B5]">
                  <th className="sticky left-0 bg-[#08080D] py-4 px-5 font-medium">
                    Scope Feature
                  </th>
                  <th className="py-4 px-5 font-medium">Starter</th>
                  <th className="py-4 px-5 font-medium text-[#A855F7]">Professional</th>
                  <th className="py-4 px-5 font-medium">Premium</th>
                  <th className="py-4 px-5 font-medium">Custom Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#292638] text-sm">
                {activeCategory.comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#101019]/60 transition-colors">
                    <td className="sticky left-0 bg-[#08080D] py-4 px-5 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-[#A5A5B5]">{row.starter}</td>
                    <td className="py-4 px-5 text-white font-medium">{row.professional}</td>
                    <td className="py-4 px-5 text-[#A5A5B5]">{row.premium}</td>
                    <td className="py-4 px-5 text-[#A5A5B5]">{row.enterprise}</td>
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 bg-[#08080D] py-4 px-5 font-medium text-white">
                    Investment
                  </td>
                  <td className="py-4 px-5 text-[#A855F7] text-xs font-medium">
                    Get a Custom Quote
                  </td>
                  <td className="py-4 px-5 text-[#A855F7] text-xs font-medium">
                    Get a Custom Quote
                  </td>
                  <td className="py-4 px-5 text-[#A855F7] text-xs font-medium">
                    Get a Custom Quote
                  </td>
                  <td className="py-4 px-5 text-[#A855F7] text-xs font-medium">
                    Get a Custom Quote
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>
    </>
  );
}
