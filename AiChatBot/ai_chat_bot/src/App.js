import Svg from "./Svg"
import { useState } from "react";
function App() {
  const [text,setText]=useState('')
  const [messages1,setMessages]=useState([])
  const getRes= async() =>{
      const  responce = await fetch(`http://localhost:8000/prompt/${text}`)
      const data= await responce.json()
      setMessages([...messages1,{
        author:data.messages[0].content,
        bot : data.candidates[0].content
      }
    ])
  }

  return (
    <div className="App">
     <div className='chat-bot' >
        <div class="chat-header">
          <div class="info-container">
            <h3>Chat With</h3>
            <h2>PaLm 2 Bot</h2>
          </div>
          <div class="svg">
          {/* <Svg/> */}
          </div>
          
        </div>
         
        <div class="feed">
            {
            
              messages1?.map((message,_index)=>{
                return(<div class="messages" key={_index}>     
                <div class="question bubble">{message.author}</div>   
               <div class="responce bubble">{message.bot}</div>
               </div>)
              })
            }
          {/* <div class="question bubble"></div>   
            <div class="responce bubble"></div> */}
        
        </div>
        <textarea value={text} onChange={e=>{setText(e.target.value)}} />
          <button onClick={getRes} >✔</button>
     </div>
    </div>
  );
}

export default App
