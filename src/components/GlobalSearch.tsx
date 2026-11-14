import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileQuestion, FolderKanban, Layers, Search, X } from 'lucide-react';
import { SERVICES } from '../data/services';
import { DEPARTMENTS } from '../data/departments';
import { useAgency } from '../context/AgencyContext';

interface GlobalSearchProps {
  open: boolean;
  onClose: () => void;
}

type SearchCategory = 'all' | 'services' | 'portfolio' | 'faqs';

interface SearchResultItem {
  id: string;
  type: 'services' | 'portfolio' | 'faqs';
  title: string;
  subtitle: string;
  meta: string;
  href: string;
}

export function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const navigate = useNavigate();
  const { portfolio, faqs } = useAgency();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const allResults = useMemo<SearchResultItem[]>(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      const quickServices: SearchResultItem[] = SERVICES.slice(0, 4).map((service) => ({
        id: `quick-service-${service.id}`,
        type: 'services',
        title: service.title,
        subtitle: service.shortDescription,
        meta: `Service ${service.id} · ${service.departmentName}`,
        href: `/services/${service.slug}`,
      }));
      const quickWork: SearchResultItem[] = portfolio.slice(0, 2).map((project) => ({
        id: `quick-work-${project.id}`,
        type: 'portfolio',
        title: project.title,
        subtitle: project.summary,
        meta: `${project.sampleLabel} · ${project.category}`,
        href: `/work/${project.slug}`,
      }));
      const quickFaqs: SearchResultItem[] = faqs.slice(0, 2).map((faq) => ({
        id: `quick-faq-${faq.id}`,
        type: 'faqs',
        title: faq.question,
        subtitle: faq.answer,
        meta: `FAQ · ${faq.category}`,
        href: `/faq?q=${encodeURIComponent(faq.question)}`,
      }));
      return [...quickServices, ...quickWork, ...quickFaqs];
    }

    const matchedServices: SearchResultItem[] = [];
    for (const service of SERVICES) {
      const matchedSub = service.subServices.find((sub) => sub.toLowerCase().includes(q));
      const directMatch =
        service.title.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q) ||
        service.departmentName.toLowerCase().includes(q);

      if (directMatch || matchedSub) {
        matchedServices.push({
          id: `service-${service.id}`,
          type: 'services',
          title: service.title,
          subtitle: matchedSub
            ? `Includes capability: ${matchedSub} — ${service.shortDescription}`
            : service.shortDescription,
          meta: `Service ${service.id} · ${service.departmentName}`,
          href: `/services/${service.slug}`,
        });
      }
    }

    for (const dept of DEPARTMENTS) {
      const matchedCap = dept.capabilities.find((c) => c.toLowerCase().includes(q));
      if (dept.name.toLowerCase().includes(q) || matchedCap) {
        matchedServices.push({
          id: `dept-${dept.id}`,
          type: 'services',
          title: `${dept.number}. ${dept.name}`,
          subtitle: dept.summary,
          meta: `Department · ${dept.capabilities.slice(0, 3).join(' / ')}`,
          href: `/departments#${dept.id}`,
        });
      }
    }

    const matchedPortfolio: SearchResultItem[] = portfolio
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.scope.some((s) => s.toLowerCase().includes(q))
      )
      .map((p) => ({
        id: `work-${p.id}`,
        type: 'portfolio',
        title: p.title,
        subtitle: p.summary,
        meta: `${p.sampleLabel} · ${p.category}`,
        href: `/work/${p.slug}`,
      }));

    const matchedFaqs: SearchResultItem[] = faqs
      .filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q)
      )
      .map((f) => ({
        id: `faq-${f.id}`,
        type: 'faqs',
        title: f.question,
        subtitle: f.answer,
        meta: `FAQ · ${f.category}`,
        href: `/faq?q=${encodeURIComponent(f.question)}`,
      }));

    // Also include service-level FAQs when relevant
    for (const service of SERVICES) {
      for (const sFaq of service.faqs) {
        if (
          sFaq.question.toLowerCase().includes(q) ||
          sFaq.answer.toLowerCase().includes(q)
        ) {
          matchedFaqs.push({
            id: `sfaq-${service.id}-${sFaq.question.slice(0, 20)}`,
            type: 'faqs',
            title: sFaq.question,
            subtitle: sFaq.answer,
            meta: `Service FAQ · ${service.title}`,
            href: `/services/${service.slug}`,
          });
        }
      }
    }

    return [...matchedServices, ...matchedPortfolio, ...matchedFaqs];
  }, [query, portfolio, faqs]);

  const counts = useMemo(
    () => ({
      all: allResults.length,
      services: allResults.filter((r) => r.type === 'services').length,
      portfolio: allResults.filter((r) => r.type === 'portfolio').length,
      faqs: allResults.filter((r) => r.type === 'faqs').length,
    }),
    [allResults]
  );

  const visibleResults = useMemo(() => {
    const list =
      category === 'all' ? allResults : allResults.filter((item) => item.type === category);
    return list.slice(0, 18);
  }, [allResults, category]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, category]);

  const goTo = (href: string) => {
    onClose();
    setQuery('');
    navigate(href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (visibleResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % visibleResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + visibleResults.length) % visibleResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = visibleResults[activeIndex];
      if (target) goTo(target.href);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#08080D]/80 backdrop-blur-sm px-4 pt-16 sm:pt-24 pb-8"
      role="dialog"
      aria-modal="true"
      aria-label="Global agency search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-xl border border-[#292638] bg-[#101019] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-[#292638] bg-[#08080D]">
          <Search className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search services, Shopify, video editing, portfolio, or FAQs..."
            aria-label="Search DIGISERV"
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-[#A5A5B5]/60 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search query"
              className="p-1.5 text-[#A5A5B5] hover:text-white rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="px-2.5 py-1 text-xs font-medium text-[#A5A5B5] hover:text-white border border-[#292638] rounded-md transition-colors"
          >
            Esc
          </button>
        </div>

        <div
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 border-b border-[#292638] bg-[#101019] overflow-x-auto"
          role="tablist"
          aria-label="Filter search results"
        >
          {(
            [
              ['all', 'All', counts.all],
              ['services', 'Services', counts.services],
              ['portfolio', 'Portfolio', counts.portfolio],
              ['faqs', 'FAQs', counts.faqs],
            ] as const
          ).map(([key, label, count]) => {
            const active = category === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 ${
                  active
                    ? 'bg-[#762BFF] text-white'
                    : 'text-[#A5A5B5] hover:text-white hover:bg-[#08080D]'
                }`}
              >
                <span>{label}</span>
                <span className="font-mono-tabular opacity-80">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="overflow-y-auto divide-y divide-[#292638] flex-1">
          {!query ? (
            <div className="px-4 sm:px-5 py-2.5 text-xs text-[#A5A5B5] bg-[#08080D]/40">
              Suggested Services, Sample Work &amp; FAQs
            </div>
          ) : null}

          {visibleResults.length === 0 ? (
            <div className="px-6 py-12 text-center space-y-2">
              <p className="text-sm font-medium text-white">
                No results found for “{query.trim()}”
              </p>
              <p className="text-xs text-[#A5A5B5]">
                Try searching for Web Development, Shopify, Meta Ads, Video Editing, Etsy, or
                Pricing.
              </p>
            </div>
          ) : (
            visibleResults.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.href)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-start justify-between gap-4 transition-colors ${
                    isSelected ? 'bg-[#171526]' : 'hover:bg-[#141321]'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg border border-[#292638] bg-[#08080D] flex items-center justify-center text-[#A855F7] shrink-0 mt-0.5">
                      {item.type === 'services' ? (
                        <Layers className="w-4 h-4" aria-hidden="true" />
                      ) : item.type === 'portfolio' ? (
                        <FolderKanban className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <FileQuestion className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <p className="text-xs text-[#A855F7] truncate">{item.meta}</p>
                      <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                      <p className="text-xs text-[#A5A5B5] line-clamp-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-colors ${
                      isSelected ? 'text-[#A855F7]' : 'text-[#A5A5B5]/50'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 sm:px-5 py-2.5 border-t border-[#292638] bg-[#08080D] flex items-center justify-between text-[11px] text-[#A5A5B5]">
          <span>Use Up/Down arrows and Enter to navigate</span>
          <span>Ctrl+K / Cmd+K</span>
        </div>
      </div>
    </div>
  );
}
