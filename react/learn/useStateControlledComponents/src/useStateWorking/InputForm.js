import React, { useState } from 'react'

const InputForm = (props) => {
const [current,setCurrent] = useState({name:'',value:''})

function updateCurrent(e){
    setCurrent({...current,[e.target.name] : [e.target.value]})
}

function submitHandler(e){
    e.preventDefault()
    props.addGoal(current)
    // setCurrent({name:'',value:''})
}

  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text' name='name' placeholder='Name' onChange={updateCurrent}/><br/>
        <input type='text' name='value' placeholder='Value' onChange={updateCurrent}/><br/>
        <button type='submit'>Sumit</button>
        </form>
    </div>
  )
}

export default InputForm
