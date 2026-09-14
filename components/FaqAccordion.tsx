'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/Icons'

const faqs = [
  {
    q: "I'm not tech-savvy. Will I actually be able to do this?",
    a: 'Yes. The tools were chosen for beginners and the roadmap explains what to do in order. You need basic internet access, the ability to follow written steps, and time to complete the work.',
  },
  {
    q: 'How is this different from just watching YouTube videos for free?',
    a: 'YouTube gives you fragmented information with no sequential path. You\'ll watch 40 videos, get 40 different opinions, and still not know what to do Monday morning. This blueprint gives you one system: a specific order of operations, a day-by-day action plan, and playbooks designed around the exact obstacles you\'ll hit at each stage. The difference between information and a system is the difference between spinning and moving.',
  },
  {
    q: "I've tried AI income stuff before and made nothing. Why is this different?",
    a: "Most AI income content gives you tools and leaves the business model unclear. This Blueprint connects the tool to an offer, a buyer, a sample, outreach, delivery, and a daily execution sequence. The guarantee terms let you work through the roadmap and decide from the completed experience.",
  },
  {
    q: 'How long before I make real money?',
    a: 'There is no guaranteed earning date. Service sales often provide faster feedback because you contact potential buyers directly. Digital products usually need more content and testing. The 30-day roadmap gives you daily actions for either track.',
  },
  {
    q: 'Do I need to spend money on ads or tools to start?',
    a: 'No. Module 2 is built entirely around a free tool stack. Everything in this blueprint can be executed with $0 in additional spend to start. Paid upgrades are covered for when income is already incoming, never as a prerequisite.',
  },
  {
    q: 'What if I already have a full-time job or kids?',
    a: 'Yes. Choose the track that fits your available time. The roadmap separates the work into small actions, so you do not need to quit your job or complete everything at once.',
  },
  {
    q: 'Is this another "make money online" scam?',
    a: 'You should be skeptical of income promises. This page shows the real product screens, exact modules, price, and refund conditions. The Blueprint teaches service and digital-product models, but it does not guarantee income. Your result depends on the offer, market, execution, and follow-up.',
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
