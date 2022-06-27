import React from 'react'
import { useState } from 'react';
import Character from './Character';

const CharacterList = ({characters, page, setPage}) => {

  function NavPage(){
    return(
    <div className='d-flex justify-content-between align-items-center'>
        <p>Page: {page}</p>
        <button 
            onClick={(e) => setPage(page + 1)}
            className='btn btn-primary btn-sm'>Next Page
        </button>
    </div>

    )
  }

  return (

    
    <div className='container'>
        <NavPage page={page} setPage={setPage}></NavPage>
        <div className='row'>
        {
        characters.map(character => {
        return(
            <div className='col-md-4' key={character.id}>
                <Character  character={character}></Character>
            </div>
      )
    })}
        </div>
        <NavPage page={page} setPage={setPage}></NavPage>
    </div>
)
}

export default CharacterList
      
