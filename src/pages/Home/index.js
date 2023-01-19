import PokemonList from "components/PokemonList"
import useNearScreen from "hooks/useNearScreen"
import usePokelist from "hooks/usePokelist"
import debounce from "just-debounce-it"
import { useCallback, useEffect, useRef } from "react"

export default function Home(){
    const {pokelist,loading,setPage} = usePokelist()

    const externalRef = useRef()

    const {isNearScreen,fromRef} = useNearScreen({
        externalRef:loading?null:externalRef,
        once:false
    })
    //const handleNextPage = () =>setPage((currentPage)=>currentPage+1)
    const debounceHandleNextPage = useCallback(debounce(
        ()=>setPage((currentPage)=>currentPage+1),200),[])
    useEffect(function(){
            console.log(isNearScreen)
            if(isNearScreen){
                debounceHandleNextPage()
            }
        },[isNearScreen,debounceHandleNextPage])
        
    return <div>
        {loading?<h2>loading</h2>:
        <PokemonList pokelist={pokelist}/>
        }
        <div id="visor" ref={externalRef}></div>
    </div>

}