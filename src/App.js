
import { useEffect, useState } from 'react';
import './App.css';
import { PokemonAPI } from './configs/axios';
import PokemonCards from './components/PokemonCards';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
function App() {
    const [filter, setFilter] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        const pokemonAPI = async () => {
            const res = await PokemonAPI.get("/pokemon")
            setPokemons(res.data.results)
        }
        pokemonAPI()
    }, [])

    return (
        <>

            <div className='grid grid-cols-[3fr,1fr] flex-grow-1 overflow-auto pt-2 '>
                <div className='px-8 pb-4 overflow-x-hidden'>
                    <div className='rounded-xl  p-4 shadow-lg'>
                        <input onChange={(e) => {
                            setFilter(e.target.value)
                        }} className='w-full outline-none ' placeholder='Search Pokemon'></input>
                    </div>
                    <div className='my-3 w-full'>
                        <PokemonFilter />
                    </div>
                    <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]' >
                        {pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filter)).map((val, index) => {
                            return (<>
                                <div key={index} onClick={() => {
                                    setSelectedPokemon(val)
                                }} className=' rounded-lg shadow-lg cursor-pointer'>
                                    <PokemonCards name={val.name} url={val.url} selectedPokemon={selectedPokemon} />
                                </div>
                            </>)
                        })}
                    </div>
                </div>
                <div>
                    <PokemonInfo selectedPokemon={selectedPokemon} />
                </div>
            </div>
        </>
    );
}

export default App;
