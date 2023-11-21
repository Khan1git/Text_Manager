// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [mode, setmode] = useState('dark');

  const newTheme = () => {
    setmode('green')
    document.body.style.backgroundColor = 'green';
    showAlert("GREEN MODE ACTIVATED", "success");
    // document.title = "TextUtils green Mode"
  }
  const toggleMode = () => {
    if (mode === 'white') {
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("DARK MODE ACTIVATED", "success");
      // document.title = "TextUtils Dark Mode"
    }
    else {
      setmode('white')
      document.body.style.backgroundColor = 'white';
      showAlert("LIGHT MODE A CTIVATED", "success");
      // document.title = "TextUtils Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' about="About us" newTheme={newTheme} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
        <Routes>
      <Route exact path="/home" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
      <Route exact path="/about" element={<About mode={mode}/>} />
    </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
