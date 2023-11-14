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
let anoEstrenoMov= document.querySelector('.anoestrenomov')
let listado=document.querySelector('.listado')

fetch(urlPeliculasG)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let arrayPeliculasG = data.results;
    let seccion = document.querySelector(".pelis-series-dg");
    let peliculasGenre = "";
    if (arrayPeliculasG.length==0){
        alert('El genero no existe')
    }
    else{
    for (let i = 0; i < 6; i++) {
        peliculasGenre += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arrayPeliculasG[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculasG[i].poster_path}" alt="Imagen"
                        class="img-producto"></a>
                <h3>${arrayPeliculasG[i].title}</h3>
                <p class="fecha-dg">Fecha de estreno: ${arrayPeliculasG[i].release_date}</p>
            </article>`
        
    }
    let listadopelis= ''
    for (let i = 0; i < arrayPeliculasG.length; i++) {
        listadopelis+= `<li class="elemento">${arrayPeliculasG[i].title}</li>`
        
    }


    seccion.innerHTML += peliculasGenre;
    listado.innerHTML = listadopelis;

    tituloMov.innerHTML = nombre_genre_pelicula;
    anoEstrenoMov.innerText = '¡Las mejores películas para vos!';
    
    }
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
    let listadoseries= ''
    for (let i = 0; i < arraySeriesG.length; i++) {
        listadoseries+= `<li class="elemento">${arraySeriesG[i].name}</li>`
    }
    seccion.innerHTML += seriesGenre;
    listado.innerHTML= listadoseries;
    tituloMov.innerHTML = nombre_genre_serie;
    anoEstrenoMov.innerText = '¡Las mejores series para vos!'
    

    return data
})
.catch(function (e) {
    console.log(e);
    return e
})

