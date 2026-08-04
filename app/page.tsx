import ScrollReveal from '@/components/ScrollReveal'
import HeroVSL from '@/components/VSLPlayer'
import StickyBar from '@/components/StickyBar'
import FaqAccordion from '@/components/FaqAccordion'
import CountdownTimer from '@/components/CountdownTimer'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#pricing'

export default function Home() {
  return (
    <>
      <TopBar />
      <StickyBar />
      <Hero />
      <Ticker />
      <QuickOfferSection />
      <PainSection />
      <BridgeSection />
      <FitSection />
      <CompareSection />
      <AuthorSection />
      <TracksSection />
      <ModulesSection />
      <PlaybooksSection />
      <ToolsStrip />
      <WallOfProof />
      <FaqSection />
      <ObjectionSection />
      <GuaranteeSection />
      <ScarcityBar />
      <PricingSection />
      <NextStepsSection />
      <FinalCtaSection />
      <FooterSection />
    </>
  )
}

function TopBar() {
  return (
    <div className="top-bar">
      Founding Member Price Active — <u>$97 one-time while the launch offer is live</u>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <HeroVSL />

        <div className="hero-copy">
          <div className="hero-eyebrow eyebrow">
            <span className="eyebrow-dot" />
            AI Income Blueprint
          </div>

          <h1 className="d1">
            Your first AI income path.
            <span className="hl-accent">Mapped day by day.</span>
            <span className="hl-serif">No tool chaos.</span>
          </h1>

          <p className="hero-sub">
            A practical 5-module system for beginners: pick one of two tracks, set up the free
            tool stack, then follow the included prompts, scripts, and playbooks toward your first
            sale or client.
          </p>

          <div className="hero-action">
            <a href="#pricing" className="btn btn-gold btn-lg btn-full">
              See Everything Included
            </a>
            <span className="cta-sub" style={{ marginTop: 0 }}>
              One-time $97 · Instant access · <span>14-day money-back guarantee</span>
            </span>
          </div>

          <div className="hero-urgent">
            <span className="hero-urgent-item">
              <span className="hero-urgent-dot" />
              Launch price live now
            </span>
            <span className="hero-urgent-item">
              $97 one-time · lifetime access
            </span>
          </div>

          <div className="hero-proof">
            <span className="hero-proof-item">
              <strong>2 tracks</strong> service cash flow or digital product sales
            </span>
            <span className="hero-proof-item">
              <strong>30 days</strong> of specific daily actions
            </span>
            <span className="hero-proof-item">
              <strong>$0</strong> extra tools required to start
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickOfferSection() {
  return (
    <section className="quick-offer" aria-label="Offer summary">
      <div className="wide quick-offer-inner">
        <div className="quick-offer-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            The Offer
          </p>
          <h2 className="d1">
            Get the full blueprint today.
            <span className="gold">Start with one clear track.</span>
          </h2>
          <p>
            Five modules, four playbooks, 50 copy-paste prompts, and a beginner-safe tool stack.
            Built to remove the two questions that keep people stuck: what do I sell, and what do I do next?
          </p>
        </div>
        <div className="quick-price">
          <span className="quick-price-label">Launch price</span>
          <span className="quick-price-main">$97</span>
          <span className="quick-price-note">One-time · lifetime access</span>
          <a href="#pricing" className="btn btn-gold btn-full">
            View Full Offer
          </a>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = [
    <b key="1">Track A</b>,
    ' — digital product + faceless funnel',
    <b key="2">11 days</b>,
    ' — service outreach sprint',
    <b key="3">50 prompts</b>,
    ' — product, content, and client delivery',
    <b key="4">$0 tools</b>,
    ' — free stack to start',
    <b key="5">19 days</b>,
    ' — common first-sale target window',
    <b key="6">Track B</b>,
    ' — fast client cash-flow path',
    <b key="7">14 days</b>,
    ' — money-back guarantee',
  ]

  const pairs = []
  for (let i = 0; i < items.length; i += 2) {
    pairs.push({ bold: items[i], text: items[i + 1] })
  }

  const tickerContent = pairs.map((p, i) => (
    <span className="ticker-item" key={i}>
      <span className="ticker-div">✦</span> {p.bold}
      {p.text}
    </span>
  ))

  return (
    <div className="ticker">
      <div className="ticker-track">
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  )
}

function PainSection() {
  return (
    <section className="pain">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            The Real Problem
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="d1 pain-headline" style={{ marginTop: 20 }}>
            You&apos;ve been circling this for months.<br />
            <span className="gold">Still not a dollar to show for it.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="pain-intro">
            You&apos;re not lazy. You&apos;re not incapable. You&apos;ve been handed noise
            disguised as advice, and nobody has bothered to give you an actual map. Sound familiar?
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="pain-list">
            <li>
              <span className="pain-x">✕</span>You&apos;ve closed 14 browser tabs this week about
              &ldquo;making money with AI.&rdquo; You&apos;re no closer to a dollar than when you
              started.
            </li>
            <li>
              <span className="pain-x">✕</span>You tried Fiverr or Upwork. Someone in another
              country undercut you by $180. You gave up before you started.
            </li>
            <li>
              <span className="pain-x">✕</span>You&apos;ve heard &ldquo;just build a digital
              product&rdquo; a hundred times. Nobody told you what product, who buys it, or how to
              put it in front of them.
            </li>
            <li>
              <span className="pain-x">✕</span>You don&apos;t have $500 to burn on ads before
              you&apos;ve made your first dollar. You need income first, investment second. Nobody
              acknowledges that.
            </li>
            <li>
              <span className="pain-x">✕</span>You&apos;ve started. You&apos;ve stopped. Not
              because you&apos;re weak — because you&apos;ve never had a real, sequential,
              day-by-day plan that works from exactly where you are right now.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <div className="pain-quote">
            The people making money with AI right now don&apos;t have a talent advantage over you.
            They have a system. That&apos;s the only difference — and it&apos;s completely fixable.
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function BridgeSection() {
  return (
    <section className="bridge">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            What Actually Changed
          </p>
        </ScrollReveal>
        {[
          'AI didn\'t just change how work gets done. It created an entirely new income category — one that runs on skill, not capital. You don\'t need funding. You don\'t need a team. You don\'t need experience. You need a working system and 30 days of focused execution.',
          'Right now, people with zero technical background are using free AI tools to deliver services that businesses pay $300–$1,200 for — and delivering them in hours, not days. Others are building faceless content businesses that sell digital products at 2am while they sleep.',
          'This isn\'t theory. It\'s not another guru promise. It\'s a documented system, built from 18 months of real execution — and it\'s been tested by over 1,400 people who started exactly where you are.',
          <>
            The window where early movers dominate before the space gets saturated?{' '}
            <span className="bridge-highlight">It&apos;s right now.</span> And this is the only
            guide that gives you both income paths, a clear action plan for each, and the playbooks
            to execute — starting today.
          </>,
        ].map((text, i) => (
          <ScrollReveal key={i}>
            <p className="bridge-body" style={i === 0 ? { marginTop: 20 } : undefined}>
              {text}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function FitSection() {
  return (
    <section className="fit">
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            Honest Positioning
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            This is for you.<br />
            <span className="gold">This is not.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="center" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            Most pages won&apos;t tell you who they&apos;re not for. We will.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="fit-grid">
            <div className="fit-col fit-col-yes">
              <p className="fit-col-title">
                <span>✓</span> This IS for you if…
              </p>
              <ul className="fit-list">
                <li><span className="fit-check">✓</span>You want your first AI income within 30 days — not 6 months</li>
                <li><span className="fit-check">✓</span>You have zero experience with AI tools and that&apos;s fine</li>
                <li><span className="fit-check">✓</span>You have a laptop, internet, and 1–2 hours a day to start</li>
                <li><span className="fit-check">✓</span>You want a real plan, not motivation and vibes</li>
                <li><span className="fit-check">✓</span>You&apos;re willing to follow a system, even when it feels awkward at first</li>
                <li><span className="fit-check">✓</span>You need income that works around a job, kids, or a full life</li>
              </ul>
            </div>
            <div className="fit-col fit-col-no">
              <p className="fit-col-title">
                <span>✕</span> This is NOT for you if…
              </p>
              <ul className="fit-list">
                <li><span className="fit-check">✕</span>You want a magic button that generates money with no effort</li>
                <li><span className="fit-check">✕</span>You&apos;re not willing to spend at least 1 hour a day for the first 2 weeks</li>
                <li><span className="fit-check">✕</span>You&apos;ve bought 5 courses and done nothing with any of them</li>
                <li><span className="fit-check">✕</span>You&apos;re looking for a get-rich-quick shortcut — this is a real business model</li>
                <li><span className="fit-check">✕</span>You already have a working AI income system that&apos;s scaling</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CompareSection() {
  const rows = [
    { old: 'Watch 40 YouTube videos, still confused', nw: 'One sequential system, one path' },
    { old: 'Chase every "new AI tool" with no direction', nw: '4 tools. That\'s it. Pre-selected for you.' },
    { old: 'Race to the bottom on freelancing platforms', nw: 'Direct outreach. Your price. Your terms.' },
    { old: 'Need ads budget before making a single dollar', nw: 'Organic content funnel. $0 to start.' },
    { old: '6 months to "maybe" see results', nw: '30-day roadmap with weekly milestones' },
    { old: 'Show your face, build personal brand from zero', nw: '100% faceless — no camera, no audience needed' },
  ]

  return (
    <section className="compare" style={{ background: 'var(--deep)' }}>
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            The Shift
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            Stop collecting tactics.<br />
            <span className="gold">Start following a sequence.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="compare-table">
            <div className="compare-head">
              <div className="compare-head-cell old">❌ Old Way</div>
              <div className="compare-head-cell vs">vs</div>
              <div className="compare-head-cell nw">✓ With This Blueprint</div>
            </div>
            {rows.map((r, i) => (
              <div className="compare-row" key={i}>
                <div className="compare-cell old">
                  <span className="c-x">✕</span>
                  {r.old}
                </div>
                <div className="compare-cell vs-mid">→</div>
                <div className="compare-cell nw">
                  <span className="c-check">✓</span>
                  {r.nw}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function AuthorSection() {
  return (
    <section className="author" style={{ background: 'var(--black)' }}>
      <div className="wrap">
        <ScrollReveal>
          <div className="author-card">
            <div className="author-aside">
              <div className="author-avatar">JA</div>
              <div className="author-badge">✦ Creator</div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="eyebrow-dot" />
                Who Built This
              </p>
              <h3 className="author-name">Jordan A.</h3>
              <p className="author-title">AI Income Practitioner · Blueprint Author</p>
              <p className="author-bio">
                I spent <strong>18 months getting this wrong</strong> — bad courses, dead
                platforms, $400 in tools I never needed. When I finally built a system that worked,
                it was not because I found a secret tool. It was because I finally had an offer,
                a buyer, a delivery process, and a repeatable weekly cadence. I wrote this blueprint
                because the guide I needed at the start didn&apos;t exist. <strong>No overnight
                millions. No performance lifestyle story.</strong> Just honest, executable steps for
                people who need this to function in their real life.
              </p>
              <div className="author-stats">
                <div className="author-stat">
                  <span className="author-stat-n">2</span>
                  <span className="author-stat-l">Income tracks inside the system</span>
                </div>
                <div className="author-stat">
                  <span className="author-stat-n">30</span>
                  <span className="author-stat-l">Days of mapped execution</span>
                </div>
                <div className="author-stat">
                  <span className="author-stat-n">18 mo.</span>
                  <span className="author-stat-l">Of failure condensed so you don&apos;t have to</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function TracksSection() {
  return (
    <section className="tracks">
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            Pick Your Path
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            Two tracks. One blueprint.<br />
            <span className="gold">Both lead to money.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="center" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            You choose your income model in Module 1. Pick what fits your life — not someone
            else&apos;s.
          </p>
        </ScrollReveal>

        <div className="track-grid">
          {[
            {
              icon: '⚙️',
              name: 'Track A — Autonomous Sales',
              desc: 'Build a digital product. Set up a faceless content funnel on TikTok or Reels. Let it drive traffic and collect sales on autopilot. Wake up to Gumroad notifications.',
              fit: 'People who want income that doesn\'t trade hours for dollars. No client calls. No networking. Introverts thrive here.',
              steps: [
                { label: 'Week 1', text: 'Build your product using AI in under 90 minutes' },
                { label: 'Week 2', text: 'Set up storefront + launch your content system' },
                { label: 'Week 3', text: 'First sale' },
                { label: 'Week 4', text: 'Identify winner, double down' },
              ],
            },
            {
              icon: '💼',
              name: 'Track B — Service Sales',
              desc: 'Use AI to deliver professional services — content, copywriting, automation — to businesses that need them. You charge human rates. You deliver in hours with AI doing the heavy lifting.',
              fit: 'People who want fast cash flow and don\'t mind a short client conversation. No portfolio, no agency, no prior work needed.',
              steps: [
                { label: 'Day 1–3', text: 'Craft your offer + build outreach system' },
                { label: 'Day 4–7', text: 'Send first 50 targeted outreach messages' },
                { label: 'Day 8–11', text: 'First client conversation' },
                { label: 'Day 11+', text: 'First paid delivery' },
              ],
            },
          ].map((track, i) => (
            <ScrollReveal key={i}>
              <div className="track-card">
                <span className="track-icon">{track.icon}</span>
                <p className="track-name">{track.name}</p>
                <p className="track-desc">{track.desc}</p>
                <p className="track-for">Best for</p>
                <p className="track-fit">{track.fit}</p>
                <div className="track-steps">
                  {track.steps.map((s, j) => (
                    <div className="track-step" key={j}>
                      <div className="step-dot" />
                      <div>
                        <span className="step-label">{s.label}</span>
                        {s.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModulesSection() {
  return (
    <section className="modules">
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Inside the Blueprint
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            Everything you need.<br />
            <span className="gold">Nothing you don&apos;t.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12, maxWidth: 560 }}>
            Five focused modules. Four battle-tested playbooks. Every piece built around the fastest
            path to your first dollar.
          </p>
        </ScrollReveal>

        <div className="mod-grid">
          {[
            { num: '01', tag: 'Foundation', title: 'Pick Your Lane', desc: 'A fast diagnostic to place you in the right track based on your time, goals, and resources. You\'ll know your exact next move before leaving Module 1.' },
            { num: '02', tag: 'Tools', title: 'The Only Stack You Need', desc: 'Free tools to start. Paid upgrades only when income is flowing. No expensive subscriptions upfront — zero wasted hours figuring out platforms that don\'t matter.', bullets: ['Free vs paid breakdown by track', 'Full setup walkthrough in under 60 min', 'What to ignore (saves you weeks)'] },
            { num: '03', tag: 'Income', title: 'Your First $500 Roadmap', desc: 'Day-by-day. Real targets. Real timelines. Backed by data from 1,400+ students. No motivational padding — just the map from zero to your first five hundred dollars.', bullets: ['Daily action items, not just weekly goals', 'Track A avg: first sale in 19–24 days', 'Track B avg: first client in 7–11 days'] },
            { num: '04', tag: 'Playbooks', title: 'Four Execution Playbooks', desc: 'Each playbook solves one specific bottleneck with templates, scripts, and data-backed timelines. Scenario-specific — pull out whichever one you need, when you need it.' },
            { num: '05', tag: 'Scale', title: '$500 → $2,000/Month', desc: 'Once the first dollar lands, this module shows you how to turn it into a repeatable system — raising prices, adding volume, and stacking a second income stream without doubling your workload. This is where a side hustle becomes an actual business.', wide: true },
          ].map((mod, i) => (
            <ScrollReveal key={i}>
              <div className={`mod-card${mod.wide ? ' mod-wide' : ''}`}>
                <span className="mod-num">{mod.num}</span>
                <span className="mod-tag">{mod.tag}</span>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                {mod.bullets && (
                  <ul className="mod-bullets">
                    {mod.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="mod-bonus">
              <div>
                <span className="bonus-badge">Bonus Included</span>
                <h3>The Prompt Vault — 50 Ready-to-Use AI Prompts</h3>
                <p>
                  Copy. Paste. Produce. 50 prompts for client outreach, content creation, service
                  delivery, and product building. Students consistently call this the most-used
                  single asset in the entire blueprint.
                </p>
              </div>
              <div className="bonus-aside">
                <span className="bonus-was">Value: $49</span>
                <span className="bonus-free">FREE</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function PlaybooksSection() {
  const playbooks = [
    { letter: 'A', title: 'Land Your First Service Client in 7 Days', desc: 'Outreach message templates, positioning framework, a 3-step follow-up sequence, and the exact platforms to find clients who are already looking.', time: 'First reply in 72 hours' },
    { letter: 'B', title: 'Launch Your Digital Product in 5 Days', desc: 'Blank page to live storefront. Includes the exact product creation prompt, Gumroad setup checklist, and your first promotional post written and scheduled.', time: 'Live and selling in 5 days' },
    { letter: 'C', title: 'Build Your Faceless Content Funnel', desc: 'TikTok and Reels storytelling strategy that converts viewers into buyers — without showing your face, running ads, or having any existing audience.', time: 'First content posted within 48 hours' },
    { letter: 'D', title: 'Scale from $500 to $2,000/Month', desc: 'The exact lever sequence to increase volume, raise prices, and add a second income stream — without proportionally increasing the time you spend.', time: '$2K/mo by month 3' },
  ]

  return (
    <section className="playbooks">
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            The Four Playbooks
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            Every bottleneck.<br />
            <span className="gold">Already solved.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12, maxWidth: 560 }}>
            These aren&apos;t general guides. Each playbook targets one specific obstacle with
            templates, scripts, and timelines that have been stress-tested by real students.
          </p>
        </ScrollReveal>

        <div className="pb-grid">
          {playbooks.map((pb, i) => (
            <ScrollReveal key={i}>
              <div className="pb-card">
                <span className="pb-letter">{pb.letter}</span>
                <div>
                  <h4>{pb.title}</h4>
                  <p>{pb.desc}</p>
                  <span className="pb-time">⏱ Avg: {pb.time}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolsStrip() {
  const tools = ['ChatGPT', 'Claude AI', 'ElevenLabs', 'Kling AI', 'CapCut', 'Gumroad', 'Canva', 'TikTok', 'Instagram Reels']

  return (
    <div className="tools">
      <p className="tools-label">Tools covered inside the blueprint</p>
      <div className="tools-list">
        {tools.map((t, i) => (
          <span className="tool-pill" key={i}>
            <span className="tool-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function WallOfProof() {
  const testimonial = (av: string, name: string, handle: string, q: string, stars = '★★★★★', extra?: { num?: string; per?: string; tag?: string; big?: boolean }) => (
    <div className={`wc${extra?.big ? ' big' : ''}`} key={av + name}>
      {extra?.num && (
        <div className="wc-amount">
          <span className="wc-num">{extra.num}</span>
          <span className="wc-per">{extra.per}</span>
        </div>
      )}
      <div className="wc-stars">{stars}</div>
      <p className="wc-q">{q}</p>
      <div className="wc-author">
        <div className="wc-av">{av}</div>
        <div>
          <p className="wc-name">{name}</p>
          <p className="wc-handle">{handle}</p>
        </div>
      </div>
      {extra?.tag && <span className="wc-tag">{extra.tag}</span>}
    </div>
  )

  const col1 = [
    testimonial('AM', 'Amara M.', 'Stay-at-home mom → Track A', '"I was a stay-at-home mom with $0 of my own. My husband didn\'t think I could do it. Month 2 I made $1,100. I have my own account now. That changes everything about how you carry yourself."', '★★★★★', { num: '$1,100', per: '/ Month 2', big: true }),
    testimonial('TW', 'Tolu W.', '3 failed courses → first $200 in week 2', '"I\'ve bought 3 courses before this. All garbage. This one had me making $200 in week 2. It\'s the only one that gives you actual steps, not motivation."', '★★★★★', { tag: 'Track B' }),
    testimonial('RL', 'Rachel L.', 'Graphic designer → added AI services', '"The Prompt Vault alone is worth more than $97. I used 4 prompts in week 1 to deliver a client project that paid me $600. I hadn\'t even finished the guide."', '★★★★★', { tag: 'Prompt Vault' }),
    testimonial('SN', 'Sandra N.', 'Night shift nurse → $480/mo passive', '"I\'m a night shift nurse. I check my phone before bed and there are Gumroad notifications. $480 last month. Completely passive while I work 12-hour shifts."'),
  ]

  const col2 = [
    testimonial('KO', 'Kevin O.', 'Immigrant → $3,200/month', '"Applied to 47 jobs. 2 callbacks. 0 offers. The internet doesn\'t care about your accent or your postcode. First client in 11 days using Playbook A."', '★★★★★', { tag: 'Playbook A' }),
    testimonial('DL', 'Darius L.', 'Laid off → full-time AI income', '"Got laid off on a Tuesday. Found this on Friday. By end of the month I\'d made more than my salary. I\'m not going back. Not to that office, not to any office."', '★★★★★', { num: '$4,100', per: '/ Month 1', big: true }),
    testimonial('JR', 'Jade R.', 'Skeptic → $900/month side income', '"The guarantee is what made me try it. Didn\'t need it. First sale on day 19. Recommended to my sister and my cousin since. Both are running now."'),
    testimonial('MF', 'Margaret F.', '54 years old · first tech income ever', '"I\'m 54. My kids said I wouldn\'t understand the AI stuff. Module 2 took me 45 minutes. I had a $300/month client by week 3. Tell your kids I said hi."'),
  ]

  const col3 = [
    testimonial('BP', 'Bianca P.', 'Small business owner → dual income', '"I run a bakery. Used Track B to offer AI content to other local businesses on the side. $700 extra in month 1. Bakery still open every day."'),
    testimonial('CK', 'Chris K.', 'Content creator → digital product sales', '"Posted 3 videos using Playbook C\'s format. One hit 80K views. 11 sales that week. From one video. At $97 each. I still can\'t fully process that."', '★★★★★', { tag: 'Playbook C' }),
    testimonial('EO', 'Emeka O.', 'Both tracks simultaneously', '"Ran both tracks at once. Track B gave me fast cash. Track A built passive income in the background. Month 3 they were both producing. $2,300 and still at my day job."', '★★★★★', { num: '$2,300', per: '/ Month 3', big: true }),
    testimonial('LH', 'Lena H.', 'Single mum · $350 in 3 weeks', '"Single mum. No time to waste. Most practical guide I\'ve ever read. No filler. Just: do this, then this, then this. $350 in 3 weeks following it exactly."'),
  ]

  return (
    <section className="wall">
      <div className="wide">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            Real Results. Real People.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            They started exactly<br />
            <span className="gold">where you are right now.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="center" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            No influencers. No paid actors. Just 1,400+ people who followed the blueprint and made
            it work.
          </p>
        </ScrollReveal>

        <div className="wall-cols">
          <div className="wall-col">
            {col1.map((t, i) => <ScrollReveal key={i}>{t}</ScrollReveal>)}
          </div>
          <div className="wall-col">
            {col2.map((t, i) => <ScrollReveal key={i}>{t}</ScrollReveal>)}
          </div>
          <div className="wall-col">
            {col3.map((t, i) => <ScrollReveal key={i}>{t}</ScrollReveal>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="faq">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            Real Questions
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,56px)', marginTop: 20 }}
          >
            Honest answers.<br />
            <span className="gold">No pitch.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <FaqAccordion />
        </ScrollReveal>
      </div>
    </section>
  )
}

function ObjectionSection() {
  return (
    <section className="objection">
      <div className="wrap">
        <ScrollReveal>
          <div className="obj-box">
            <span className="obj-icon">⚠️</span>
            <div>
              <h3 className="obj-h">You&apos;ve been burned before. Let&apos;s name it.</h3>
              <p className="obj-p">
                You bought something that turned out to be a 40-video course where the creator spent
                20 minutes explaining why you need to &ldquo;believe in yourself.&rdquo; You
                downloaded a &ldquo;free guide&rdquo; that was 3 pages of fluff and a link to a $997
                upsell. You followed someone on social media who made it look effortless, tried their
                strategy, and made nothing.
              </p>
              <p className="obj-p">
                That experience is real. And it makes complete sense that you&apos;re reading this
                with your guard up.
              </p>
              <p className="obj-p">
                <strong>Here&apos;s the actual difference:</strong> this blueprint was built by
                someone who needed it to work for themselves first. Every module, every playbook,
                every prompt in the Vault came from real execution — real clients, real sales, real
                failures that got refined into what you&apos;re reading now. It isn&apos;t a
                recycled idea dressed up in a nice PDF.
              </p>
              <p className="obj-p">
                <strong>And if it doesn&apos;t work for you — you pay nothing.</strong> One email
                within 14 days. Full refund. No forms, no justification required. The guarantee
                isn&apos;t a liability — it&apos;s confidence. We&apos;re certain enough in this
                system to absorb your risk entirely.
              </p>
              <p className="obj-p" style={{ color: 'var(--white)', fontWeight: 600 }}>
                Your next step is simple: inspect the system, follow the first playbook, and keep it
                only if the path feels useful enough to continue.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function GuaranteeSection() {
  return (
    <section className="guar">
      <div className="wrap">
        <ScrollReveal>
          <div className="guar-box">
            <div className="seal">
              <div className="seal-ring">
                <div className="seal-inner">
                  <span className="seal-days">14</span>
                  <span className="seal-day">Day</span>
                  <span className="seal-guar">Guarantee</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="d1 guar-h">
                Try the system for 14 days.<br />
                <span className="gold">Keep it only if it earns your trust.</span>
              </h2>
              <p className="guar-p">
                Go through the blueprint. Execute the first playbook. If after 14 days you don&apos;t
                see a clear, working path to your first AI income — send one email.{' '}
                <strong>Your full $97 comes back immediately.</strong> No forms. No waiting. No
                conditions.
              </p>
              <p className="guar-fine">
                We can offer this because the system has been tested at scale and it works. The
                guarantee isn&apos;t a safety net for you — it&apos;s a public statement of
                confidence from us.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ScarcityBar() {
  return (
    <div className="scarcity">
      <div className="sc-inner">
        <span className="sc-dot" />
        <span className="sc-text">
          Launch pricing is active at $97. The standard price is $197 after this founding-member window.
        </span>
        <CountdownTimer />
      </div>
    </div>
  )
}

function PricingSection() {
  const items = [
    { name: 'AI Income Blueprint — Full 5-module system', val: '$147 value' },
    { name: 'Track A — Autonomous digital sales system', val: '$97 value' },
    { name: 'Track B — Service client acquisition system', val: '$97 value' },
    { name: 'Playbook A — First client in 7 days', val: '$47 value' },
    { name: 'Playbook B — First product live in 5 days', val: '$47 value' },
    { name: 'Playbook C — Faceless content funnel', val: '$47 value' },
    { name: 'Playbook D — Scale to $2,000/month', val: '$47 value' },
    { name: 'Prompt Vault — 50 AI prompts (Bonus)', val: '$49 value' },
    { name: 'Lifetime updates — Free as AI evolves', val: 'Priceless' },
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow center">
            <span className="eyebrow-dot" />
            One Decision
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1 center"
            style={{ fontSize: 'clamp(34px,5vw,62px)', marginTop: 20 }}
          >
            Everything included.<br />
            <span className="gold">One flat price.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="center" style={{ color: 'var(--body)', fontSize: 16, marginTop: 12 }}>
            No monthly fees. No hidden upsells. No nonsense. One payment — lifetime access.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="price-card">
            <div className="price-top">
              <p className="price-eyebrow">AI Income Blueprint — Full Access</p>
              <span className="price-was">Regular price: $197</span>
              <div className="price-amount">
                <sup>$</sup>97
              </div>
              <p className="price-period">One-time · Yours forever · Instant access</p>
              <span className="price-save">You save $100 today</span>
              <a href={CHECKOUT_URL} className="btn btn-gold btn-full price-top-cta">
                Get Instant Access
              </a>
            </div>
            <div className="price-stack">
              <p className="price-stack-title">What&apos;s included — and what it&apos;s worth</p>
              <ul className="price-items">
                {items.map((item, i) => (
                  <li className="price-item" key={i}>
                    <span className="price-item-name">
                      <strong>{item.name.split(' — ')[0]}</strong>
                      {item.name.includes(' — ') && <> — {item.name.split(' — ').slice(1).join(' — ')}</>}
                    </span>
                    <span className="price-item-val">{item.val}</span>
                  </li>
                ))}
              </ul>
              <div className="price-total">
                <span className="price-total-label">Total value</span>
                <span className="price-total-val">$578</span>
              </div>
            </div>
            <div className="price-cta-wrap">
              <a href={CHECKOUT_URL} className="btn btn-gold btn-lg btn-full">
                Yes — Give Me Instant Access
              </a>
              <div className="price-guar">
                <span className="price-guar-icon">🛡️</span>
                <p>
                  <strong>14-Day Money-Back Guarantee.</strong> Go through the blueprint. If you
                  don&apos;t see a clear path to your first sale, email once and get every cent
                  back. No questions, no hoops, no waiting.
                </p>
              </div>
              <div className="price-trust">
                <span className="trust-item">
                  <span className="trust-icon">🔒</span>Secure checkout
                </span>
                <span className="trust-item">
                  <span className="trust-icon">⚡</span>Instant delivery
                </span>
                <span className="trust-item">
                  <span className="trust-icon">✉️</span>Email support
                </span>
                <span className="trust-item">
                  <span className="trust-icon">♾️</span>Lifetime access
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function NextStepsSection() {
  const steps = [
    { num: '1', title: 'Secure checkout — 60 seconds', desc: 'One page. Credit card or PayPal. No account creation required unless you want one.', time: '~60 seconds' },
    { num: '2', title: 'Instant delivery to your inbox', desc: 'Your access email arrives immediately — link to the full blueprint, all playbooks, and the Prompt Vault.', time: 'Immediate' },
    { num: '3', title: 'Start Module 1 — pick your track', desc: 'Takes 12 minutes. You\'ll know your exact income model and your first action before you close the tab.', time: '12 minutes' },
    { num: '4', title: 'Execute the 30-day plan', desc: 'Day-by-day roadmap. First dollar target: within 30 days. Most students hit it in 2–3 weeks.', time: '30 days to first income' },
  ]

  return (
    <section className="next">
      <div className="wrap">
        <ScrollReveal>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            After You Click Buy
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2
            className="d1"
            style={{ fontSize: 'clamp(28px,4vw,46px)', marginTop: 20 }}
          >
            You can be reading in<br />
            <span className="gold">under 4 minutes.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="next-steps">
            {steps.map((s, i) => (
              <div className="next-step" key={i}>
                <div className="next-num">{s.num}</div>
                <div className="next-text">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <span className="next-time">⏱ {s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="finale">
      <div className="narrow">
        <ScrollReveal>
          <h2 className="d1">
            You do not need another idea.
            <em>You need a sequence.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="finale-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <p className="finale-p">
            If AI income has felt noisy, this gives you one track to choose, one tool stack to set up,
            and one daily plan to follow. <strong>Start with the blueprint, keep it if it makes the
            next step obvious.</strong>
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="finale-kaya">
            Inside: the track picker, the 30-day action map, four execution playbooks, and the
            50-prompt vault for product creation, outreach, content, and delivery.
          </div>
        </ScrollReveal>
        <a href={CHECKOUT_URL} className="btn btn-gold btn-lg">
          Get The Blueprint — $97
        </a>
        <span className="cta-sub">
          One-time payment · Instant access · <span>14-day guarantee</span>
        </span>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <footer>
      <div className="wrap">
        <p>© 2026 AI Income Blueprint. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Use</a> ·{' '}
          <a href="mailto:support@aiincomeblueprint.com">Contact</a>
        </p>
        <p className="footer-disc">
          Earnings disclaimer: Results shown are real but not typical and are not a guarantee of
          future income. Individual results depend entirely on effort, consistency, and market
          conditions. This is not a get-rich-quick scheme — it is a business education product
          requiring real work.
        </p>
      </div>
    </footer>
  )
}
