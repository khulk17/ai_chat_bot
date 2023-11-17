import './App.css'
import { useState } from 'react';

function App() {
  
  const [displaytext,setDisplayText]=useState('');
  const [promptText,setpromptText]=useState(" ")
  const getRes= async ()=>{
    const reponce= await fetch(`http://localhost:8000/prompt/${promptText}`)
    const data=await reponce.json();
    setDisplayText(data.candidates[0].output)
  }
  return (
    <div className="content">
      <form className="form">
      <div class="form-group">
        <input id="input" placeholder="Enter some text" type="text" value="" onChange={e=>{setpromptText(e.target.value)}}/>
      </div>    
      <div class="form-group">
        <div>
          <label for="bg-toggle">Add Extra Context</label>
          <input id="bg-toggle" type="checkbox"/>
        </div>
        <div className='context-group'>
        <input id="input" placeholder="Enter some text" type="text" value=""/>
        </div>
        <button id="submit" type="submit" onClick={getRes}>Generate</button>
      </div>
    </form>
    <div className='text-area'>
    <textarea name="generated-text" id="" cols="50" rows="20" value={displaytext}></textarea>
    </div>
    
    </div>
  );
}

export default App;
