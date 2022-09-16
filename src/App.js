// import About from "./components/About";
import React, { useState } from "react";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

// import { BrowserRouter } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState("Null")

  const showAlret = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlret("Dark mood has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlret("Light has been enable", "success");
    }
  }
  return (
    <>

      <Navbar title="TextUnit" about="AboutUs" home="Home " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className='container my-3'>

      
        <TextFrom heading="Enter The Text To analiyze Below" mode={mode} />
        {/* <About/> */}

      </div>

    </>
  );
}

export default App;
