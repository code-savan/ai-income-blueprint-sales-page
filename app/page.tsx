'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Reveal from '@/components/Reveal'
import HeroVSL from '@/components/VSLPlayer'
import StickyBar from '@/components/StickyBar'
import FaqAccordion from '@/components/FaqAccordion'
import TestimonialCard from '@/components/TestimonialCard'
import LeadMagnetForm from '@/components/LeadMagnetForm'
import UrgencyBanner from '@/components/UrgencyBanner'
import GuaranteeSeal from '@/components/GuaranteeSeal'
import { CheckIcon, StarsRow, ArrowRight, BoltIcon, CalendarIcon, FreeIcon, ShieldIcon, LockIcon, MailIcon, InfinityIcon, ClockIcon, GearIcon, BriefcaseIcon } from '@/components/Icons'

const LeadModal = dynamic(() => import('@/components/LeadModal'), { ssr: false })
function openModal(){ window.dispatchEvent(new Event('open-lead-modal')) }
function useNavScroll(){ useEffect(()=>{ const onScroll=()=>{ const nav=document.querySelector('.nav'); if(nav) nav.classList.toggle('is-scrolled',window.scrollY>40)}; window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[])}

export default function BlueprintPage(){
  useNavScroll()
  const [modalOpen,setModalOpen]=useState(false)
  const [modalSource,setModalSource]=useState('cta')
  useEffect(()=>{ const h=()=>{setModalOpen(true); setModalSource('cta')}; window.addEventListener('open-lead-modal',h); return()=>window.removeEventListener('open-lead-modal',h)},[])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"zerotopaidwithai","description":"From Zero to Paid with AI — 30-day system to your first $500 online using free AI tools.","brand":{"@type":"Brand","name":"zerotopaidwithai"},"offers":{"@type":"Offer","price":"97","priceCurrency":"USD","availability":"https://schema.org/InStock","url":"https://zerotopaidwithai.com/"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"1400"}})}}/>
      <Nav/>
      <StickyBar hidden={modalOpen}/>
      <Hero/>
      <Logowall/>
      <Spotlight/>
      <ContentLibrary/>
      <HowItWorks/>
      <Tracks/>
      <Modules/>
      <PeekInside/>
      <Playbooks/>
      <WallOfProofNew/>
      <LeadMagnetGate/>
      <PricingSection/>
      <FaqSection/>
      <FinalCtaSection/>
      <FooterSection/>
      <LeadModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} source={modalSource}/>
    </>
  )
}

function Nav(){
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="/">zerotopaidwithai</a>
        <div className="nav__right">
          <nav className="nav__links"><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="#lead-magnet">Free Prompts</a></nav>
          <a className="btn btn--dark" href="#lead" onClick={e=>{e.preventDefault(); openModal()}}>Get The Blueprint<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
        </div>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="hero section" id="hero">
      <div className="container hero__inner">
        <Reveal delay={0}><a className="hero-announce" href="#content-library"><span className="hero-announce__badge">NEW</span><span>Join 1,400+ students already using the Blueprint</span></a></Reveal>
        <Reveal delay={0.08} className="hero-media"><HeroVSL/></Reveal>
        <Reveal delay={0.16}>
          <h1 className="h1 hero__title">From Zero to Your First $500 Online. Mapped Day by Day.</h1>
        </Reveal>
        <Reveal delay={0.20}><p className="kaya-story">“Kaya left with $43 and two kids. Month 2: $1,100. No face, no ads, no experience.”</p></Reveal>
        <Reveal delay={0.24}>
          <p className="hero__sub">A 5-module system using free AI tools. Pick autonomous digital sales or fast client cash. <strong>30-day roadmap. $0 startup cost. 1,400+ students.</strong></p>
          <p style={{fontSize:13,color:'var(--muted)',marginTop:8}}>By <strong style={{color:'var(--ink)'}}>zerotopaidwithai</strong> — 1,400+ students</p>
        </Reveal>
        <Reveal delay={0.32} className="hero__action">
          <a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:32,height:48,fontSize:16}}>Get The Blueprint — $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
          <span style={{fontSize:13,color:'var(--muted)',marginTop:4}}>One-time $97 · Instant access · <strong style={{color:'var(--ink-soft)'}}>30-Day Money-Back Guarantee</strong></span>
          <GuaranteeSeal/>
        </Reveal>
        <Reveal delay={0.4} className="hero__proof">
          <span className="hero__proof-item"><span className="hero__proof-icon"><BoltIcon size={16} color="#7C3AED"/></span><strong>Two Income Tracks</strong> — pick digital products or service sales</span>
          <span className="hero__proof-item"><span className="hero__proof-icon"><CalendarIcon size={16} color="#7C3AED"/></span><strong>30-Day Roadmap</strong> — day-by-day actions</span>
          <span className="hero__proof-item"><span className="hero__proof-icon"><FreeIcon size={16} color="#7C3AED"/></span><strong>Zero Startup Cost</strong> — free AI tools</span>
        </Reveal>
      </div>
    </section>
  )
}

