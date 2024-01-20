import InputForm from './useStateWorking/InputForm';
import Display from './useStateWorking/Display';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [list,setList] = useState([])

  function addGoal(goal) {
    setList([...list,goal])
  }
 
  return (
     <>
        <InputForm addGoal={addGoal} />
        <Display list={list} />
     </>
  );
}

export default App;
