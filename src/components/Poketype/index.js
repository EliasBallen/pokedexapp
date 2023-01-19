
import "./styles.css"

export default function Poketype({type, modurl = "icons/"}){
    let url = `${modurl}${type}.svg`
    let classtype = `type ${type}` 
    return <div className={classtype}>
     <img className="poketypeimg" src={url} alt={type}/>
    <p className="typetitle">{type}</p>
     </div>
}
