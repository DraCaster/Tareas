var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");
var cantM = 0;
var cantO = 0;


/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcarMas(event) {
    selec = event.target;
    obj = document.getElementById(selec.id);
    //console.log($('#'+selec.id).data('marca'));
    if(obj.dataset.marca == "no"){
        obj.dataset.marca = "si";
       // obj.setAttribute('marca', 'si');
        obj.className +=" zoom";
        obj.className +=" cambiarBorde";
        if(obj.dataset.valor == 'm'){
            cantM++;
        }
        else{
            cantO++;
        }
    }
    else{
         obj.dataset.marca = "no";
        //obj.setAttribute('marca','no');
        $('#' + selec.id).removeClass("zoom");
        $('#' + selec.id).removeClass("cambiarBorde");
        if(obj.dataset.valor == 'm'){
            cantM--;
        }else{
            cantO--;
        }

    }

}

/*Cartelito*/

function confirmar() {
    sndOK.play();
    alertify.confirm("<img src='../img/feliz.jpg'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>", function(e) {
        if (e) {
            alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
            setTimeout(function() {
                window.location.href = '../html/n1j7.html'; //Pasa al siguiente juego
            }, 1300);
        } else {
            alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
            confirmSalida();
        }
    });
    return false
}

function alerta() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; TE EQUIVOCASTE! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}

function faltanimg() {
    sndNO.play();
    alertify.alert("<img src='../img/triste.jpg'> <h1><b> &iexcl; ALGO NO ESTA BIEN ! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}


function comprobarJ5() {

    if (cantM == 6 & cantO == 0) {
            confirmar();
    }else{
        if(cantM < 6){
            faltanimg();
        }
        else{
            alerta();
        }
    }

}