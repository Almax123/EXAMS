import { useEffect,useState } from "react";

import Services from "./components/Services/Services";

import './App.css'
import axios from "axios";


 


const App=()=>{
  const [service, setService] =useState([])
  useEffect(()=>{
    axios.get(' http://localhost:8000/services').then(response=>{
      setService(response.data)

    })
  },[])
  return (
    <div className='App'>
     <Services services={service}/>
    </div>
  );
}


export default App;
