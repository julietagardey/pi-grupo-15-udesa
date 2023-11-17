let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id_serie");
console.log(id_serie);



let portaPadreMov = document.querySelector(".portadapadremov");
let tituloMov = document.querySelector(".titulomov");
let anoEstrenoMov = document.querySelector(".anoestrenomov");
let imagenPortMov = document.querySelector(".imagenportmov");
let sinopsismov = document.querySelector(".sinopsismov")
let generosMov= document.querySelector('.generosmov')

fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    tituloMov.innerText = data.name;
    anoEstrenoMov.innerText = data.first_air_date + " - duration: " + data.episode_run_time[0] + " minutes - rating: " + data.vote_average;
    imagenPortMov.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    let generos= ''
    for (let i = 0; i < data.genres.length; i++) {
        generos+= ` <div class="redondeadomov">
        <a class="genero1" href="detail-genre.html?id_genre_serie=${data.genres[i].id}&nombre_genre_serie=${data.genres[i].name}">${data.genres[i].name}</a>
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


// botón de ver mas

let verMas= document.querySelector('.vermas')
verMas.addEventListener('click', function(){

fetch(`https://api.themoviedb.org/3/movie/${id_serie}/recommendations?language=en-US&page=1`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    // aca va 
    return data
})
.catch(function(e){
    console.log(e)
    return e
})
console.log(this);
})



