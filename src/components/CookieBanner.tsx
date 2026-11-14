import { Link } from 'react-router-dom';
import { useAgency } from '../context/AgencyContext';

export function CookieBanner() {
  const { cookieConsent, setCookieConsent } = useAgency();

  if (cookieConsent !== 'pending') return null;

  return (
    <div
      role="region"
      aria-label="Privacy and cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#101019] border border-[#292638] rounded-xl p-4 shadow-2xl"
    >
      <p className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
        DIGISERV uses essential storage for form continuity and optional analytics readiness. Review
        our{' '}
        <Link to="/privacy-policy" className="text-white underline hover:text-[#A855F7]">
          Privacy Policy
        </Link>{' '}
        to manage preferences.
      </p>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setCookieConsent('essential')}
          className="px-3 py-2 text-xs font-medium text-[#A5A5B5] hover:text-white border border-[#292638] rounded-lg transition-colors whitespace-nowrap"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => setCookieConsent('accepted')}
          className="px-3.5 py-2 text-xs font-medium text-white bg-[#762BFF] hover:bg-[#8844FF] rounded-lg transition-colors whitespace-nowrap"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
