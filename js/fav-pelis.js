// los favoritos son unicamente para las peliculas!

let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let JSONPelisFav = localStorage.getItem("favoritos");
let arrayPelisFav = JSON.parse(JSONPelisFav);
console.log(arrayPelisFav);

let seccion = document.querySelector(".pelis-series")

for (let i = 0; i < arrayPelisFav.length; i++) {
    let id_pelicula = arrayPelisFav[i]

    fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let pelicula = `<article class="elemento">
                <a href="./detail-movie.html?id_pelicula=${data.id}"><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Imagen"
                class="img-producto"></a>
                <h3 class="sub-elemento">${data.title} </h3>
                </article>`
            seccion.innerHTML += pelicula
            console.log(pelicula);
            return data
        })
        .catch(function (error) {
            console.log(error);
            return error
        })

}




