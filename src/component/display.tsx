import type { State } from '../share/context'
export default function Display({ count}: State){
  return (
    <div className="display">
      {count}
    </div>
  )
}