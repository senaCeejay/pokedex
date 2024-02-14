import React from 'react'

const PokemonCards = (props) => {
    return (
        <>
            <div className='text-center pokemon-card rounded-xl bg-white'>
                <h1 className='text-xl font-bold capitalize'>{props.name}</h1>
            </div>
        </>
    )
}

export default PokemonCards