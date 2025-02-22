import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cell({filled, onClick, isDisabled}){
  return <button type='button'
  disabled={isDisabled}
  className={filled?"cell cell-activated":"cell"}
  onClick={onClick}></button>
}

function App() {
  const [order, setOrder] = useState([])
  const [isDeactivating, setDeactivating] = useState(false)

  const config=[
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  const deactivateCells = () => {
    setDeactivating(true)
    const timer = setInterval(()=>{
    setOrder((origOrder) =>{
       const newOrder = origOrder.slice()
       newOrder.pop()

       if(newOrder.length === 0){
        clearInterval(timer)
        setDeactivating(false)
       }
      return newOrder
    })
    },300)
  }

  const activateCells=(index) => {
    const newOrder=[...order,index]
    setOrder(newOrder)

    //deactivation
    if(newOrder.length === config.flat(1).filter(Boolean).length)
      deactivateCells()
  }
  
  return <div className='wrapper'>
  <div className='grid'
  style={{
    gridTemplateColumns: `repeat(${config[0].length}, 1fr)`
  }}>
  {config.flat(1).map((value, index)=>{
    return value ? <Cell 
    key={index}
    filled={order.includes(index)}
    onClick={()=>activateCells(index)}
    isDisabled={order.includes(index)||isDeactivating}/>:<span/>
})}
  </div>
  </div>
}

export default App
