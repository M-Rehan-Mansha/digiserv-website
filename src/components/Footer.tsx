import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageSquare, Settings } from 'lucide-react';
import { SERVICES } from '../data/services';
import { DEPARTMENTS } from '../data/departments';
import { useAgency } from '../context/AgencyContext';

export function Footer() {
  const { settings } = useAgency();

  const whatsappHref = settings.whatsappNumber
    ? `https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, '')}`
    : '';

  const socialEntries = [
    { label: 'LinkedIn', url: settings.socialLinks.linkedin },
    { label: 'Instagram', url: settings.socialLinks.instagram },
    { label: 'Facebook', url: settings.socialLinks.facebook },
    { label: 'YouTube', url: settings.socialLinks.youtube },
    { label: 'X', url: settings.socialLinks.x },
  ].filter((item) => Boolean(item.url));

  return (
    <footer className="bg-[#08080D] border-t border-[#292638]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label="DIGISERV Home" className="inline-block">
              <img
                src="/assets/aistudio/DIGISERV_LOGO_dc7a74bc.PNG"
                alt="DIGISERV"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#A5A5B5] leading-relaxed max-w-sm">
              DIGISERV is a full-service digital, creative, technological, and business solutions
              agency helping startups, creators, ecommerce brands, and established companies build
              and grow worldwide.
            </p>
            <p className="text-sm font-medium text-white">
              One Agency. Multiple Services. Endless Possibilities.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              {settings.contactEmail ? (
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[#A5A5B5] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                  <span>{settings.contactEmail}</span>
                </a>
              ) : (
                <p className="text-xs text-[#A5A5B5]">
                  Contact email not configured yet.{' '}
                  <Link to="/admin" className="text-[#A855F7] hover:underline">
                    Configure in Agency Settings
                  </Link>
                </p>
              )}

              {whatsappHref ? (
                <div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#A5A5B5] hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A855F7]" aria-hidden="true" />
                    <span>WhatsApp: {settings.whatsappNumber}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              ) : null}

              {socialEntries.length > 0 ? (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {socialEntries.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#A5A5B5] hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#A5A5B5]/80">
                  Social links configurable in{' '}
                  <Link to="/admin" className="text-[#A855F7] hover:underline">
                    Admin Settings
                  </Link>
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 text-sm text-[#A5A5B5]">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors inline-block py-1">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-white transition-colors inline-block py-1">
                  Our Departments
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors inline-block py-1">
                  Portfolio / Our Work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors inline-block py-1">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-white transition-colors inline-block py-1">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white transition-colors inline-block py-1">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors inline-block py-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors inline-block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-white">All Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 text-xs sm:text-sm text-[#A5A5B5]">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-white transition-colors line-clamp-1 py-1 block"
                  >
                    {service.id}. {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-white">Our Departments</h3>
            <ul className="space-y-1.5 text-sm text-[#A5A5B5]">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments#${dept.id}`}
                    className="hover:text-white transition-colors block py-1"
                  >
                    {dept.number}. {dept.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#292638] space-y-2 text-xs text-[#A5A5B5]">
              <p className="font-medium text-white">Markets Served</p>
              <p>USA · UK · UAE · PK · Canada · Australia · Worldwide</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#292638] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A5A5B5]">
          <p>© {new Date().getFullYear()} DIGISERV. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Settings className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Agency Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
