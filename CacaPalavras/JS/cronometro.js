export var cronometro = null;
let contagem = 0;

export function iniciarContagem(){
    contagem = strToTempo(document.getElementById("cronometro").innerHTML);

    cronometro =  setInterval(() => {
        contagem++;
        atualizarCronometro();
        console.log(contagem)
    }, 1000);
}
export function pararContagem(){
    clearInterval(cronometro);
    
}

function atualizarCronometro(){
    const horas = Math.floor(contagem / 3600);
    const minutos = Math.floor((contagem % 3600) / 60);
    const segundos = contagem % 60;
    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    document.getElementById('cronometro').textContent = tempoFormatado;
    
}



function strToTempo(str){

    let horas = parseInt(str.substr(0,2));
    let minutos = parseInt(str.substr(3,2));
    let segundos = parseInt(str.substr(6,2));
    return (horas*3600) + (minutos*60) + segundos
}