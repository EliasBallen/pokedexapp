import { useContext, useEffect, useState } from "react";
import PokeContext from "context/pokemonContext";
import Pokemon from "components/Pokemon";
import Pokedata from "components/Pokedata";
import getsinglepokemon from "services/getsinglepokemon";
import { API_URL } from "services/settings";
import usePokelist from "hooks/usePokelist";

export default function Details({params}){
    const {pokelist,loading,setLoading} = useContext(PokeContext)
    const [pokemon,setPokemon] = useState({})
    const [isloading,setIsLoading] =  useState(true)
    
    console.log(pokelist)
    useEffect( function(){

        const loadsinglepokemon = async ()=>{
            if(!loading){
                console.log("here")
                const pokemonresp = await pokelist.find(singlepokemon =>{ 
                    console.log(singlepokemon.id,params.id)    
                    return singlepokemon.id+"" === params.id
                })
                return pokemonresp
            }else{
                return await getsinglepokemon(`${API_URL}pokemon/${params.id}/`)
            }
            
         }
         const chargepokemons = async()=>{
            const response = await loadsinglepokemon()
            await setPokemon(response)
            await console.log(pokemon)
            await setIsLoading(false)
         }

        if(isloading){
           chargepokemons()
        }
        
        

    },[isloading,loading])

    console.log(isloading)
    console.log(pokemon)
    return isloading ? <p>Loading...</p> :<Pokedata {...pokemon} modurl = "../icons/"/> ;


}