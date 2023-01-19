import { API_URL } from "./settings";

const apiresponseresults =  apiresponse =>{
   const {results} = apiresponse?apiresponse:[]
    return  results
}
export default function getpokemons({limit = 20, page = 0}={}){
    let apiURL = `${API_URL}pokemon?limit=${limit}&offset=${page*limit}`
    return fetch(apiURL)
    .then(res=>res.json())
    .then(apiresponseresults)
}