let letras = {
    //  opcoes //
    "00":"1r",
    "11":"2b",   
    "25":"3l",
    "13":"4b",
    "34":"5l",
    "10":"6b",
    "42":"7r",
    "66":"8l",
    "16":"9b",
    "52":"10r",

    //  letras // 
                "01":'c',   "02":'a',   "03":'r',   "04":'t',   "05":'o',   "06":'n',
    
    "20":'r',   "21":'a',   "22":'n',   "23":'u',   "24":'l',               "26":'p',
    "30":'e',   "31":'m',   "32":'o',   "33":'t',                           "36":'o',
    "40":'g',   "41":'o',               "43":'i',   "44":'t',   "45":'e',   "46":'m',
    "50":'o',   "51":'r',               "53":'l',   "54":'i',   "55":'m',   "56":'o',
    "60":'u',   "61":"b",   "62":"i",   "63":"l",   "64":"a",   "65":"m", 

    // casas brancas //
    "12":'.',
    "14":'.',
    "15":'.',
    "35":".",



};
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(letras[i+''+j]==undefined)letras[i+""+j] = " ";
    }
}


export var Game ={

    x:7,y:7,

    letras:letras,

    repostas:[
        {numero:"1", palavra:"carton",pos:["01","02","03","04","05","06"]},
        {numero:"2", palavra:"amor",pos:["21","31","41","51"]},
        {numero:"3", palavra:"lunar",pos:["24","23","22","21","20"]},
        {numero:"4", palavra:"util",pos:["23","33","43","53"]},
        {numero:"5", palavra:"tome",pos:["33","32","31","30"]},
        {numero:"6", palavra:"regou",pos:["20","30","40","50","60"]},
        {numero:"7", palavra:"item",pos:["43","44","45","46"]},
        {numero:"8", palavra:"malibu",pos:["65","64","63","62","61","60"]},
        {numero:"9", palavra:"pomo",pos:["26","36","46","56"]},
        {numero:"10", palavra:"limo",pos:["53","54","55","56"]},
   
    ],

    acertos:0,
};

