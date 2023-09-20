import { iniciarContagem ,cronometro, pararContagem} from "https://gvpassos.github.io/PalavrasCruzadasJs/CacaPalavras/JS/cronometro.js";
import { CarregarLocal, SalvarLocal, getbanco, jaFinalizado ,somarPontos} from "https://gvpassos.github.io/PalavrasCruzadasJs/CacaPalavras/JS/banco.js";

let Letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


export function CriarMapa(Game){
    let map = document.createElement("table");
        map.id = "mapa";
        map.classList.add("p-2","h-96","w-60","bg-white","border-2","center");

        for (let i = 0; i < Game.x; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < Game.y; j++) {
                let td = document.createElement("td");
                let button = document.createElement("button");
                button.id = `${i}${j}`;
                button.classList.add("w-10","h-10","text-center","font-bold","uppercase","border-2","border-slate-200","text-slate-500","duration-150");
                
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
                    if(cronometro == null) iniciarContagem();
                });
                
                if(CarregarLocal(i+""+j)){
                    button.classList.remove("text-slate-500","border-slate-200");
                    button.classList.add("text-green-500","border-green-500","rounded-md");                    
                }
                
                if(jaFinalizado() == Game.respostas.length) button.disabled = true
                
                td.appendChild(button);
                tr.appendChild(td);
            }
            map.appendChild(tr);
        }
    const getBanco = getbanco();
    if(getBanco){
        Game.acertos = getBanco.acertos
        document.getElementById("cronometro").innerHTML = getBanco.tempo;
    }
    if(jaFinalizado() == Game.respostas.length){
        completarGame(map)
    }
    let creditos = document.createElement('tr')
    creditos.innerHTML = `<td colspan="${Game.x}"><div class="text-slate-200 text-right px-4 text-xs"> Desenvolvido por <a href="https://github.com/gvpassos" target="_blank">@gvpassos disponibilizado no <a href="https://github.com/gvpassos/palavrasCruzadasjs" target="_blank">Github</a></div></td>`;	
    map.appendChild(creditos);
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
                    if( Number(pos[1])+1 == Number(event.target.id[1])){    // Vertical é igual ao id da célula + 1 
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
           if(somarPontos()) Game.acertos += 1;
           if(Game.acertos == Game.respostas.length){ 
                pararContagem();
                completarGame(document.getElementById("mapa"));
            }


            for (let i = 0; i < lastclick.length; i++) {
                document.getElementById(lastclick[i]).classList.remove("text-red-500","border-red-500");
                document.getElementById(lastclick[i]).classList.add("text-green-500","border-green-500","rounded-md");
            }

            SalvarLocal(resposta,lastclick,Game.acertos,document.getElementById("cronometro").innerHTML);

            lastclick = null;
            direcao = "any";

        }
        
    }
}
function completarGame(map){
    let fimDiv = document.createElement("div");
            fimDiv.classList.add("w-96", "h-96","p-8","flex","flex-col","items-center","justify-center","fixed","top-10","bottom-10","left-10","right-10","z-20");
            fimDiv.innerHTML = `<div class='text-4xl font-bold border-4 border-slate-900 top-10 fixed bottom-10 w-96 text-center bg-slate-400 text-indigo-900 opacity-75 align-middle inline-block my-4 font-sans' >
                Parabéns, você acertou todas as respostas! <br> em : ${document.getElementById('cronometro').innerHTML}
            </div>`;
            map.appendChild(fimDiv);
}