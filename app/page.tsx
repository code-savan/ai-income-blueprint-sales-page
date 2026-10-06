'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Reveal from '@/components/Reveal'
import HeroVSL from '@/components/VSLPlayer'
import StickyBar from '@/components/StickyBar'
import FaqAccordion from '@/components/FaqAccordion'
import LeadMagnetForm from '@/components/LeadMagnetForm'
import Image from 'next/image'
import LoopPreview from '@/components/LoopPreview'
import GuaranteeSeal from '@/components/GuaranteeSeal'
import { CheckIcon, ArrowRight, BoltIcon, CalendarIcon, FreeIcon, ShieldIcon, LockIcon, MailIcon, InfinityIcon, ClockIcon, GearIcon, BriefcaseIcon } from '@/components/Icons'

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"zerotopaidwithai","description":"A practical AI-assisted service or product guide with ten playbooks, ten service choices, ten product ideas, worked examples, 50 action prompts and saved tasks.","brand":{"@type":"Brand","name":"zerotopaidwithai"},"offers":{"@type":"Offer","price":"97","priceCurrency":"USD","availability":"https://schema.org/InStock","url":"https://zerotopaidwithai.com/"}})}}/>
      <Nav/>
      <StickyBar hidden={modalOpen}/>
      <main id="main">
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
      </main>
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
        <Reveal eager delay={0}><a className="hero-announce" href="#peek-inside"><span className="hero-announce__badge">UPDATED</span><span>10 playbooks. 20 starting ideas. One next task.</span></a></Reveal>
        <Reveal eager delay={0.08} className="hero-media"><HeroVSL/></Reveal>
        <Reveal eager delay={0.16}>
          <h1 className="h1 hero__title">Choose One AI-Assisted Offer. Follow the Steps to Sell It.</h1>
        </Reveal>
        <Reveal eager delay={0.20}><p className="kaya-story">Pick one path. Build one useful offer. Follow the next action.</p></Reveal>
        <Reveal eager delay={0.24}>
          <p className="hero__sub">Choose a service or product track. Pick from ten services or ten product ideas, then follow written steps to research, make, check and show your work. <strong>Ten playbooks. Fifty action prompts. Free-tool starting paths.</strong></p>
          <p style={{fontSize:13,color:'var(--muted)',marginTop:8}}>By <strong style={{color:'var(--ink)'}}>zerotopaidwithai</strong>, built for practical execution</p>
        </Reveal>
        <Reveal eager delay={0.32} className="hero__action">
          <a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:32,height:48,fontSize:16}}>Get The Blueprint: $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
          <span style={{fontSize:13,color:'var(--muted)',marginTop:4}}>One-time $97 · Instant access · <strong style={{color:'var(--ink-soft)'}}>30-Day Money-Back Guarantee</strong></span>
          <GuaranteeSeal/>
        </Reveal>
        <Reveal eager delay={0.4} className="hero__proof">
          <span className="hero__proof-item"><span className="hero__proof-icon"><BoltIcon size={16} color="#7C3AED"/></span><strong>Two Income Tracks</strong>: pick digital products or service sales</span>
          <span className="hero__proof-item"><span className="hero__proof-icon"><CalendarIcon size={16} color="#7C3AED"/></span><strong>One Next Task</strong>: linked to the matching guide</span>
          <span className="hero__proof-item"><span className="hero__proof-icon"><FreeIcon size={16} color="#7C3AED"/></span><strong>Free-First Tools</strong>: optional paid upgrades explained</span>
        </Reveal>
      </div>
    </section>
  )
}

