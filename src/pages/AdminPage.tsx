import React, { useEffect, useState } from 'react';
import { CheckCircle2, Pencil, Plus, Trash2, X } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { useAgency } from '../context/AgencyContext';
import { SERVICES } from '../data/services';
import type { AgencySettings, FaqItem, InquiryRecord, TestimonialItem } from '../types/agency';

export function AdminPage() {
  const { settings, saveSettings, faqs, testimonials, saveContent } = useAgency();

  const [form, setForm] = useState<AgencySettings>(settings);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'settings' | 'inquiries' | 'faqs' | 'testimonials'>(
    'settings'
  );

  // New FAQ draft
  const [newFaqCategory, setNewFaqCategory] = useState('Agency & Process');
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');

  // New / Edit Testimonial draft
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [tClientName, setTClientName] = useState('');
  const [tRole, setTRole] = useState('');
  const [tCompany, setTCompany] = useState('');
  const [tServiceCategory, setTServiceCategory] = useState(SERVICES[0]?.title || 'Web Development & Website Solutions');
  const [tRegion, setTRegion] = useState('United States');
  const [tFeedback, setTFeedback] = useState('');

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  useEffect(() => {
    const loadInquiries = async () => {
      try {
        const res = await fetch('/api/inquiries');
        if (res.ok) {
          const data = (await res.json()) as { inquiries?: InquiryRecord[] };
          if (Array.isArray(data.inquiries)) setInquiries(data.inquiries);
        }
      } catch {
        // ignore fetch failure
      }
    };
    void loadInquiries();
  }, [activeTab]);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    setErrorMessage('');
    const result = await saveSettings(form);
    if (!result.ok) {
      setErrorMessage(result.error || 'Could not save settings.');
      return;
    }
    setStatusMessage('Agency contact details, social links, and integrations updated.');
  };

  const handleAddFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim()) return;
    const nextFaqs: FaqItem[] = [
      ...faqs,
      {
        id: `faq_${Date.now()}`,
        category: newFaqCategory.trim() || 'General',
        question: newFaqQuestion.trim(),
        answer: newFaqAnswer.trim(),
      },
    ];
    const res = await saveContent({ faqs: nextFaqs });
    if (res.ok) {
      setNewFaqQuestion('');
      setNewFaqAnswer('');
      setStatusMessage('FAQ item added.');
    }
  };

  const handleDeleteFaq = async (id: string) => {
    const nextFaqs = faqs.filter((f) => f.id !== id);
    await saveContent({ faqs: nextFaqs });
  };

  const resetTestimonialDraft = () => {
    setEditingTestimonialId(null);
    setTClientName('');
    setTRole('');
    setTCompany('');
    setTServiceCategory(SERVICES[0]?.title || 'Web Development & Website Solutions');
    setTRegion('United States');
    setTFeedback('');
  };

  const startEditingTestimonial = (item: TestimonialItem) => {
    setEditingTestimonialId(item.id);
    setTClientName(item.isPlaceholder ? '' : item.clientName);
    setTRole(item.role);
    setTCompany(item.isPlaceholder ? '' : item.company);
    setTServiceCategory(item.serviceCategory);
    setTRegion(item.region);
    setTFeedback(item.isPlaceholder ? '' : item.feedback);
    setStatusMessage('');
    setErrorMessage('');
  };

  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    setErrorMessage('');
    if (!tClientName.trim() || !tRole.trim() || !tCompany.trim() || !tFeedback.trim()) {
      setErrorMessage('Please complete client name, role, company, and verified project feedback.');
      return;
    }

    let nextTestimonials: TestimonialItem[];
    if (editingTestimonialId) {
      nextTestimonials = testimonials.map((item) =>
        item.id === editingTestimonialId
          ? {
              ...item,
              clientName: tClientName.trim(),
              role: tRole.trim(),
              company: tCompany.trim(),
              serviceCategory: tServiceCategory.trim(),
              region: tRegion.trim() || 'Worldwide',
              feedback: tFeedback.trim(),
              isPlaceholder: false,
            }
          : item
      );
    } else {
      nextTestimonials = [
        ...testimonials,
        {
          id: `testimonial_${Date.now()}`,
          clientName: tClientName.trim(),
          role: tRole.trim(),
          company: tCompany.trim(),
          serviceCategory: tServiceCategory.trim(),
          region: tRegion.trim() || 'Worldwide',
          feedback: tFeedback.trim(),
          isPlaceholder: false,
        },
      ];
    }

    const res = await saveContent({ testimonials: nextTestimonials });
    if (!res.ok) {
      setErrorMessage(res.error || 'Could not save testimonial.');
      return;
    }
    resetTestimonialDraft();
    setStatusMessage(
      editingTestimonialId
        ? 'Verified client testimonial updated.'
        : 'Verified client testimonial added.'
    );
  };

  const handleDeleteTestimonial = async (id: string) => {
    setStatusMessage('');
    setErrorMessage('');
    const nextTestimonials = testimonials.filter((t) => t.id !== id);
    const res = await saveContent({ testimonials: nextTestimonials });
    if (res.ok) {
      if (editingTestimonialId === id) resetTestimonialDraft();
      setStatusMessage('Testimonial removed.');
    }
  };

  return (
    <>
      <SeoHead
        title="Agency Admin & Settings | DIGISERV"
        description="Configure official DIGISERV contact details, WhatsApp number, social links, CRM webhook, analytics readiness, and manage inquiries and FAQs."
      />

      <section className="border-b border-[#292638] bg-[#08080D] py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-medium text-[#A855F7]">
              Configurable Backend Console
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Agency Settings &amp; Lead Management
            </h1>
            <p className="text-sm sm:text-base text-[#A5A5B5] max-w-2xl">
              Configure official DIGISERV contact information, social profiles, CRM webhook
              forwarding, and review incoming client submissions without editing code.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-[#762BFF] text-white'
                  : 'bg-[#101019] border border-[#292638] text-[#A5A5B5] hover:text-white'
              }`}
            >
              Contact &amp; Integration Settings
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('inquiries')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'inquiries'
                  ? 'bg-[#762BFF] text-white'
                  : 'bg-[#101019] border border-[#292638] text-[#A5A5B5] hover:text-white'
              }`}
            >
              Submitted Inquiries ({inquiries.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faqs')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'faqs'
                  ? 'bg-[#762BFF] text-white'
                  : 'bg-[#101019] border border-[#292638] text-[#A5A5B5] hover:text-white'
              }`}
            >
              Manage FAQs ({faqs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('testimonials')}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'testimonials'
                  ? 'bg-[#762BFF] text-white'
                  : 'bg-[#101019] border border-[#292638] text-[#A5A5B5] hover:text-white'
              }`}
            >
              Manage Testimonials ({testimonials.length})
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#08080D] py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {statusMessage ? (
            <div className="rounded-lg border border-[#762BFF]/50 bg-[#101019] px-4 py-3 flex items-center gap-2.5 text-sm text-white">
              <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0" aria-hidden="true" />
              <span>{statusMessage}</span>
            </div>
          ) : null}

          {errorMessage ? (
            <div className="rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
              {errorMessage}
            </div>
          ) : null}

          {activeTab === 'settings' ? (
            <form
              onSubmit={handleSaveSettings}
              className="rounded-xl border border-[#292638] bg-[#101019] p-6 sm:p-8 space-y-6"
            >
              <h2 className="font-display text-xl font-semibold text-white">
                Contact, CRM &amp; Social Configuration
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="cfg-email" className="block text-sm font-medium text-white">
                    Official Contact Email
                  </label>
                  <input
                    id="cfg-email"
                    type="email"
                    value={form.contactEmail}
                    onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                    placeholder="contact@digiserv-agency.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cfg-wa" className="block text-sm font-medium text-white">
                    WhatsApp Business Number (with country code)
                  </label>
                  <input
                    id="cfg-wa"
                    type="text"
                    value={form.whatsappNumber}
                    onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                    placeholder="+447000000000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cfg-crm" className="block text-sm font-medium text-white">
                    CRM Webhook URL (optional lead forwarding)
                  </label>
                  <input
                    id="cfg-crm"
                    type="url"
                    value={form.crmWebhookUrl}
                    onChange={(e) => setForm({ ...form, crmWebhookUrl: e.target.value })}
                    placeholder="https://hooks.yourcrm.com/..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cfg-ga" className="block text-sm font-medium text-white">
                    Analytics Measurement ID (e.g. G-XXXXXXXXXX)
                  </label>
                  <input
                    id="cfg-ga"
                    type="text"
                    value={form.analyticsId}
                    onChange={(e) => setForm({ ...form, analyticsId: e.target.value })}
                    placeholder="G-XXXXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#292638] space-y-4">
                <h3 className="text-sm font-semibold text-white">Social Media URLs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(
                    [
                      ['linkedin', 'LinkedIn URL'],
                      ['instagram', 'Instagram URL'],
                      ['facebook', 'Facebook URL'],
                      ['youtube', 'YouTube URL'],
                      ['x', 'X (Twitter) URL'],
                    ] as const
                  ).map(([key, label]) => (
                    <div key={key} className="space-y-1.5">
                      <label htmlFor={`social-${key}`} className="block text-xs text-[#A5A5B5]">
                        {label}
                      </label>
                      <input
                        id={`social-${key}`}
                        type="url"
                        value={form.socialLinks[key]}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            socialLinks: { ...form.socialLinks, [key]: e.target.value },
                          })
                        }
                        placeholder="https://..."
                        className="w-full px-3.5 py-2 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
              >
                Save Agency Settings
              </button>
            </form>
          ) : null}

          {activeTab === 'inquiries' ? (
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <div className="rounded-xl border border-[#292638] bg-[#101019] p-10 text-center text-[#A5A5B5]">
                  No contact, quote, or consultation submissions recorded yet. Submit a form on the
                  Contact, Quote, or Consultation pages to test live lead capture.
                </div>
              ) : (
                inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A5A5B5]">
                      <span className="text-[#A855F7] font-medium uppercase tracking-wider">
                        {inq.type} · {inq.serviceRequired}
                      </span>
                      <span className="font-mono-tabular">
                        {inq.id} · {new Date(inq.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-white">
                      <span className="font-semibold">{inq.fullName}</span>
                      <span className="text-[#A5A5B5]">{inq.email}</span>
                      {inq.whatsapp ? <span className="text-[#A5A5B5]">WA: {inq.whatsapp}</span> : null}
                      <span className="text-[#A5A5B5]">{inq.country}</span>
                      <span className="text-[#A5A5B5]">Preferred: {inq.preferredContactMethod}</span>
                    </div>
                    {inq.packageCategory ? (
                      <p className="text-xs text-[#A855F7]">
                        Package: {inq.packageCategory} ({inq.packageTier})
                      </p>
                    ) : null}
                    <p className="text-sm text-[#A5A5B5] leading-relaxed">{inq.description}</p>
                  </div>
                ))
              )}
            </div>
          ) : null}

          {activeTab === 'faqs' ? (
            <div className="space-y-8">
              <form
                onSubmit={handleAddFaq}
                className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-4"
              >
                <h2 className="font-display text-lg font-semibold text-white">Add New FAQ Item</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newFaqCategory}
                    onChange={(e) => setNewFaqCategory(e.target.value)}
                    placeholder="Category (e.g. Services & Scope)"
                    className="px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    value={newFaqQuestion}
                    onChange={(e) => setNewFaqQuestion(e.target.value)}
                    placeholder="Question"
                    className="px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  value={newFaqAnswer}
                  onChange={(e) => setNewFaqAnswer(e.target.value)}
                  placeholder="Clear, concise answer..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  <span>Add FAQ</span>
                </button>
              </form>

              <div className="space-y-3">
                {faqs.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[#292638] bg-[#101019] p-5 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <span className="text-xs text-[#A855F7]">{item.category}</span>
                      <p className="text-sm font-semibold text-white">{item.question}</p>
                      <p className="text-sm text-[#A5A5B5]">{item.answer}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => void handleDeleteFaq(item.id)}
                      aria-label={`Delete FAQ ${item.question}`}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg border border-[#292638] text-[#A5A5B5] hover:text-red-400 hover:border-red-500/40 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === 'testimonials' ? (
            <div className="space-y-8">
              <form
                onSubmit={handleSaveTestimonial}
                className="rounded-xl border border-[#292638] bg-[#101019] p-6 space-y-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="font-display text-lg font-semibold text-white">
                      {editingTestimonialId
                        ? 'Update Testimonial Entry'
                        : 'Add Verified Client Testimonial'}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A5A5B5]">
                      Replace editable placeholders with approved client feedback, roles, and project context.
                    </p>
                  </div>
                  {editingTestimonialId ? (
                    <button
                      type="button"
                      onClick={resetTestimonialDraft}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#292638] text-xs text-[#A5A5B5] hover:text-white transition-colors"
                    >
                      <X className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Cancel Edit</span>
                    </button>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="t-name" className="block text-xs font-medium text-white">
                      Client Name
                    </label>
                    <input
                      id="t-name"
                      type="text"
                      required
                      value={tClientName}
                      onChange={(e) => setTClientName(e.target.value)}
                      placeholder="e.g. Jordan Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="t-role" className="block text-xs font-medium text-white">
                      Role / Title
                    </label>
                    <input
                      id="t-role"
                      type="text"
                      required
                      value={tRole}
                      onChange={(e) => setTRole(e.target.value)}
                      placeholder="e.g. Operations Director"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="t-company" className="block text-xs font-medium text-white">
                      Company / Brand
                    </label>
                    <input
                      id="t-company"
                      type="text"
                      required
                      value={tCompany}
                      onChange={(e) => setTCompany(e.target.value)}
                      placeholder="e.g. Northbridge Retail"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="t-service" className="block text-xs font-medium text-white">
                      Service Delivered
                    </label>
                    <select
                      id="t-service"
                      value={tServiceCategory}
                      onChange={(e) => setTServiceCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.slug} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="t-region" className="block text-xs font-medium text-white">
                      Market / Region
                    </label>
                    <input
                      id="t-region"
                      type="text"
                      required
                      value={tRegion}
                      onChange={(e) => setTRegion(e.target.value)}
                      placeholder="e.g. United Kingdom"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="t-feedback" className="block text-xs font-medium text-white">
                    Verified Project Feedback
                  </label>
                  <textarea
                    id="t-feedback"
                    required
                    rows={3}
                    value={tFeedback}
                    onChange={(e) => setTFeedback(e.target.value)}
                    placeholder="Approved client quote describing project delivery and communication..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080D] border border-[#292638] text-white text-sm focus:border-[#762BFF] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#762BFF] hover:bg-[#8844FF] text-white text-sm font-medium transition-colors"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {editingTestimonialId ? 'Save Verified Testimonial' : 'Add Testimonial'}
                  </span>
                </button>
              </form>

              <div className="space-y-3">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[#292638] bg-[#101019] p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 min-w-0">
                      <p className="text-xs text-[#A855F7]">
                        {item.isPlaceholder ? 'Editable Template' : 'Verified Client'} ·{' '}
                        {item.serviceCategory} · {item.region}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {item.clientName}{' '}
                        <span className="font-normal text-[#A5A5B5]">
                          — {item.role}, {item.company}
                        </span>
                      </p>
                      <p className="text-sm text-[#A5A5B5] leading-relaxed">“{item.feedback}”</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => startEditingTestimonial(item)}
                        aria-label={`Edit testimonial for ${item.clientName}`}
                        className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#292638] text-xs text-[#A5A5B5] hover:text-white hover:border-[#762BFF] transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDeleteTestimonial(item.id)}
                        aria-label={`Delete testimonial for ${item.clientName}`}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg border border-[#292638] text-[#A5A5B5] hover:text-red-400 hover:border-red-500/40 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
