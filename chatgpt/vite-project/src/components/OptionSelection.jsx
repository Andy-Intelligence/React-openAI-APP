import React from 'react'
import Translation from './Translation'


export default function OptionSeletion({arrayItems, selectOption}){

    console.log(arrayItems)
    return( <>
           <h3 className='heading'>React AI APP</h3> 
           <div className='grid-main'>
            {
                arrayItems.map((item,index)=>{
                    return( 
                    <div onClick={()=>selectOption(item.option)} key = {index} className='grid-child'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </div>)
                })
            }
           </div>
            </>)
}