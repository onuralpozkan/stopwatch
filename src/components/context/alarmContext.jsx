import React,{useState} from 'react'

const {Provider,Consumer} = React.createContext();

const AlarmContextProvider = (props) => {
  const [minutes, setMinutes] = useState({
    "first": 11,
    "second": 12,
    "third": 13,
  });
  const [hours, setHours] = useState({
    "first": 11,
    "second": 12,
    "third": 13,
  })
  const incrementMinutes = (id)=>{
    setMinutes(p => ({...p, [id]: p[id] < 15 ? p[id] + 1 : 0}))
  }
  const decrementMinutes = (id)=>{
    setMinutes(p => ({...p, [id]: p[id] > 0 ? p[id] - 1 : 15}))
  }
  const incrementHours = (id)=>{
    setHours(p => ({...p, [id]: p[id] < 15 ? p[id] + 1 : 0}))
  }
  const decrementHours = (id)=>{
    setHours(p => ({...p, [id]: p[id] > 0 ? p[id] - 1 : 15}))
  }
  return (
    <Provider value={[minutes, hours, incrementMinutes,decrementMinutes, incrementHours,decrementHours]}>
      {props.children}
    </Provider>
  )
}
export {AlarmContextProvider, Consumer as AlarmContextConsumer}