import React from 'react'
import './WaterForm.css'

const WaterForm = () => {
  return (
    <div>
        
          <h2 className='water-container'>Water Intake</h2>
          <form className='form'>
            <input
            className='form-box'
            placeholder='Fruit'
            name='fruit'
            />
            <input
            className='form-box'
            placeholder='Cups'
            name='cups'
           />
            <button className='button'></button>
            

          </form>
         
           </div>
  )
}

export default WaterForm