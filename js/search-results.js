let acaVaLaAPIKey = "091dac18a0be3abf9860d50dcbf7a996";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busquedaPelicula = qsObj.get("buscar");

let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busquedaPelicula}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayPeliculasB = data.results;
        let seccion = document.querySelector(".pelis-series-dg");
        let tituloMov = document.querySelector('.titulomov')
        let peliculasBusqueda = "";

        if (arrayPeliculasB.length == 0) {
            let pSearch = document.querySelector('.p-search')
            pSearch.style.display = 'block';
            pSearch.style.color = 'white';
            pSearch.style.fontSize = "20px";
            pSearch.style.marginLeft = "90px";
            pSearch.style.marginTop = "60px";
            
            let titulosearch = document.querySelector('.titulosearch')
            titulosearch.style.display = 'none'
            let tituloSeccion = document.querySelector('.titulo-seccion')
            tituloSeccion.style.display = 'none'
        }
        else {
            for (let i = 0; i < arrayPeliculasB.length; i++) {
                if (arrayPeliculasB[i].poster_path != null) {
                    peliculasBusqueda += `<article class="elemento">
                    <a href="./detail-movie.html?id_pelicula=${arrayPeliculasB[i].id}"><img src="https://image.tmdb.org/t/p/w500/${arrayPeliculasB[i].poster_path}" alt="Imagen"
                            class="img-producto"></a>
                    <h3>${arrayPeliculasB[i].title}</h3>
                    <p class="fecha-dg">Fecha de estreno: ${arrayPeliculasB[i].release_date}</p>
                </article>`
                }

                seccion.innerHTML = peliculasBusqueda;

            }
            tituloMov.innerText += ' ' + busquedaPelicula;
        }





        return data
    })
    .catch(function (e) {
        console.log(e);
        return e
    })

