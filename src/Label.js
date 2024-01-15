import React from 'react'

const Label = ({team}) => {
  return (
    <label 
    style={(team.checked) ? {textDecoration: 'line-through'}: null}
    >{team.team}</label>
  )
}

export default Label