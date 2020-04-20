import React from 'react';
import Header from './components/Header'
import Tab from './components/Tab'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Tab/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