function Logowall(){
  const logos=[{name:'ChatGPT',src:'/tool-logos/chatgpt.svg'},{name:'Claude',src:'/tool-logos/claude.svg'},{name:'Manus',src:'/tool-logos/manus.png'},{name:'CapCut',src:'/tool-logos/capcut.svg'},{name:'Gumroad',src:'/tool-logos/gumroad.svg'},{name:'Canva',src:'/tool-logos/canva.svg'},{name:'TikTok',src:'/tool-logos/tiktok.svg'},{name:'Instagram',src:'/tool-logos/instagram.svg'},{name:'Z.ai / GLM',src:'/tool-logos/zai.png'},{name:'Google Flow',src:'/tool-logos/google.svg'}]
  const items=[...logos,...logos]
  return (
    <div className="logowall"><div className="logowall__label">Tools and platforms used in the guides</div><div className="logowall__track">{items.map((t,i)=><div className="logowall__item" key={i}><Image src={t.src} alt={t.name} width={28} height={28} sizes="28px"/><span>{t.name}</span></div>)}</div></div>
  )
}

const SPOTLIGHT_VIDEO='https://d8j0ntlcm91z4.cloudfront.net/user_3F6NuQ25OFHTqLKUwjR9KKmBRi4/hf_20260906_133815_8dcf6286-cb17-44cc-b976-fd94ce247e45.mp4'
const SPOTLIGHT_POSTER='/spotlight-poster.jpg'
function Spotlight(){
  const [muted,setMuted]=useState(true)
  const [visible,setVisible]=useState(false)
  const [loaded,setLoaded]=useState(false)
  const videoRef=useRef<HTMLVideoElement>(null)
  const sectionRef=useRef<HTMLElement>(null)
  useEffect(()=>{
    const el=sectionRef.current; const vid=videoRef.current; if(!el||!vid) return
    const observer=new IntersectionObserver(([entry])=>{ if(entry.isIntersecting){setLoaded(true); setVisible(true)} else {vid.pause(); setVisible(false)}},{threshold:0.4})
    observer.observe(el); return()=>observer.disconnect()
  },[])
  useEffect(()=>{ const vid=videoRef.current; if(visible && vid && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) vid.play().catch(()=>{}) },[visible])
  const handleMuteToggle=useCallback(()=>{ const vid=videoRef.current; if(!vid) return; vid.muted=!vid.muted; setMuted(vid.muted); if(!vid.muted && vid.paused) vid.play().catch(()=>{})},[])
  return (
    <section className="spotlight section" ref={sectionRef}>
      <div className="container spotlight__grid">
        <div className="spotlight__copy">
          <Reveal><div className="eyebrow">SEE THE WORKFLOW</div></Reveal>
          <Reveal><h2 className="h2">From a clear prompt<br/><span style={{color:'var(--purple)'}}>to usable content.</span></h2></Reveal>
          <Reveal><p>The content guides help you plan a script, choose footage, edit a first version and check its claims. This AI-generated clip shows one visual format. Product demonstrations use real item footage.</p></Reveal>
          <Reveal><a className="btn btn--primary" href="#lead" onClick={e=>{e.preventDefault(); openModal()}}>Get The Blueprint<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></Reveal>
          <Reveal><figure><blockquote>Start with a clear brief. Build the first version. Check every claim. Package the finished result.</blockquote><figcaption><strong>The Blueprint workflow</strong></figcaption></figure></Reveal>
        </div>
        <Reveal className="spotlight__media">
          <div className="dot-grid spotlight__dots"/>
          <div className="spotlight__phone">
            <video ref={videoRef} muted loop playsInline preload="none" poster={SPOTLIGHT_POSTER} onClick={handleMuteToggle} style={{ cursor: 'pointer' }} src={loaded ? SPOTLIGHT_VIDEO : undefined}/>
            {visible && (muted
              ? <button className="spotlight__unmute" type="button" onClick={handleMuteToggle} aria-label="Unmute video"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><line x1="23" y1="1" x2="1" y2="23"/></svg><span>Tap to Unmute</span></button>
              : <button className="spotlight__mute" type="button" onClick={handleMuteToggle} aria-label="Mute video"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg><span>Tap to Mute</span></button>
            )}
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
              <div className="ugc-banner__badge"><span className="ugc-banner__dot"/><span>FREE RESOURCE: 300 REFERENCE PROMPTS</span></div>
              <h2 className="ugc-banner__title">300 AI prompts. <span>Organized by task.</span></h2>
              <p className="ugc-banner__sub">A 77-page reference PDF for outreach, content, product ideas, delivery, copy and more. Pick a task, replace the brackets and review the result.</p>
              <ul className="ugc-banner__bullets">
                <li><CheckIcon size={14} color="#7C3AED"/> Writing prompts for ChatGPT, Claude or Gemini</li>
                <li><CheckIcon size={14} color="#7C3AED"/> 10 categories, 30 prompts per category</li>
                <li><CheckIcon size={14} color="#7C3AED"/> Includes outreach, UGC, copy and landing pages</li>
              </ul>
              <div className="ugc-banner__actions">
                <a className="btn btn--primary" href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}}>Get Instant Access: Free<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
                <span className="ugc-banner__hint">No credit card · Instant download</span>
              </div>
            </div>
            <div className="ugc-banner__art">
              <div className="ugc-cover-stack">
                <div className="ugc-cover ugc-cover--back1"/>
                <div className="ugc-cover ugc-cover--back2"/>
                <div className="ugc-cover ugc-cover--main" style={{padding:0,overflow:'hidden',background:'#0f0f1a'}}>
                  <Image src="/peek/2026-10/free-vault-cover.webp" alt="Cover of the free 300 AI prompts reference PDF" width={636} height={900} sizes="(max-width: 600px) 64vw, 240px" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}}/>
                  <div className="ugc-cover__shine"/>
                </div>
                <div className="ugc-float ugc-float--1">300 Prompts</div>
                <div className="ugc-float ugc-float--2">FREE DOWNLOAD</div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="library__head" style={{marginTop:56}}><Reveal><div className="eyebrow">CONTENT LIBRARY</div></Reveal><Reveal><p>UGC is one category in the free reference PDF. These clips illustrate possible video formats, not buyer results or included production services:</p></Reveal><Reveal><p style={{fontSize:13,marginTop:12,lineHeight:1.6}}><a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} style={{color:'var(--purple)',fontWeight:600,textDecoration:'underline',textUnderlineOffset:3}}>These 8 are example formats</a> <span style={{color:'var(--muted)'}}>, for planning product and content videos. Explore the <a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} style={{color:'var(--purple)',fontWeight:600,textDecoration:'underline',textUnderlineOffset:3}}>300-prompt reference vault</a>. Get the full vault free.</span></p></Reveal></div>
        <div className="library-grid">{videos.map((v,i)=><Reveal key={i} delay={i*0.06}><a href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}} className="video-card" style={{cursor:'pointer',display:'block'}} title="Illustrative AI video format. Open the free prompt vault"><LoopPreview src={v.url} label={v.label} poster={`/peek/2026-10/demo-${i+1}.webp`}/><div className="video-card__head"><span className="video-card__name">{v.label}</span></div><span style={{position:'absolute',top:10,right:10,zIndex:3,background:'rgba(124,58,237,0.92)',color:'#fff',fontSize:10,fontWeight:700,letterSpacing:'0.06em',padding:'3px 8px',borderRadius:999}}>AI VIDEO FORMAT</span></a></Reveal>)}</div>
        <Reveal><div style={{textAlign:'center',marginTop:32,marginBottom:40}}><a className="btn btn--primary" href="#lead-magnet" onClick={e=>{e.preventDefault(); document.getElementById('lead-magnet')?.scrollIntoView({behavior:'smooth'})}}>Get All 300 Prompts: Free<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></div></Reveal>
      </div>
    </section>
  )
}

