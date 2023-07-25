import PokemonCard from "../Components/PokemonCard";

const HomePage = () => {
  let pokemones = []
  for (let i = 1; i < 30; i++){
    pokemones.push(<PokemonCard id={i}/>)
  }

  return (
    <div>
      <h1>Pokemones</h1>
      {
        pokemones
      }
    </div>
  )
}

export default HomePage