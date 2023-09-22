
import { SalvarLocal, CarregarLocal , getbanco, buscarRespostaBanco ,acertosBanco ,getTime} from "./banco.js";
import { iniciarContagem, pararContagem , cronometroPalavrasCruzadas} from "./cronometro.js";
import { completarGame } from "../../msgCompletou.js";

export function Criar(Game){
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    table.classList.add("w-auto", "h-auto","p-0","h-96","w-96");

    for (let i = 0; i < Game.x; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < Game.y; j++) {
            let td = document.createElement("td");
            td.id = "cell"+i+j;
            td.classList.add("relative");
            let input = document.createElement("input");

            input.classList.add("w-10","h-10","text-center","font-bold","uppercase");
            input.id =  "PC"+i+j;

            td.appendChild(input);
            td.classList.add("w-auto", "h-auto","p-0","border-4","border-slate-200");

            input.addEventListener("keyup", (event) => {
                if(event.target.value.length > 1) event.target.value = event.target.value.substring(0,  1 )
                onInputPress(event.target.id, Game);
                if(cronometroPalavrasCruzadas == null) iniciarContagem("cronometroPalavrasCruzadas");
              });
            
            input.addEventListener("focus", (event) => {
                event.target.value = "";
            })

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    Game.acertos =  acertosBanco();
    let creditos = document.createElement('tr')
    creditos.innerHTML = `<td colspan="${Game.x}"><div class="text-slate-200 text-right px-4 text-xs"> Desenvolvido por <a href="https://github.com/gvpassos" target="_blank">@gvpassos disponibilizado no <a href="https://github.com/gvpassos/palavrasCruzadasjs" target="_blank">Github</a></div></td>`;	
    table.appendChild(creditos);

    document.getElementById("cronometroPalavrasCruzadas").innerHTML = getTime()? getTime() : "00:00:00";

    return table;
}

export function CriarIntrucoes(Game){
    let instrucoes = document.createElement("div");
    instrucoes.classList.add("w-auto", "h-auto","py-1");
    Game.repostas.forEach(element => {
        let input = document.createElement("input");
        input.id = `resposta${element.numero}`;
        input.disabled = true;
        input.classList.add("w-56","h-auto","text-center","font-bold","uppercase","border-b-2","border-slate-900","mx-8",'text-green-500');

        if(buscarRespostaBanco(element)) input.value = element.palavra;

        let item = document.createElement("li");
        item.innerHTML = `<span class="font-bold text-indigo-600">${element.numero}</span> : <span class="flex w-60 text-lg">${element.dica}</span><br>`;
        item.appendChild(input);
        item.classList.add("marker:text-indigo-600" ,"mx-4","my-8","text-justify","text-slate-600");


        instrucoes.appendChild(item);

    });

    return instrucoes;
}

export function atribuirLetra(Game){
    for (let i = 0; i < Game.x; i++) {
        for (let j = 0; j < Game.y; j++) {
            let input =   document.getElementById("PC"+i+j);
            let td =   document.getElementById("cell"+i+j);

            input.value = " "; 
            if(Game.letras[i+""+j] == " ")  {                       /// caracteres 'espaço' celula vazia
                if(getbanco(`${i}${j}`)){
                    input.value = CarregarLocal(`${i}${j}`);
                    input.classList.add("text-green-500");
                    input.disabled = true;
                }            
            }
            else if(Game.letras[i+""+j] == ".") {                   // caracteres '.' celula nao preenchivel 
                input.classList.add("text-white","bg-slate-900","z-10");
                input.disabled = true;
            }

            else if(!isNaN(Game.letras[i+""+j]) || Game.letras[i+""+j].length > 1 ){      // caracteres numericos celula de indicação ( se tiver mais de 1 caracter , ou um numero )

                let separator = Game.letras[i+""+j].length - 1;
                
                input.classList.add("text-white","bg-slate-900","z-10");
                input.disabled = true;
                input.value = Game.letras[i+""+j].substring(0,  separator );



                if(Game.letras[i+""+j][separator] == "b"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","bottom-0","mx-3.5","absolute");
                    td.append(seta);            
                    
                }else if (Game.letras[i+""+j][separator] == "t"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","top-0","mx-3.5","absolute","rotate-180");
                    td.append(seta);      
                    
                }else if(Game.letras[i+""+j][separator] == "l"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","left-0","top-0","my-4","absolute","rotate-90");
                    td.append(seta);      
                  
                }else if(Game.letras[i+""+j][separator] == "r"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","right-0","top-0","my-4","absolute","-rotate-90");
                    td.append(seta);   
                    
                }

            }
            
            
            
        }
        
        
    }
}

 function onInputPress(id,Game){
    
    Game.repostas.forEach(resposta => {// verifica em todas as respostas 
        let index;
        for (index = 0; index < resposta.pos.length; index++) {/// verifica em todas as posições de cada resposta
            if(resposta.pos[index] == id){// verifica se a posição é igual a id da célula
                let string = "";
                resposta.pos.forEach(idpos => {
                    string += document.getElementById(idpos).value; ///Recria a palavra da resposta
                });

                if(string.toLocaleLowerCase() == resposta.palavra){  /// Acertou uma RESPOSTA /////
                    resposta.pos.forEach(idpos => {
                        document.getElementById(idpos).classList.add("text-green-500");
                        document.getElementById(idpos).disabled = true;

                        
                    });

                    Game.acertos += 1;
                    completarResposta(resposta);
                    SalvarLocal(resposta,Game.acertos);

                        if(Game.acertos == Game.repostas.length){
                            pararContagem();
                            document.getElementById("jogo").appendChild(
                                completarGame(document.getElementById("cronometroPalavrasCruzadas").innerHTML)
                            );
                        }
                    
                }

            }
        }
            
    });

   

}

function completarResposta(resposta){
    let inputResposta = document.getElementById(`resposta${resposta.numero}`);

    inputResposta.value = resposta.palavra;
    inputResposta.classList.add("text-green-500");
   
    
}