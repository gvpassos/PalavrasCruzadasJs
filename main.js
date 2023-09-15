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

            input.addEventListener("focus", (event) => {
                event.target.value = "";
            })

            input.addEventListener("keypress", (event) => {
                
                if(event.target.value.length >= 1) event.target.value = event.target.value.slice(1,1);
              });

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
            
            if(!isNaN(game.letras[i+""+j]) || game.letras[i+""+j].length > 1 ){
                
                input.classList.add("text-white","bg-slate-900","z-10");
                input.disabled = true;
                input.value = game.letras[i+""+j][0];

                if(game.letras[i+""+j][1] == "b"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","bottom-0","mx-3.5","absolute");
                    td.append(seta);            
                    console.log("b");
                }else if (game.letras[i+""+j][1] == "t"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","top-0","mx-3.5","absolute","rotate-180");
                    td.append(seta);      
                    console.log("t");
                }else if(game.letras[i+""+j][1] == "l"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","left-0","top-0","my-4","absolute","rotate-90");
                    td.append(seta);      
                    console.log("l");
                }else if(game.letras[i+""+j][1] == "r"){
                    let seta = document.createElement("div");
                    seta.classList.add("h-0","w-0","border-x-8","border-x-transparent","border-t-[8px]","border-b-transparent","border-slate-50","z-10","right-0","top-0","my-4","absolute","-rotate-90");
                    td.append(seta);   
                    console.log("r");
                }

            }else{
                input.classList.add("text-black","bg-slate-50");
                input.value = game.letras[i+""+j];
            }
            
        }
        
        
    }
}

export function onInputPress(id){
    console.log(id);

}