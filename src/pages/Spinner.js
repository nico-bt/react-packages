import React, {useState} from 'react'
import {ClipLoader, BarLoader, BeatLoader, ClimbingBoxLoader, ScaleLoader} from "react-spinners";

function Spinner() {

    const flexBox = {display:"flex", justifyContent:"space-evenly", alignItems:"center", marginTop:"20px"}
    
    const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='container'>
        <h2 className='underline'>react-spinners</h2>
        
        <button className='btn' onClick={()=>setIsLoading(!isLoading)}>
            {isLoading? "Stop loading" : "Start loading"}
        </button>
        
        <div style={flexBox}>
            <ClipLoader 
                size={100}  
                loading={isLoading} >
            </ClipLoader>

            <BarLoader  loading={isLoading} ></BarLoader>
            
            <BeatLoader loading={isLoading} ></BeatLoader>
            
            <ClimbingBoxLoader loading={isLoading}> </ClimbingBoxLoader>
            
            <ScaleLoader 
                loading={isLoading}  
                color='maroon'>
            </ScaleLoader>
        </div>
    </div>
  )
}

export default Spinner