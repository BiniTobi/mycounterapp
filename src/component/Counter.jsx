import {useState}from 'react';
import './counter.css'; // Import your CSS file

const Counter = () => {
  const [counter,setCounter] = useState(0)
  const iHandler = ()=>{
    setCounter(counter + 1)
  }
  const dHandler = ()=>{
    setCounter(counter - 1)
  }
  const rHandler =()=>{
    setCounter(0)
  }
  return (
    <>
    <h3>React Project 01 Counter App </h3>
    <h3>portfolio website link 👇 </h3>
    <span style={{color:"black", background:"green",padding:"5px",margin:"8px"}}> https://biniyamportfolio.vercel.app/</span>

    <div className="container">
      <div className="centered-div">
       <h1>{counter}</h1>
       <div className="button">

       <button className='btn' onClick={iHandler}>+</button>
       <button className='reset' onClick={rHandler}>Rest</button>

       <button className='btn' onClick={dHandler}>-</button>
       </div>
      </div>
    </div>
    </>
  );
};

export default Counter;