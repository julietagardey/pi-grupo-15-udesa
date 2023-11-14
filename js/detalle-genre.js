let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_genre_pelicula = qsObj.get("id_genre_pelicula");
let nombre_genre_pelicula = qsObj.get("nombre_genre_pelicula");
let id_genre_serie = qsObj.get("id_genre_serie");
let nombre_genre_serie = qsObj.get("nombre_genre_serie");

let urlPeliculasG = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_genre_pelicula}`;
let urlSeriesG = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id_genre_serie}`;


let tituloMov = document.querySelector(".titulomov");

fetch(urlPeliculasG)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let arrayPeliculasG = data.results;
    let seccion = document.querySelector(".pelis-series-dg");
    let peliculasGenre = "";

    for (let i = 0; i < 6; i++) {
        peliculasGenre += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arrayPeliculasG[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculasG[i].poster_path}" alt="Imagen"
                        class="img-producto"></a>
                <h3>${arrayPeliculasG[i].title}</h3>
                <p class="fecha-dg">Fecha de estreno: ${arrayPeliculasG[i].release_date}</p>
            </article>`
        
    }

    seccion.innerHTML += peliculasGenre;

    tituloMov.innerHTML = nombre_genre_pelicula;

    

    return data
})
.catch(function (e) {
    console.log(e);
    return e
})



fetch(urlSeriesG)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let arraySeriesG = data.results;
    let seccion = document.querySelector(".pelis-series-dg");
    let seriesGenre = "";

    for (let i = 0; i < 6; i++) {
        seriesGenre += `<article class="elemento">
                <a href="./detail-serie.html?id_serie=${arraySeriesG[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arraySeriesG[i].poster_path}" alt="Imagen"
                        class="img-producto"></a>
                <h3>${arraySeriesG[i].name}</h3>
                <p class="fecha-dg">Fecha de estreno: ${arraySeriesG[i].first_air_date}</p>
            </article>`
        
    }

    seccion.innerHTML += seriesGenre;

    tituloMov.innerHTML = nombre_genre_serie;

    

    return data
})
.catch(function (e) {
    console.log(e);
    return e
})

