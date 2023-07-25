import {useEffect, useState} from "react";
import '../Stylesheets/PokemonCard.css'

const PokemonCard = (props) => {
  const [pokemonId, setPokemonId] = useState(0)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImg, setPokemonImg] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])

  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  const getPokemon = async () => {
    const response = await fetch(URL.concat(props.id))
    const pokemonResp = await response.json()

    setPokemonId(pokemonResp['id'])
    setPokemonName(pokemonResp['name'])
    setPokemonImg(pokemonResp['sprites']['other']['official-artwork']['front_default'])
    setPokemonTypes(pokemonResp['types'])
  }

  const getTipo = (elemento, i) => {
    switch (elemento) {
      case 'fire':
        return <span key={i} style={{backgroundColor: "red"}}>{elemento}</span>
      case 'poison':
        return <span key={i} style={{backgroundColor: "violet"}}>{elemento}</span>
      case 'water':
        return <span key={i} style={{backgroundColor: "blue"}}>{elemento}</span>
      case 'normal':
        return <span key={i} style={{backgroundColor: "beige"}}>{elemento}</span>
      case 'grass':
        return <span key={i} style={{backgroundColor: "green"}}>{elemento}</span>
      case 'flying':
        return <span key={i} style={{backgroundColor: "aqua"}}>{elemento}</span>
      case 'bug':
        return <span key={i} style={{backgroundColor: "burlywood"}}>{elemento}</span>
      case 'electric':
        return <span key={i} style={{backgroundColor: "yellow"}}>{elemento}</span>
      case 'ground':
        return <span key={i} style={{backgroundColor: "brown"}}>{elemento}</span>
      default:
        return <span key={i} > {elemento}</span>
    }
  }

  useEffect(() => {
    getPokemon().then();
    console.log(pokemonTypes.map((type) => console.log(type.type.name)))
  }, [pokemonId])

  return (
    <div className={'pokemon-card'}>
      <div>{pokemonId}</div>
      <div>{pokemonName}</div>
      <img className={'pokemon-img'} src={pokemonImg} alt={'pokemonImg'}/>
      <ul>
        {
          pokemonTypes.map((type, index) => (
            <li key={index}>
              {
                getTipo(type.type.name, index)
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PokemonCard