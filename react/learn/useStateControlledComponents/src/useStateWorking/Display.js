import React from 'react'

const Display = (props) => {
  return (
    <div>
        <ul>
            {props.list.map((g) => {
                return(
                <li key={g.name}>
                    <span>My First Name is {g.name} and last name is {g.value}</span>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Display
