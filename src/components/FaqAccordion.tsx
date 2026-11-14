import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
  category?: string;
}

export function FaqAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#292638] border border-[#292638] rounded-xl bg-[#101019]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="transition-colors">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-[#151522] transition-colors"
            >
              <div>
                {item.category ? (
                  <span className="block text-xs text-[#A855F7] mb-1">{item.category}</span>
                ) : null}
                <span className="text-base font-medium text-white">{item.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#A5A5B5] shrink-0 mt-0.5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#A855F7]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-5 text-sm sm:text-[15px] text-[#A5A5B5] leading-relaxed">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
