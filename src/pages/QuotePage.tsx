import { useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { InquiryForm } from '../components/InquiryForm';

export function QuotePage() {
  const [params] = useSearchParams();
  const initialService = params.get('service') || '';
  const initialFocus = params.get('focus') || '';
  const initialPackageCategory = params.get('package') || '';
  const initialPackageTier = params.get('tier') || '';

  return (
    <>
      <SeoHead
        title="Get a Free Quote | DIGISERV — Custom Project Proposals"
        description="Request a tailored DIGISERV project proposal across web development, marketing, social media, video editing, design, ecommerce, branding, or AI workflows."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Get a Free Quote</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            Tell Us What You’re Building. Receive a Custom Scope.
          </h1>
          <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
            Select your primary service and specific deliverables below. We prepare tailored
            proposals with transparent timelines and clear milestones.
          </p>
        </div>
      </section>

      <section className="bg-[#08080D] py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8">
            <InquiryForm
              mode={initialPackageCategory ? 'package' : 'quote'}
              initialService={initialService}
              initialFocus={initialFocus}
              initialPackageCategory={initialPackageCategory}
              initialPackageTier={initialPackageTier}
              submitLabel="Request Custom Quote"
            />
          </div>

          <aside className="lg:col-span-4 rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-5">
            <h2 className="font-display text-lg font-semibold text-white">
              What Happens After You Submit
            </h2>
            <ul className="space-y-3.5 text-sm text-[#A5A5B5]">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                <span>We review your selected service, sub-scope, and project goals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                <span>If needed, we schedule a brief discovery call to clarify requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  You receive a clear milestone breakdown and custom investment quote—no hidden
                  fees.
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
