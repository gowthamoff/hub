import { useReducer } from 'react';
import './App.css';

const reducer = ( state , action ) => {
  if(action.type === 'one') return {money : state.money+1}
  if(action.type === 'two') return {money : state.money+2}
  if(action.type === 'subone') return {money : state.money-1}
  if(action.type === 'subtwo') return {money : state.money-2}
  return state
}

function App() {

  const initialValue = {money:0}
  const [state,dispatch] = useReducer(reducer,initialValue) 
   
  return (
     <>   
        <h1>Value is {state.money} </h1>
        <button onClick={() => dispatch({type:'one'})}>Add One</button>
        <button onClick={() => dispatch({type:'two'})}>Add Two</button>
        <button onClick={() => dispatch({type:'subone'})}>sub One</button> 
        <button onClick={() => dispatch({type:'subtwo'})}>sub Two</button>
     </>
  );
}

export default App;
