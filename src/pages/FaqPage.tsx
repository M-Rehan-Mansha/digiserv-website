import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { FaqAccordion } from '../components/FaqAccordion';
import { useAgency } from '../context/AgencyContext';

export function FaqPage() {
  const { faqs } = useAgency();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState(() => searchParams.get('q') || '');

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setSearch(qParam);
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(faqs.map((f) => f.category)));
    return ['All', ...unique];
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return faqs.filter((item) => {
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [faqs, selectedCategory, search]);

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | DIGISERV"
        description="Find clear answers about DIGISERV services, custom pricing, project workflows, international business compliance, and ongoing support."
        schema={{
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">FAQ</p>
            <h1
              className="font-display font-bold tracking-tight text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed">
              Clear answers about our working process, custom quoting model, compliance policies,
              and global service delivery.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#762BFF] text-white'
                      : 'bg-[#101019] text-[#A5A5B5] border border-[#292638] hover:text-white'
                  }`}
                >
                  {cat}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search FAQs"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#101019] border border-[#292638] text-sm text-white placeholder-[#A5A5B5]/60 focus:border-[#762BFF] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08080D] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredFaqs.length > 0 ? (
            <FaqAccordion items={filteredFaqs} />
          ) : (
            <div className="rounded-xl border border-[#292638] bg-[#101019] p-10 text-center text-[#A5A5B5]">
              No matching questions found.
            </div>
          )}

          <div className="rounded-xl border border-[#292638] bg-[#101019] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h2 className="font-display text-xl font-semibold text-white">
                Still Have Questions?
              </h2>
              <p className="text-sm text-[#A5A5B5]">
                Reach out directly or book a 1-to-1 consultation with our team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-white text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/consultation"
                className="px-5 py-2.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
