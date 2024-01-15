import React from 'react'
import Label from './Label'
import { FaTrash } from 'react-icons/fa'

const Teams = ({ team, handleClick, deleteTeams}) => {
  return (
    <li className='team' key={team.id}
    onDoubleClick={() => handleClick(team.id)}
    >
        <input
            type='checkbox'
            checked={team.checked}
            onClick={() => handleClick(team.id)}
        />
       
       <Label 
        team={team}
        
       />
        <FaTrash 
        role='button' 
        tabIndex='0' 
        onClick={()=> deleteTeams(team.id)}
        aria-label={`Delete ${team.team}`}
        />
    </li>
  )
}

export default Teams