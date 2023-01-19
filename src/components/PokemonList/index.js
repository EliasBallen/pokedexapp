import Pokemon from "components/Pokemon"
import "./style.css"
export default function PokemonList({pokelist}){
    return <div className="PokemonList">
            {pokelist.map((pokemon)=>{             
                return <Pokemon {...pokemon}/>
            })}               
    </div>

}