import { useState } from 'react'
import {Configuration, OpenAIApi} from 'openai'
import './App.css'
import OptionSeletion from './components/OptionSelection'
import {arrayMaps,arrayItems,oldMap} from './AIOptions/index'
import Translation from './components/Translation'

function App() {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  })

  const openai = new OpenAIApi(configuration)
 
  const [option, setOption] = useState({})
  const [input, setInput] = useState("")
  const [displayResponse, setDisplayResponse] = useState("")
 
  const selectOption = (a)=>{

    setOption(a)
  }

  const handlePrompt = (e) =>{
    setInput(e)
    
   }

  const doStuff = async ()=> {
    let object = {...option, prompt:String(input)}
    console.log(object)
 
    const response = await openai.createCompletion(object).then((res)=>{ setDisplayResponse(res.data.choices[0].text)})

    console.log(displayResponse)
  }


  return (
    <div className='App'>
      {
      Object.values(option).length === 0 ? <OptionSeletion arrayItems = {arrayItems} selectOption={selectOption}/> :<Translation handlePrompt = {handlePrompt} doStuff = {doStuff} displayResponse= {displayResponse}/>
      }
    </div>
  )
}

export default App
