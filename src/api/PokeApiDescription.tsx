import {api} from './axiosConfig';

export const PokeApiDescription={
    getPokemonInfoById: async function(id:any){
        return api.get(`/pokemon-species/${id}`)
    }
}