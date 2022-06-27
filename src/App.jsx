import { useState, useEffect } from 'react'
import CharacterList from './components/CharacterList';
import './App.css'

function App() {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results);
    }
    fetchData()
  },[page]);
      


  return (
    <div className="bg-dark text-white">
     <button onClick={e=>console.log(characters)}>characters</button>
     <h1 className='text-center display-1 py-4'>Rick && Morty</h1>

    {loading ? (<h1>loading...</h1>)
    : (
      <CharacterList characters={characters} page={page} setPage={setPage}></CharacterList>

    )  
    }

    
    </div>
  )
}

export default App
    
   
  



