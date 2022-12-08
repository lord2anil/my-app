import React,{useState} from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function Textutiles() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

   const toggle=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(
        "light mode is on"
        ,'success'
      )
    }else{
      setmode('dark');
      document.body.style.backgroundColor='gray';
      showAlert(
        "dark mode is on"
        ,'success'
      )
         
    }
   }
  return (
    <>
    <Navbar mode ={mode} toggle={toggle} />
    <Alert alert={alert}/>
    <TextForm tital='hello this is anil' mode ={mode}  show={showAlert}  />
    
     {/* <About/> */}
    </>
  )
}
