import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, FileText, Mail, MessageSquare, Settings } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { InquiryForm } from '../components/InquiryForm';
import { useAgency } from '../context/AgencyContext';

export function ContactPage() {
  const { settings } = useAgency();

  const cleanWhatsApp = settings.whatsappNumber.replace(/[^\d]/g, '');
  const whatsappUrl = cleanWhatsApp
    ? `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
        'Hello DIGISERV, I would like to discuss a project.'
      )}`
    : '';

  return (
    <>
      <SeoHead
        title="Contact Us | DIGISERV — Global Digital & Creative Agency"
        description="Contact DIGISERV via form, WhatsApp, or email to discuss websites, digital marketing, ecommerce, video editing, AI solutions, or consultation."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Contact Us</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            Let’s Discuss Your Requirements.
          </h1>
          <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
            Reach out for a project quote, ongoing creative support, or a 1-to-1 consultation. We
            serve clients across the USA, UK, UAE, Canada, Australia, and worldwide.
          </p>
        </div>
      </section>

      <section className="bg-[#08080D] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <InquiryForm mode="contact" submitLabel="Send Inquiry" />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-5">
              <h2 className="font-display text-xl font-semibold text-white">Direct Channels</h2>

              <div className="space-y-3">
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      <span>WhatsApp Contact</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="rounded-lg border border-[#292638] bg-[#08080D] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <MessageSquare className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                      <span>WhatsApp Contact</span>
                    </div>
                    <p className="text-xs text-[#A5A5B5]">
                      WhatsApp number is configurable in Agency Settings.
                    </p>
                    <Link
                      to="/admin"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A855F7] hover:underline"
                    >
                      <Settings className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Configure WhatsApp</span>
                    </Link>
                  </div>
                )}

                {settings.contactEmail ? (
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-white text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                      <span className="truncate">{settings.contactEmail}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="rounded-lg border border-[#292638] bg-[#08080D] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Mail className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                      <span>Email Contact</span>
                    </div>
                    <p className="text-xs text-[#A5A5B5]">
                      Official agency email is configurable in Agency Settings.
                    </p>
                    <Link
                      to="/admin"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A855F7] hover:underline"
                    >
                      <Settings className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Configure Email</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-white">Dedicated Workflows</h2>
              <div className="space-y-3">
                <Link
                  to="/consultation"
                  className="w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-sm font-medium text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                    <span>Book a Consultation</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A5A5B5]" aria-hidden="true" />
                </Link>
                <Link
                  to="/quote"
                  className="w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-sm font-medium text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                    <span>Get a Project Quote</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A5A5B5]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-2 text-xs text-[#A5A5B5] leading-relaxed">
              <p className="font-medium text-white text-sm">Global Support Coverage</p>
              <p>United States · United Kingdom · United Arab Emirates · Canada · Australia · Worldwide</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
