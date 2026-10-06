'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/Icons'

const faqs = [
  { q: 'Do I need technical experience?', a: 'Start with a service or product you understand. The written guides give exact actions, sample files and checks. The website path includes a complete static HTML starter and publishing steps. You still need to practise and verify the work before selling it.' },
  { q: 'What do I get for $97?', a: 'Lifetime Blueprint access, ten playbooks, ten service choices, ten researched product ideas, an offer interview, fifty action prompts, worked examples, free and optional paid tool paths, and saved tasks and trackers. It is a written, interactive guide. Full narrated video courses and personal coaching are not included.' },
  { q: 'How is this different from free tutorials?', a: 'The Blueprint connects your track, chosen offer and next task. Each task opens the relevant guide. You get an example of what to make, a prompt to help and a check before moving on. Inspect the public preview and screenshots before deciding.' },
  { q: 'Are the ten product ideas proven winners?', a: 'They are starting ideas with research notes and tradeoffs. Existing templates and product-category signals support the choices, but do not prove demand for your version. The guide shows how to ask likely buyers, test the first task and check affiliate eligibility.' },
  { q: 'Where does the service track teach me to find clients?', a: 'Instagram, Facebook Groups, LinkedIn, Google Maps and business websites, plus permitted marketplace enquiries. Each channel has search steps and a separate research prompt. Manus and Z.ai are optional research tools. You verify the evidence and contact people appropriately.' },
  { q: 'Do I need paid tools or ads?', a: 'There are free-tool paths for planning, writing and making a practice version. Paid AI plans are optional. Physical items, domains, commercial hosting, calling and selling-platform fees introduce separate costs where relevant. Some tools and affiliate programs have account or country limits.' },
  { q: 'How long before I earn money?', a: 'There is no guaranteed earning date or amount. You work at your own pace. Buyer demand, the quality of your offer, your actions, costs and follow-up affect the result. The task list shows the work to do next.' },
  { q: 'Am I locked into one track?', a: 'Change your offer without erasing saved work. To change the service or product track, open Change my track, read the reset warning and retake the quiz. Saving the new result clears the old offer, progress, tasks, notes and tracker data. Leaving the quiz keeps your existing work.' },
  { q: 'How does the 30-day guarantee work?', a: 'Complete the Blueprint and work through its steps. If you still do not see a clear, actionable path to your first sale, email support@zerotopaidwithai.com within 30 days of purchase with your completed checklist. The refund conditions are in the Terms of Use.' },
]

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
          <button type="button" className="faq-q" aria-expanded={openIdx === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            {faq.q}
            <span className="faq-icon"><PlusIcon size={15} color="var(--purple)" /></span>
          </button>
          <div className="faq-a" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={openIdx !== i}>{faq.a}</div>
        </div>
      ))}
    </div>
  )
}
