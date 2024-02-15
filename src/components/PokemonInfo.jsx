import React, { useState, useEffect } from 'react'
import { PokemonAPI } from '../configs/axios'
import * as LR from "lucide-react"
import Button from './Button';
const PokemonInfo = ({ selectedPokemon }) => {
    // Use the selectedPokemon to display information

    const [myPokemon, setMyPokemon] = useState({})
    const [spriteIndex, setSpriteIndex] = useState(0);
    const [sprite, setSprite] = useState([]);
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                if (selectedPokemon) {

                    // Use the name property from selectedPokemon in the API call
                    const res = await PokemonAPI.get(`/pokemon/${selectedPokemon.name}`);
                    setMyPokemon(res.data);
                    setSprite([
                        res.data.sprites.front_default,
                        res.data.sprites.back_default
                    ]);
                    setSpriteIndex(0)
                }
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };
        fetchPokemonDetails();
    }, [selectedPokemon]);

    const [activeTab, setActiveTab] = useState('1');

    const handleClick = (dataId) => {
        setActiveTab(dataId);
    };
    const typeColor = {
        normal: "bg-gray-400",
        fire: "bg-red-400",
        water: "bg-sky-400",
        electric: "bg-yellow-400",
        grass: "bg-emerald-400",
        ice: "bg-blue-400",
        fighting: "bg-rose-400",
        poison: "bg-purple-400",
        ground: "bg-yellow-800",
        flying: "bg-indigo-400",
        psychic: "bg-pink-400",
        bug: "bg-green-400",
        rock: "bg-stone-400",
        ghost: "bg-violet-400",
        dragon: "bg-purple-400",
        dark: "bg-neutral-400",
        steel: "bg-slate-400",
        fairy: "bg-pink-400",
    }
    const textTypeColor = {
        normal: "text-gray-900",
        fire: "text-red-900",
        water: "text-sky-900",
        electric: "text-yellow-900",
        grass: "text-emerald-900",
        ice: "text-blue-900",
        fighting: "text-rose-900",
        poison: "text-purple-900",
        ground: "text-yellow-800",
        flying: "text-indigo-900",
        psychic: "text-pink-900",
        bug: "text-green-900",
        rock: "text-stone-900",
        ghost: "text-violet-900",
        dragon: "text-purple-900",
        dark: "text-neutral-900",
        steel: "text-slate-900",
        fairy: "text-pink-900",
    }
    return (
        <>
            {selectedPokemon ? (
                <div className='shadow-lg md:p-5 mx-5 md:mt-28 lg:mt-32 rounded-t-2xl md:rounded-2xl bg-white'>
                    <div className='flex items-center justify-center pokemon-info-sprites'>
                        {
                            sprite[spriteIndex]
                                ? (
                                    // <img src={sprite[spriteIndex]} alt="" style={{ height: '200px' }} />
                                    <img src={`https://img.pokemondb.net/sprites/home/normal/${selectedPokemon.name}.png`} alt="" />
                                )
                                : (
                                    <div>
                                        Loading
                                    </div>
                                )
                        }
                    </div>
                    <div className='text-center flex flex-col gap-2'>
                        <h2 className='font-bold text-2xl capitalize'>{selectedPokemon.name}</h2>
                        {/* {myPokemon && myPokemon.types && myPokemon.types.map((val, index) => (
                            <p key={index}>
                                {val.type.name}
                            </p>
                        ))} */}
                        <div className='flex gap-2 justify-center font-bold uppercase'>
                            {myPokemon.types && myPokemon.types.length > 0 && (
                                <div className={`p-2 ${typeColor[myPokemon.types[0].type.name]} ${textTypeColor[myPokemon.types[0].type.name]} rounded-lg`}>
                                    <p>{myPokemon.types[0].type.name}</p>
                                </div>
                            )}
                            {myPokemon.types && myPokemon.types.length > 1 && (
                                <div className={`p-2 ${typeColor[myPokemon.types[1].type.name]} ${textTypeColor[myPokemon.types[1].type.name]} rounded-lg`}>
                                    <p>{myPokemon.types[1].type.name}</p>
                                </div>
                            )}
                        </div>
                        {/* <p>Orders: {myPokemon.orders}</p>
                        <p>Height: {myPokemon.height}</p>
                        <p>Base Experience: {myPokemon.base_experience}</p> */}
                    </div>
                    <div>
                        <div className={`tab-a ${activeTab === "1" ? 'active-a' : ''}`} data-id="1" onClick={() => handleClick("1")}>
                            Tab 1
                        </div>
                        <div className={`tab-a ${activeTab === "2" ? 'active-a' : ''}`} data-id="2" onClick={() => handleClick("2")}>
                            Tab 2
                        </div>
                        <div className={`tab-a ${activeTab === "3" ? 'active-a' : ''}`} data-id="3" onClick={() => handleClick("3")}>
                            Tab 3
                        </div>
                        <div className={`tab ${activeTab === "1" ? 'tab-active px-2' : ''}`} data-id="1">
                            Content for Tab 1
                        </div>
                        <div className={`tab ${activeTab === "2" ? 'tab-active px-2' : ''}`} data-id="2">
                            Content for Tab 2
                        </div>
                        <div className={`tab ${activeTab === "3" ? 'tab-active px-2' : ''}`} data-id="3">

                        </div>
                    </div>

                </div >

            ) : (
                <p>No Pokemon selected</p>
            )}
        </>
    );
};

export default PokemonInfo