const arrayItems = [
    {
    name: "Q&A",
    id:"q&a",
    description:"answer questions based on existing knowledge",
   option:{
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  }
},
    {
    name: "Grammar Correction",
    id:"grammar Correction",
    description:"Correct sentences into stndard english",
    option:{
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }
},
    {
    name: "Text to command",
    id:"text to command",
    description:"Translate text into programmatic commands",
    option:{
        model: "text-davinci-003",
         temperature: 0,
  max_tokens: 100,
  top_p: 1.0,
  frequency_penalty: 0.2,
  presence_penalty: 0.0,
  stop: ["\n"],
    }
},
    {
    name: "Summarize for a 2nd gender",
    id:"summary",
    description:"Translate difficult texts into simpler concepts",
    option:{
        model: "text-davinci-003",
          temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
},
    {
    name: "English to other languages translate",
    id:"translate",
    description:"Translate english text into french, spanish and german",
    option:{
        model: "text-davinci-003",
         temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }
},
    {
    name: "Movie to emoji",
    id:"movie to emoji",
    description:"Convert movie titles into emoji",
    option:{
        model: "text-davinci-003",
        temperature: 0.8,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
    }
},
]



const arrayMaps = new Map([
    [1,{
    name: "Q&A",
    id:"q&a",
    description:"answer questions based on existing knowledge"
}],
[2,
    {
        name: "Grammar Correction",
        id:"grammar Correction",
        description:"Correct sentences into stndard english"
    }
],
[3, {
    name: "Text to command",
    id:"text to command",
    description:"Translate text into programmatic commands"
}]
])




const oldMap = {
    1:{name: "Q&A",
    id:"q&a",
    description:"answer questions based on existing knowledge"},
    2:{ name: "Grammar Correction",
    id:"grammar Correction",
    description:"Correct sentences into stndard english"},
    3:{name: "Text to command",
    id:"text to command",
    description:"Translate text into programmatic commands"},
}

export {arrayMaps,arrayItems,oldMap}