export function Criar(col,row){
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    table.classList.add("w-auto", "h-auto","p-0");

    for (let i = 0; i < col; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < row; j++) {
            let td = document.createElement("td");
            let input = document.createElement("input");

            input.classList.add("w-10","h-10","text-center","font-bold","uppercase");
            input.id = i+""+j;

            td.appendChild(input);
            td.classList.add("w-auto", "h-auto","p-0","border-4","border-slate-400");

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
            if(!isNaN(game.letras[i+""+j]) || game.letras[i+""+j].length > 1 ){
                let input =   document.getElementById(i+""+j)
                input.classList.add("text-white","bg-slate-700");
                input.disabled = true;
            }else{
                document.getElementById(i+""+j).classList.remove("text-black","bg-slate-50");
            }
            document.getElementById(i+""+j).value = game.letras[i+""+j];
        }
        
        
    }
}

export function onInputPress(id){
    console.log(id);

}