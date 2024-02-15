import React from 'react'

const PokemonCards = (props) => {
    return (
        <>
            {/* https://pokemondb.net/sprites */}
            <div className='text-center pokemon-card rounded-2xl bg-white'>
                <div className='flex justify-center pokemon-sprites'>
                    {/* <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.name}.gif`} alt="Bulbasaur" /> */}
                    {/* <img src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.gif`} alt={`${props.name}`} /> */}
                    <img src={`https://img.pokemondb.net/sprites/home/normal/${props.name}.png`} alt={`${props.name}`} />
                </div>
                <h1 className='text-xl font-bold capitalize'>{props.name}</h1>
            </div>
        </>
    )
}

export default PokemonCards