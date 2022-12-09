import './App.css';
import Microrobot from './Components/Microrobot/Microrobot';
import Background from './Components/Background/background';
import BackgroundStream from './Images/Main-02.svg';
import { useState } from "react";

function App() {  

  const[focus, setFocus] = useState(false);

  const handleClick = ()=>{
    setFocus(!focus)
  }

  return (
    <div className="App">
      {/* <h1>Directions:</h1>
      <h3>1. Press the left arrow to control the left sphere movements</h3>
      <h3>2. Press the right arrow to control the right sphere movements</h3>
      <h3>3. To move the robot use the combination: &#8592;, &#8594;, &#8592;, &#8594;</h3>
      <h3>4. Press <i>Play now</i> to start playing</h3> */}
      {/* <button onClick={handleClick}>Play Now</button> */}
      <div className="arena">        
        <img src={BackgroundStream} alt="Background Stream" className='backgroundStream'/>
        <div className='characters'>
          <Microrobot focus={focus}/>
          <Background focus={focus}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
