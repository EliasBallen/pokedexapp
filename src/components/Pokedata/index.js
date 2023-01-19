import "components/Pokemon/styles.css"
import "./styles.css"
import Poketype from "components/Poketype"
import { useState } from "react"

export default function Pokedata({ types, sprites, stats, moves, name, order, abilities, height, weight, id, modurl }) {
  const [page, setpage] = useState(0) /*0  0-3  1  4-7  4*page - (4(page+1)-1)  */
  const limit = 4
  const moveslimit = moves.length


  return <div className="Pokedata">


    {/*image and types*/}


    <div className="headzone-grid">

      <div className="details-card details-head">
        <p>{name}</p>
        <img className="details-image" src={sprites.front_default} alt="pok" />
        <div className="typegrid">
          {
            types.map(({ type }) => <Poketype type={type.name} modurl={modurl} />)
          }
        </div>
      </div>

      {/*appearance-stats*/}

      <div className="details-appearance-stats details-card">
        <div className="details-appearance">
          <div className="details-appeareance-item">
            <p>weight : {weight / 10} kg</p>
          </div>

          <div className="details-appeareance-item">
            <p>height : {height / 10} m</p>
          </div>
        </div>

        <p> base stats</p>
        {
          stats.map(({ base_stat, stat }) => <>

            <div className="details-stats">

              <div className="details-stats-item">
                <p>{stat.name}</p>
              </div>
              <div className="details-stats-item">
                <p>{base_stat}</p>
              </div>

            </div>

          </>)
        }
      </div>
    </div>

    {/*abilities*/}

    <div className="details-card details-abilitieshead">
      <h2>abilities</h2>
      <div className="details-abilities">
        {
          abilities.map(({ ability }) =>
            <>
              <div className="details-abilities-item">
                <p>{ability.name}</p>
              </div>
            </>)
        }
      </div>
    </div>





    <div className="details-card details-moveshead">    
    <div className="details-moves">
      <h2>moves</h2>
      {
        moves.map(({ move }, index) => {
          if (index >= limit * page & index < (limit * (page + 1))) {
            return <p>{move.name}</p>
          }
        })
      }



    </div>

    <div className="details-moves-buttons">
      <div className="details-moves-buttons-item  button-reverse"
            onClick={() => setpage((prevpage) => {
              if (prevpage === 0) return 0
              return (prevpage - 1)
            })}>

            <h2 > {'<<'} </h2>
      </div>

      <div className="details-moves-buttons-item button-foward" 
            onClick={() => setpage(prevpage => {
                if ((prevpage + 1) * limit >= moveslimit) return prevpage
                return (prevpage + 1)
                })}>
      
            <h2 >{'>>'}</h2>
      </div>
    </div>
    </div>            

  </div>
}