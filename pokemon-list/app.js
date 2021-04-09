//https://api.vschool.io/pokemon

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const allData = JSON.parse(xhr.responseText)
        const pokemons = allData.objects[0].pokemon
        console.log(pokemons)
        console.log(pokemons.length)
        printDomText(pokemons)
    }
   
}

function printDomText(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        const pokemonTag = document.createElement("h3")
        pokemonTag.textContent = arr[i].name
        document.body.appendChild(pokemonTag)
    }
    
}

