import {useEffect, useState} from "react";
import '../Stylesheets/PokemonCard.css'

const PokemonCard = ({id}) => {
  const [pokemonId, setPokemonId] = useState(0)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImg, setPokemonImg] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState([])

  const URL = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    getPokemon().then();
  }, [pokemonId])

  const getPokemon = async () => {
    const response = await fetch(URL.concat(id))
    const pokemonResp = await response.json()

    setPokemonId(pokemonResp['id'])
    setPokemonName(pokemonResp['name'])
    setPokemonImg(pokemonResp['sprites']['other']['official-artwork']['front_default'])
    setPokemonTypes(pokemonResp['types'])
  }

  const getType = (element, i) => {
    switch (element) {
      case 'fire':
        return <span key={i} style={{backgroundColor: "red"}}>{element}</span>
      case 'poison':
        return <span key={i} style={{backgroundColor: "violet"}}>{element}</span>
      case 'water':
        return <span key={i} style={{backgroundColor: "blue"}}>{element}</span>
      case 'normal':
        return <span key={i} style={{backgroundColor: "beige"}}>{element}</span>
      case 'grass':
        return <span key={i} style={{backgroundColor: "green"}}>{element}</span>
      case 'flying':
        return <span key={i} style={{backgroundColor: "aqua"}}>{element}</span>
      case 'bug':
        return <span key={i} style={{backgroundColor: "burlywood"}}>{element}</span>
      case 'electric':
        return <span key={i} style={{backgroundColor: "yellow"}}>{element}</span>
      case 'ground':
        return <span key={i} style={{backgroundColor: "brown"}}>{element}</span>
      default:
        return <span key={i} > {element}</span>
    }
  }



  return (
    <div className={'pokemon-card'}>
      <h3>{pokemonName}</h3>
      <img className={'pokemon-img'} src={pokemonImg} alt={'pokemonImg'}/>
      <ul className={'pokemon-types'}>
        {
          pokemonTypes.map((type, index) => (
            <li key={index}>
              {
                getType(type.type.name, index)
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PokemonCard