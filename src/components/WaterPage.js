import  React, { useState } from 'react';
//import WaterDate from './WaterDate';
import './WaterPage.css';
//import Card from './Card';


const WaterPage = (props) => {
    /*const date = 'new Date(2022,2,22)';
    const title = 'Drinking water everyday';
    const amount = 394.18;*/
    const [title, setTitle] = useState(props.title);
    console.log('lets evaluate the react');

const clickHandler = () => {
  setTitle('updated');
  console.log(title);


};
    /*const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-dight'});
    const year = props.date.getFullYear();*/




  return (


    
    <div className='expense-item'>
       <h1>{props.date}</h1>
    

     

      
      
     <div className='expense-item__description'>
     <h2>{title}</h2>
     <div className='expense-item__price'>{props.amount}</div>

     </div>
     <button onClick={clickHandler}>Change title</button>
</div>

   
     
    
    
  )
}

export default WaterPage
