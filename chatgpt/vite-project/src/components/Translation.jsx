import React from 'react'


export default function Translation({doStuff, handlePrompt,displayResponse}){

    return (
    <div>
       <textarea onChange={(e)=>handlePrompt(e.target.value)} className = "promptArea" rows={10} cols = {80}>

       </textarea>
       <button onClick= {doStuff} className='button'>DO YOUR STUFF</button>


       <h2>{displayResponse}</h2>
    </div>)
}