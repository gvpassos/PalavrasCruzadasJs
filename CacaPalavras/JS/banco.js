var Nome = 
(document.getElementsByClassName("published")[0].innerHTML ?
 document.getElementsByClassName("published")[0].innerHTML : 
 document.getElementsByClassName("published")[0].dateTime ) + "CacaPalavras";

export function SalvarLocal(resposta,pos,acertos,tempo){
    let map = {palavras:[]};
    if(localStorage.getItem(Nome))map = JSON.parse(localStorage.getItem(Nome));
    map['palavras'].push({resposta:resposta,pos:pos});
    map['acertos'] = acertos;
    map['tempo'] = tempo;
    console.log(map);
    localStorage.setItem(Nome, JSON.stringify(map));
}

export function CarregarLocal(id){
    if(!localStorage.getItem(Nome)) return false
    let map = JSON.parse(localStorage.getItem(Nome));
    let retorno = false
    map.palavras.forEach(palavra => {
        for (let i = 0; i <palavra.pos.length; i++) {
            if(palavra.pos[i] == id){
                retorno = true
            }
        }
    })
    return retorno;
   
}
export function getTime(){
    if(localStorage.getItem(Nome)){
        let time = JSON.parse(localStorage.getItem(Nome))["tempo"];
        if(time)            
            return time;
        else  return false
    }
    else return false;
    
}
export function totalAcertos(){
    if(localStorage.getItem(Nome)) return JSON.parse(localStorage.getItem(Nome)).acertos;
    else return false;
}


export function somarPontos(resposta){
    let map = {};

    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));
    else return true;
    
    for (let i = 0; i < map.palavras.length; i++) {
        if(resposta == map.palavras[i].resposta)
            return false
    }

    return true;
    
    
}
