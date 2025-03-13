
import { useState } from 'react'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState();
  const [isLoading, setIsLoading] = useState();
  const [answer,setAnswer] = useState();


  async function handleSubmit() {
    const data = {
      email: inputValue 
    }
    setIsLoading(true);
  try{
    const promise = await fetch("https://umk-async-api.fly.dev/newsletter", {method: "POST", 
    body: JSON.stringify(data),  
   });
   try{
    if(promise.status === 200){
    setAnswer("Thank you for subscription.");
    }
    else if (promise.status === 500){
    setAnswer("Error, please try again.");
    }
  }catch(error){
    console.log(error);
  }
  }
    
  catch(error){
    console.log(error);
  } finally{
    setIsLoading(false);
  }
  }

  return (
    <>
      <div>
        <p>Newsletter</p>
        <input type="text" placeholder='Email...' onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Subscribe</button>
      </div>
      {isLoading ? "Ładowanie..." : answer }
    </>
  )
}

export default App
