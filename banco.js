var Nome = document.getElementsByClassName("published")[0].innerHTML;

export function SalvarLocal(resposta,acertos){
    let map = {};
    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));

    for (const iterator of resposta.pos) {
        map[iterator] = document.getElementById(iterator).value
        
    }  
    
    map['tempo'] = document.getElementById("cronometro").innerHTML;
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


export function fimGame(tempo){
    let map = JSON.parse(localStorage.getItem(Nome));
    map['tempo'] =  tempo;
    localStorage.setItem(Nome, JSON.stringify(map));
}

export function jaFinalizado(){
    let map = {};
    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));
    else return false;

    map = JSON.parse(localStorage.getItem(Nome));
    if(map['tempo']) return map['tempo'];
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