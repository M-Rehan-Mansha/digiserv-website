import { SeoHead } from '../components/SeoHead';
import { useAgency } from '../context/AgencyContext';

export function PrivacyPolicyPage() {
  const { cookieConsent, setCookieConsent, settings } = useAgency();

  return (
    <>
      <SeoHead
        title="Privacy Policy | DIGISERV"
        description="Read how DIGISERV collects, stores, and protects client inquiry information and manages privacy preferences."
      />

      <section className="bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 border-b border-[#292638] pb-8">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Legal &amp; Compliance</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#A5A5B5]">
              Effective Date: {new Date().getFullYear()} · DIGISERV Digital, Creative &amp; Business
              Solutions
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                1. Information We Collect
              </h2>
              <p>
                When you submit a contact form, quote request, package inquiry, or consultation
                booking on DIGISERV, we collect the details you voluntarily provide—including your
                name, email address, WhatsApp number, country, company name, selected service, and
                project description.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p>
                We use submitted information strictly to evaluate your project requirements, prepare
                custom quotes, schedule consultations, and communicate with you via your preferred
                contact method. We do not sell, rent, or trade client data to third-party brokers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                3. Cookies &amp; Privacy Preferences
              </h2>
              <p>
                We use minimal browser storage to remember your privacy preference and support
                optional analytics when consented. You can update your preference at any time below:
              </p>
              <div className="rounded-xl border border-[#292638] bg-[#101019] p-5 mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm">
                  <p className="text-white font-medium">
                    Current Preference:{' '}
                    <span className="text-[#A855F7]">
                      {cookieConsent === 'accepted'
                        ? 'All Preferences Accepted'
                        : cookieConsent === 'essential'
                        ? 'Essential Only'
                        : 'Not Selected'}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCookieConsent('essential')}
                    className="px-3.5 py-2 rounded-lg border border-[#292638] bg-[#08080D] text-xs font-medium text-white hover:border-[#762BFF]"
                  >
                    Essential Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setCookieConsent('accepted')}
                    className="px-3.5 py-2 rounded-lg bg-[#762BFF] text-xs font-medium text-white hover:bg-[#8844FF]"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">
                4. Data Security &amp; Retention
              </h2>
              <p>
                Form submissions are validated, protected against automated spam, and retained only as
                long as necessary to respond to your inquiry or maintain an active client
                relationship.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-white">5. Your Rights</h2>
              <p>
                Depending on your jurisdiction (including the US, UK, EU, UAE, Canada, and
                Australia), you may request access to, correction of, or deletion of your inquiry
                records by contacting{' '}
                {settings.contactEmail ? (
                  <a href={`mailto:${settings.contactEmail}`} className="text-white underline">
                    {settings.contactEmail}
                  </a>
                ) : (
                  'our team through the Contact page'
                )}
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
