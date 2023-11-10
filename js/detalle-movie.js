let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id_pelicula");



let portaPadreMov = document.querySelector(".portadapadremov");
let tituloMov = document.querySelector(".titulomov");
let anoEstrenoMov = document.querySelector(".anoestrenomov");
let imagenPortMov = document.querySelector(".imagenportmov");
let genero1 = document.querySelector(".genero1");
let genero2 = document.querySelector(".genero2");
let sinopsismov = document.querySelector(".sinopsismov")


fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    tituloMov.innerText = data.title;
    anoEstrenoMov.innerText = data.release_date + " - duration: " + data.runtime + " minutes - rating: " + data.vote_average;
    imagenPortMov.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    genero1.innerText = data.genres[0].name;
    genero2.innerText = data.genres[1].name;
    sinopsismov.innerText = data.overview;

    return data
    
})
.catch(function(e) {
    console.log(e)
    return e
}); 
