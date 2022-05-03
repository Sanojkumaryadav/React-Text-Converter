
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      
    }else{
      setMode('light');
    }
  }
  return (
    <>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode ={mode} toggleMode={toggleMode} />
   <div className='container my-3'>
   <TextForm heading="Enter the text to analyze below"/>
   </div>
  </>
  );
}

export default App;
