export function Criar(col,row){
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    table.classList.add("w-auto", "h-auto","p-0");

    for (let i = 0; i < col; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < row; j++) {
            let td = document.createElement("td");
            td.id = "cell"+i+j;
            td.classList.add("relative");
            let input = document.createElement("input");

            input.classList.add("w-10","h-10","text-center","font-bold","uppercase");
            input.id = i+""+j;

            td.appendChild(input);
            td.classList.add("w-auto", "h-auto","p-0","border-4","border-slate-200");

            input.addEventListener("keyup", (event) => {
                if(event.target.value.length > 1) event.target.value = event.target.value.substring(0,  1 )
                onInputPress(event.target.id, event.key);
                
              });
            
            input.addEventListener("focus", (event) => {
                event.target.value = "";
            })

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return table;
}


export function atribuirLetra(game){
    for (let i = 0; i < game.x; i++) {
        for (let j = 0; j < game.y; j++) {
            let input =   document.getElementById(i+""+j);
            let td =   document.getElementById("cell"+i+j);

            input.value = " ";
            if(game.letras[i+""+j] == " ")  input.classList.add("text-black","bg-slate-50");
            
            else if(game.letras[i+""+j] == ".") {
                input.classList.add("text-white","bg-slate-900","z-10");
                input.disabled = true;
            }

            else if(!isNaN(game.letras[i+""+j]) || game.letras[i+""+j].length > 1 ){

                let separator = game.letras[i+""+j].length - 1;
                
                input.classList.add("text-white","bg-slate-900","z-10");
                input.disabled = true;
                input.value = game.letras[i+""+j].substring(0,  separator );



                if(game.letras[i+""+j][separator] == "b"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","bottom-0","mx-3.5","absolute");
                    td.append(seta);            
                    console.log("b");
                }else if (game.letras[i+""+j][separator] == "t"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","top-0","mx-3.5","absolute","rotate-180");
                    td.append(seta);      
                    console.log("t");
                }else if(game.letras[i+""+j][separator] == "l"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","left-0","top-0","my-4","absolute","rotate-90");
                    td.append(seta);      
                    console.log("l");
                }else if(game.letras[i+""+j][separator] == "r"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","right-0","top-0","my-4","absolute","-rotate-90");
                    td.append(seta);   
                    console.log("r");
                }

            }
            
            
            
        }
        
        
    }
}
import { Game } from "./game.js";
export function onInputPress(id,key){
    
    Game.repostas.forEach(element => {// verifica em todas as respostas 
        let index;
        for (index = 0; index < element.pos.length; index++) {/// verifica em todas as posições de cada resposta
            if(element.pos[index] == id){// verifica se a posição é igual a id da célula
                let string = "";
                element.pos.forEach(idpos => {
                    string += document.getElementById(idpos).value;
                });

                if(string == element.palavra){
                    element.pos.forEach(idpos => {
                        document.getElementById(idpos).classList.add("text-green-500");
                        document.getElementById(idpos).disabled = true;
                    });

                    Game.acertos += 1;
                    console.log(Game.acertos);
                        if(Game.acertos == Game.repostas.length){
                            alert("Você ganhou!");
                        }
                    
                }

            }
        }
            
    });

}