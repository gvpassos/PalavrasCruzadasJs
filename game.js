let letras = {
    "10":"1>",
    '11':'o',
    '12':'k',
    '21':'2>',
    '22':'d',
    '23':'i',
    '24':'a',
    '33':'3>',
    '34':'a',
    '35':'b',
    '36':'r',
    '37':'i',
    '38':'r',  
};
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if(letras[i+''+j]== undefined){
            const randomNumber = Math.floor(Math.random() * 26);
            const letterCode = randomNumber + 97;
            const randomLetter = String.fromCharCode(letterCode);
            letras[i+''+j] = randomLetter;
        }
    }
}

export var Game ={

    x:10,y:10,


    letras:letras,



};

