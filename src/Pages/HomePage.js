import PokemonCard from "../Components/PokemonCard";
import MenuBar from "../Components/MenuBar";

const HomePage = () => {
  let pokemones = []
  for (let i = 1; i < 30; i++){
    pokemones.push(<PokemonCard id={i}/>)
  }

  return (
    <div>
      <MenuBar />
      <h1>Pokemones</h1>
      {
        pokemones
      }
    </div>
  )
}

export default HomePage