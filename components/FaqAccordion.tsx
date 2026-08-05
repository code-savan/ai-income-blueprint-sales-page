'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/Icons'

const faqs = [
  {
    q: "I'm not tech-savvy. Will I actually be able to do this?",
    a: 'Yes. The tools in this blueprint were chosen specifically because they require zero coding, zero design experience, and zero prior AI knowledge. If you can type and follow steps, you can execute this. Students who\'ve gotten results include a 54-year-old, a night shift nurse, and multiple people who had never used AI before opening the guide.',
  },
  {
    q: 'How is this different from just watching YouTube videos for free?',
    a: 'YouTube gives you fragmented information with no sequential path — you\'ll watch 40 videos, get 40 different opinions, and still not know what to do Monday morning. This blueprint gives you one system: a specific order of operations, a day-by-day action plan, and playbooks designed around the exact obstacles you\'ll hit at each stage. The difference between information and a system is the difference between spinning and moving.',
  },
  {
    q: "I've tried AI income stuff before and made nothing. Why is this different?",
    a: "That's the most important question on this page. Most AI income content gives you tools and sends you off to figure out the business model yourself. This blueprint solves the actual bottlenecks: what to sell, who to sell it to, how to reach them with zero audience, and what to do when nothing's working in the first week. The system was built backwards from results — not forwards from theory. And the 14-day guarantee means you can test it and get your money back if it still doesn't move you.",
  },
  {
    q: 'How long before I make real money?',
    a: 'Track B (service sales) is faster — most students get a first client conversation within 7 days and a paid delivery within 11. Track A (autonomous sales) typically sees a first sale within 19–24 days once the content funnel is running. These are averages — results depend entirely on how closely you follow the plan and how consistently you execute. The 30-day roadmap in Module 3 breaks this down day by day.',
  },
  {
    q: 'Do I need to spend money on ads or tools to start?',
    a: 'No. Module 2 is built entirely around a free tool stack. Everything in this blueprint can be executed with $0 in additional spend to start. Paid upgrades are covered for when income is already incoming — never as a prerequisite.',
  },
  {
    q: 'What if I already have a full-time job or kids?',
    a: 'The majority of students who used this blueprint kept their jobs while building. Track A is specifically designed around building an asset that works while you\'re not — content posted once can drive sales for months. Track B can be executed in 1–2 hours a day from any device. You don\'t need to quit anything to start. You earn first, then make decisions from a position of actual leverage.',
  },
  {
    q: 'Is this another "make money online" scam?',
    a: 'You should ask that. The fact you\'re asking means you\'ve been burned before — and this market has earned that skepticism. Here\'s what\'s different: there are 1,400+ students who\'ve used this. The 14-day money-back guarantee has no conditions — you get every cent back with one email. The income models are based on real services and products that businesses and consumers actually pay for. And the guarantee means the only risk is inaction.',
  },
]

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            {faq.q}
            <span className="faq-icon"><PlusIcon size={15} color="var(--purple)" /></span>
          </button>
          <div className="faq-a">{faq.a}</div>
        </div>
      ))}
    </div>
  )
}
