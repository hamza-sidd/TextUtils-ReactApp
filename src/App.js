import React from "react";
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
 // const[alert,setAlert]= useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
     // showAlert("dark mode has been enabled","success");

    }

    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     // showAlert("light mode has been enabled","success");
    }
    }
  
  return (
    <>
   {/* <Router> */}
    <Navbar title="Utils" mode={mode} toggleMode={toggleMode}/>
  {/* <Alert alert={alert}/> */}  
    <div className="container">
   
  {/* <Routes>     */}
  {/* <Route path="/About" element={<About/>} > */}
      
    {/* </Route> */}
    {/* <Route path='/' element={<TextForm heading=" Enter text to analyze" mode={mode}/>}> */}
    <TextForm heading=" Enter text to analyze" mode={mode}/>
        {/* </Route> */}
  {/* </Routes> */}
  
    </div>
   {/* </Router> */}
    </>
  );
}
export default App;
