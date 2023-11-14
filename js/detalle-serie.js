let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id_serie");
console.log(id_serie);



let portaPadreMov = document.querySelector(".portadapadremov");
let tituloMov = document.querySelector(".titulomov");
let anoEstrenoMov = document.querySelector(".anoestrenomov");
let imagenPortMov = document.querySelector(".imagenportmov");
let genero1 = document.querySelector(".genero-1");
let genero2 = document.querySelector(".genero-2");
let sinopsismov = document.querySelector(".sinopsismov")


fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    tituloMov.innerText = data.name;
    anoEstrenoMov.innerText = data.first_air_date + " - duration: " + data.episode_run_time[0] + " minutes - rating: " + data.vote_average;
    imagenPortMov.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    genero1.innerText = data.genres[0].name;
    if (data.genres.length > 1){
        genero2.innerText = data.genres[1].name;}
    else {
        genero2.innerText = undefined
    }
    sinopsismov.innerText = data.overview;

    return data
    
})
.catch(function(e) {
    console.log(e)
    return e
}); 



