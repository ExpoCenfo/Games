var s = skrollr.init({
    smoothScrolling: true,
    forceHeight: false
});

const colorRanges = {
    'violeta': [380, 426],
    'azul': [427, 475],
    'celeste': [476, 496],
    'verde': [497, 569],
    'amarillo': [570, 580],
    'naranja': [581, 617],
    'rojo': [618, 780]
};

const optionColorMap = {
    '1': 'rojo',
    '2': 'naranja',
    '3': 'amarillo',
    '4': 'verde',
    '5': 'azul',
    '6': 'celeste',
    '7': 'violeta'
};

function generateRandomNumber() {
    return Math.floor(Math.random() * (780 - 380 + 1)) + 380;
}

function assignRandomNumbers() {
    const h1Elements = document.querySelectorAll('.cajaTextoYBotones h1');
    h1Elements.forEach(h1 => {
        const randomNumber = generateRandomNumber();
        h1.textContent = randomNumber;
        h1.style.color = 'black';
        console.log(`Asignado número ${randomNumber} a <h1>`);
    });
}

function checkSelection() {
    const h1Elements = document.querySelectorAll('.cajaTextoYBotones h1');
    let allCorrect = true;

    h1Elements.forEach((h1, index) => {
        const selectedOption = document.querySelector(`input[name="options${index + 1}"]:checked`);
        console.log(`Verificando <h1> con texto ${h1.textContent} y opción seleccionada ${selectedOption ? selectedOption.id : 'Ninguna'}`);

        if (selectedOption) {
            const number = parseInt(h1.textContent);
            const optionId = selectedOption.id;
            const colorNumber = optionId.split('-')[0].replace('option', ''); 
            const color = optionColorMap[colorNumber]; 
            console.log(`Color detectado: ${color}`);

            if (color) {
                const [min, max] = colorRanges[color] || [0, 0];

                if (number >= min && number <= max) {
                    h1.style.color = 'black';
                    console.log('Número correcto para el color');
                } else {
                    h1.style.color = 'red';
                    allCorrect = false;
                    console.log('Número incorrecto para el color');
                }
            } else {
                h1.style.color = 'red';
                allCorrect = false;
                console.log('Color no definido en el ID del input');
            }
        } else {
            h1.style.color = 'red';
            allCorrect = false;
            console.log('Ninguna opción seleccionada');
        }
    });

    if (allCorrect) {
        console.log('Botón clickeado');
        const targetSection = document.getElementById('seccion6');
        const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const additionalOffset = -500; // Ajusta este valor según necesites
        const adjustedTop = top - additionalOffset;
        if (targetSection) {
            window.scrollTo({
                top: adjustedTop,
                behavior: 'smooth'
            });
            console.log('Desplazamiento a seccion6 realizado');
        } else {
            console.log('No se encontró la sección con id="seccion6"');
        }
    } else {
        console.log('Algunas selecciones son incorrectas');
    }
}

window.onload = assignRandomNumbers;

document.getElementById('btnContinuarJuegoListo').addEventListener('click', checkSelection);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btnInicioJuegoCiencia').addEventListener('click', function (e) {
        console.log('Botón clickeado');
        const targetSection = document.getElementById('seccion2');
        const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
        if (targetSection) {
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            console.log('Desplazamiento a seccion2 realizado');
        } else {
            console.log('No se encontró la sección con id="seccion2"');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.secccion2JuegoCienciaBoton').addEventListener('click', function (e) {
        console.log('Botón clickeado');
        const targetSection = document.getElementById('seccion3');
        const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
        if (targetSection) {
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            console.log('Desplazamiento a seccion3 realizado');
        } else {
            console.log('No se encontró la sección con id="seccion3"');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.secccion3JuegoCienciaBoton').addEventListener('click', function (e) {
        console.log('Botón clickeado');
        const targetSection = document.getElementById('seccion4');
        const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
        if (targetSection) {
            window.scrollTo({
                top: top - 50,
                behavior: 'smooth'
            });
            console.log('Desplazamiento a seccion4 realizado');
        } else {
            console.log('No se encontró la sección con id="seccion4"');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.secccion4JuegoCienciaBoton').addEventListener('click', function (e) {
        console.log('Botón clickeado');
        disableScroll();
        const targetSection = document.getElementById('seccion5');
        const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
        if (targetSection) {
            window.scrollTo({
                top: top+80,
                behavior: 'smooth'
            });
            console.log('Desplazamiento a seccion5 realizado');
            setTimeout(enableScroll, 1000); 
        } else {
            console.log('No se encontró la sección con id="seccion5"');
        }
    });
});

function disableScroll() {
    document.body.classList.add('no-scroll');
    // Opcionalmente, agregar un listener para evitar el scroll con el teclado
    window.addEventListener('scroll', preventScroll, { passive: false });
}

// Función para activar el scroll
function enableScroll() {
    document.body.classList.remove('no-scroll');
    window.removeEventListener('scroll', preventScroll, { passive: false });
}

// Función para prevenir el scroll (nada hará que se desplace)
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}