import React from 'react';
import { GithubState } from './context/GithubContext';
import { BrowserRouter as Browser } from 'react-router-dom';
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <GithubState>
      <Browser>
        <Hero />
      </Browser>
    </GithubState>
  );
}

export default App;
