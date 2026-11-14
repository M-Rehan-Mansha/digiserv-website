import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ResilientImage } from '../components/ResilientImage';
import { ClientTestimonials } from '../components/ClientTestimonials';
import { AGENCY_MEDIA } from '../assets/media';
import { DEPARTMENTS } from '../data/departments';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Unified Multi-Discipline Execution',
    description:
      'Instead of coordinating separate freelancers for web development, ads, design, and editing, our departments work from one shared brief.',
  },
  {
    num: '02',
    title: 'Transparent Scoping & Honest Claims',
    description:
      'We never invent fake guarantees, metrics, or approvals. Every engagement is scoped clearly with realistic milestones and compliance standards.',
  },
  {
    num: '03',
    title: 'Built for Global Operators',
    description:
      'Whether you operate in the US, UK, UAE, Canada, Australia, or worldwide, we adapt branding, ecommerce, and marketing to your target market.',
  },
  {
    num: '04',
    title: 'Scalable Partnership Model',
    description:
      'Start with a single 1-to-1 consultation or focused deliverable and expand into multi-department execution as your business grows.',
  },
];

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us | DIGISERV — Digital, Creative & Business Solutions"
        description="Learn how DIGISERV unites digital engineering, performance marketing, creative media production, and business advisory under one roof."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">About DIGISERV</p>
            <h1
              className="font-display font-bold tracking-tight text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
            >
              Your Complete Digital, Creative &amp; Business Solutions Partner.
            </h1>
            <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed">
              DIGISERV is a full-service agency providing digital, creative, technological and
              business solutions to individuals, startups, entrepreneurs, content creators,
              ecommerce businesses and established companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#292638] bg-[#101019] min-h-[300px]">
              <ResilientImage
                src={AGENCY_MEDIA.aboutCreativeTeam}
                alt="DIGISERV executive conference and creative planning space"
                className="w-full h-full object-cover"
                fallbackLabel="DIGISERV Agency Studio"
              />
            </div>

            <div className="lg:col-span-5 rounded-xl border border-[#292638] bg-[#101019] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-white">Our Objective</h2>
                <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
                  Our objective is to provide multiple professional services under one roof,
                  allowing clients to manage all their digital requirements through one trusted
                  agency instead of hiring multiple disconnected freelancers or vendors.
                </p>
                <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
                  From launching an initial brand identity and Shopify store to managing ongoing
                  video editing, paid acquisition, and AI workflow automation, every deliverable
                  stays aligned.
                </p>
              </div>

              <div className="pt-4 border-t border-[#292638] flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="px-5 py-2.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
                >
                  Explore 12 Services
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-lg border border-[#292638] bg-[#08080D] hover:border-[#762BFF] text-white text-sm font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#292638] bg-[#101019] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              How We Operate
            </h2>
            <p className="text-base text-[#A5A5B5]">
              Clear communication, structured delivery, and strict compliance across every market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-[#292638] bg-[#08080D] p-6 sm:p-8 space-y-3"
              >
                <span className="font-mono-tabular text-xs text-[#A855F7]">{item.num}</span>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Four Integrated Divisions
              </h2>
              <p className="text-base text-[#A5A5B5]">
                Every client engagement connects seamlessly across our specialized agency teams.
              </p>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A855F7] hover:text-white transition-colors"
            >
              <span>View Full Department Matrix</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-4"
              >
                <span className="font-mono-tabular text-xs text-[#A855F7]">{dept.number}</span>
                <h3 className="font-display text-lg font-semibold text-white">{dept.name}</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A5A5B5]">
                  {dept.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#A855F7] shrink-0" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientTestimonials backgroundClass="bg-[#101019]" />
    </>
  );
}
