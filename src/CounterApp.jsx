import { useState } from 'react';
import PropTypes from 'prop-types';

import React from 'react';


const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(0);

    const  handleAdd = ()=>{
     
        setCounter(counter+1);

    }
    const handleSubtract = () =>{
        setCounter(counter-1)
    }
    const handleReset = ()=>{
        setCounter(value)
    }
  return (
    <>

    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    <button className='btn  btn-primary' onClick={handleAdd}>+1</button>
    <button className='btn  btn-danger' onClick={handleSubtract}>-1</button>
    <button className='btn  btn-warning' onClick={handleReset}>Reset</button>

    </>
    
  )
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}