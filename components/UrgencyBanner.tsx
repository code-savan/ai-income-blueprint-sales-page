'use client'
import { useEffect, useState } from 'react'

function getDeadline(){
  return new Date(process.env.NEXT_PUBLIC_PRICE_DEADLINE || '2026-09-08T23:59:59Z')
}

export default function UrgencyBanner(){
  const [now,setNow]=useState<number>(Date.now())
  const [mounted,setMounted]=useState(false)
  useEffect(()=>{ setMounted(true); const id=setInterval(()=>setNow(Date.now()),1000); return()=>clearInterval(id)},[])
  const deadline=getDeadline()
  const diff=Math.max(0, deadline.getTime()-now)
  const expired=diff<=0
  const days=Math.floor(diff/86400000)
  const hours=Math.floor((diff%86400000)/3600000)
  const mins=Math.floor((diff%3600000)/60000)
  const secs=Math.floor((diff%60000)/1000)
  const dateStr=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'Africa/Lagos'}).format(deadline)

  if(!mounted) return <div className="urgency-bold" aria-hidden><div className="urgency-bold__inner"><span className="urgency-bold__text">Founding Member Pricing ends {dateStr} — Price increases to $147.</span></div></div>
  if(expired){
    return (
      <div className="urgency-bold urgency-bold--expired">
        <div className="urgency-bold__inner">
          <span className="urgency-bold__pulse"/>
          <span className="urgency-bold__text">Founding Member pricing has ended — Regular price: <strong>$147</strong></span>
        </div>
      </div>
    )
  }
  return (
    <div className="urgency-bold" role="timer" aria-live="polite">
      <div className="urgency-bold__inner">
        <div className="urgency-bold__left">
          <div className="urgency-bold__kicker"><span className="urgency-bold__pulse"/><span>FOUNDING MEMBER PRICING — ENDS SOON</span></div>
          <p className="urgency-bold__headline">Founding Member Pricing ends <strong>{dateStr}</strong> — Price increases to <strong>$147.</strong></p>
          <p className="urgency-bold__sub"><span className="urgency-bold__daysLeft">{days} day{days!==1?'s':''} left</span> · Lock in $97 before it’s gone</p>
        </div>
        <div className="urgency-bold__timer" aria-label={`${days} days ${hours} hours ${mins} minutes ${secs} seconds remaining`}>
          <div className="tbox"><span className="tbox__num">{String(days).padStart(2,'0')}</span><span className="tbox__label">DAYS</span></div>
          <span className="tbox__colon">:</span>
          <div className="tbox"><span className="tbox__num">{String(hours).padStart(2,'0')}</span><span className="tbox__label">HRS</span></div>
          <span className="tbox__colon">:</span>
          <div className="tbox"><span className="tbox__num">{String(mins).padStart(2,'0')}</span><span className="tbox__label">MIN</span></div>
          <span className="tbox__colon">:</span>
          <div className="tbox tbox--sec"><span className="tbox__num">{String(secs).padStart(2,'0')}</span><span className="tbox__label">SEC</span></div>
        </div>
      </div>
    </div>
  )
}
