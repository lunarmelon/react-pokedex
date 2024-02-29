import React from 'react';
import { Pokemon } from '../models/Pokemon';
import './Pokemon.css'

interface PokeDescProps{
    pokemon:Pokemon;
}

export default function PokeDescriptionComponent(props:PokeDescProps){
    return(
        <>
            <h1 className='btn-titulo'>Description</h1>
            {props.pokemon.flavor_text_entries.slice(0, 5).map((flavorText)=>{
                return(
                    <p key={flavorText.flavor_text}>{flavorText.flavor_text}</p>
                )
            })}
        </>
    )

}