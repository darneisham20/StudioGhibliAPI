const baseURL = "https://ghibliapi.vercel.app/people/"
const peopleContainerDiv = document.getElementById('peopleContainer')
const peopleSearchDiv = document.getElementById('peopleSearchContainer')
let searchInput = document.getElementById('pSearch')

fetch(baseURL)
.then(res => res.json())
.then(D => {
    console.log(D)
    D.forEach(people => { 
        makePeopleDiv(people.name, people.gender, people.age, people.eye_color, people.hair_color, peopleContainerDiv)
    });
})

// PEOPLE PULL
const makePeopleDiv = (name, gender, age, eye_color, hair_color, peopleDivForInfo) => {
    const peopleDiv = document.createElement('div')
    peopleDiv.setAttribute('id', 'pCard')
    const peopleName = document.createElement('h3')
    const peopleGender = document.createElement('p')
    const peopleAge = document.createElement('p')
    const peopleEyeColor = document.createElement('p')
    const peopleHairColor = document.createElement('p')

    peopleName.textContent = name
    peopleName.style = "font-weight: 700; color: #FFFFFF;"

    peopleGender.textContent = gender
    peopleGender.style = "color: #FFFFFF"

    peopleAge.textContent = age
    peopleAge.style = "color: #FFFFFF"

    peopleEyeColor.textContent = eye_color
    peopleEyeColor.style = "color: #FFFFFF"

    peopleHairColor.textContent = hair_color
    peopleHairColor.style = "color: #FFFFFF"

    peopleDiv.appendChild(peopleName)
    peopleDiv.appendChild(peopleGender)
    peopleDiv.appendChild(peopleAge)
    peopleDiv.appendChild(peopleEyeColor)
    peopleDiv.appendChild(peopleHairColor)
    peopleDivForInfo.appendChild(peopleDiv)
}

// People Search Bar Function
function getPeopleResults(e) {
    e.preventDefault()

    fetch(`https://ghibliapi.vercel.app/people/`)
    .then(res => res.json())
    .then(data => {
        const characterResult = data.filter(people => people.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        console.log(characterResult)
        makeCharacterDiv(characterResult[0].name, characterResult[0].species, characterResult[0].gender, characterResult[0].age, characterResult[0].eye_color, characterResult[0].hair_color, characterResult[0].films, peopleSearchDiv)
    })
    .catch(error => (console.log(`Error: Unknown Character, ${error}`)))
}

// PEOPLE SEARCH BAR RESULTS
const makeCharacterDiv = (name, species, gender, age, eye_color, hair_color, films, peopleDivForInfo) => {
    peopleDivForInfo.innerHTML = ""

    const characterDiv = document.createElement('div')
    const characterName = document.createElement('h3')
    const characterSpecies = document.createElement('p')
    const characterGender = document.createElement('p')
    const characterAge = document.createElement('p')
    const characterEyeColor = document.createElement('p')
    const characterHairColor = document.createElement('p')
    const characterFilms = document.createElement('p')

    characterName.textContent = name
    characterName.style = "font-weight: 700; color: #FFFFFF;"

    characterSpecies.textContent = species
    characterSpecies.style = "color: #FFFFFF"

    characterGender.textContent = `Gender: ${gender}`
    characterGender.style = "color: #FFFFFF"

    characterAge.textContent = `Age: ${age}`
    characterAge.style = "color: #FFFFFF"

    characterEyeColor.textContent = `Eye Color: ${eye_color}`
    characterEyeColor.style = "color: #FFFFFF"

    characterHairColor.textContent = `Hair Color: ${hair_color}`
    characterHairColor.style = "color: #FFFFFF"

    characterFilms.textContent = films
    characterFilms.style = "color: #FFFFFF"

    characterDiv.appendChild(characterName)
    characterDiv.appendChild(characterSpecies)
    characterDiv.appendChild(characterGender)
    characterDiv.appendChild(characterAge)
    characterDiv.appendChild(characterEyeColor)
    characterDiv.appendChild(characterHairColor)
    characterDiv.appendChild(characterFilms)
    
    peopleDivForInfo.appendChild(characterDiv)
}