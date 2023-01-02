const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')
const form = document.querySelector('.form')
const input = document.querySelector('.input-search')




const fetchPokemon = async (pokemon) => {

    const APIResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponse.json()
    // console.log(APIResponse);

    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']
    ['generation-v']['black-white']['animated']['front_default'];

}

// renderPokemon('25')

form.addEventListener('submit', (event) => {

    event.preventDefault()
    
    renderPokemon(input.value)
    input.value = '';
})

