let letras = {
    "01":"1r",
    "21":"2b",   
};
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(letras[i+''+j]==undefined)letras[i+""+j] = " ";
    }
}

export var Game ={

    x:10,y:10,


    letras:letras,



};

