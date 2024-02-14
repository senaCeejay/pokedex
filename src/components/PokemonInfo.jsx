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


    const handlePrevClick = () => {
        setSpriteIndex(1);
    };

    const handleNextClick = () => {
        setSpriteIndex(0)
    };
    return (
        <>
            {selectedPokemon ? (
                <div className='shadow-lg p-5 mx-5 mt-20 rounded-lg bg-white'>
                    <div className='flex items-center justify-center'>
                        <div className='w-10 flex items-center justify-center'>
                            {spriteIndex === 1 &&
                                <Button variant="ghost" size="icon" className=" align-middle" onClick={handleNextClick}>
                                    <LR.ChevronLeft />
                                </Button>
                            }
                        </div>
                        {
                            sprite[spriteIndex]
                            ? (
                                <img src={sprite[spriteIndex]} alt="" style={{ height: '200px' }} />
                            )
                            : (
                                <div>
                                    Loading
                                </div>
                            )
                        }
                        <div className='w-10 flex items-center justify-center'>

                            {spriteIndex === 0 &&
                                <Button variant="ghost" size="icon" className=" align-middle" onClick={handlePrevClick}>
                                    <LR.ChevronRight />
                                </Button>
                            }
                        </div>
                    </div>
                    <h2>Name: {selectedPokemon.name}</h2>
                    <p>Height: {myPokemon.height}</p>
                    <p>Base Experience: {myPokemon.base_experience}</p>

                    <div>
                        <ul className='flex gap-5'>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
                    </div>
                </div >
            ) : (
                <p>No Pokemon selected</p>
            )}
        </>
    );
};

export default PokemonInfo