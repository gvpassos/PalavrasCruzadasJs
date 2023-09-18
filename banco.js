let Nome = document.getElementsByClassName("published")[0].innerHTML;


export function SalvarLocal(resposta){
    let map = {};
    if(localStorage.getItem(Nome)) map = JSON.parse(localStorage.getItem(Nome));

    for (const iterator of resposta.pos) {
        map[iterator] = document.getElementById(iterator).value
        
    }  
    
    map['tempo'] = document.getElementById("cronometro").innerHTML;

    localStorage.setItem(Nome, JSON.stringify(map));


}

export function CarregarLocal(id){
    let map = JSON.parse(localStorage.getItem(Nome));

    return map[id];
}


export function getbanco(id){
    if(JSON.parse(localStorage.getItem(Nome))[id]) return true;
    else return false;
    
}


export function fimGame(tempo){
    map = JSON.parse(localStorage.getItem(Nome));
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