function HowItWorks(){
  const steps=[
    {num:'01',title:'Get your track',desc:'Answer six questions. Get a suggested service or product track and save your choice.'},
    {num:'02',title:'Choose one offer',desc:'Inspect ten services or ten product ideas. Use the three-question interview, or choose your own offer without filling a form.'},
    {num:'03',title:'Make the first useful output',desc:'Open My next steps. Follow the matching guide, use its prompt and compare your work with the relevant example.'},
    {num:'04',title:'Show it, then improve it',desc:'Research suitable buyers, show checked work and record their response. Use your task list and trackers to decide the next action.'},
  ]
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <Reveal><h2 className="h2 how__title">How it works</h2></Reveal>
        <div className="how__grid">
          <div className="how__steps">{steps.map((s,i)=><Reveal key={i} delay={i*0.1}><div className="how-step"><span className="how-step__num">{s.num}</span><h3 className="how-step__title">{s.title}</h3><p>{s.desc}</p></div></Reveal>)}</div>
          <Reveal delay={0.2}><figure className="how-product-shot"><a href="#peek-inside"><Image src="/peek/2026-10/next-task.webp" alt="The Blueprint sidebar, saved service offer and next unfinished task" width={1348} height={926} quality={90} sizes="(max-width: 820px) 92vw, 520px"/></a><figcaption>Your offer stays visible. The next task opens its matching guide.</figcaption></figure></Reveal>
        </div>
      </div>
    </section>
  )
}

