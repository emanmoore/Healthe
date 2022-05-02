import React, { useState } from 'react'

import './Track.css'



const  Track = () => {
  const [userWaterInput, setUserWaterInput] = useState("");
  const [waterConsumption, setWaterConsumption] = useState([]);

  const addWaterConsumption = (numberCups) => {
    if (!numberCups) {
      alert("You must enter a number of cups");
      return;


    }
    const consumptionEvent = {
      numberOfCups: numberCups,
      time: new Date()
    };
    const newWaterConsumption = [...waterConsumption];
    newWaterConsumption.push(consumptionEvent);
    setWaterConsumption(newWaterConsumption);
    setUserWaterInput("");
  };

  const updateUserWaterInput = (e) => {
    setUserWaterInput(e.target.value)
  }

  return (
    <div className='main'>
      <div className='container'>
        <h1>Water</h1>
        
          <label className='input'>
            Cups
            <input onChange={updateUserWaterInput} type="text" value={userWaterInput} />
          </label>

          
          <label className='input'>
            Bottles
            <input onChange={updateUserWaterInput} type="text" value={userWaterInput} />
          </label>

          
          <label className='input'>
            Liters
            <input onChange={updateUserWaterInput} type="text" value={userWaterInput} />
          </label>
          <button onClick={() => addWaterConsumption(userWaterInput)}>count</button>
         
       <ul>
         {
           waterConsumption.map(consumptionEvent => <li>cups: {consumptionEvent.numberOfCups}</li>) 
         }
       </ul>
        
        
      </div>
      <div className='container'>
       <h1>Fruit</h1>
       <form>
       <label className='input'>
            Fruit
            <input type="text" fruit="fruit" />
          </label>
          </form>
          <form>
       <label className='input'>
            Cups
            <input type="text" fruit="fruit" />
          </label>
          </form>
         
        </div>
      </div>

      
  )
}

export default Track






