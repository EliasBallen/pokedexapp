import Pokedata from "components/Pokedata"
import "./styles.css"
import Poketype from "components/Poketype"
import { Link } from "wouter"
export default function Pokemon({types,sprites,stats,moves,name,order,abilities,height,weight,id}){

    return <Link Link to={`/pokemon/${id}`}>        
        <div className="Pokemon">
        <h3 className="pokename">{name}</h3> 
        <img src={sprites.front_default} alt="pok"/>
        <p className="typetitle">type</p>
        <div className="typegrid">
          {
            
        types.map(({type})=><Poketype type = {type.name}/>)
        
        }
        </div>
        </div>
        </Link>
/*<Pokedata 
            types = {types}
            sprites = {sprites}
            stats = {stats}
            moves = {moves}
            order = {order}
            abilities = {abilities}
            height = {height}
            weight = {weight}
            name = {name}
            />
*/

}