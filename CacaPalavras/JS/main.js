import { iniciarContagem ,cronometroCacaPalavras, pararContagem} from "./cronometro.js";
import { CarregarLocal, SalvarLocal, totalAcertos ,somarPontos,getTime} from "./banco.js";

import { completarGame } from "../../msgCompletou.js";

let Letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


export function CriarMapa(Game){
    let map = document.createElement("table");
        map.id = "mapa";
        map.classList.add("bg-white","border-2","center","relative");
        for (let i = 0; i < Game.x; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < Game.y; j++) {
                let td = document.createElement("td");
                let button = document.createElement("button");
                button.id = `${i}${j}`;
                button.classList.add("w-8","h-8","text-center","font-bold","uppercase","border-2","border-slate-200","text-slate-500","duration-150");
                
                button.innerHTML = Letras[Math.floor(Math.random() * Letras.length)]; 
                
                for (let cont = 0; cont < Game.respostas.length; cont++) {
                    const element = Game.respostas[cont];
                    for (let index = 0; index < element.pos.length; index++) {
                        const pos = element.pos[index];
                        
                        if(pos == button.id) {
                            button.innerHTML = element.palavra[index];
                            break;
                        }
                    }
                    
                    
                }

                button.addEventListener("click",(event)=>{
                    cliquesBtn(event,Game);
                    if(cronometroCacaPalavras == null) iniciarContagem();
                });
                
                if(CarregarLocal(i+""+j)){
                    button.classList.remove("text-slate-500","border-slate-200");
                    button.classList.add("text-green-500","border-green-500","rounded-md");                    
                }
                
                if(totalAcertos() == Game.respostas.length) button.disabled = true
                
                td.appendChild(button);
                tr.appendChild(td);
            }
            map.appendChild(tr);
        }

    let creditos = document.createElement('tr')
    creditos.innerHTML = `<td colspan="${Game.x}"><div class="text-slate-200 text-right px-4 text-xs"> Desenvolvido por <a href="https://github.com/gvpassos" target="_blank">@gvpassos</a> disponibilizado no <a href="https://github.com/gvpassos/palavrasCruzadasjs" target="_blank">Github</a></div></td>`;	
    map.appendChild(creditos);

    document.getElementById("cronometroCacaPalavras").innerHTML = getTime()? getTime() : "00:00:00";

    if(totalAcertos() == Game.respostas.length){
        map.appendChild(completarGame(getTime()))
    }
    let divRespostas = document.createElement("div"),string = "";
    for (let i = 0; i < Game.respostas.length; i++) {
        string += Game.respostas[i].palavra + " - "; 
        
    }
    divRespostas.innerHTML = string;
    divRespostas.classList.add("rotate-180","text-xs","absolute","my-2","text-center","-bottom-5","text-slate-400");
    document.getElementById('cacapalavras').appendChild(divRespostas);

    return map;
}


var lastclick = null,direcao = "any";


function cliquesBtn(event,Game){
        if(lastclick == null){                              // primeira vez ///
            changeColortoRed(event.target);                 // Adiciona a cor
            lastclick = [event.target.id];                  // Adiciona a posição
        }else{
            for (let index = 0; index < lastclick.length; index++) { /// ver todas as posições
                const pos = lastclick[index];
                if(pos == event.target.id) {                /// se a posição ja foi clicada 
                    changeColortoBlack(event.target);       /// remove a cor
                    lastclick.splice(index,1);              /// remove a posição
                    if(lastclick.length == 0 ){             /// se não há mais posições
                        lastclick = null                    /// limpa o array
                        direcao = "any"
                    }
                    return;                                 /// retorna    
                }       
            }
            for (let i = 0; i < lastclick.length; i++) {    /// ver todas as posições 
                const pos = lastclick[i];
                if( Number(pos[0]) == Number(event.target.id[0]) && direcao != "horizontal"){          // Horizontal é igual ao id da célula
                    if(Number(pos[1])+1 == Number(event.target.id[1])){    // Vertical é igual ao id da célula + 1 
                        changeColortoRed(event.target);                     // Adiciona a cor
                        lastclick.push(event.target.id);                    // Adiciona a posição

                        direcao = "vertical";

                        vericarPalavra(Game)
                        return
                    }
                    else if(Number(pos[1])-1 == Number(event.target.id[1])){    // Vertical é igual ao id da célula - 1
                        changeColortoRed(event.target);                         // Adiciona a cor
                        lastclick.push(event.target.id);                        // Adiciona a posição
                        
                        direcao = "vertical";
                        
                        vericarPalavra(Game)
                        return
                    }
    
                }
                else if( Number(pos[1]) == Number(event.target.id[1]) && direcao != "vertical" ){         // Vertical é igual ao id da célula
                    if( Number(pos[0])+1 == Number(event.target.id[0])){        // Horizontal é igual ao id da célula + 1
                        changeColortoRed(event.target);                         // Adiciona a cor
                        lastclick.push(event.target.id);                        // Adiciona a posição
                        
                        direcao = "horizontal";
                        
                        vericarPalavra(Game)
                        return
                    }
                    else if(Number(pos[0])-1 == Number(event.target.id[0])){    // Horizontal é igual ao id da célula - 1
                        changeColortoRed(event.target);                         // Adiciona a cor
                        lastclick.push(event.target.id);                        // Adiciona a posição
                        
                        direcao = "horizontal";
                        
                        vericarPalavra(Game)
                        return
                    }
    
                }
                
            }
        }
        
        
       
        
        
}

function changeColortoRed(target){
    if(target.classList.contains("text-green-500")){
        target.classList.remove("border-green-500");
        target.classList.add("border-red-500");
    }else{
        target.classList.remove("text-slate-500","border-slate-200");
        target.classList.add("text-red-500","border-red-500","rounded-md");
    }
}
function changeColortoBlack(target){
    if(target.classList.contains("text-green-500")){
        target.classList.remove("border-red-500");
        target.classList.add("border-green-500");
    }else {
        target.classList.remove("text-red-500","border-red-500","rounded-md");
        target.classList.add("text-slate-500","border-slate-200");
        
    }   
}

function vericarPalavra(Game){
    if(lastclick == null){
        return
    }
    let resposta="";
    for (let i = 0; i < lastclick.length; i++) {
        for(let j = i; j < lastclick.length; j++){
           if(lastclick[i] > lastclick[j]){
                let aux = lastclick[i]
                lastclick[i] = lastclick[j]
                lastclick[j] = aux;
           }

        }
    }
    for(let i = 0; i < lastclick.length; i++){
        resposta += document.getElementById(lastclick[i]).innerHTML; ///Recria a palavra da resposta 
    }  

    for (let index = 0; index < Game.respostas.length; index++) {
        if(resposta.toUpperCase() == Game.respostas[index].palavra.toUpperCase()){ /// Acertou uma RESPOSTA /////
           
            if(somarPontos(Game.respostas[index].palavra)) Game.acertos += 1;
            if(Game.acertos == Game.respostas.length){ 
                    pararContagem();
                    document.getElementById("cacapalavras").appendChild(
                        completarGame(document.getElementById("cronometroCacaPalavras").innerHTML)
                    );
                    
            }


            for (let i = 0; i < lastclick.length; i++) {
                document.getElementById(lastclick[i]).classList.remove("text-red-500","border-red-500");
                document.getElementById(lastclick[i]).classList.add("text-green-500","border-green-500","rounded-md");
            }

            SalvarLocal(resposta,lastclick,Game.acertos,document.getElementById("cronometroCacaPalavras").innerHTML);

            lastclick = null;
            direcao = "any";

        }
        
    }
}
