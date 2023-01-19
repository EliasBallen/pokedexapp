import React, { useState } from "react"

const Context = React.createContext({})


export function PokemonContextProvider({children}){
    const [pokelist,setPokelist] = useState([])
    const [loading,setLoading] = useState(true)
    return <Context.Provider value={{pokelist,setPokelist,loading,setLoading}}>
        {children}
    </Context.Provider>
}
export default Context