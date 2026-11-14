import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ServiceIcon } from '../components/ServiceIcon';
import { DEPARTMENTS } from '../data/departments';
import { SERVICES } from '../data/services';

export function DepartmentsPage() {
  return (
    <>
      <SeoHead
        title="Our Departments | DIGISERV — Four Integrated Agency Divisions"
        description="Explore DIGISERV's four specialized divisions: Digital & Technology, Marketing & Growth, Creative & Media, and Business & Professional Solutions."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs sm:text-sm font-medium text-[#A855F7]">Our Departments</p>
          <h1
            className="font-display font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' }}
          >
            Four Specialized Divisions. One Coordinated Agency.
          </h1>
          <p className="text-base sm:text-lg text-[#A5A5B5] leading-relaxed max-w-2xl">
            Every DIGISERV capability sits within a dedicated operational department—allowing
            engineering, marketing, media production, and business advisory to reinforce each other.
          </p>
        </div>
      </section>

      <section className="bg-[#08080D] py-16 space-y-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {DEPARTMENTS.map((dept) => {
            const deptServices = SERVICES.filter((s) => dept.serviceSlugs.includes(s.slug));
            return (
              <div
                key={dept.id}
                id={dept.id}
                className="rounded-xl border border-[#292638] bg-[#101019] p-6 sm:p-10 space-y-8 scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <span className="font-mono-tabular text-xs text-[#A855F7]">
                      Department {dept.number}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                      {dept.number}. {dept.name}
                    </h2>
                    <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
                      {dept.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-xs font-medium text-white mb-3">Core Division Focus</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {dept.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="rounded-lg border border-[#292638] bg-[#08080D] px-4 py-2.5 flex items-center gap-2.5 text-sm text-white"
                        >
                          <Check className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#292638] space-y-4">
                  <h3 className="text-sm font-semibold text-white">
                    Dedicated Services Under {dept.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deptServices.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="group rounded-lg border border-[#292638] bg-[#08080D] p-5 flex items-start justify-between gap-4 hover:border-[#762BFF] transition-colors"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2.5 text-[#A855F7]">
                            <ServiceIcon name={service.iconName} className="w-4 h-4" />
                            <span className="font-mono-tabular text-xs">Service {service.id}</span>
                          </div>
                          <h4 className="font-display text-base font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 text-[#A855F7] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
