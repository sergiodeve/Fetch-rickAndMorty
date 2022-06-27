import React from 'react'

const character = ({character}) => {
  return (
    <div className='text-center p-2'>
        <h4 className='text-success'>{character.name}</h4>
        <img className='img-fluid rounded-pill' src={character.image} alt={character.name}></img>
        <p className='mt-2'><span className='text-bold'>Origen:</span> {character.origin.name}</p>
    </div>
  )
}

export default character