function Logowall(){
  const logos=[{name:'ChatGPT',src:'/tool-logos/chatgpt.svg'},{name:'Claude',src:'/tool-logos/claude.svg'},{name:'ElevenLabs',src:'/tool-logos/elevenlabs.svg'},{name:'CapCut',src:'/tool-logos/capcut.svg'},{name:'Gumroad',src:'/tool-logos/gumroad.svg'},{name:'Canva',src:'/tool-logos/canva.svg'},{name:'TikTok',src:'/tool-logos/tiktok.svg'},{name:'Instagram',src:'/tool-logos/instagram.svg'},{name:'Kling AI',src:'/tool-logos/kling.svg'},{name:'Google Flow',src:'/tool-logos/google.svg'}]
  const items=[...logos,...logos]
  return (
    <div className="logowall"><div className="logowall__label">Tools covered inside the blueprint</div><div className="logowall__track">{items.map((t,i)=><div className="logowall__item" key={i}><img src={t.src} alt={t.name} width={28} height={28}/><span>{t.name}</span></div>)}</div></div>
  )
}

const SPOTLIGHT_VIDEO='https://d8j0ntlcm91z4.cloudfront.net/user_3F6NuQ25OFHTqLKUwjR9KKmBRi4/hf_20260804_115410_a02fdcb2-9596-42ff-abdb-d7e00b4b1d5e.mp4'
const SPOTLIGHT_POSTER='https://cdn.higgsfield.ai/marketing_studio_avatar/8c8e0717-70c1-46a5-b67f-4581637ff1fc.webp'
function Spotlight(){
  const [muted,setMuted]=useState(true)
  const [visible,setVisible]=useState(false)
  const videoRef=useRef<HTMLVideoElement>(null)
  const sectionRef=useRef<HTMLElement>(null)
  useEffect(()=>{
    const el=sectionRef.current; const vid=videoRef.current; if(!el||!vid) return
    const observer=new IntersectionObserver(([entry])=>{ if(entry.isIntersecting){setVisible(true); vid.play().catch(()=>{})} else setVisible(false)},{threshold:0.4})
    observer.observe(el); return()=>observer.disconnect()
  },[])
  const handleMuteToggle=useCallback(()=>{ const vid=videoRef.current; if(!vid) return; vid.muted=!vid.muted; setMuted(vid.muted); if(!vid.muted && vid.paused) vid.play().catch(()=>{})},[])
  return (
    <section className="spotlight section" ref={sectionRef}>
      <div className="container spotlight__grid">
        <div className="spotlight__copy">
          <Reveal><div className="eyebrow">SPOTLIGHT</div></Reveal>
          <Reveal><h2 className="h2">She left with $43 & two kids.<br/><span style={{color:'var(--purple)'}}>Made $1,100 Month 2.</span></h2></Reveal>
          <Reveal><p>Kaya was a stay-at-home mom with $0 of her own. She didn’t have a camera, a following, or technical skills. She had the Blueprint, a laptop, and about 90 minutes a day. Month 2: $1,100. No face, no ads, no previous experience.</p></Reveal>
          <Reveal><a className="btn btn--primary" href="#lead" onClick={e=>{e.preventDefault(); openModal()}}>Get The Blueprint<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></Reveal>
          <Reveal><figure><blockquote>“I was a stay-at-home mom with $0 of my own. My husband didn’t think I could do it. Month 2 I made $1,100. I have my own account now. That changes everything about how you carry yourself.”</blockquote><figcaption><strong>Kaya M.</strong><StarsRow count={5} size={14} color="#7C3AED"/></figcaption></figure></Reveal>
        </div>
        <Reveal className="spotlight__media">
          <div className="dot-grid spotlight__dots"/>
          <div className="spotlight__phone">
            <video ref={videoRef} muted loop playsInline preload="auto" poster={SPOTLIGHT_POSTER}><source src={SPOTLIGHT_VIDEO} type="video/mp4"/></video>
            {visible && muted && <button className="spotlight__unmute" type="button" onClick={handleMuteToggle} aria-label="Unmute video"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><line x1="23" y1="1" x2="1" y2="23"/></svg><span>Tap to Unmute</span></button>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContentLibrary(){
  const videos=[{url:'https://media.aftermark.ai/usefastlane/video/VYIUybNlruzYQj8lDDd3LTs98k.mp4',label:'Fitness UGC'},{url:'https://media.aftermark.ai/usefastlane/video/gZkCLIHWWR1CIwFVVVHQyKQ.mp4',label:'Product Demo'},{url:'https://media.aftermark.ai/usefastlane/video/i31jJtOotrUxtYOPMMtYhXcOg.mp4',label:'Lifestyle UGC'},{url:'https://media.aftermark.ai/usefastlane/video/ugc-guy-gym.mp4',label:'Gym Content'},{url:'https://media.aftermark.ai/usefastlane/video/YgYoTWarq2a1OdCzneCxbfH6pw.mp4',label:'Beauty UGC'},{url:'https://media.aftermark.ai/usefastlane/video/ugc-concert-girls.mp4',label:'Event UGC'},{url:'https://media.aftermark.ai/usefastlane/video/ugc-girl-walking.mp4',label:'Fashion UGC'},{url:'https://media.aftermark.ai/usefastlane/video/ioKhMdGULeCQLxLfWMbkuumROk.mp4',label:'App Promotion'}]
  return (
    <section className="library section" id="content-library" style={{paddingBottom:0}}>
      <div className="container">
        <Reveal>
          <div className="ugc-banner">
            <div className="ugc-banner__content">
              <div className="ugc-banner__badge"><span className="ugc-banner__dot"/><span>FREE RESOURCE — MOST REQUESTED</span></div>
              <h2 className="ugc-banner__title">300+ AI-powered <span>UGC prompts</span></h2>
              <p className="ugc-banner__sub">For any product or niche. Copy, paste, generate. No experience needed. Fitness, beauty, fashion, tech, food, lifestyle — organized and ready to use.</p>
              <ul className="ugc-banner__bullets">
                <li><CheckIcon size={14} color="#7C3AED"/> ChatGPT + Claude + ElevenLabs compatible</li>
                <li><CheckIcon size={14} color="#7C3AED"/> Organized by product type & niche</li>
                <li><CheckIcon size={14} color="#7C3AED"/> Copy → Paste → Generate in seconds</li>
              </ul>
              <div className="ugc-banner__actions">
                <a className="btn btn--primary" href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}}>Get Instant Access — Free<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
                <span className="ugc-banner__hint">No credit card · Instant download</span>
              </div>
            </div>
            <div className="ugc-banner__art">
              <div className="ugc-cover-stack">
                <div className="ugc-cover ugc-cover--back1"/>
                <div className="ugc-cover ugc-cover--back2"/>
                <div className="ugc-cover ugc-cover--main" style={{padding:0,overflow:'hidden',background:'#0f0f1a'}}>
                  <img src="/ugc-pack-cover.webp" alt="300+ UGC Prompts Pack Cover" width="600" height="900" loading="lazy" decoding="async" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}}/>
                  <div className="ugc-cover__shine"/>
                </div>
                <div className="ugc-float ugc-float--1">300+ Prompts</div>
                <div className="ugc-float ugc-float--2">FREE DOWNLOAD</div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="library__head" style={{marginTop:56}}><Reveal><div className="eyebrow">CONTENT LIBRARY</div></Reveal><Reveal><p>Every prompt you need to create viral UGC content for any product or niche — preview the styles inside the pack:</p></Reveal><Reveal><p style={{fontSize:13,marginTop:12,lineHeight:1.6}}><a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} style={{color:'var(--purple)',fontWeight:600,textDecoration:'underline',textUnderlineOffset:3}}>These 8 are real examples</a> <span style={{color:'var(--muted)'}}>— the exact kind of videos you’ll generate when you use the <a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} style={{color:'var(--purple)',fontWeight:600,textDecoration:'underline',textUnderlineOffset:3}}>300+ prompt vault</a> on our free platform stack (ChatGPT + Kling / CapCut). → Get the full vault free</span></p></Reveal></div>
        <div className="library-grid">{videos.map((v,i)=><Reveal key={i} delay={i*0.06}><a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} className="video-card" style={{cursor:'pointer',display:'block'}} title="Generated with the 300+ prompt vault — click to get the vault free"><video autoPlay muted loop playsInline preload="metadata" poster=""><source src={v.url} type="video/mp4"/></video><div className="video-card__head"><span className="video-card__name">{v.label}</span></div><span style={{position:'absolute',top:10,right:10,zIndex:3,background:'rgba(124,58,237,0.92)',color:'#fff',fontSize:10,fontWeight:700,letterSpacing:'0.06em',padding:'3px 8px',borderRadius:999}}>VAULT EXAMPLE</span></a></Reveal>)}</div>
        <Reveal><div style={{textAlign:'center',marginTop:32,marginBottom:40}}><a className="btn btn--primary" href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}}>Get All 300+ Prompts — Free<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></div></Reveal>
      </div>
    </section>
  )
}

