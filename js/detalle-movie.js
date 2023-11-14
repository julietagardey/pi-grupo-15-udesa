let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id_pelicula");



let portaPadreMov = document.querySelector(".portadapadremov");
let tituloMov = document.querySelector(".titulomov");
let anoEstrenoMov = document.querySelector(".anoestrenomov");
let imagenPortMov = document.querySelector(".imagenportmov");
let sinopsismov = document.querySelector(".sinopsismov")
let generosMov= document.querySelector('.generosmov')

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    tituloMov.innerText = data.title;
    anoEstrenoMov.innerText = data.release_date + " - duration: " + data.runtime + " minutes - rating: " + data.vote_average;
    imagenPortMov.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    let generos= ''
    for (let i = 0; i < data.genres.length; i++) {
        generos+= ` <div class="redondeadomov">
        <a class="genero1" href="detail-genre.html?id_genre_pelicula=${data.genres[i].id}&nombre_genre_pelicula=${data.genres[i].name}">${data.genres[i].name}</a>
    </div>`
        
    }
    
    sinopsismov.innerText = data.overview;
    generosMov.innerHTML+= generos;

    return data
    
})
.catch(function(e) {
    console.log(e)
    return e
}); 
