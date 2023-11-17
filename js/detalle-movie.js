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


// intentando hacer electiva agregar y quitar películas de favoritos
const addToFav = document.querySelector(".addtofav");
let heart = document.querySelector(".heartmov");
addToFav.addEventListener("click", function() {
    if (addToFav.innerText == "Added to FAV") {
        addToFav.innerText = "Add to Fav";
        heart.innerHTML = `<i class="fa-regular fa-heart" style="color: #dc0909;"></i>`;
    } else {
        addToFav.innerText = "Added to FAV";
        heart.innerHTML = `<i class="fa-solid fa-heart fa-xl"></i>`;
    }
    
})

// el local storage se hace adentro o afuera del evento?? --> para guardar el id de la pelicula dentro del objeto literal 