function HowItWorks(){
  const steps=[{num:'01',title:'Learn the System',desc:'Watch the core training modules. Learn the exact AI tools and prompts used to generate income. No fluff — just what works.'},{num:'02',title:'Pick Your Track',desc:'Choose between Track A (autonomous digital product sales) or Track B (fast client cash flow). The diagnostic takes 12 minutes.'},{num:'03',title:'Execute the System',desc:'Follow the day-by-day action plan with included playbooks, prompt vault, and execution templates. Your first dollar target: within 30 days.'},{num:'04',title:'Scale Your Income',desc:'Once the first dollar lands, follow the scale playbook to go from $500 to $2,000/month without doubling your workload.'}]
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <Reveal><h2 className="h2 how__title">How it works</h2></Reveal>
        <div className="how__grid">
          <div className="how__steps">{steps.map((s,i)=><Reveal key={i} delay={i*0.1}><div className="how-step"><span className="how-step__num">{s.num}</span><h3 className="how-step__title">{s.title}</h3><p>{s.desc}</p></div></Reveal>)}</div>
          <Reveal delay={0.2}><div style={{display:'flex',flexDirection:'column',gap:20,alignItems:'center',position:'sticky',top:100}}><div className="spotlight__phone" style={{width:280,transform:'scale(0.95)'}}><video autoPlay muted loop playsInline preload="metadata"><source src="https://media.aftermark.ai/usefastlane/video/ioKhMdGULeCQLxLfWMbkuumROk.mp4" type="video/mp4"/></video></div><p style={{fontSize:13,color:'var(--muted)',textAlign:'center',maxWidth:260}}>Real UGC generated from Blueprint prompts</p></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Tracks(){
  const tracks=[{icon:<GearIcon size={28} color="#7C3AED"/>,name:'Track A — Autonomous Sales',desc:'Build a digital product. Set up a faceless content funnel on TikTok or Reels. Let it drive traffic and collect sales on autopilot. Wake up to Gumroad notifications.',fit:'People who want income that doesn’t trade hours for dollars. No client calls. No networking. Introverts thrive here.',steps:[{label:'Week 1',text:'Build your product using AI in under 90 minutes'},{label:'Week 2',text:'Set up storefront + launch your content system'},{label:'Week 3',text:'First sale'},{label:'Week 4',text:'Identify winner, double down'}]},{icon:<BriefcaseIcon size={28} color="#7C3AED"/>,name:'Track B — Service Sales',desc:'Use AI to deliver professional services — content, copywriting, automation — to businesses that need them. Charge human rates. Deliver in hours with AI.',fit:'People who want fast cash flow and don’t mind a short client conversation. No portfolio, no agency, no prior work needed.',steps:[{label:'Day 1–3',text:'Craft your offer + build outreach system'},{label:'Day 4–7',text:'Send first 50 targeted outreach messages'},{label:'Day 8–11',text:'First client conversation'},{label:'Day 11+',text:'First paid delivery'}]}]
  return (
    <section className="tracks section" id="tracks">
      <div className="container">
        <div className="tracks__head"><Reveal><div className="eyebrow">PICK YOUR PATH</div></Reveal><Reveal><h2 className="h2">Two tracks. One blueprint.<br/><span style={{color:'var(--purple)'}}>Both lead to money.</span></h2></Reveal><Reveal><p style={{color:'var(--body)',fontSize:16,marginTop:14}}>You choose your income model in Module 1. Pick what fits your life — not someone else’s.</p></Reveal></div>
        <div className="track-grid">{tracks.map((track,i)=><Reveal key={i} delay={i*0.12}><div className="track-card"><span className="track-icon">{track.icon}</span><p className="track-name">{track.name}</p><p className="track-desc">{track.desc}</p><p className="track-for">Best for</p><p className="track-fit">{track.fit}</p><div className="track-steps">{track.steps.map((s,j)=><div className="track-step" key={j}><div className="step-dot"/><div><span className="step-label">{s.label}</span>{s.text}</div></div>)}</div></div></Reveal>)}</div>
      </div>
    </section>
  )
}

function Modules(){
  const modules=[{num:'01',tag:'Foundation',title:'Pick Your Lane',desc:'A fast diagnostic to place you in the right track based on your time, goals, and resources. You’ll know your exact next move before leaving Module 1.'},{num:'02',tag:'Tools',title:'The Only Stack You Need',desc:'Free tools to start. Paid upgrades only when income is flowing. No expensive subscriptions upfront — zero wasted hours figuring out platforms that don’t matter.',bullets:['Free vs paid breakdown by track','Full setup walkthrough in under 60 min','What to ignore (saves you weeks)']},{num:'03',tag:'Income',title:'Your First $500 Roadmap',desc:'Day-by-day. Real targets. Real timelines. Backed by data from 1,400+ students. No motivational padding — just the map from zero to your first five hundred dollars.',bullets:['Daily action items, not just weekly goals','Track A avg: first sale in 19–24 days','Track B avg: first client in 7–11 days']},{num:'04',tag:'Playbooks',title:'Four Execution Playbooks',desc:'Each playbook solves one specific bottleneck with templates, scripts, and data-backed timelines. Scenario-specific — pull out whichever one you need, when you need it.'},{num:'05',tag:'Scale',title:'$500 → $2,000/Month',desc:'Once the first dollar lands, this module shows you how to turn it into a repeatable system — raising prices, adding volume, and stacking a second income stream without doubling your workload. This is where a side hustle becomes an actual business.',wide:true}]
  return (
    <section className="modules section" id="modules">
      <div className="container">
        <div className="modules__head"><Reveal><div className="eyebrow">INSIDE THE BLUEPRINT</div></Reveal><Reveal><h2 className="h2">Everything you need.<br/><span style={{color:'var(--purple-soft)'}}>Nothing you don’t.</span></h2></Reveal><Reveal><p style={{fontSize:16,marginTop:14}}>Five focused modules. Four battle-tested playbooks. Every piece built around the fastest path to your first dollar.</p></Reveal></div>
        <div className="mod-grid">{modules.map((mod:any,i:number)=><Reveal key={i} delay={i*0.08} className={`mod-card${mod.wide?' mod-wide':''}`}><span className="mod-num">{mod.num}</span><span className="mod-tag">{mod.tag}</span><h3>{mod.title}</h3><p>{mod.desc}</p>{mod.bullets && <ul className="mod-bullets">{mod.bullets.map((b:string,j:number)=><li key={j}><span className="check-svg"><CheckIcon size={14} color="#A78BFA"/></span>{b}</li>)}</ul>}</Reveal>)}
          <Reveal className="mod-bonus" delay={0.3}><div><span className="bonus-badge">Bonus Included</span><h3>The Prompt Vault — 50 Ready-to-Use AI Prompts</h3><p>Copy. Paste. Produce. 50 prompts for client outreach, content creation, service delivery, and product building. Students consistently call this the most-used single asset in the entire blueprint.</p></div><div className="bonus-aside"><span className="bonus-was">Value: $49</span><span className="bonus-free">FREE</span></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function PeekInside(){
  const screens=[
    {label:'Foundation — Pick Your Lane',caption:'Track comparison & diagnostic — choose your income path in 12 minutes.',img:'/peek/foundation.webp'},
    {label:'Execution Roadmap — 30-Day Plan',caption:'Day-by-day action map from zero to your first $500.',img:'/peek/exec.webp'},
    {label:'Prompt Vault — 50 Ready-to-Use Prompts',caption:'Copy, paste, generate — for outreach, content & delivery.',img:'/peek/vault.webp'},
  ]
  const wrapRef=useRef<HTMLDivElement>(null)
  const isDown=useRef(false); const startX=useRef(0); const scrollLeft=useRef(0)
  const onDown=(e:React.MouseEvent)=>{ if(!wrapRef.current) return; isDown.current=true; wrapRef.current.classList.add('is-dragging'); startX.current=e.pageX - wrapRef.current.offsetLeft; scrollLeft.current=wrapRef.current.scrollLeft }
  const onLeave=()=>{ isDown.current=false; wrapRef.current?.classList.remove('is-dragging')}
  const onUp=()=>{ isDown.current=false; wrapRef.current?.classList.remove('is-dragging')}
  const onMove=(e:React.MouseEvent)=>{ if(!isDown.current || !wrapRef.current) return; e.preventDefault(); const x=e.pageX - wrapRef.current.offsetLeft; const walk=(x - startX.current)*1.2; wrapRef.current.scrollLeft=scrollLeft.current - walk }
  return (
    <section className="peek section" id="peek-inside" style={{overflow:'hidden'}}>
      <div className="container">
        <div className="peek__head"><Reveal><div className="eyebrow">PEEK INSIDE</div></Reveal><Reveal><h2 className="h2">See exactly what you’re getting.<br/><span style={{color:'var(--purple)'}}>Before you buy.</span></h2></Reveal><Reveal><p style={{color:'var(--body)',fontSize:16,maxWidth:560,margin:'14px auto 0'}}>Real screenshots from the Blueprint. Scroll horizontally →</p></Reveal></div>
      </div>
      <div className="peek-track-wrap" ref={wrapRef} onMouseDown={onDown} onMouseLeave={onLeave} onMouseUp={onUp} onMouseMove={onMove}>
        <div className="peek-track">
          {screens.map((s,i)=>(
            <div key={i} className="peek-slide">
              <div className="peek-slide__imgWrap">
                <img src={s.img} alt={s.label} width="640" height="360" loading="lazy" decoding="async" draggable={false}/>
                <span className="peek-slide__badge">{s.label}</span>
              </div>
              <div className="peek-slide__body"><p className="peek-slide__caption">{s.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Reveal><div className="peek__cta"><p className="peek__cta-label">Everything above is inside the Blueprint — one $97 payment, lifetime access.</p><a className="btn btn--primary" href="#lead" onClick={e=>{e.preventDefault(); openModal()}}>Get Instant Access — $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></div></Reveal>
      </div>
    </section>
  )
}

function Playbooks(){
  const playbooks=[{letter:'A',title:'Land Your First Service Client in 7 Days',desc:'Outreach message templates, positioning framework, a 3-step follow-up sequence, and the exact platforms to find clients who are already looking.',time:'First reply in 72 hours'},{letter:'B',title:'Launch Your Digital Product in 5 Days',desc:'Blank page to live storefront. Includes the exact product creation prompt, Gumroad setup checklist, and your first promotional post written and scheduled.',time:'Live and selling in 5 days'},{letter:'C',title:'Build Your Faceless Content Funnel',desc:'TikTok and Reels storytelling strategy that converts viewers into buyers — without showing your face, running ads, or having any existing audience.',time:'First content posted within 48 hours'},{letter:'D',title:'Scale from $500 to $2,000/Month',desc:'The exact lever sequence to increase volume, raise prices, and add a second income stream — without proportionally increasing the time you spend.',time:'$2K/mo by month 3'}]
  return (
    <section className="playbooks section" id="playbooks">
      <div className="container">
        <div className="playbooks__head"><Reveal><div className="eyebrow">THE FOUR PLAYBOOKS</div></Reveal><Reveal><h2 className="h2">Every bottleneck.<br/><span style={{color:'var(--purple)'}}>Already solved.</span></h2></Reveal><Reveal><p>These aren’t general guides. Each playbook targets one specific obstacle with templates, scripts, and timelines that have been stress-tested by real students.</p></Reveal></div>
        <div className="pb-grid">{playbooks.map((pb,i)=><Reveal key={i} delay={i*0.1}><div className="pb-card"><span className="pb-letter">{pb.letter}</span><div><h4>{pb.title}</h4><p>{pb.desc}</p><span className="pb-time"><ClockIcon size={12} color="#4D9364"/>Avg: {pb.time}</span></div></div></Reveal>)}</div>
      </div>
    </section>
  )
}

function WallOfProofNew(){
  return (
    <section className="wall section" id="testimonials">
      <div className="container" style={{maxWidth:780}}>
        <div className="wall__head"><Reveal><div className="eyebrow">REAL RESULTS. REAL PEOPLE.</div></Reveal><Reveal><h2 className="h2">They started exactly<br/><span style={{color:'var(--purple-soft)'}}>where you are right now.</span></h2></Reveal><Reveal><p>No influencers. No paid actors. Just 1,400+ people who followed the blueprint and made it work.</p></Reveal></div>
        <div className="testimonial-masonry" style={{gridTemplateColumns:'1fr', gap:16}}>
          <Reveal><TestimonialCard variant="story" quote="I was a stay-at-home mom with $0 of my own. My husband didn’t think I could do it. Month 2 I made $1,100. I have my own account now. That changes everything about how you carry yourself." name="Amara M." handle="Stay-at-home mom → Track A" amount="$1,100" per="/ Month 2"/></Reveal>
          <div className="testi-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <Reveal><TestimonialCard variant="punchy" quote="I applied to 47 jobs. 2 callbacks. 0 offers. First client in 11 days." name="Kevin O."/></Reveal>
            <Reveal><TestimonialCard variant="punchy" quote="I made my first $40 on day 22. It does not sound like much, but it changed how I see myself. I am not stuck anymore." name="Jamie T."/></Reveal>
          </div>
          <div className="testi-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <Reveal><TestimonialCard variant="story" quote="I’ve bought 3 courses before this. All garbage. This one had me making $200 in week 2. It’s the only one that gives you actual steps, not motivation." name="Tolu W." handle="3 failed courses → first $200 in week 2" tag="Track B"/></Reveal>
            <Reveal><TestimonialCard variant="story" quote="I made $240 in my second week — small but proof it works. Then $900 the next month." name="Sofia R." handle="Student → $240 week 2" tag="Modest win"/></Reveal>
          </div>
          <Reveal><TestimonialCard variant="story" quote="Ran both tracks at once. Track B gave me fast cash. Track A built passive income in the background. Month 3 they were both producing. $2,300 and still at my day job." name="Emeka O." handle="Both tracks simultaneously" amount="$2,300" per="/ Month 3"/></Reveal>
          <div className="testi-row" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <Reveal><TestimonialCard variant="story" quote="The Prompt Vault alone is worth more than $97. I used 4 prompts in week 1 to deliver a client project that paid me $600. I hadn’t even finished the guide." name="Rachel L." handle="Graphic designer → added AI services" tag="Prompt Vault"/></Reveal>
            <Reveal><TestimonialCard variant="story" quote="Single mum. No time to waste. Most practical guide I’ve ever read. No filler. Just: do this, then this, then this. $350 in 3 weeks following it exactly." name="Lena H." handle="Single mum · $350 in 3 weeks"/></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadMagnetGate(){
  return (
    <section className="lead-magnet-section section" id="lead-magnet">
      <div className="container">
        <div className="lead-magnet-card">
          <Reveal><h2>Not Ready for the Full Blueprint Yet? Start Here.</h2></Reveal>
          <Reveal><p>Download 300+ AI-powered UGC prompts for any product or niche. Copy, paste, generate. No experience needed. Free.</p></Reveal>
          <Reveal><LeadMagnetForm/></Reveal>
        </div>
      </div>
    </section>
  )
}

function PricingSection(){
  const items=[{name:'zerotopaidwithai — Full 5-module system',val:'$147 value'},{name:'Track A — Autonomous digital sales system',val:'$97 value'},{name:'Track B — Service client acquisition system',val:'$97 value'},{name:'Playbook A — First client in 7 days',val:'$47 value'},{name:'Playbook B — First product live in 5 days',val:'$47 value'},{name:'Playbook C — Faceless content funnel',val:'$47 value'},{name:'Playbook D — Scale to $2,000/month',val:'$47 value'},{name:'Prompt Vault — 50 AI prompts (Bonus)',val:'$49 value'},{name:'Lifetime updates — Free as AI evolves',val:'Priceless'}]
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__head"><Reveal><div className="eyebrow">ONE DECISION</div></Reveal><Reveal><h2 className="h2">Everything included.<br/><span style={{color:'var(--purple)'}}>One flat price.</span></h2></Reveal><Reveal><p>No monthly fees. No hidden upsells. No nonsense. One payment — lifetime access.</p></Reveal></div>
        <UrgencyBanner/>
        <Reveal>
          <div className="price-card">
            <div className="price-top">
              <p className="price-eyebrow">zerotopaidwithai — Full Access</p>
              <span className="price-was">Regular price: $197</span>
              <div className="price-amount"><sup>$</sup>97</div>
              <p className="price-period">One-time · Yours forever · Instant access</p>
              <span className="price-save">Founding Member Price — Save $100</span>
            </div>
            <div className="price-stack">
              <p className="price-stack-title">What’s included — and what it’s worth</p>
              <ul className="price-items">{items.map((item,i)=><li className="price-item" key={i}><span className="price-item-name"><span className="check-svg"><CheckIcon size={14} color="#A78BFA"/></span><strong>{item.name.split(' — ')[0]}</strong>{item.name.includes(' — ') && <> — {item.name.split(' — ').slice(1).join(' — ')}</>}</span><span className="price-item-val">{item.val}</span></li>)}</ul>
              <div className="price-total"><span className="price-total-label">Total value</span><span className="price-total-val">$578</span></div>
            </div>
            <div className="price-cta-wrap">
              <a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:36,fontSize:16,height:48}}>Yes — Give Me Instant Access<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
              <GuaranteeSeal/>
              <div className="price-guar"><span className="price-guar-icon"><ShieldIcon size={24} color="#4D9364"/></span><p><strong>30-Day Money-Back Guarantee.</strong> Go through the entire blueprint. If you do not see a clear, actionable path to your first sale, email us once and get every cent back. No questions. No hoops. No waiting.</p></div>
              <div className="price-trust"><span className="trust-item"><span className="trust-icon"><LockIcon size={14}/></span>Secure checkout</span><span className="trust-item"><span className="trust-icon"><BoltIcon size={14} color="#8F8A86"/></span>Instant delivery</span><span className="trust-item"><span className="trust-icon"><MailIcon size={14}/></span>Email support</span><span className="trust-item"><span className="trust-icon"><InfinityIcon size={14}/></span>Lifetime access</span></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FaqSection(){
  return (
    <section className="faq section" id="faq">
      <div className="container"><div className="faq__head"><Reveal><div className="eyebrow">REAL QUESTIONS</div></Reveal><Reveal><h2 className="h2">Honest answers.<br/><span style={{color:'var(--purple-soft)'}}>No pitch.</span></h2></Reveal></div><Reveal><FaqAccordion/></Reveal></div>
    </section>
  )
}

function FinalCtaSection(){
  return (
    <section className="finale section" id="cta">
      <div className="container" style={{maxWidth:700}}>
        <Reveal><h2>You do not need another idea.<em>You need a sequence.</em></h2></Reveal>
        <Reveal><div className="finale-divider"/></Reveal>
        <Reveal><p className="finale-p">Kaya started with $43 and two kids. She followed the system. Month 2: $1,100.<strong> Start with the blueprint, keep it if it makes the next step obvious.</strong></p></Reveal>
        <Reveal><div className="finale-story">Inside: the track picker, the 30-day action map, four execution playbooks, and the 50-prompt vault for product creation, outreach, content, and delivery.</div></Reveal>
        <Reveal className="finale-action"><a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:36,fontSize:17,height:48}}>Get The Blueprint — $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a><span style={{fontSize:13,color:'var(--muted)'}}>One-time payment · Instant access · <strong style={{color:'var(--ink-soft)'}}>30-day guarantee</strong></span><GuaranteeSeal/></Reveal>
      </div>
    </section>
  )
}

function FooterSection(){
  return (
    <footer className="footer">
      <p style={{fontSize:16,fontWeight:600,letterSpacing:'-0.02em',fontFamily:'var(--font-display)'}}>zerotopaidwithai</p>
      <div className="footer__links"><a href="#pricing">Pricing</a><a href="#testimonials">Results</a><a href="#faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:support@zerotopaidwithai.com">Contact</a></div>
      <p style={{fontSize:13,opacity:0.6,marginTop:16}}>© 2026 zerotopaidwithai. All rights reserved.</p>
      <p className="footer-disc">Earnings disclaimer: Results shown are real but not typical and are not a guarantee of future income. Individual results depend entirely on effort, consistency, and market conditions. This is not a get-rich-quick scheme — it is a business education product requiring real work.</p>
    </footer>
  )
}
