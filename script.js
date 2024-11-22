
//Obtener elementos del DOM 
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const eleccionPC = document.getElementById('eleccion-pc');
const resultado = document.getElementById('resultado');
const usuarioVictorias = document.getElementById('usuario-victorias');
const pcVictorias = document.getElementById('pc-victorias');


// definir opciones

const opciones = ['piedra', 'papel', 'tijera'];


//Obtener eleccion del PC

function obtenerEleccionPC() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}



//Funcion para determinar el resultado

function determinarResultado(eleccionUsuario, eleccionPC) {
    if (eleccionUsuario === eleccionPC) {
        return 'Empate';
    }
    if (
        (eleccionUsuario === 'piedra' && eleccionPC === 'tijera') ||
        (eleccionUsuario === 'tijera' && eleccionPC === 'papel') ||
        (eleccionUsuario === 'papel' && eleccionPC === 'piedra')
    ) {
        return 'Ganas';
    }
    return 'Pierdes';
}

//Eventos para los botones

piedra.addEventListener('click',()=> jugar('piedra'));
papel.addEventListener('click',()=> jugar('papel'));
tijera.addEventListener('click',()=> jugar('tijera'));


//Definir funcion Jugar 

function jugar(eleccionUsuario) {
    const eleccionDePc = obtenerEleccionPC();
    const resultadoDelJuego = determinarResultado(eleccionUsuario, eleccionDePc);

    eleccionPC.textContent = `PC Eligio: ${eleccionDePc}`;
    resultado.textContent = `Resultado: ${resultadoDelJuego}`;

 // Actualizar estadísticas (victorias)
 if (resultadoDelJuego === 'Ganas') {
    usuarioVictorias.textContent = parseInt(usuarioVictorias.textContent) + 1;
} else if (resultadoDelJuego === 'Pierdes') {
    pcVictorias.textContent = parseInt(pcVictorias.textContent) + 1;
}
}