import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);




{/* <div className="BorderBox">
      <h1 className='animalQGame'><strong> Welcome To Animal Quiz Game </strong> </h1>
      <h2 className='EnterYname'>Enter your name </h2>
      <input type="text" name="text" id="" placeholder='your name' />
      <button  type="submit" className="btn btn-dark">Let's play</button> 
      </div>
</div>  */}