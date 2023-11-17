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
// electiva agregar y quitar películas de favoritos
const addToFav = document.querySelector("#addToFav");

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



// agregar ver recomendaciones
let verMas= document.querySelector('#verRecom1');
console.log(verMas);

verMas.addEventListener('click', function(e){

    fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${acaVaLaAPIKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        // aca va 
        let verRecomendaciones = document.querySelector(".verRecomendaciones");
        let arrayPeliculas = data.results;
        let peliculas = "";

        for (let i = 0; i <= 2; i++) {
            peliculas += `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${arrayPeliculas[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculas[i].poster_path}" alt="Imagen"
                class="img-producto"></a>
                <h3 class="sub-elemento">${arrayPeliculas[i].title} </h3>
                </article>`
        
        }
            verRecomendaciones.innerHTML += peliculas
        return data
    })
    .catch(function(e){
        console.log(e)
        return e
    })

    console.log(e);
    console.log(this);
})


let favoritos = [];
    let array_local_peliculas = localStorage.getItem("favoritos");

    if (array_local_peliculas !== null) {
        favoritos = JSON.parse(array_local_peliculas);
    }



    // Establece el texto en función de si la película está en favoritos
    addToFav.innerText = favoritos.includes(id_pelicula) ? "Remove from Fav" : "Add to Fav";

   
    addToFav.addEventListener("click", function () {
        if (favoritos.includes(id_pelicula)) {
            // Si la película ya está en favoritos, la tiene que sacar
            addToFav.innerText = "Add to Fav";
            let indiceAeliminar = favoritos.indexOf(id_pelicula);
            favoritos.splice(indiceAeliminar, 1);
        } else {
            // Si la película no está en favoritos, la tiene que agregar
            addToFav.innerText = "Remove from Fav";
            favoritos.push(id_pelicula);
        }

        // Guarda la lista de favoritos actualizada en localStorage
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });

