import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
const [advise, setAdvise] = useState('')
const fetchApi = ()=>{
  axios.get('https://api.adviceslip.com/advice')
    .then((Response)=>{
       
      const { advice } = Response.data.slip
      setAdvise(advice)
    })
    .catch((error)=>{
      console.log(error)

    })
}

  useEffect(()=>
fetchApi()  ,[])

  return (
    <div className="App">
      <div className="Card">
      <h1 className="advice">{advise}</h1>
      <button className="button" onClick={()=>fetchApi()}>
        <span>Another Advice</span>
      </button>
      </div>
    </div>
  );
}

export default App;
