'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

/* ─── Context ─── */
type SectionId = string
interface SideGuideCtx {
  active: SectionId | null
  open: (id: SectionId) => void
  close: () => void
  toggle: (id: SectionId) => void
}
const SideGuideContext = createContext<SideGuideCtx>({
  active: null,
  open: () => {},
  close: () => {},
  toggle: () => {},
})
export const useSideGuide = () => useContext(SideGuideContext)

/* ─── Guide content per section ─── */
interface GuideItem {
  icon: string
  title: string
  body: string
}
interface GuideSection {
  title: string
  items: GuideItem[]
}

export const GUIDE_CONTENT: Record<string, GuideSection> = {
  hero: {
    title: 'About This Page',
    items: [
      { icon: '▶', title: 'How the VSL works', body: 'Press play on the video to hear the full story. The VSL breaks down who this is for, what you get, and why $43 matters. No skip, no pitch — just the story.' },
      { icon: '🎯', title: 'What to look for', body: 'Pay attention to the section headers. Each one answers a specific question you probably have. If you want the short version: scroll through, read the bold text, then decide.' },
      { icon: '⚡', title: 'Quick start', body: 'See something you like? Hit "Get The Blueprint" anywhere on this page. Or scroll through the full walkthrough to see exactly what\'s inside.' },
    ],
  },
  spotlight: {
    title: 'Reading the Story',
    items: [
      { icon: '📱', title: 'The video', body: 'Tap the phone screen to unmute. It auto-plays when you scroll to it. Shows Kaya\'s story — the real person behind the headline.' },
      { icon: '💬', title: 'The testimonial', body: 'Below the copy you\'ll find a verified quote from Kaya herself. This isn\'t staged — it\'s an actual student result.' },
      { icon: '🔍', title: 'Why this matters', body: 'Kaya started with $43. No savings, no tech background, no audience. If that sounds familiar, this section is for you.' },
    ],
  },
  'content-library': {
    title: 'Content Library Guide',
    items: [
      { icon: '🎬', title: 'What you\'re seeing', body: 'Real UGC videos generated using the prompts in the blueprint. Each one was created by a student following the system — no actors, no studio.' },
      { icon: '📋', title: 'How to use the prompts', body: 'Inside the blueprint: copy a prompt, paste into your AI tool, tweak for your product, generate. The library shows you what\'s possible before you buy.' },
      { icon: '💡', title: 'Pro tip', body: 'Look at the variety — fitness, beauty, fashion, app promos. The prompts work across niches. That\'s the point: one system, any product.' },
    ],
  },
  'how-it-works': {
    title: 'How to Navigate',
    items: [
      { icon: '📖', title: 'Read top to bottom', body: 'The four steps build on each other. Start at 01 and work through — each step prepares you for the next. Skipping ahead works too, but the foundation is in step 1.' },
      { icon: '🔄', title: 'It\'s not linear', body: 'Once you\'re inside the blueprint, you can jump between tracks. The diagnostic in Module 1 tells you where to start.' },
      { icon: '⏱', title: 'Timeline note', body: 'Most students hit their first dollar in 30 days. Track B (services) is faster — some students land a client in 7-11 days.' },
    ],
  },
  tracks: {
    title: 'Picking Your Path',
    items: [
      { icon: '🛤', title: 'Track A — Autonomous Sales', body: 'Build once, sell forever. Best if you want passive-style income without client calls. You create a digital product, set up content, and let it run.' },
      { icon: '💼', title: 'Track B — Service Sales', body: 'Fast cash, client conversations. Best if you want money in weeks and don\'t mind short calls. Use AI to deliver services at human rates.' },
      { icon: '🤔', title: 'Can\'t decide?', body: 'The diagnostic in Module 1 takes 12 minutes and places you in the right track. Many students run both eventually — Track B for cash, Track A for long-term.' },
    ],
  },
  modules: {
    title: 'Inside the Blueprint',
    items: [
      { icon: '🧩', title: '5 modules, one path', body: 'Foundation → Tools → First $500 → Playbooks → Scale. Each module has video training, written guides, and downloadable templates.' },
      { icon: '🎁', title: 'The Prompt Vault bonus', body: '50 ready-to-use AI prompts included free. Students call this the most-used asset. Copy, paste, produce. Valued at $49 — yours included.' },
      { icon: '📐', title: 'How to consume', body: 'Go at your own pace. Some finish in a weekend. Others spread it over two weeks. The 30-day roadmap in Module 3 gives you daily action items.' },
    ],
  },
  playbooks: {
    title: 'Playbook Usage',
    items: [
      { icon: '📘', title: 'When to use each', body: 'Pull a playbook when you hit its specific bottleneck. Don\'t read all four at once — use Playbook A when you need a client, Playbook B when you\'re launching a product.' },
      { icon: '⏳', title: 'Timelines are real', body: 'These aren\'t aspirational. Playbook A averages a first reply in 72 hours. Playbook B has you live in 5 days. Students validated these timelines.' },
      { icon: '🔄', title: 'They stack', body: 'Playbook D (Scale) assumes you\'ve done one of A or B first. The playbooks are ordered by dependency — run them in sequence for best results.' },
    ],
  },
  testimonials: {
    title: 'Reading Results',
    items: [
      { icon: '👤', title: 'Real students, real numbers', body: 'Every testimonial is from a verified blueprint student. Initials are used for privacy. Dollar amounts are self-reported and verified.' },
      { icon: '⚠️', title: 'Results disclaimer', body: 'Results shown are real but not typical. Individual results depend on effort, consistency, and market conditions. This is a business education product, not a get-rich-quick scheme.' },
      { icon: '📊', title: 'What to watch for', body: 'Note the timeframes — some students saw results in week 2, others in month 2. Track B tends to be faster. The common thread: everyone followed the system.' },
    ],
  },
  pricing: {
    title: 'Pricing & Guarantee',
    items: [
      { icon: '💰', title: 'One-time payment', body: '$97 — not monthly, not annual. You get lifetime access including all future updates. The regular price is $197 after the founding member window.' },
      { icon: '🛡', title: '14-day guarantee', body: 'If you go through the blueprint and don\'t see a clear path to your first dollar, email once and get every cent back. No questions, no hoops.' },
      { icon: '📦', title: 'What you get immediately', body: 'Full 5-module system + 4 playbooks + Prompt Vault. All downloadable. Instant access after payment. No wait, no onboarding calls, no upsells.' },
    ],
  },
  faq: {
    title: 'FAQ Guide',
    items: [
      { icon: '❓', title: 'How to use this section', body: 'Click any question to expand the answer. We\'ve covered the most common questions. If you don\'t see yours, email support at support@aiincomeblueprint.com.' },
      { icon: '🔍', title: 'Still unsure?', body: 'The FAQ covers refunds, who this is for, tech requirements, and time commitments. If you\'re on the fence, start with "Who is this NOT for?"' },
    ],
  },
  cta: {
    title: 'What Happens Next',
    items: [
      { icon: '🔐', title: 'After purchase', body: 'You get instant access to the full blueprint. A welcome email with login details arrives within minutes. Everything is downloadable — no subscription needed.' },
      { icon: '📧', title: 'Support', body: 'Email support@aiincomeblueprint.com with any questions. Response within 24 hours, usually faster.' },
      { icon: '🔄', title: 'Updates', body: 'The blueprint updates as AI tools evolve. You get all updates for free — no additional charge, ever.' },
    ],
  },
}

