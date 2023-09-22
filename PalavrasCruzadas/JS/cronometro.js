export var cronometroPalavrasCruzadas = null;
let contagemPalavrasCruzadas = 0;

export function iniciarContagem(){
    contagemPalavrasCruzadas = strToTempo(document.getElementById("cronometroPalavrasCruzadas").innerHTML);

    cronometroPalavrasCruzadas =  setInterval(() => {
        contagemPalavrasCruzadas++;
        atualizarCronometro();
    }, 1000);
}
export function pararContagem(){
    clearInterval(cronometroPalavrasCruzadas);
    
}

function atualizarCronometro(){
    const horas = Math.floor(contagemPalavrasCruzadas / 3600);
    const minutos = Math.floor((contagemPalavrasCruzadas % 3600) / 60);
    const segundos = contagemPalavrasCruzadas % 60;
    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    document.getElementById('cronometroPalavrasCruzadas').textContent = tempoFormatado;
    
}



function strToTempo(str){

    let horas = parseInt(str.substr(0,2));
    let minutos = parseInt(str.substr(3,2));
    let segundos = parseInt(str.substr(6,2));
    return (horas*3600) + (minutos*60) + segundos
}