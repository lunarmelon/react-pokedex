import React from 'react';
import { Pokemon } from '../models/Pokemon';
import './Pokemon.css'


interface PokemonProps{
    pokemon:Pokemon;
}



export default function PokemonComponent(props:PokemonProps){
    return(
        <>
            <p className='btn-id'>{props.pokemon.id}</p>
            <p className='btn-titulo'>{props.pokemon.name}</p>
            <img className='btn-imagen' width={"100px"} src={props.pokemon?.sprites.other['official-artwork'].front_default} alt={props.pokemon?.name}></img>
            
        </>
    )

}