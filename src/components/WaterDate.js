import React from 'react';
import './WaterDate.css';

const WaterDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-dight'});
    const year = props.date.getFullYear();
    




  return (
    <div className='water-date'>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day">{year}</div>
        </div>
  )
}

export default WaterDate