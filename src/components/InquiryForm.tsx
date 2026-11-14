import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Check, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICES } from '../data/services';
import { useAgency } from '../context/AgencyContext';

interface InquiryFormProps {
  mode: 'contact' | 'quote' | 'consultation' | 'package';
  initialService?: string;
  initialFocus?: string;
  initialPackageCategory?: string;
  initialPackageTier?: string;
  submitLabel?: string;
}

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Canada',
  'Australia',
  'Pakistan',
  'Other / Worldwide',
];

const BUDGET_RANGES = [
  'To be discussed / Custom Scope',
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
];

const TIMEZONES = [
  'EST / EDT (US East)',
  'PST / PDT (US West)',
  'GMT / BST (UK)',
  'GST (UAE / Dubai)',
  'PKT (Pakistan)',
  'AEST / AEDT (Australia)',
  'UTC / Flexible',
];

export function InquiryForm({
  mode,
  initialService = '',
  initialFocus = '',
  initialPackageCategory = '',
  initialPackageTier = '',
  submitLabel = 'Submit Request',
}: InquiryFormProps) {
  const { submitInquiry } = useAgency();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('United States');
  const [companyName, setCompanyName] = useState('');
  const [serviceRequired, setServiceRequired] = useState(
    initialService || SERVICES[0].title
  );
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);
  const [preferredContactMethod, setPreferredContactMethod] = useState('Email');
  const [description, setDescription] = useState('');
  const [consultationDate, setConsultationDate] = useState('');
  const [consultationTimezone, setConsultationTimezone] = useState(TIMEZONES[0]);
  const [selectedSubServices, setSelectedSubServices] = useState<string[]>(() =>
    initialFocus ? [initialFocus] : []
  );
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [websiteTrap, setWebsiteTrap] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submittedId, setSubmittedId] = useState('');

  useEffect(() => {
    if (initialService) {
      setServiceRequired(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialFocus) {
      setSelectedSubServices((prev) =>
        prev.includes(initialFocus) ? prev : [...prev, initialFocus]
      );
    }
  }, [initialFocus]);

  const matchedService = SERVICES.find((s) => s.title === serviceRequired);
  const todayDate = new Date().toISOString().split('T')[0];

  const toggleSubService = (sub: string) => {
    setSelectedSubServices((prev) =>
      prev.includes(sub) ? prev.filter((item) => item !== sub) : [...prev, sub]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!description.trim() || description.trim().length < 10) {
      setError('Please describe your project or consultation goals (at least 10 characters).');
      return;
    }
    if (!privacyConsent) {
      setError('Please accept the Privacy Policy before submitting.');
      return;
    }

    setSubmitting(true);
    const result = await submitInquiry({
      type: mode,
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      country,
      companyName: companyName.trim(),
      serviceRequired,
      budget,
      preferredContactMethod,
      description: description.trim(),
      packageCategory: initialPackageCategory || undefined,
      packageTier: initialPackageTier || undefined,
      consultationDate: mode === 'consultation' ? consultationDate : undefined,
      consultationTimezone: mode === 'consultation' ? consultationTimezone : undefined,
      selectedSubServices: selectedSubServices.length > 0 ? selectedSubServices : undefined,
      privacyConsent,
      websiteTrap,
    });
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error || 'Submission could not be processed.');
      return;
    }

    setSubmittedId(result.inquiry?.id || 'RECEIVED');
  };

  if (submittedId) {
    return (
      <div className="rounded-xl border border-[#762BFF]/50 bg-[#101019] p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="w-6 h-6 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-2">
            <h3 className="font-display text-xl font-semibold text-white">Submission Confirmed</h3>
            <p className="text-sm sm:text-base text-[#A5A5B5] leading-relaxed">
              Thank you, {fullName}. Your {mode} inquiry for{' '}
              <span className="text-white font-medium">{serviceRequired}</span> has been recorded.
              Our team will follow up via{' '}
              <span className="text-white font-medium">{preferredContactMethod}</span>.
            </p>
            <p className="text-xs font-mono-tabular text-[#A5A5B5]">
              Reference ID: {submittedId}
            </p>
          </div>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              setSubmittedId('');
              setDescription('');
              setSelectedSubServices([]);
            }}
            className="min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-lg border border-[#292638] bg-[#08080D] text-white hover:border-[#762BFF] transition-colors"
          >
            Submit Another Request
          </button>
          <Link
            to="/services"
            className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-[#762BFF] text-white hover:bg-[#8844FF] transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[#292638] bg-[#101019] p-5 sm:p-8 space-y-6"
    >
      {/* Honeypot spam protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteTrap">Leave this field empty</label>
        <input
          id="websiteTrap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={websiteTrap}
          onChange={(e) => setWebsiteTrap(e.target.value)}
        />
      </div>

      {initialPackageCategory || initialPackageTier ? (
        <div className="rounded-lg border border-[#762BFF]/40 bg-[#08080D] px-4 py-3 text-sm text-[#A5A5B5]">
          Selected Package:{' '}
          <span className="text-white font-medium">
            {initialPackageCategory}
            {initialPackageTier ? ` · ${initialPackageTier} Tier` : ''}
          </span>
        </div>
      ) : null}

      {error ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-200"
        >
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-sm font-medium text-white">
            Full Name <span className="text-[#A855F7]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white placeholder-[#A5A5B5]/50 text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email Address <span className="text-[#A855F7]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white placeholder-[#A5A5B5]/50 text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="whatsapp" className="block text-sm font-medium text-white">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+1 / +44 / +971 ..."
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white placeholder-[#A5A5B5]/50 text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="country" className="block text-sm font-medium text-white">
            Country <span className="text-[#A855F7]">*</span>
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="companyName" className="block text-sm font-medium text-white">
            Business / Company Name
          </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company, brand, or creator channel"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white placeholder-[#A5A5B5]/50 text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="serviceRequired" className="block text-sm font-medium text-white">
            Service Required <span className="text-[#A855F7]">*</span>
          </label>
          <select
            id="serviceRequired"
            value={serviceRequired}
            onChange={(e) => {
              setServiceRequired(e.target.value);
              setSelectedSubServices([]);
            }}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          >
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.id}. {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="budget" className="block text-sm font-medium text-white">
            Project Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-white">
            Preferred Contact Method
          </label>
          <select
            id="preferredContactMethod"
            value={preferredContactMethod}
            onChange={(e) => setPreferredContactMethod(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
          >
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Video Call">Scheduled Video Call</option>
          </select>
        </div>
      </div>

      {mode === 'consultation' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
          <div className="space-y-1.5">
            <label htmlFor="consultationDate" className="block text-sm font-medium text-white">
              Preferred Date
            </label>
            <input
              id="consultationDate"
              type="date"
              min={todayDate}
              value={consultationDate}
              onChange={(e) => setConsultationDate(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="consultationTimezone" className="block text-sm font-medium text-white">
              Preferred Timezone
            </label>
            <select
              id="consultationTimezone"
              value={consultationTimezone}
              onChange={(e) => setConsultationTimezone(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
            >
              {TIMEZONES.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      {(mode === 'quote' || mode === 'package' || mode === 'consultation') && matchedService ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-white">
              Optional Scope Focus ({matchedService.title})
            </p>
            {selectedSubServices.length > 0 ? (
              <span className="font-mono-tabular text-xs text-[#A855F7]">
                {selectedSubServices.length} selected
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {matchedService.subServices.map((sub) => {
              const active = selectedSubServices.includes(sub);
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => toggleSubService(sub)}
                  className={`min-h-[40px] text-left px-3 py-2 rounded-lg text-xs border transition-colors flex items-center justify-between gap-2 ${
                    active
                      ? 'bg-[#762BFF]/20 border-[#A855F7] text-white'
                      : 'bg-[#08080D] border-[#292638] text-[#A5A5B5] hover:text-white hover:border-[#3E3954]'
                  }`}
                >
                  <span className="truncate">{sub}</span>
                  {active ? <Check className="w-3.5 h-3.5 text-[#A855F7] shrink-0" /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="space-y-1.5">
        <label htmlFor="description" className="block text-sm font-medium text-white">
          Project Description <span className="text-[#A855F7]">*</span>
        </label>
        <textarea
          id="description"
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us about your goals, timeline, current website or channels, and deliverables needed..."
          className="w-full px-3.5 py-3 rounded-lg bg-[#08080D] border border-[#292638] text-white placeholder-[#A5A5B5]/50 text-sm focus:border-[#762BFF] focus:outline-none transition-colors"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          type="checkbox"
          checked={privacyConsent}
          onChange={(e) => setPrivacyConsent(e.target.checked)}
          className="mt-0.5 h-5 w-5 rounded border-[#292638] bg-[#08080D] accent-[#762BFF] shrink-0"
        />
        <label htmlFor="privacyConsent" className="text-xs sm:text-sm text-[#A5A5B5] leading-relaxed">
          I agree to DIGISERV processing my inquiry details in accordance with the{' '}
          <Link to="/privacy-policy" className="text-white underline hover:text-[#A855F7]">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] disabled:opacity-60 text-white text-sm font-medium transition-colors"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>{submitLabel}</span>
        )}
      </button>
    </form>
  );
}
