import React from 'react';
import { GithubContext, GithubState } from './context/GithubContext';
import Hero from './components/Hero'
import './App.css';
console.log(GithubContext)
console.log(GithubState)

function App() {
  return (
    <GithubContext>
      <Hero />
    </GithubContext>

  );
}

export default App;
