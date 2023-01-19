
import { PokemonContextProvider } from 'context/pokemonContext';
import Details from 'pages/Details';
import Home from 'pages/Home';
import { Route } from 'wouter';

import './App.css';

function App() {
  return (
    <div className="App">

      <section className="App-content
      ">
        <img src='pokedextitle.png' id='pokeapptitle' />

      <PokemonContextProvider >
      
       <Route component={Home}
        path="/"/>

        <Route 
      component={Details}
      path='/pokemon/:id'/>


      </PokemonContextProvider>
      </section>
    </div>
  );
}

export default App;
