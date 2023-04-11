import React, {useState} from 'react'


function Exercises() {

  const [Count, setCount] = useState(0)
  

  function decrementCount(){
    setCount(prevCount => prevCount-1)
     

  }

  function incrementCount(){
    setCount(prevCount => prevCount+1)
   
  }

 
  return (
    
    <div className='buttons'>
      <h4>Increase and Decrease operation</h4>
      <button className='btn ' onClick={decrementCount}>-</button>
      <span>{Count}</span>
      
      <button className='btn ' onClick={incrementCount}>+</button>

    </div>
  )
}

export default Exercises
