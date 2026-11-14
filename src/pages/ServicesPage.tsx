import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { InteractiveCard } from '../components/InteractiveCard';
import { Reveal, RevealItem, RevealStagger } from '../components/Reveal';
import { SERVICES } from '../data/services';
import { DEPARTMENTS } from '../data/departments';
import type { DepartmentId } from '../types/agency';

export function ServicesPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<'all' | DepartmentId>('all');
  const [query, setQuery] = useState('');

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((service) => {
      const matchesDept =
        selectedDepartment === 'all' || service.departmentId === selectedDepartment;
      if (!matchesDept) return false;
      if (!q) return true;
      return (
        service.title.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q) ||
        service.subServices.some((sub) => sub.toLowerCase().includes(q))
      );
    });
  }, [selectedDepartment, query]);

  return (
    <>
      <SeoHead
        title="All Services | DIGISERV — 12 Full-Service Digital & Business Solutions"
        description="Explore all 12 DIGISERV services across web development, digital marketing, social media, video editing, graphic design, AI automation, ecommerce, and consulting."
      />

      <section className="relative overflow-hidden border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 right-0 w-[420px] h-[420px] rounded-full bg-[#762BFF]/12 blur-[140px] animate-luxury-float"
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">All Services</p>
            <h1
              className="font-display font-bold tracking-tight text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
            >
              Everything You Need to{' '}
              <span className="silver-accent-text">Build, Market &amp; Scale.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed">
              Browse all 12 core services or search specific capabilities across our four agency
              departments.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
            <div className="flex sm:flex-wrap items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              <button
                type="button"
                onClick={() => setSelectedDepartment('all')}
                className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedDepartment === 'all'
                    ? 'bg-[#762BFF] text-white shadow-[0_6px_20px_-6px_rgba(118,43,255,0.7)]'
                    : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white hover:border-[#762BFF]/60'
                }`}
              >
                All Departments (12)
              </button>
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedDepartment === dept.id
                      ? 'bg-[#762BFF] text-white shadow-[0_6px_20px_-6px_rgba(118,43,255,0.7)]'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white hover:border-[#762BFF]/60'
                  }`}
                >
                  {dept.number}. {dept.name.replace(' Solutions', '')}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#A5A5B5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services or skills..."
                aria-label="Search services"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#101019] border border-[#292638] text-sm text-white placeholder-[#A5A5B5]/60 focus:border-[#762BFF] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08080D] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <Reveal className="rounded-xl border border-[#292638] bg-[#101019] p-12 text-center space-y-3">
              <p className="text-lg font-medium text-white">No matching services found</p>
              <p className="text-sm text-[#A5A5B5]">
                Try clearing your search filter or{' '}
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSelectedDepartment('all');
                  }}
                  className="text-[#A855F7] underline"
                >
                  reset all filters
                </button>
                .
              </p>
            </Reveal>
          ) : (
            <RevealStagger
              key={`${selectedDepartment}-${query}`}
              staggerDelay={0.035}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service) => (
                <RevealItem key={service.id} className="h-full">
                  <InteractiveCard className="h-full bg-[#101019] p-6">
                    <div className="h-full flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-10 h-10 rounded-lg border border-[#292638] bg-[#08080D] flex items-center justify-center text-[#A855F7] group-hover:border-[#762BFF]/80 group-hover:text-white group-hover:shadow-[0_0_20px_-4px_rgba(118,43,255,0.65)] transition-[border-color,color,box-shadow] duration-200">
                            <ServiceIcon name={service.iconName} className="w-5 h-5" />
                          </div>
                          <span className="font-mono-tabular text-xs text-[#A5A5B5]">
                            Service {service.id}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs text-[#A855F7]">{service.departmentName}</p>
                          <h2 className="font-display text-xl font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-sm text-[#A5A5B5] leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#292638]">
                          <p className="text-xs text-[#A5A5B5] leading-relaxed">
                            Includes: {service.subServices.slice(0, 5).join(' · ')}
                            {service.subServices.length > 5
                              ? ` · +${service.subServices.length - 5} more`
                              : ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-2">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-white hover:text-[#A855F7] transition-colors"
                        >
                          <span>View Full Breakdown</span>
                          <ArrowRight
                            className="w-4 h-4 text-[#A855F7] group-hover:translate-x-1 transition-transform duration-200"
                            aria-hidden="true"
                          />
                        </Link>
                        <Link
                          to={`/quote?service=${encodeURIComponent(service.title)}`}
                          className="min-h-[44px] inline-flex items-center text-xs font-medium text-[#A5A5B5] hover:text-white transition-colors"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </InteractiveCard>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </div>
      </section>
    </>
  );
}
