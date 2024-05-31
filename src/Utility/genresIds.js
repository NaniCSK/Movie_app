const API_KEY = 'f7bfccde5431718328d497462fb39328'

let genresIds = {}

async function getGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list
?api_key=${API_KEY}`);
    const data = await response.json();
    for (let i = 0; i < data.genres.length; i++){
        genresIds[data.genres[i].id] = data.genres[i].name
    }
}



getGenres();

export default genresIds;