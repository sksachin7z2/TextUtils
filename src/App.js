// import logo from './logo.svg';
import {useState} from 'react';
import TextForm from './components/TextForm';
// import About from './components/About';
import Navbars from './components/Navbars';
import Alert from './components/Alert';
// import './index.css';



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
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been  Enabled","success");
    }
    
  }
  return (
    <>
   <Navbars title="TextUtils" aboutText="About_TextUtils" mode={mode} toggleMode={toggleMode}  />
   <Alert alert={alert}/>
   <div className="container my-3" >
   <TextForm showAlert={showAlert} heading="enter the text to analyse "mode={mode}  />
   {/* <About/> */}
   </div>

    </>
  );
}

export default App;
