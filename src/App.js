import React, { Component } from 'react';
import Pokemon from './components/pokemons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      value: ''
    };

    this.getValue = this.getValue.bind(this);
  }
  state = {
    pokemon: [],
    value: ''
  }
  
  getValue(event) {
    this.setState({value: event.target.value});
    return this.componentDidMount();
  }
  componentDidMount(){
    let nameSearch  = this.state.value;
    var apiPokemon = '';
    console.log("badah", nameSearch)
    if(!nameSearch){
     apiPokemon = 'https://api.pokemontcg.io/v1/cards?name=charizard'
    }
    else {
      apiPokemon = `https://api.pokemontcg.io/v1/cards?name=${nameSearch}`
    }
    fetch(apiPokemon)
    .then(res => res.json())
    .then((data) => {
      var pokemonList = data.cards;
      console.log(pokemonList)
      this.setState({pokemon: pokemonList})
      console.log(data)
    })
    .catch(console.log)
  }

  render(){
    return(
     <div className="text-center mt-5 pt-5">
      <input type="text" placeholder="Digite aqui o nome do pokemon" onChange={this.getValue} value={this.state.value}/>
      <Pokemon pokemon={this.state.pokemon}/>
      </div>
    )
  }
}
export default App;