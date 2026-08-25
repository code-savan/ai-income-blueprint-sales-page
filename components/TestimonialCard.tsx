'use client'
import { StarsRow } from '@/components/Icons'

type Variant = 'punchy' | 'story' | 'video'
export default function TestimonialCard({ variant='story', quote, name, handle, amount, per, tag, stars=5, thumbnail }: { variant?:Variant; quote:string; name:string; handle?:string; amount?:string; per?:string; tag?:string; stars?:number; thumbnail?:string }) {
  if (variant==='punchy') {
    return (
      <div className="tc tc--punchy">
        <p className="tc-quote">“{quote}”</p>
        <div className="tc-author">
          <span className="tc-av">{name.slice(0,2).toUpperCase()}</span>
          <div><p className="tc-name">{name}</p>{handle && <p className="tc-handle">{handle}</p>}</div>
        </div>
      </div>
    )
  }
  if (variant==='video') {
    return (
      <div className="tc tc--video">
        <div className="tc-video-thumb">
          {thumbnail ? <img src={thumbnail} alt="" /> : <div style={{color:'#fff',fontSize:12}}>Video testimonial</div>}
          <span className="tc-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#1F1E1C"><path d="M8 5v14l11-7z"/></svg></span>
        </div>
        {amount && <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:6}}><span className="tc-amount">{amount}</span>{per && <span style={{fontSize:11,color:'var(--muted)'}}>{per}</span>}</div>}
        <div className="wc-stars"><StarsRow count={stars} size={13} color="#7C3AED"/></div>
        <p className="tc-quote">“{quote}”</p>
        <div className="tc-author"><span className="tc-av">{name.slice(0,2).toUpperCase()}</span><div><p className="tc-name">{name}</p>{handle && <p className="tc-handle">{handle}</p>}</div></div>
        {tag && <span className="wc-tag">{tag}</span>}
      </div>
    )
  }
  return (
    <div className="tc tc--story">
      {amount && <div style={{display:'flex',alignItems:'baseline',gap:6,marginBottom:6}}><span className="tc-amount">{amount}</span>{per && <span style={{fontSize:11,color:'var(--muted)'}}>{per}</span>}</div>}
      <div className="wc-stars"><StarsRow count={stars} size={13} color="#7C3AED"/></div>
      <p className="tc-quote tc-quote--big">“{quote}”</p>
      <div className="tc-author"><span className="tc-av">{name.slice(0,2).toUpperCase()}</span><div><p className="tc-name">{name}</p>{handle && <p className="tc-handle">{handle}</p>}</div></div>
      {tag && <span className="wc-tag">{tag}</span>}
    </div>
  )
}
