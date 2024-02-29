export interface Pokemon{
    id:number;
    name:string;
    abilities:Ability[];
    sprites:{
        other:{
            'official-artwork':{
                front_default:string;
            }
        }
    }
    flavor_text_entries:FlavorText[];
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}

interface FlavorText{
    flavor_text:string;
}