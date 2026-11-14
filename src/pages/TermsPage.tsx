import { SeoHead } from '../components/SeoHead';

export function TermsPage() {
  return (
    <>
      <SeoHead
        title="Terms & Conditions | DIGISERV"
        description="Review DIGISERV Terms & Conditions governing digital, creative, ecommerce, consulting, and international business assistance services."
      />

      <section className="bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 border-b border-[#292638] pb-8">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Legal &amp; Compliance</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-[#A5A5B5]">
              DIGISERV Digital, Creative &amp; Business Solutions Agency
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                1. Scope of Services
              </h2>
              <p>
                All web development, marketing, social media management, video editing, graphic
                design, AI automation, ecommerce, branding, and consultation engagements are
                governed by a mutually agreed written proposal or scope document detailing
                deliverables, revision rounds, timelines, and custom investment terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                2. Quotes, Payments &amp; Ad Spend
              </h2>
              <p>
                Project pricing is determined individually through custom quotes based on scope. For
                paid advertising services (Meta Ads, TikTok Ads, Google Ads, YouTube Ads), platform
                ad spend is billed directly by the respective ad network to the client’s account and
                is separate from agency management fees unless explicitly stated otherwise.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                3. International Business &amp; Account Assistance Compliance
              </h2>
              <p>
                All business formation guidance, marketplace onboarding, and platform setup services
                strictly comply with applicable local and international laws, identity verification
                standards, and third-party platform policies. DIGISERV does not guarantee platform or
                payment processor approvals and does not create or facilitate fabricated identities
                or documents under any circumstances.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                4. Intellectual Property
              </h2>
              <p>
                Upon full settlement of agreed project fees, final client-commissioned deliverables
                transfer as specified in the project agreement, excluding underlying open-source
                frameworks or pre-existing agency tooling.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                5. Sample Portfolio Showcases
              </h2>
              <p>
                Items labeled as Sample Showcases on this website represent agency design and
                engineering templates illustrating project structure and capability standards, rather
                than claims regarding unrelated third-party brands.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
