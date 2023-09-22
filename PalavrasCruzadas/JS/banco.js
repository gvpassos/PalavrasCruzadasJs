var Nome = 
(document.getElementsByClassName("published")[0].innerHTML ?
 document.getElementsByClassName("published")[0].innerHTML : 
 document.getElementsByClassName("published")[0].dateTime ) + "PalavraCruzadas";

export function SalvarLocal(resposta,acertos){
    let map = {};
    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));

    for (const iterator of resposta.pos) {
        map[iterator] = document.getElementById("PC"+iterator).value
        
    }  
    
    map['tempo'] = document.getElementById("cronometroPalavrasCruzadas").innerHTML;
    map['acertos'] = acertos
    localStorage.setItem(Nome, JSON.stringify(map));


}

export function CarregarLocal(id){
    let map = JSON.parse(localStorage.getItem(Nome));

    return map[id];
}


export function getbanco(id){
    if(localStorage.getItem(Nome)){
        if(JSON.parse(localStorage.getItem(Nome))[id]) return true;
        else  return false
    }
    else return false;
    
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


export function jaFinalizado(){
    let map = {};
    if(localStorage.getItem(Nome)) return JSON.parse(localStorage.getItem(Nome));
    else return false;
}


export function buscarRespostaBanco(resposta){
    let map = {},    string = "";

    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));
 
    resposta.pos.forEach(index => {
        if(map[index])  string += map[index];
    });

    if(resposta.palavra == string.toLocaleLowerCase()) return true;
    else return false;
    
    
}

export function acertosBanco(){
    let map = JSON.parse(localStorage.getItem(Nome));
    if(!map) return 0;
    else if(map['acertos']) return map['acertos'];
    else return 0;
    
}