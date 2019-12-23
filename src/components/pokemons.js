import React from 'react';


const Pokemon = ({ pokemon }) => {
    return(
    <div>
    <div className="text-center mt-5 mb-5">
        Olá
    </div>
    <div className="row m-5 p-5">
      {pokemon.map((pokemon) => (
      <div className="col-2">    
      <div className="text-center">
        <img src={ pokemon.imageUrl }alt="pokemonImg" />
        <h5>{pokemon.name}</h5> 
      </div>
      </div>
      ))}
    </div>
    </div>
    )
};


export default Pokemon;