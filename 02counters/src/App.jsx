import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

 
  // let counter = 5;
  
  const addValue = () => {
    if(counter<20){
      counter = counter + 1;
      setCounter(counter);
    }
   
    
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add vAlue {counter}</button>
      <br />
      <button onClick={removeValue}
      >remove Vaalue {counter}</button>
      <p>Footer {counter}</p>

    </>
  )
}

export default App
