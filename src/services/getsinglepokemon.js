

export const getsingleresults = (apiresponse) => {
    const {types,sprites,stats,moves,name,order,abilities,height,weight,id} = apiresponse
    return {types,sprites,stats,moves,name,order,abilities,height,weight,id}
}

export default function  getsinglepokemon(url){
    return fetch(url)
    .then(response => response.json())
    .then(getsingleresults)
}



