import React from 'react'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

function Tooltip() {

    const ReactComponent = ()=>{
        return (
            <div>
                <h1 style={{fontSize: "1.8rem", fontVariant:"small-caps"}}>I'm a react component</h1>
                <p >You can also return react components inside the Tippy content</p>
            </div>
        )
    }

  return (
    <div className='container'>
        <h2 className='underline'>tippy.js</h2>
        
        <div>
            <Tippy content={"Hello! I'm a tooltip ( ͡° ͜ʖ ͡°)"}>
                <button className='btn'>Hover me for tooltip (String)</button>
            </Tippy>
        </div>
        
        <div className='center'>
            <Tippy content={<div><h2>Tooltip</h2><p>Tooltip with html content inside</p></div>}>
                <button className='btn'>Hover me for tooltip (html)</button>
            </Tippy>
        </div>

        <div>
            <Tippy content={<ReactComponent />}>
                <button className='btn'>Hover me for tooltip (react component)</button>
            </Tippy>
        </div>

    </div>
  )
}

export default Tooltip