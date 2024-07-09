window.onload = function () {
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let titulo = document.querySelector('figure');

    let modo = confirm('Desea modo oscuro');
    if (modo) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color = 'white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

titulo.addEventListener('mouseleave', function (event) {
alert("algo pasa")
body.style.backgroundColor = '#7f7f7f'
body.classList.add('fondoMoviesList');
})
}
let estado = 0;








window.addEventListener('keypress', function (event) {

    // let algo = document.querySelector('h1');

    // lo hice asi al principio porque pensaba que era asi XD
    // s e c r e t  
    // if (event.key === 's' && !algo.classList.contains('s')) {
    //     // alert("estado 1");
    //     algo.classList.add('s');
    // } else if (event.key === 'e' && algo.classList.contains('s')) {
    //     // alert("estado 2")
    //     algo.classList.remove('s');
    //     algo.classList.add('se');
    // } else if (event.key === 'c' && algo.classList.contains('se')) {
    //     // alert("sec")
    //     algo.classList.remove('se');
    //     algo.classList.add('sec');
    // } else if (event.key === 'r'  && algo.classList.contains('sec')) {
    //     // alert("secr")
    //     algo.classList.remove('sec');
    //     algo.classList.add('secr');
    // } else if (event.key === 'e' && algo.classList.contains('secr')) {
    //     // alert("secre")
    //     algo.classList.remove('secr');
    //     algo.classList.add('secret');
    // } else if (event.key === 't' && algo.classList.contains('secret')) {
    //     alert("SECRETO MAGICO")
    //     algo.classList.remove('secret');
    // } else {
    //     algo.classList.remove('s');
    //     algo.classList.remove('se');
    //     algo.classList.remove('sec');
    //     algo.classList.remove('secr');
    //     algo.classList.remove('secret');
    //     // alert("jajajaja")
    // }
    

// secreto

    if (event.key === 's' && estado < 1) {
        estado = 1


    } else if (event.key === 'e' && estado === 1) {
        estado = 2

    } else if (event.key === 'c' && estado === 2) {
        estado = 3

    } else if (event.key === 'r' && estado === 3) {
        estado = 4

    } else if (event.key === 'e' && estado === 4) {
        estado = 5

    }  else if (event.key === 't' && estado === 5) {
        estado = 6

    } else if (event.key === 'o' && estado === 6) {
        alert("SECRETO MAGICO")
        estado = 0
    } else {

        estado = 0
        // alert("jajajaja")
    }
})