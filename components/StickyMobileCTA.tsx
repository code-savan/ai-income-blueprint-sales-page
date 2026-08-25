'use client'
import { useEffect,useState } from 'react'
export default function StickyMobileCTA(){
  const [show,setShow]=useState(false)
  useEffect(()=>{
    const hero=document.getElementById('hero')
    if(!hero) return
    const io=new IntersectionObserver(([e])=>setShow(!e.isIntersecting),{threshold:0})
    io.observe(hero)
    return()=>io.disconnect()
  },[])
  return (
    <div className={`lm-sticky ${show?'show':''}`} style={{justifyContent:'space-between'}}>
      <span style={{fontSize:13,fontWeight:600}}>Get the Blueprint — $97</span>
      <button className="btn btn--primary" style={{height:40,padding:'0 16px',fontSize:13}} onClick={()=>window.dispatchEvent(new Event('open-lead-modal'))}>Get Access</button>
    </div>
  )
}