function Tracks(){
  const tracks=[
    {icon:<GearIcon size={28} color="#7C3AED"/>,name:'Track A: Product Sales',desc:'Build a small download, or explore a physical-product affiliate niche after checking eligibility. Seven digital ideas and three affiliate niches give you a starting point.',fit:'People who want to make reusable files or demonstrate a real item, and are willing to test the idea with likely buyers.',steps:[{label:'Choose',text:'Compare ideas, tradeoffs and research notes'},{label:'Make',text:'Build the first task and test the instructions'},{label:'Show',text:'Set up delivery and demonstrate the product'},{label:'Improve',text:'Track questions, costs and paid orders'}]},
    {icon:<BriefcaseIcon size={28} color="#7C3AED"/>,name:'Track B: Service Sales',desc:'Choose from ten services, including websites, copy, design, video editing and research. Learn what to deliver, make a checked sample and find suitable clients.',fit:'People who want to work with clients and are willing to practise delivery, ask questions and agree a clear price and deadline.',steps:[{label:'Choose',text:'Pick a small service and define the files'},{label:'Make',text:'Build a sample using the service recipe'},{label:'Research',text:'Use Instagram, Groups, LinkedIn, Maps or permitted enquiries'},{label:'Deliver',text:'Agree the work, check it and hand it over'}]},
  ]
  return (
    <section className="tracks section" id="tracks">
      <div className="container">
        <div className="tracks__head"><Reveal><div className="eyebrow">PICK YOUR PATH</div></Reveal><Reveal><h2 className="h2">Two tracks. One blueprint.<br/><span style={{color:'var(--purple)'}}>Choose the work you want to try.</span></h2></Reveal><Reveal><p style={{color:'var(--body)',fontSize:16,marginTop:14}}>Start with the quiz, then choose an offer. Change your offer later, or retake the track quiz after confirming the work reset.</p></Reveal></div>
        <div className="track-grid">{tracks.map((track,i)=><Reveal key={i} delay={i*0.12}><div className="track-card"><span className="track-icon">{track.icon}</span><p className="track-name">{track.name}</p><p className="track-desc">{track.desc}</p><p className="track-for">Best for</p><p className="track-fit">{track.fit}</p><div className="track-steps">{track.steps.map((s,j)=><div className="track-step" key={j}><div className="step-dot"/><div><span className="step-label">{s.label}</span>{s.text}</div></div>)}</div></div></Reveal>)}</div>
      </div>
    </section>
  )
}

