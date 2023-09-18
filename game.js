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

    // casas brancas //
    "12":'.',
    "14":'.',
    "15":'.',
    "35":".",



};
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if(letras[i+''+j]===undefined)letras[i+""+j] = " ";
    }
}
export var Game ={

    x:7,y:7,

    letras:letras,

    repostas:[
        {
            numero:"1", palavra:"proeza",pos:["01","02","03","04","05","06"],
            dica:"Realizar algo incomum, difícil ou nunca feito antes."
        },        
        {
            numero:"2", palavra:"amor",pos:["21","31","41","51"],
            dica:"Querer o bem do outro e agir de acordo com essa vontade.",
        },
        {
            numero:"3", palavra:"lunar",pos:["24","23","22","21","20"],
            dica:"Da Lua ou a ela relativo",
        },
        {
            numero:"4", palavra:"util",pos:["23","33","43","53"],
            dica:"Que pode ter ou tem algum uso; que serve ou é necessário para algo."
        },
        {
            numero:"5", palavra:"tome",pos:["33","32","31","30"],
            dica:"Um dos seguidores de Jesus, que foi escolhido para ser apóstolo. Ele viveu com Jesus, aprendeu dele e foi preparado para ser um dos futuros líderes da igreja."
        },
        {
            numero:"6", palavra:"regou",pos:["20","30","40","50","60"],
            dica:"Terceira pessoa singular do pretérito perfeito do indicativo de regar"
        },
        {
            numero:"7", palavra:"item",pos:["43","44","45","46"],
            dica:"Cada uma das partes ou unidades de algo.Elemento, parcela, unidade."
        },
        {
            numero:"8", palavra:"malibu",pos:["65","64","63","62","61","60"],
            dica:"Uma cidade a oeste de Los Angeles, na Califórnia.",
        },
        {
            numero:"9", palavra:"pomo",pos:["26","36","46","56"],
            dica:"[Linguagem poética] O peito ou seio da mulher."
        },
        {   
            numero:"10", palavra:"limo",pos:["53","54","55","56"],
            dica:"Mistura viscosa, pegajosa, de argila, matéria orgânica e água; barro, lama, lodo."
        },
   
    ],

    acertos:0,
};

