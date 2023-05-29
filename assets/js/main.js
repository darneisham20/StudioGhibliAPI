const baseURL = "https://ghibliapi.vercel.app/films/"
const containerDiv = document.getElementById('container')
const searchDiv = document.getElementById('searchContainer')
let searchInput = document.getElementById('search')

fetch(baseURL)
.then(res => res.json())
.then(D => {
    console.log(D)
    D.forEach(film => { 
        makeFilmDiv(film.image, film.title, film.original_title, containerDiv)
    });
})

// FILM PULL
const makeFilmDiv = (image, title, original_title, divForInfo) => {
    const filmDiv = document.createElement('div')
    filmDiv.setAttribute('id', 'card')
    const filmPic = document.createElement('img')
    const filmTitle = document.createElement('h3')
    const filmOriginalTitle = document.createElement('h3')

    filmPic.src = image
    filmPic.style = "height: 400px; width: auto;"

    filmTitle.textContent = title
    filmTitle.style = "font-weight: 700; color: #FFFFFF;"

    filmOriginalTitle.textContent = original_title
    filmOriginalTitle.style = "color: #FFFFFF;"

    filmDiv.appendChild(filmPic)
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmOriginalTitle)
    
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
        makeMovieDiv(movieResult[0].image, movieResult[0].title, movieResult[0].original_title, movieResult[0].original_title_romanised, movieResult[0].release_date, movieResult[0].director, movieResult[0].producer, movieResult[0].running_time, movieResult[0].description, searchDiv)
    })
    .catch(error => (console.log(`Error: Unknown Film, ${error}`)))
}

// SEARCH BAR RESULTS
const makeMovieDiv = (image, title, original_title, original_title_romanised, release_date, director, producer, running_time, description, divForInfo) => {
    divForInfo.innerHTML = ""

    const movieDiv = document.createElement('div')
    const moviePic = document.createElement('img')
    const movieTitle = document.createElement('h3')
    const movieOriginalTitle = document.createElement('h3')
    const movieOriginalTitleRomanised = document.createElement('h3')
    const movieReleaseDate = document.createElement('p')
    const movieDirector = document.createElement('p')
    const movieProducer = document.createElement('p')
    const movieRunningTime = document.createElement('p')
    const movieDescription = document.createElement('p')

    moviePic.src = image
    moviePic.style = "height: 400px; width: auto;"

    movieTitle.textContent = title
    movieTitle.style = "font-weight: 700; color: #FFFFFF;"

    movieOriginalTitle.textContent = `${original_title} | ${original_title_romanised}`
    movieOriginalTitle.style = "color: #FFFFFF;"

    movieReleaseDate.textContent = `Release Date: ${release_date}`
    movieReleaseDate.style = "color: #FFFFFF;"

    movieDirector.textContent = `Director: ${director} | Producer: ${producer}`
    movieDirector.style = "font-weight: 400; color: #FFFFFF;"

    movieRunningTime.textContent = `Runtime (minutes): ${running_time}`
    movieRunningTime.style = "color: #FFFFFF;"

    movieDescription.textContent = description
    movieDescription.style = "color: #FFFFFF;"

    movieDiv.appendChild(moviePic)
    movieDiv.appendChild(movieTitle)
    movieDiv.appendChild(movieOriginalTitle)
    movieDiv.appendChild(movieOriginalTitleRomanised)
    movieDiv.appendChild(movieReleaseDate)
    movieDiv.appendChild(movieDirector)
    movieDiv.appendChild(movieProducer)
    movieDiv.appendChild(movieRunningTime)
    movieDiv.appendChild(movieDescription)

    divForInfo.appendChild(movieDiv)
}