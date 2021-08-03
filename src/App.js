import './styles/global.css'
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <div className="App">
      <header className="HeaderImg"><img src="https://www.carmehil.com.br/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-26-at-16.36.22-1.jpeg" width="100%" /></header>
      <NavBar />
      <div className="midDiv">
        <h1>Texto 1</h1>
        <h1>Texto</h1>
      </div>
      <div className="downDiv">
        bottom
      </div>
    </div >
  );
}

export default App;
