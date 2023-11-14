let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let urlPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;


let bloqueGenero = document.querySelector(".bloque-genero");
let bloqueGenero2 = document.querySelector(".bloque-genero-2");

fetch(urlPeliculas)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let arrayGeneros = data.genres;
    let generosPeliculas = "";

    for (let i = 0; i < arrayGeneros.length; i++) {
        generosPeliculas += `<li class="genero"><a href="./detail-genre.html?id_genre_pelicula=${arrayGeneros[i].id}&nombre_genre_pelicula=${arrayGeneros[i].name}">${arrayGeneros[i].name}</a></li>`
    }
    bloqueGenero.innerHTML = generosPeliculas
    
    return data 
})
.catch(function(e) {
    console.log(e);
    return e
}); 

fetch(urlSeries)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let arrayGeneros = data.genres;
    let generosSeries = "";

    for (let i = 0; i < arrayGeneros.length; i++) {
        generosSeries += `<li class="genero"><a href="./detail-genre.html?id_genre_serie=${arrayGeneros[i].id}&nombre_genre_serie=${arrayGeneros[i].name}">${arrayGeneros[i].name}</a></li>`
    }
    bloqueGenero2.innerHTML = generosSeries
    
    return data 
})
.catch(function(e) {
    console.log(e);
    return e
}); 