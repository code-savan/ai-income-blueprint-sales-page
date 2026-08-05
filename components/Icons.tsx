// ─── SVG ICON SYSTEM ───
// Replaces all emojis on the page with crisp, custom SVG icons.

type IconProps = {
  size?: number
  className?: string
  color?: string
  style?: React.CSSProperties
}

export function CheckIcon({ size = 16, className = '', color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ size = 14, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2l2.39 7.36H22l-6.19 4.49L18.2 21 12 16.5 5.8 21l2.39-7.15L2 9.36h7.61L12 2z" />
    </svg>
  )
}

export function StarsRow({ count = 5, size = 14, color = '#7C3AED' }: { count?: number; size?: number; color?: string }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} size={size} color={color} />
      ))}
    </span>
  )
}

export function PlayIcon({ size = 24, className = '', color = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function ArrowRight({ size = 16, className = '', color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowDown({ size = 16, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XIcon({ size = 16, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M6 18L18 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BoltIcon({ size = 16, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  )
}

export function CalendarIcon({ size = 16, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function FreeIcon({ size = 16, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill={color}>$0</text>
    </svg>
  )
}

export function ShieldIcon({ size = 24, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6v6c0 5.5 3.84 10.18 8 11 4.16-.82 8-5.5 8-11V6l-8-4z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LockIcon({ size = 14, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="2" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function MailIcon({ size = 14, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function InfinityIcon({ size = 14, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 12a4 4 0 1 1 4 4c-2 0-4-1.79-4-4z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 12a4 4 0 1 1-4-4c2 0 4 1.79 4 4z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function ClockIcon({ size = 14, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GearIcon({ size = 28, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
      <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BriefcaseIcon({ size = 28, className = '', color = '#7C3AED' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" stroke={color} strokeWidth="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function PlusIcon({ size = 15, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
