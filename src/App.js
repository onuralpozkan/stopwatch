import './App.css';
import {useEffect,useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [second, setSecond] = useState(0)
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setCount(prevCount => prevCount + 1)
  //   },1000)
    
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [count])
  const [isStarted, setIsStarted] = useState(false)
  // const sw = setInterval(() => {
  //   setCount(prevCount => prevCount + 1)
  // }, 1000);
  const startWatch = () => {
    setIsStarted(!isStarted)

  }
  useEffect(() => {
    let interval = null
    if(isStarted){
      interval = setInterval(()=>{
        if(count < 60){
          setCount(prevCount => prevCount + 1)
        }else if(count === 60) {
          setCount(0)
          setSecond(prevS => prevS + 1)
        }
        
      },10)
    } 
    return () => {
      clearInterval(interval)
    }
  }, [isStarted,count])
  return (
    <div className="App">
      <h1>
        StopWatch
      </h1>      

      <h1>{second} : {count}</h1>
      
     <div className="btns">
     <button onClick={startWatch}>{isStarted ? 'Stop' : 'Start'}</button>
      <button onClick={()=>{
        setCount(0)
        setSecond(0)
      }}>Reset</button>
     </div>

    </div>
  );
}

export default App;
