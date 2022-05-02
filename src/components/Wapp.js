import React from 'react'
import WaterPage from '../components/WaterPage'

const Wapp = () => {
  const intake = [
    {
      title: 'Bottles',
      amount: '8',
      date: 'May 6, 2022',
    },

    {
      title: 'Liters',
      amount: '8',
      date: 'May 7, 2022',

    },

    {
      title: 'Cups',
      amount: '8',
      date: 'May 8, 2022',

    },


];





  return (
    <div>
      <h2>Let Drink Up</h2>
    <WaterPage
    title={intake[0].title}
    amount={intake[0].amount}
    date={intake[0].date}
    ></WaterPage>

    <WaterPage
    title={intake[1].title}
    amount={intake[1].amount}
    date={intake[1].date}
    ></WaterPage> 

    <WaterPage
    title={intake[2].title}
    amount={intake[2].amount}
    date={intake[2].date}
    ></WaterPage>   
     
    </div>
  )
}

export default Wapp