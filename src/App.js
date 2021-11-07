// import logo from './logo.svg';
import {useState} from 'react';
// import './App.css';
import TextForm from './components/TextForm';
// import About from './components/About';
import Navbars from './components/Navbars';



function App() {
  const [mode, setmode] = useState('light'); //wheter dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="gray";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
    
  }
  return (
    <>
   <Navbars title="TextUtils" aboutText="About_TextUtils" mode={mode} toggleMode={toggleMode} />
   <div className="container my-3" >
   <TextForm heading="enter the text to analyse "mode={mode}/>
   {/* <About/> */}
   </div>

    </>
  );
}

export default App;
