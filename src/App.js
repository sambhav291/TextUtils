import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, 
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert,setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
  })
  setTimeout(()=>{
    setalert(null);
  },1000)
  }
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#152637';
      showalert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#c6d6e3';
      showalert('Light mode has been enabled','success');
    }
  }
  return (
    <>
<Router>  
<Navbar title="TextUtils" about="About us" mode = {Mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/" element={<TextForm heading="Enter Text to analyze, below" mode={Mode}/>}/>
  </Routes>
 </div> 
 </Router>  
    </>
  );
}
export default App;
