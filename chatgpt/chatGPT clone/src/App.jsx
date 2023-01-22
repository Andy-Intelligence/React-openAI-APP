import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from "openai";



function App() {
  const [getPrompt, setGetPrompt] = useState('')
  const [getImage, setGetImage] = useState('')

const setGetPromptFunc = (value)=> {
  setGetPrompt(value)
  console.log(value)
}

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_Open_AI_Key,
});
 const openai = new OpenAIApi(configuration)
 
console.log(openai)

 const generateImage = async () => {
  const response = await openai.createImage({
    prompt: getPrompt,
    n:1,
    size: "1024x1024"
  })

  setGetImage(response.data.data[0].url)
 }


  return (
    <div id = "root">
      
      <h3>GENERATE AN IMAGE USING OPENAI API</h3>
      {getImage.length >0 ? <img src = {getImage || ''} className = "openAIimage" alt = 'openaiImages'/> : <></>}
      <input className = "promptInput" type = "text" placeholder = "input a prompt" onChange={(e)=>setGetPromptFunc(e.target.value)}></input>
      <button onClick = {generateImage}>Generate Image</button>
    </div>
  )
}

export default App
