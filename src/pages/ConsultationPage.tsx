import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { InquiryForm } from '../components/InquiryForm';
import { Reveal } from '../components/Reveal';

const CONSULTATION_TOPICS = [
  { label: 'Shopify & Ecommerce Store Roadmap', focus: 'Shopify Consultation' },
  { label: 'Dropshipping & Product Validation', focus: 'Dropshipping Consultation' },
  { label: 'Meta Ads & TikTok Ads Audit', focus: 'Meta Ads Consultation' },
  { label: 'Website Architecture & SEO Planning', focus: 'Website Development Guidance' },
  { label: 'Etsy Shop & Digital Products Strategy', focus: 'Etsy Business Guidance' },
  { label: 'Personal Branding & LinkedIn Positioning', focus: 'Personal Branding Guidance' },
  { label: 'YouTube Channel & Content Growth', focus: 'YouTube Consultation' },
  { label: 'AI Tools & Workflow Automation', focus: 'AI Tools Consultation' },
  { label: 'International Business Setup Guidance', focus: 'International Business Guidance' },
];

export function ConsultationPage() {
  const [params] = useSearchParams();
  const initialService =
    params.get('service') || '1-to-1 Consultation & Professional Guidance';
  const [selectedFocus, setSelectedFocus] = useState(params.get('focus') || '');

  return (
    <>
      <SeoHead
        title="Book a Consultation | DIGISERV — 1-to-1 Strategy & Guidance"
        description="Schedule a focused 1-to-1 consultation with DIGISERV covering Shopify, digital marketing, websites, Etsy, AI workflows, YouTube, or international business planning."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Book a Consultation</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            1-to-1 Professional Guidance &amp; Strategy Sessions.
          </h1>
          <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
            Schedule a working session across your preferred timezone to review your business goals,
            audit existing assets, and map an actionable roadmap.
          </p>
        </div>
      </section>

      <section className="bg-[#08080D] py-12 sm:py-16">
        <Reveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8">
            <InquiryForm
              mode="consultation"
              initialService={initialService}
              initialFocus={selectedFocus}
              submitLabel="Request Consultation Slot"
            />
          </div>

          <aside className="lg:col-span-4 rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-4">
            <div className="space-y-1">
              <h2 className="font-display text-lg font-semibold text-white">
                Select a Consultation Topic
              </h2>
              <p className="text-xs text-[#A5A5B5]">
                Tap any topic below to attach it directly to your booking.
              </p>
            </div>
            <div className="space-y-2">
              {CONSULTATION_TOPICS.map((topic) => {
                const active = selectedFocus === topic.focus;
                return (
                  <button
                    key={topic.focus}
                    type="button"
                    onClick={() => setSelectedFocus(topic.focus)}
                    className={`w-full min-h-[42px] text-left px-3.5 py-2.5 rounded-lg border text-sm flex items-start gap-2.5 transition-colors ${
                      active
                        ? 'border-[#A855F7] bg-[#762BFF]/15 text-white'
                        : 'border-[#292638] bg-[#08080D] text-[#A5A5B5] hover:text-white hover:border-[#3E3954]'
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        active ? 'text-[#A855F7]' : 'text-[#A5A5B5]/60'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{topic.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
