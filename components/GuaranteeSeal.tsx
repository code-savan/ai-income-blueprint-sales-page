import { ShieldIcon } from '@/components/Icons'
export default function GuaranteeSeal(){
  return (
    <div className="guarantee-seal">
      <span className="guarantee-seal__icon"><ShieldIcon size={18} color="#4D9364"/></span>
      <span className="guarantee-seal__text">30-Day <span>Money-Back Guarantee</span></span>
    </div>
  )
}
