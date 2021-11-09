// import logo from './logo.svg';
import React ,{useState} from 'react';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbars from './components/Navbars';
import Alert from './components/Alert';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); //wheter dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [placehold, setplacehold] = useState('');
  // const toggleplacehold=()=>{
  //   if(placehold==="")
  //   {
  //     setplacehold('placeholdercolor');
  //   }
  //   else{
  //     setplacehold("");
  //   }
  // }
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#2b5681";
      showAlert("Dark Mode has been  Enabled","success");
      document.title="TextUtils-Home(DarkMode)";
      // setInterval(() => {
      //   document.title="install"
      // }, 2000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been  Enabled","success");
      document.title="TextUtils-Home";
    }
    
  }
  return (
    <>
    <Router>
   <Navbars title="TextUtils" aboutText="About_TextUtils" mode={mode} toggleMode={toggleMode}  />
   <Alert alert={alert}/>
   <div className="container my-3" >
   <Routes>
          <Route exact path="/about" element={<About/>}/>
       
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyse "mode={mode}/>}/>  
               
    </Routes>
 
   </div>
   </Router>

    </>
  );
}

export default App;
