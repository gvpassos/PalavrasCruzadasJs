export var cronometroCacaPalavras = null;
let contagemCacaPalavras = 0;

export function iniciarContagem(){
    contagemCacaPalavras = strToTempo(document.getElementById("cronometroCacaPalavras").innerHTML);

    cronometroCacaPalavras =  setInterval(() => {
        contagemCacaPalavras++;
        atualizarCronometro();
    }, 1000);
}
export function pararContagem(){
    clearInterval(cronometro);
    
}

function atualizarCronometro(){
    const horas = Math.floor(contagemCacaPalavras / 3600);
    const minutos = Math.floor((contagemCacaPalavras % 3600) / 60);
    const segundos = contagemCacaPalavras % 60;
    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    document.getElementById('cronometroCacaPalavras').textContent = tempoFormatado;
    
}



function strToTempo(str){

    let horas = parseInt(str.substr(0,2));
    let minutos = parseInt(str.substr(3,2));
    let segundos = parseInt(str.substr(6,2));
    return (horas*3600) + (minutos*60) + segundos
}