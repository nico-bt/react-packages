import React from 'react'
import CountUp, {useCountUp} from 'react-countup';

function Count() {

    // Hook predefined, devuelve el countUp con funciones
    const { start, pauseResume, reset, update } = useCountUp({ref:"counter", end: 4000, duration: 4});

  return (
    <div className='container'>
        <h2 className='underline'>react-countup</h2>
        <CountUp end={600} duration={6} style={{fontSize:"2rem"}} />
        <br></br>
        <br></br>
        <CountUp end={150} duration={3} suffix="usd" decimals={2} style={{fontSize:"2rem"}} />

        <div style={{border:"1px solid black", padding:"20px", marginTop:"20px"}}>
            <h2>countUp Hook: useCountUp</h2>
            <h2><span id='counter'></span></h2>
            <button className='btn' onClick={start}>Start</button>
            <button className='btn' onClick={pauseResume}>Pause/Resume</button>
            <button className='btn' onClick={reset}>Reset</button>
            <button className='btn' onClick={()=>update(2000)}>Update to 2000</button>
        </div>
    </div>
  )
}

export default Count