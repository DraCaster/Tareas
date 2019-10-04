//nivel 1 juego 4
var cantImg = 0;
var cantImgIncorrectas = 0;
var sndNO = new Audio("../sonidos/error.wav");
var sndOK = new Audio("../sonidos/ganaste.wav");


/*Nivel 1 juego 4*/

function enmarcar(event,letra) {
    imgSelec = event.target;
    if (imgSelec.dataset.marca == "no") { //si no se le hizo click
        imgSelec.dataset.marca = "si";
        if (imgSelec.id == letra | imgSelec.id == letra+'1') { //si le hice click a una imagen que empieza con e
            cantImg++; //sumo la cantidad de imagenes con la e
        } else {
            cantImgIncorrectas++;
        }
    } else { //si se le hizo click anteriormente
        imgSelec.dataset.marca = "no"; //se desmarca
        if (imgSelec.id == letra | imgSelec.id == letra+'1') {
            cantImg--; //se resta porque se deselecciono
        } else {
            cantImgIncorrectas--;
        }
    }
}

/*Cartelito*/

function confirmar(p) {
    sndOK.play();
    alertify.confirm("<img src='../img/feliz.jpg'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>", function(e) {
        if (e) {
            alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
            setTimeout(function() {
                window.location.href = '../html/'+p; //Pasa al siguiente juego
            }, 1300);
        } else {
            alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
            confirmSalida();
        }
    });
    return false
}

function devolverIMG() {
    var tabla = $('.tablaj1').children('tbody').children('tr').find('img');
    for (var i = 0; i < tabla.length; i++) {
        i++;
        if (tabla[i].dataset.marca == 'si' & tabla[i].dataset.valor != 'a') {
            //aca tengo que darla vuelta
        }
    }
}

function alerta() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; TE EQUIVOCASTE ! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}

function faltan() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; FALTAN IMAGENES ! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}

function ceroimg() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; NO ELEGISTE NINGUNA IMAGEN ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}


function comprobar(cantidad,pagSig) {
    //las imagenes que no van deberian taparse
    if (cantImg == cantidad & cantImgIncorrectas == 0) {
        confirmar(pagSig);
    } else if (cantImg == 0 & cantImgIncorrectas == 0) {
        devolverIMG();
        ceroimg();
    } else if (cantImg != 0 & cantImg < cantidad & cantImgIncorrectas == 0) {
        devolverIMG();
        faltan();
    } else {
        devolverIMG();
        alerta();
    }
}