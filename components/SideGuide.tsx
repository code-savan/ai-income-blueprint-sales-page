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
      { icon: '▶', title: 'How the VSL works', body: 'Press play to hear who the Blueprint is for, what it contains, and how the two income tracks work.' },
      { icon: '🎯', title: 'What to look for', body: 'Pay attention to the section headers. Each one answers a specific question you probably have. If you want the short version: scroll through, read the bold text, then decide.' },
      { icon: '⚡', title: 'Quick start', body: 'See something you like? Hit "Get The Blueprint" anywhere on this page. Or scroll through the full walkthrough to see exactly what\'s inside.' },
    ],
  },
  spotlight: {
    title: 'Reading the Story',
    items: [
      { icon: '📱', title: 'The video', body: 'Tap the phone screen to unmute. It shows an example of short-form content produced from a structured brief.' },
      { icon: '💬', title: 'The workflow', body: 'The copy beside the video explains how to move from a prompt to an edited, usable piece of content.' },
      { icon: '🔍', title: 'Why this matters', body: 'The Blueprint connects AI output to a finished business deliverable instead of stopping at the first draft.' },
    ],
  },
  'content-library': {
    title: 'Content Library Guide',
    items: [
      { icon: '🎬', title: 'What you\'re seeing', body: 'UGC-style examples showing the types of content briefs covered by the prompt vault.' },
      { icon: '📋', title: 'How to use the prompts', body: 'Inside the blueprint: copy a prompt, paste into your AI tool, tweak for your product, generate. The library shows you what\'s possible before you buy.' },
      { icon: '💡', title: 'Pro tip', body: 'Look at the variety — fitness, beauty, fashion, app promos. The prompts work across niches. That\'s the point: one system, any product.' },
    ],
  },
  'how-it-works': {
    title: 'How to Navigate',
    items: [
      { icon: '📖', title: 'Read top to bottom', body: 'The four steps build on each other. Start at 01 and work through — each step prepares you for the next. Skipping ahead works too, but the foundation is in step 1.' },
      { icon: '🔄', title: 'It\'s not linear', body: 'Once you\'re inside the blueprint, you can jump between tracks. The diagnostic in Module 1 tells you where to start.' },
      { icon: '⏱', title: 'Timeline note', body: 'The roadmap covers 30 days. Your earning timeline depends on your offer, market, execution, and follow-up.' },
    ],
  },
  tracks: {
    title: 'Picking Your Path',
    items: [
      { icon: '🛤', title: 'Track A — Autonomous Sales', body: 'Build once, sell forever. Best if you want passive-style income without client calls. You create a digital product, set up content, and let it run.' },
      { icon: '💼', title: 'Track B — Service Sales', body: 'Fast cash, client conversations. Best if you want money in weeks and don\'t mind short calls. Use AI to deliver services at human rates.' },
      { icon: '🤔', title: 'Can\'t decide?', body: 'The diagnostic in Module 1 helps you choose a starting track. Track B focuses on service cash flow. Track A focuses on digital products.' },
    ],
  },
  modules: {
    title: 'Inside the Blueprint',
    items: [
      { icon: '🧩', title: '5 modules, one path', body: 'Foundation → Tools → First $500 → Playbooks → Scale. Each module has video training, written guides, and downloadable templates.' },
      { icon: '🎁', title: 'The Prompt Vault bonus', body: '50 ready-to-use AI prompts are included for outreach, content, product creation, and service delivery.' },
      { icon: '📐', title: 'How to consume', body: 'Go at your own pace. Some finish in a weekend. Others spread it over two weeks. The 30-day roadmap in Module 3 gives you daily action items.' },
    ],
  },
  playbooks: {
    title: 'Playbook Usage',
    items: [
      { icon: '📘', title: 'When to use each', body: 'Pull a playbook when you hit its specific bottleneck. Don\'t read all four at once — use Playbook A when you need a client, Playbook B when you\'re launching a product.' },
      { icon: '⏳', title: 'Use action targets', body: 'Each playbook gives you a short sequence and a concrete next action. Results still depend on the market response.' },
      { icon: '🔄', title: 'They stack', body: 'Playbook D (Scale) assumes you\'ve done one of A or B first. The playbooks are ordered by dependency — run them in sequence for best results.' },
    ],
  },
  testimonials: {
    title: 'Reading Product Proof',
    items: [
      { icon: '👤', title: 'Real product screens', body: 'This section focuses on what exists inside the platform and the tasks each tool helps you complete.' },
      { icon: '⚠️', title: 'No income guarantee', body: 'Individual results depend on effort, consistency, offer quality, market demand, and follow-up.' },
      { icon: '📊', title: 'What to inspect', body: 'Review the roadmap, templates, trackers, and prompt vault before deciding whether the system fits you.' },
    ],
  },
  pricing: {
    title: 'Pricing & Guarantee',
    items: [
      { icon: '💰', title: 'One-time payment', body: '$97 — not monthly, not annual. You get lifetime access including all future updates. The regular price is $197 after the founding member window.' },
      { icon: '🛡', title: '30-day guarantee', body: 'Go through the entire blueprint. If you do not see a clear, actionable path to your first sale, email us once and get every cent back. No questions. No hoops. No waiting.' },
      { icon: '📦', title: 'What you get immediately', body: 'Full 5-module system + 4 playbooks + Prompt Vault. All downloadable. Instant access after payment. No wait, no onboarding calls, no upsells.' },
    ],
  },
  faq: {
    title: 'FAQ Guide',
    items: [
      { icon: '❓', title: 'How to use this section', body: 'Click any question to expand the answer. If you do not see yours, email support@zerotopaidwithai.com.' },
      { icon: '🔍', title: 'Still unsure?', body: 'The FAQ covers refunds, who this is for, tech requirements, and time commitments. If you\'re on the fence, start with "Who is this NOT for?"' },
    ],
  },
  cta: {
    title: 'What Happens Next',
    items: [
      { icon: '🔐', title: 'After purchase', body: 'You get instant access to the full blueprint. A welcome email with login details arrives within minutes. Everything is downloadable — no subscription needed.' },
      { icon: '📧', title: 'Support', body: 'Email support@zerotopaidwithai.com with any questions.' },
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
