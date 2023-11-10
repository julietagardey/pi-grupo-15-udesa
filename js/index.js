let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let pelisSeries = document.querySelector(".pelis-series");


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results)

    let arrayPeliculas = data.results;
    let peliculas = "";

    for (let i = 0; i <= 5; i++) {
        peliculas += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arrayPeliculas[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculas[i].poster_path}" alt="Imagen"
                class="img-producto"></a>
                <h3 class="sub-elemento">${arrayPeliculas[i].title} </h3>
                 <p class="sub-elemento">Fecha de estreno: ${arrayPeliculas[i].release_date}</p>
                </article>`
        
    }
    pelisSeries.innerHTML += peliculas
    return data 
})
.catch(function(e) {
    console.log(e);
    return e
}); 





let pelisSeries2 = document.querySelector(".pelis-series-2");

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results)
    let arraySeries = data.results;
    let series = "";

    for (let i = 0; i <= 5; i++) {
        series += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arraySeries[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arraySeries[i].poster_path}" alt="Imagen"
                class="img-producto"></a>
                <h3 class="sub-elemento">${arraySeries[i].title} </h3>
                 <p class="sub-elemento">Fecha de estreno: ${arraySeries[i].release_date}</p>
                </article>`
        
    }
    pelisSeries2.innerHTML += series

    return data 
})
.catch(function(e) {
    console.log(e);
    return e
}); 

let pelisSeries3 = document.querySelector(".pelis-series-3");
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results)
    let arrayPeliculas2 = data.results;
    let peliculas2 = "";

    for (let i = 0; i <= 5; i++) {
        peliculas2 += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arrayPeliculas2[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculas2[i].poster_path}" alt="Imagen"
                class="img-producto"></a>
                <h3 class="sub-elemento">${arrayPeliculas2[i].title} </h3>
                 <p class="sub-elemento">Fecha de estreno: ${arrayPeliculas2[i].release_date}</p>
                </article>`
        
    }
    pelisSeries3.innerHTML += peliculas2

    return data 
})
.catch(function(e) {
    console.log(e);
    return e
}); 
