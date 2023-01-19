import pokemonContext  from "context/pokemonContext"
import { useContext, useEffect, useState } from "react"
import getpokemons from "services/getpokemons"
import { getsingleresults } from "services/getsinglepokemon"

const START_PAGE = 0
export default function usePokelist(){
    const {pokelist,setPokelist,loading,setLoading} = useContext(pokemonContext)
    const [page,setPage] = useState(START_PAGE)
    const [loadingNextPage,setLoadingNextPage] = useState(false)

    useEffect(function(){
        console.log(loading) 
        console.log(pokelist)
        if(loading){
            getpokemons() 
            .then((pokedex)=>{ 
                Promise.all(pokedex.map(({ name, url }) => {
                    return fetch(url)
                        .then(response => response.json())
                        .then(getsingleresults)
                }))
                .then((pokedata)=>{
                    setPokelist(pokedata)   
                })       
                setLoading(false)   
            })
            
        }          
    },[pokelist,loading,setPokelist])

    useEffect(function (){
        if (page===START_PAGE)return
        setLoadingNextPage(true)
        getpokemons({page:page}) 
            .then((pokedex)=>{ 
                Promise.all(pokedex.map(({ name, url }) => {
                    return fetch(url)
                        .then(response => response.json())
                        .then(getsingleresults)
                }))
                .then((pokedata)=>{
                    setPokelist(prevPokelist => prevPokelist.concat(pokedata))
                })       
                setLoadingNextPage(false)   
            })
    },[page,setPokelist])




    return {pokelist,loading, loadingNextPage, page,setPage}
}


