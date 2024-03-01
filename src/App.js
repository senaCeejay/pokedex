
import { useEffect, useState } from 'react';
import './App.css';
import { PokemonAPI } from './configs/axios';
import PokemonCards from './components/PokemonCards';
import PokemonInfo from './components/PokemonInfo';
import * as LR from "lucide-react"
import Button from './components/Button';
function App() {
    const [filter, setFilter] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [showCard, setShowCard] = useState(false)
    useEffect(() => {
        const pokemonAPI = async () => {
            const res = await PokemonAPI.get("/pokemon")
            setPokemons(res.data.results)
        }
        pokemonAPI()
    }, [])
    const handlePokemonCard = (val) => {
        setSelectedPokemon(val)
        setShowCard(true)
    }
    return (
        <>
            <div className='container relative'>
                <div className='fixed w-full bg-white'>
                    <div className=' p-4 px-5 shadow-lg  bg-white block lg:hidden'>
                        <input
                            onChange={(e) => {
                                setFilter(e.target.value);
                            }}
                            className='w-full outline-none '
                            placeholder='Search Pokemon'
                        ></input>
                    </div>
                </div>
                <div className='grid md:grid-cols-[1fr,1fr] lg:grid-cols-[2fr,1fr] xl:grid-cols-[3fr,1fr] flex-grow-1 overflow-hidden'>
                    <div className='px-2 pb-4'>
                        <div className='rounded-xl p-4 shadow-lg mt-2 bg-white hidden lg:flex'>
                            <input
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                }}
                                className='w-full outline-none '
                                placeholder='Search Pokemon'
                            ></input>
                        </div>
                        <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-3 md:gap-y-2 lg:gap-y-10 mt-16 lg:mt-4 md:overflow-scroll px-4 pokemon-card-container pb-4'>
                            {pokemons
                                .filter((pokemon) =>
                                    pokemon.name.toLowerCase().includes(filter)
                                )
                                .map((val, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                handlePokemonCard(val)
                                            }}
                                            className=' rounded-lg shadow-lg cursor-pointer mt-16'
                                        >
                                            <PokemonCards
                                                name={val.name}
                                                url={val.url}
                                                selectedPokemon={selectedPokemon}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    {selectedPokemon === null ?
                        <div className='top-20 lg:top-0 right-10 lg:right-4 xl:right-24 hidden md:flex md:fixed pokemon-info'>
                            <PokemonInfo selectedPokemon={selectedPokemon} />
                        </div>
                        :
                        <div className='top-20 lg:top-0 right-10 lg:right-4 xl:right-12 hidden md:flex md:fixed pokemon-info'>
                            <PokemonInfo selectedPokemon={selectedPokemon} />
                        </div>
                    }
                </div>
                {showCard &&
                    <>
                        <div className='bg-gray-400 opacity-70 z-40 w-full h-full fixed top-0 md:hidden'>
                            <div className='p-2 flex justify-end'>
                                <Button variant="ghost" size="icon" onClick={() => {
                                    setShowCard(false)
                                }}>
                                    <LR.X />
                                </Button>
                            </div>
                        </div>
                        <div className='pokemon-info-modal fixed z-50 bottom-0 w-full md:hidden'>
                            <PokemonInfo selectedPokemon={selectedPokemon} />
                        </div>
                    </>
                }
            </div >
        </>
    );
}

export default App;
