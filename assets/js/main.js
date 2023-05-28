const baseURL = "https://ghibliapi.vercel.app/films/"
const containerDiv = document.getElementById('container')
const searchDiv = document.getElementById('searchContainer')
let searchInput = document.getElementById('search')

fetch(baseURL)
.then(res => res.json())
.then(D => {
    console.log(D)
    D.forEach(film => { 
        makeFilmDiv(film.image, film.title, film.original_title, film.director, film.description, containerDiv)
    });
})

// FILM PULL
const makeFilmDiv = (image, title, original_title, director, description, divForInfo) => {
    const filmDiv = document.createElement('div')
    filmDiv.setAttribute('id', 'card')
    const filmPic = document.createElement('img')
    const filmTitle = document.createElement('h3')
    const filmOriginalTitle = document.createElement('h3')
    const filmDirector = document.createElement('p')
    const filmDescription = document.createElement('p')

    filmPic.src = image
    filmPic.style = "height: 400px; width: auto;"

    filmTitle.textContent = title
    filmTitle.style = "font-weight: 700; color: #373737;"

    filmOriginalTitle.textContent = original_title
    filmOriginalTitle.style = "color: #373737;"

    filmDirector.textContent = `Director: ${director}`
    filmDirector.style = "font-weight: 400; color: #373737;"

    // filmDescription.textContent = description
    // filmDescription.style = "max-width: 250px; text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; color: #373737;"

    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmOriginalTitle)
    filmDiv.appendChild(filmDirector)
    filmDiv.appendChild(filmDescription)

    divForInfo.appendChild(filmDiv)
}

// Search Bar Function
function getFilmResults(e) {
    e.preventDefault()
        
    fetch(`https://ghibliapi.vercel.app/films/`)
    .then(res => res.json())
    .then(data => {
        const movieResult = data.filter(film => film.title.toLowerCase().includes(searchInput.value.toLowerCase()))
        console.log(movieResult)
        makeMovieDiv(movieResult[0].image, movieResult[0].title, movieResult[0].original_title, movieResult[0].original_title_romanised, movieResult[0].release_date, movieResult[0].director, movieResult[0].producer, movieResult[0].description, searchDiv)
    })
    .catch(error => (console.log(`Error: Unknown Film, ${error}`)))
}

// SEARCH BAR RESULTS
const makeMovieDiv = (image, title, original_title, original_title_romanised, release_date, director, producer, description, divForInfo) => {
    divForInfo.innerHTML = ""

    const movieDiv = document.createElement('div')
    const moviePic = document.createElement('img')
    const movieTitle = document.createElement('h3')
    const movieOriginalTitle = document.createElement('h3')
    const movieOriginalTitleRomanised = document.createElement('h3')
    const movieReleaseDate = document.createElement('p')
    const movieDirector = document.createElement('p')
    const movieProducer = document.createElement('p')
    const movieDescription = document.createElement('p')

    moviePic.src = image
    moviePic.style = "height: 400px; width: auto;"

    movieTitle.textContent = title
    movieTitle.style = "font-weight: 700; color: #373737;"

    movieOriginalTitle.textContent = `${original_title} | ${original_title_romanised}`
    movieOriginalTitle.style = "color: #373737;"

    movieReleaseDate.textContent = `Release Date: ${release_date}`
    movieReleaseDate.style = "color: #373737;"

    movieDirector.textContent = `Director: ${director} | Producer: ${producer}`
    movieDirector.style = "font-weight: 400; color: #373737;"

    movieDescription.textContent = description
    movieDescription.style = "color: #373737;"

    movieDiv.appendChild(moviePic)
    movieDiv.appendChild(movieTitle)
    movieDiv.appendChild(movieOriginalTitle)
    movieDiv.appendChild(movieOriginalTitleRomanised)
    movieDiv.appendChild(movieReleaseDate)
    movieDiv.appendChild(movieDirector)
    movieDiv.appendChild(movieProducer)
    movieDiv.appendChild(movieDescription)

    divForInfo.appendChild(movieDiv)
}