function Modules(){
  const modules=[
    {num:'01',tag:'Start',title:'A Track and Offer Picker',desc:'Six quiz questions help you choose a starting track. A separate three-question interview suggests offers to inspect. Your chosen offer stays visible.'},
    {num:'02',tag:'Choices',title:'Ten Services. Ten Product Ideas.',desc:'See the buyer, exact output, practice time, pros and cons. Product ideas explain their research and what still needs testing.',bullets:['Websites, copy, design, editing and more','Seven digital ideas and three affiliate niches','Choose your own offer without text entry']},
    {num:'03',tag:'Action',title:'A Clear Next Task',desc:'Your saved task list leads to the matching guide chapter. Work through one action, use the prompt and check the output.',bullets:['Exact actions and quality checks','Examples for the work you chose','Notes and completion saved to your account']},
    {num:'04',tag:'Guides',title:'Ten Connected Playbooks',desc:'Research clients, make a service or product, record demonstrations, create carousels and handle follow-up. Each guide has free and optional paid tool paths.'},
    {num:'05',tag:'Examples & tools',title:'See the Work. Keep Track of Yours.',desc:'Inspect filled service files, product worksheets, a static website starter and a complete freelancer workbook. Compare tool limits and record outreach, content and collected revenue.',wide:true},
  ]
  return (
    <section className="modules section" id="modules">
      <div className="container">
        <div className="modules__head"><Reveal><div className="eyebrow">INSIDE THE BLUEPRINT</div></Reveal><Reveal><h2 className="h2">Everything you need.<br/><span style={{color:'var(--purple-soft)'}}>Nothing you don’t.</span></h2></Reveal><Reveal><p style={{fontSize:16,marginTop:14}}>A written, interactive blueprint. Choose your offer and use the guide for the task in front of you.</p></Reveal></div>
        <div className="mod-grid">{modules.map((mod:any,i:number)=><Reveal key={i} delay={i*0.08} className={`mod-card${mod.wide?' mod-wide':''}`}><span className="mod-num">{mod.num}</span><span className="mod-tag">{mod.tag}</span><h3>{mod.title}</h3><p>{mod.desc}</p>{mod.bullets && <ul className="mod-bullets">{mod.bullets.map((b:string,j:number)=><li key={j}><span className="check-svg"><CheckIcon size={14} color="#A78BFA"/></span>{b}</li>)}</ul>}</Reveal>)}
          <Reveal className="mod-bonus" delay={0.3}><div><span className="bonus-badge">Bonus Included</span><h3>50 Action Prompts, Matched to the Playbooks</h3><p>Five focused prompts per playbook, plus service and channel examples. Replace the brackets, ask about missing facts and check the output. The free 300-prompt reference PDF is a separate resource.</p></div><div className="bonus-aside"><span className="bonus-was">Included</span><span className="bonus-free">FREE</span></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function PeekInside(){
  const screens=[
    {label:'Choose your offer',caption:'A three-question interview suggests work to inspect. Ten choices per track include scope, time and tradeoffs.',img:'/peek/2026-10/offer-choice.webp'},
    {label:'Your next task',caption:'Your selected offer stays visible. Open the exact matching guide, then save the work you finish.',img:'/peek/2026-10/next-task.webp'},
    {label:'Research beyond Maps',caption:'Exact Instagram steps, plus Facebook Groups, LinkedIn, websites and channel-specific research prompts.',img:'/peek/2026-10/client-research.webp'},
    {label:'Make a useful product',caption:'A job-tracker example with filled and blank practice sheets, build steps and a check. Starters need adapting and testing.',img:'/peek/2026-10/product-example.webp'},
    {label:'50 action prompts',caption:'Search by task or filter by playbook. Copy a focused prompt or download the full action pack.',img:'/peek/2026-10/action-prompts.webp'},
  ]
  const wrapRef=useRef<HTMLDivElement>(null)
  const dragged=useRef(false)
  const moveScreen=(direction:number)=>{const wrap=wrapRef.current; if(!wrap)return; const track=wrap.querySelector<HTMLElement>('.peek-track'); const slide=wrap.querySelector<HTMLElement>('.peek-slide'); const gap=track?parseFloat(getComputedStyle(track).gap)||20:20; wrap.scrollBy({left:direction*((slide?.getBoundingClientRect().width||580)+gap),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
  const isDown=useRef(false); const startX=useRef(0); const scrollLeft=useRef(0)
  const onDown=(e:React.MouseEvent)=>{ if(!wrapRef.current) return; isDown.current=true; dragged.current=false; wrapRef.current.classList.add('is-dragging'); startX.current=e.pageX - wrapRef.current.offsetLeft; scrollLeft.current=wrapRef.current.scrollLeft }
  const onLeave=()=>{ isDown.current=false; wrapRef.current?.classList.remove('is-dragging')}
  const onUp=()=>{ isDown.current=false; wrapRef.current?.classList.remove('is-dragging')}
  const onMove=(e:React.MouseEvent)=>{ if(!isDown.current || !wrapRef.current) return; e.preventDefault(); const x=e.pageX - wrapRef.current.offsetLeft; const walk=(x - startX.current)*1.2; if(Math.abs(walk)>5) dragged.current=true; wrapRef.current.scrollLeft=scrollLeft.current - walk }
  return (
    <section className="peek section" id="peek-inside" style={{overflow:'hidden'}}>
      <div className="container">
        <div className="peek__head"><Reveal><div className="eyebrow">PEEK INSIDE</div></Reveal><Reveal><h2 className="h2">See exactly what you’re getting.<br/><span style={{color:'var(--purple)'}}>Before you buy.</span></h2></Reveal><Reveal><p style={{color:'var(--body)',fontSize:16,maxWidth:560,margin:'14px auto 0'}}>Current app screens. Use the arrows or swipe to inspect each one. Open an image to read it at full size.</p></Reveal></div>
      </div>
      <div className="peek-track-wrap" ref={wrapRef} id="product-screens" tabIndex={0} role="region" aria-label="Blueprint screenshots" onMouseDown={onDown} onMouseLeave={onLeave} onMouseUp={onUp} onMouseMove={onMove} onKeyDown={()=>{dragged.current=false}}>
        <div className="peek-track">
          {screens.map((s,i)=>(
            <div key={i} className="peek-slide">
              <div className="peek-slide__imgWrap">
                <a href={s.img} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${s.label}`} onClick={e=>{if(dragged.current)e.preventDefault()}}><Image src={s.img} alt={s.label} width={1348} height={926} quality={90} sizes="(max-width: 700px) 84vw, 580px" draggable={false}/></a>
                              </div>
              <div className="peek-slide__body"><span className="peek-slide__badge">{s.label}</span><p className="peek-slide__caption">{s.caption}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Reveal><div className="peek-controls"><button type="button" className="btn btn--dark" aria-controls="product-screens" onClick={()=>moveScreen(-1)}>← Previous screen</button><button type="button" className="btn btn--dark" aria-controls="product-screens" onClick={()=>moveScreen(1)}>Next screen →</button></div><div className="peek__cta"><a href="https://app.zerotopaidwithai.com/preview" target="_blank" rel="noopener noreferrer" className="product-preview-link">Open the free product preview ↗</a><p className="peek__cta-label">Inspect a free public preview too. One $97 payment gives lifetime Blueprint access.</p><a className="btn btn--primary" href="#lead" onClick={e=>{e.preventDefault(); openModal()}}>Get Instant Access: $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a></div></Reveal>
      </div>
    </section>
  )
}

function Playbooks(){
  const playbooks=[
    {letter:'A',title:'Find and pitch your first service clients',desc:'Choose a service, research suitable businesses across five channels and ask permission to show a checked sample.',time:'Find ten suitable businesses'},
    {letter:'B',title:'Build and test a small product',desc:'Define the buyer’s first task, make the file, test the instructions and set up price and delivery.',time:'Make one useful first task'},
    {letter:'C',title:'Record seven useful demonstration videos',desc:'Write seven scripts, plan real shots, record reusable clips and edit a clear demonstration.',time:'Write the first script and shot list'},
    {letter:'D',title:'Improve the work using real numbers',desc:'Record actions, replies, costs and paid orders. Use the evidence to choose one change to test.',time:'Review what happened'},
    {letter:'E',title:'Make a carousel that teaches one useful step',desc:'Turn a lesson into readable slides with a clear opening, practical middle and one next action.',time:'Outline one useful lesson'},
    {letter:'F',title:'Make and deliver your chosen service',desc:'Use the recipe for websites, copy, design, editing or another service. Check the files before handing them over.',time:'Make the service sample'},
    {letter:'G',title:'Write clear words for your offer',desc:'Explain who the work is for, what they receive, what it costs and how to take the next step.',time:'Write the offer in plain words'},
    {letter:'H',title:'Use AI visuals only where they help',desc:'Plan an optional visual, choose a tool, check costs and avoid changing real product facts.',time:'Decide whether a visual helps'},
    {letter:'I',title:'Help an interested person take the next step',desc:'Answer the actual question, explain the offer, follow up appropriately and record the result.',time:'Answer one buyer question'},
    {letter:'J',title:'Check eligibility and demonstrate an affiliate item',desc:'Check the program, inspect the real item, disclose the relationship and verify links and commissions.',time:'Check program eligibility first'},
  ]
  return (
    <section className="playbooks section" id="playbooks">
      <div className="container">
        <div className="playbooks__head"><Reveal><div className="eyebrow">THE TEN PLAYBOOKS</div></Reveal><Reveal><h2 className="h2">A clear next step<br/><span style={{color:'var(--purple)'}}>for each bottleneck.</span></h2></Reveal><Reveal><p>Use the guides connected to your chosen track. Examples cover the ten services and product ideas. Affiliate and AI-visual guides apply when you need them.</p></Reveal></div>
        <div className="pb-grid">{playbooks.map((pb,i)=><Reveal key={i} delay={i*0.1}><div className="pb-card"><span className="pb-letter">{pb.letter}</span><div><h3>{pb.title}</h3><p>{pb.desc}</p><span className="pb-time"><ClockIcon size={12} color="#4D9364"/>Next: {pb.time}</span></div></div></Reveal>)}</div>
      </div>
    </section>
  )
}

function WallOfProofNew(){
  const proof=[
    {title:'Choose work you understand',body:'Compare ten services or ten product ideas. Inspect what to make, who it helps and the tradeoff before choosing.'},
    {title:'Follow one visible next task',body:'Your saved offer and next unfinished task stay together. The guide opens its relevant chapter in a new tab.'},
    {title:'Compare your work with an example',body:'See sample copy, website HTML, captions, research rows and product worksheets. Fictional practice facts are clearly labeled.'},
    {title:'Keep the work saved',body:'Save task notes and guide checks. Track outreach, content and collected revenue, and export tracker rows when needed.'},
  ]
  return (
    <section className="wall section" id="testimonials">
      <div className="container" style={{maxWidth:780}}>
        <div className="wall__head"><Reveal><div className="eyebrow">PRODUCT PROOF</div></Reveal><Reveal><h2 className="h2">See the system<br/><span style={{color:'var(--purple-soft)'}}>before you decide.</span></h2></Reveal><Reveal><p>Inspect the current interface and the files it helps you make. The examples show the process, with fictional practice details.</p></Reveal></div>
        <div className="product-proof-grid">
          {proof.map((item,i)=><Reveal key={item.title} delay={i*0.06}><div className="mod-card"><span className="mod-tag">INSIDE</span><h3>{item.title}</h3><p>{item.body}</p></div></Reveal>)}
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
          <Reveal><p>Download the free 300-prompt reference PDF. It covers ten categories, including outreach, content, UGC, products, delivery and copy. The paid Blueprint adds the guided sequence and 50 focused action prompts.</p></Reveal>
          <Reveal><LeadMagnetForm/></Reveal>
        </div>
      </div>
    </section>
  )
}

function PricingSection(){
  const items=[
    {name:'Track quiz: Six questions and a saved starting route',val:'Included'},
    {name:'Offer picker: Ten services and ten researched product ideas',val:'20 choices'},
    {name:'Offer interview: Three questions, plus your own offer option',val:'Included'},
    {name:'Playbooks: Connected guides with actions and checks',val:'10 guides'},
    {name:'Action prompts: Searchable, copyable and downloadable',val:'50 prompts'},
    {name:'Worked examples: Service files, product sheets and a website starter',val:'Included'},
    {name:'Tool paths: Free starting tools and optional paid limits',val:'Included'},
    {name:'Saved work: Tasks, notes, guide checks and exportable trackers',val:'Included'},
    {name:'Lifetime access: Blueprint access and future updates',val:'Included'},
  ]
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__head"><Reveal><div className="eyebrow">ONE DECISION</div></Reveal><Reveal><h2 className="h2">Everything included.<br/><span style={{color:'var(--purple)'}}>One flat price.</span></h2></Reveal><Reveal><p>One payment for the Blueprint. Optional third-party tools, samples, hosting and platform fees are separate.</p></Reveal></div>
        <Reveal>
          <div className="price-card">
            <div className="price-top">
              <p className="price-eyebrow">zerotopaidwithai: Full Access</p>
              <span className="price-was price-current">Current price</span>
              <div className="price-amount"><sup>$</sup>97</div>
              <p className="price-period">One-time · Yours forever · Instant access</p>
              <span className="price-save">All ten playbooks included</span>
            </div>
            <div className="price-stack">
              <p className="price-stack-title">What your $97 includes</p>
              <ul className="price-items">{items.map((item,i)=><li className="price-item" key={i}><span className="price-item-name"><span className="check-svg"><CheckIcon size={14} color="#A78BFA"/></span><strong>{item.name.split(': ')[0]}</strong>{item.name.includes(': ') && <>: {item.name.split(': ').slice(1).join(': ')}</>}</span><span className="price-item-val">{item.val}</span></li>)}</ul>
              <div className="price-total"><span className="price-total-label">One-time payment</span><span className="price-total-val">$97</span></div>
            </div>
            <div className="price-cta-wrap">
              <a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:36,fontSize:16,height:48}}>Yes: Give Me Instant Access<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a>
              <GuaranteeSeal/>
              <div className="price-guar"><span className="price-guar-icon"><ShieldIcon size={24} color="#4D9364"/></span><p><strong>30-Day Money-Back Guarantee.</strong> Complete the blueprint and work through its steps. If you still do not see a clear, actionable path to your first sale, email us your finished checklist within 30 days of purchase and get every cent back.</p></div>
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
        <Reveal><p className="finale-p">Start with one income track and one clear action sequence.<strong> Keep the Blueprint if it makes your next move obvious.</strong></p></Reveal>
        <Reveal><div className="finale-story">Inside: the track quiz, ten services, ten product ideas, ten connected playbooks, 50 action prompts, worked examples and your saved next steps.</div></Reveal>
        <Reveal className="finale-action"><a href="#lead" onClick={e=>{e.preventDefault(); openModal()}} className="btn btn--primary" style={{paddingInline:36,fontSize:17,height:48}}>Get The Blueprint: $97<span className="btn__arrow"><ArrowRight size={14} color="#fff"/></span></a><span style={{fontSize:13,color:'var(--muted)'}}>One-time payment · Instant access · <strong style={{color:'var(--ink-soft)'}}>30-day guarantee</strong></span><GuaranteeSeal/></Reveal>
      </div>
    </section>
  )
}

function FooterSection(){
  return (
    <footer className="footer">
      <p style={{fontSize:16,fontWeight:600,letterSpacing:'-0.02em',fontFamily:'var(--font-display)'}}>zerotopaidwithai</p>
      <div className="footer__links"><a href="#pricing">Pricing</a><a href="#testimonials">Product proof</a><a href="#faq">FAQ</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:support@zerotopaidwithai.com">Contact</a></div>
      <p style={{fontSize:13,opacity:0.6,marginTop:16}}>© 2026 zerotopaidwithai. All rights reserved.</p>
      <p className="footer-disc">The Blueprint teaches a process, not a guaranteed income or earning date. Practice examples use fictional facts. Your results depend on the offer, market, work and follow-up.</p>
    </footer>
  )
}
