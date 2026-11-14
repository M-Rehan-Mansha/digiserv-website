import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GalleryHorizontalEnd,
  LayoutGrid,
  Quote,
} from 'lucide-react';
import { useAgency } from '../context/AgencyContext';
import { InteractiveCard } from './InteractiveCard';
import { Reveal } from './Reveal';

interface ClientTestimonialsProps {
  backgroundClass?: string;
  defaultLayout?: 'carousel' | 'grid';
}

export function ClientTestimonials({
  backgroundClass = 'bg-[#08080D]',
  defaultLayout = 'carousel',
}: ClientTestimonialsProps) {
  const { testimonials } = useAgency();
  const [layoutMode, setLayoutMode] = useState<'carousel' | 'grid'>(defaultLayout);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const isPrimaryBg = backgroundClass.includes('bg-[#08080D]');
  const cardSurfaceClass = isPrimaryBg ? 'bg-[#101019]' : 'bg-[#08080D]';
  const badgeSurfaceClass = isPrimaryBg ? 'bg-[#08080D]' : 'bg-[#101019]';

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const totalSteps = maxIndex + 1;
  const formattedCurrent = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalSteps).padStart(2, '0');

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={`py-16 sm:py-24 border-b border-[#292638] ${backgroundClass}`}
    >
      <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Client Testimonials</p>
            <h2
              id="testimonials-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Feedback from Satisfied Clients.
            </h2>
            <p className="text-base text-[#A5A5B5] leading-relaxed">
              How founders, creators, and international teams partner with DIGISERV across web,
              marketing, creative production, and brand growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div
              role="group"
              aria-label="Testimonials layout view"
              className={`inline-flex items-center p-1 rounded-lg border border-[#292638] ${cardSurfaceClass}`}
            >
              <button
                type="button"
                onClick={() => setLayoutMode('carousel')}
                aria-pressed={layoutMode === 'carousel'}
                className={`min-h-[40px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  layoutMode === 'carousel'
                    ? 'bg-[#762BFF] text-white'
                    : 'text-[#A5A5B5] hover:text-white'
                }`}
              >
                <GalleryHorizontalEnd className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Carousel</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                aria-pressed={layoutMode === 'grid'}
                className={`min-h-[40px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  layoutMode === 'grid'
                    ? 'bg-[#762BFF] text-white'
                    : 'text-[#A5A5B5] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Grid</span>
              </button>
            </div>

            {layoutMode === 'carousel' && maxIndex > 0 ? (
              <div className="flex items-center gap-2">
                <span className="font-mono-tabular text-xs text-[#A5A5B5] px-1.5 select-none">
                  {formattedCurrent} / {formattedTotal}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonials"
                  className={`min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#292638] ${cardSurfaceClass} text-[#A5A5B5] hover:text-white hover:border-[#762BFF] transition-colors`}
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonials"
                  className={`min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-[#292638] ${cardSurfaceClass} text-[#A5A5B5] hover:text-white hover:border-[#762BFF] transition-colors`}
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {layoutMode === 'carousel' ? (
          <div className="space-y-6">
            <div
              className="overflow-hidden py-1"
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials carousel"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') handlePrev();
                if (e.key === 'ArrowRight') handleNext();
              }}
            >
              <div
                className="flex transition-transform duration-300 ease-out motion-reduce:transition-none -mx-3"
                style={{
                  transform: `translate3d(-${(activeIndex * 100) / itemsPerView}%, 0, 0)`,
                }}
              >
                {testimonials.map((item) => {
                  const initials = item.clientName
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0]?.toUpperCase() || '')
                    .join('');

                  return (
                    <div
                      key={item.id}
                      className="px-3 shrink-0"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <InteractiveCard className={`h-full ${cardSurfaceClass} p-6 sm:p-7`}>
                        <article className="h-full flex flex-col justify-between gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between gap-3">
                              <div
                                className={`w-9 h-9 rounded-lg border border-[#292638] ${badgeSurfaceClass} flex items-center justify-center text-[#A855F7] shrink-0`}
                              >
                                <Quote className="w-4 h-4" aria-hidden="true" />
                              </div>
                              <span className="text-xs text-[#A5A5B5] truncate">{item.region}</span>
                            </div>

                            <p className="text-xs font-medium text-[#A855F7]">
                              {item.serviceCategory}
                            </p>

                            <blockquote className="text-sm sm:text-[15px] text-white/90 leading-relaxed">
                              “{item.feedback}”
                            </blockquote>
                          </div>

                          <div className="pt-4 border-t border-[#292638] flex items-center gap-3.5">
                            <div
                              aria-hidden="true"
                              className={`w-10 h-10 rounded-full border border-[#292638] ${badgeSurfaceClass} flex items-center justify-center font-display text-xs font-semibold text-[#A855F7] shrink-0`}
                            >
                              {initials || 'CL'}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-white truncate">
                                {item.clientName}
                              </p>
                              <p className="text-xs text-[#A5A5B5] truncate">
                                {item.role} · {item.company}
                              </p>
                            </div>
                          </div>
                        </article>
                      </InteractiveCard>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {totalSteps > 1 ? (
                <div className="flex items-center gap-1.5" aria-label="Carousel slide indicators">
                  {Array.from({ length: totalSteps }).map((_, idx) => {
                    const active = idx === activeIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`View testimonial position ${idx + 1}`}
                        aria-current={active ? 'true' : undefined}
                        className="min-h-[44px] px-1 flex items-center focus-visible:outline-none"
                      >
                        <span
                          className={`block h-1 rounded-full transition-all duration-200 ${
                            active
                              ? 'w-8 bg-[#762BFF]'
                              : 'w-4 bg-[#292638] hover:bg-[#A5A5B5]/50'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div />
              )}

              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((item) => {
                const initials = item.clientName
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0]?.toUpperCase() || '')
                  .join('');

                return (
                  <InteractiveCard key={item.id} className={`h-full ${cardSurfaceClass} p-6 sm:p-7`}>
                    <article className="h-full flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg border border-[#292638] ${badgeSurfaceClass} flex items-center justify-center text-[#A855F7] shrink-0`}
                          >
                            <Quote className="w-4 h-4" aria-hidden="true" />
                          </div>
                          <span className="text-xs text-[#A5A5B5] truncate">{item.region}</span>
                        </div>

                        <p className="text-xs font-medium text-[#A855F7]">{item.serviceCategory}</p>

                        <blockquote className="text-sm sm:text-[15px] text-white/90 leading-relaxed">
                          “{item.feedback}”
                        </blockquote>
                      </div>

                      <div className="pt-4 border-t border-[#292638] flex items-center gap-3.5">
                        <div
                          aria-hidden="true"
                          className={`w-10 h-10 rounded-full border border-[#292638] ${badgeSurfaceClass} flex items-center justify-center font-display text-xs font-semibold text-[#A855F7] shrink-0`}
                        >
                          {initials || 'CL'}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">
                            {item.clientName}
                          </p>
                          <p className="text-xs text-[#A5A5B5] truncate">
                            {item.role} · {item.company}
                          </p>
                        </div>
                      </div>
                    </article>
                  </InteractiveCard>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[#A855F7] hover:text-white transition-colors whitespace-nowrap shrink-0 py-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
