import React from 'react';
import './App.css';
import Display from './component/display';
import { useCounter } from './share/context'
import Controls from './component/controls';

function App() {
  const { state, dispatch } = useCounter()
  return (
  <>
    <Display {...state} />
    <Controls handler={dispatch} />
  </>
  );
}

export default App;
