import React from 'react';
import { Pokemon } from '../models/Pokemon';
import './Pokemon.css'


interface PokeInfoProps{
    pokemon:Pokemon;
}



export default function PokeInfoComponent(props:PokeInfoProps){
    return(
        <>
            <h1 className='btn-titulo'>Abilities</h1>
            {props.pokemon.abilities.map((ability)=>{
                return(
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                )
            })}
        </>
    )

}