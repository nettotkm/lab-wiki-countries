import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navBar/Navbar'
import './components/navBar/nav-bar.css'
import Countries from './components/countries/Countries'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Countries/>
        My App
      </div>
    );
  }
}

export default App;