/* ─── Drawer component ─── */
export function SideGuideProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<SectionId | null>(null)

  const close = useCallback(() => setActive(null), [])
  const open = useCallback((id: SectionId) => setActive(id), [])
  const toggle = useCallback((id: SectionId) => {
    setActive(prev => (prev === id ? null : id))
  }, [])

  /* Close on Escape */
  useEffect(() => {
    if (!active) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  const content = active ? GUIDE_CONTENT[active] : null

  return (
    <SideGuideContext.Provider value={{ active, open, close, toggle }}>
      {children}

      {/* Overlay */}
      {active && (
        <div
          className="sg-overlay"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`sg-drawer${active ? ' sg-drawer--open' : ''}`}
        role="complementary"
        aria-label={content ? `${content.title} — guide` : 'Side guide'}
      >
        <div className="sg-drawer__inner">
          {/* Header */}
          {content && (
            <div className="sg-drawer__head">
              <h3 className="sg-drawer__title">{content.title}</h3>
              <button
                className="sg-drawer__close"
                onClick={close}
                aria-label="Close guide"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}

          {/* Items */}
          {content && (
            <div className="sg-drawer__body">
              {content.items.map((item, i) => (
                <div className="sg-card" key={i}>
                  <span className="sg-card__icon">{item.icon}</span>
                  <div>
                    <strong className="sg-card__title">{item.title}</strong>
                    <p className="sg-card__body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="sg-drawer__foot">
            <span className="sg-drawer__hint">Press <kbd>Esc</kbd> to close</span>
          </div>
        </div>
      </aside>
    </SideGuideContext.Provider>
  )
}

/* ─── Trigger button — render once per section ─── */
export function SideGuideTrigger({ section }: { section: SectionId }) {
  const { active, toggle } = useSideGuide()
  const isActive = active === section

  return (
    <button
      className={`sg-trigger${isActive ? ' sg-trigger--active' : ''}`}
      onClick={() => toggle(section)}
      aria-label={`Guide for ${section}`}
      title="Guide"
      type="button"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
        <text x="8" y="11.5" textAnchor="middle" fontSize="10" fontWeight="600" fill="currentColor">?</text>
      </svg>
    </button>
  )
}
