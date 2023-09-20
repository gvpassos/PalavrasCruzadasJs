var Nome = document.getElementsByClassName("published")[0].innerHTML ? document.getElementsByClassName("published")[0].innerHTML : document.getElementsByClassName("published")[1].innerHTML;

export function SalvarLocal(resposta,pos,acertos,tempo){
    let map = {palavras:[]};
    if(localStorage.getItem(Nome))map = JSON.parse(localStorage.getItem(Nome));
    map['palavras'].push({resposta:resposta,pos:pos,jaAcertou:true});
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


export function getbanco(){
    if(localStorage.getItem(Nome)) return JSON.parse(localStorage.getItem(Nome));
    else return false;
    
}
export function jaFinalizado(){
    let map = {};
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

export function acertosBanco(){
    let map = JSON.parse(localStorage.getItem(Nome));
    if(!map) return 0;
    else if(map['acertos']) return map['acertos'];
    else return 0;
    
}