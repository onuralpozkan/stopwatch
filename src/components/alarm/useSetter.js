import {useState,useEffect,useRef} from 'react'

function useSetter(min,max){
const [count, setCount] = useState(0)
const handleInput = (e) => {
  const {name,value} = e.target
  setCount({[name]:value})
}
const counter = <div className="wa-alarm-setter">
<i onClick={()=>setCount(pC => {
  if(max > pC) return pC + 1
  return max
})}>UP</i>
<input type="text" onChange={handleInput} value={count < 10 ? "0" + count : count}  name="userInput"/>
<i onClick={()=>setCount(pC => {
  if(pC > min) return pC - 1
  return min
})}>DOWN</i>
</div>
return [counter,count]
}

export default useSetter