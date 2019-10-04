var ganador = new Audio("../sonidos/sonidoganador.ogg");
var texto;
var texto2;

function playsonido() {
    ganador.play();
}

function ingresar(val) {
    var sndSelec = new Audio("sonidos/selec.wav"); //menu ppal
    var sndSelec1 = new Audio("../sonidos/selec.wav"); //menu niveles
    sndSelec.play();
    sndSelec1.play();
    setTimeout(function() {
        window.location.href = val;
    }, 300);
}

function reproducirSonido(s) {
    var sonido = new Audio("../sonidos/" + s);
    sonido.play();
}

function confirmSalida() {
    var sndSelec = new Audio("../sonidos/selec.wav");
    sndSelec.play();
    alertify.success("<img src='../img/tinisaliendo.png'> SALIENDO... ");
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 1300);
}


function ayuda(){
     setTimeout(function() {
        alertify.alert("<img src='../img/ayudaw.png'> ");}, 1300);
      }

