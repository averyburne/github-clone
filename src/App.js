import React from 'react';
import { GithubContext, GithubState } from './context/GithubContext';
import './App.css';

function App() {
  return (
    <GithubContext>
      <div className="App">
      </div>
    </GithubContext>

  );
}

export default App;
