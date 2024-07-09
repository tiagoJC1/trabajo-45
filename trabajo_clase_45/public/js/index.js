window.onload = function () {
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');

    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if (nombre != '') {
        subtitulo.innerHTML += nombre;
    } else {
        subtitulo.innerHTML += 'INVITADO';
    }

    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if (confirmar) {
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for (let i = 0; i < destacado.length; i++) {
        if (i % 2 == 0) {
            destacado[i].classList.add('destacadoPar');
        } else {
            destacado[i].classList.add('destacadoImpar');
        }
    }


    container.style.display = 'block';

}

window.addEventListener('load', function() {
    // 
    let menu = document.querySelector('#menu');
    let fondo = document.querySelector('body');
    let boton = document.querySelector('.logoDH');
    let enlace = document.querySelector('a');
    let algo = document.querySelector('#algo');


    boton.addEventListener("click", function (event) {
        // if (menu.style.left !== '0px') {
        menu.style.left = 0;
        // } else {
            // menu.style.left = "-200px";
        // }
    })
    menu.addEventListener("mouseleave", function (event) {
        // if (menu.style.left !== '0px') {
        menu.style.left = '-200px';
        // }
        console.log("algo")
    })
    // boton.addEventListener("mouseover", function (event) {
    //     fondo.style.backgroundColor = 'black'
    // })

    algo.addEventListener("mouseover", function (event) {
        algo.style.color = 'white'
    })
    algo.addEventListener("mouseout", function (event) {
        algo.style.color = 'teal'
    })
// mosueleve
})