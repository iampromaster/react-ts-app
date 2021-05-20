import type { Dispatch } from "../share/context"
export default function Controls({ handler}: {handler: Dispatch}){
  return (
    <div className="controls">
      <button className="counter" onClick={() => {handler('increment')}}>+</button>
      <button className="counter" onClick={() => {handler('decrement')}}>-</button>
    </div>
  )
}