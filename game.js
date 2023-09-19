let letras = {
    //  opcoes //
    "01": "1r",
    "12": "2b",
    "23": "3l",
    "34": "4b",
    "45": "5l",
    "56": "6r",
    "67": "7l",
    "78": "8b",
    "89": "9r",
    "90": "10l",

    // casas brancas //
    "10": ".",
    "21": ".",
    "32": ".",
    "43": ".",
};

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (letras[i + '' + j] === undefined) letras[i + "" + j] = " ";
    }
}

export var Game2 = {

    x: 0,
    y: 0,

    letras: letras,

    repostas: [
        {
            numero: "1", palavra: "sol", pos: ["01", "11", "21"],
            dica: "Uma estrela que é o centro do nosso sistema solar."
        },
        {
            numero: "2", palavra: "mar", pos: ["12", "22", "32"],
            dica: "Uma grande extensão de água salgada."
        },
        {
            numero: "3", palavra: "lua", pos: ["23", "24", "25"],
            dica: "O satélite natural da Terra."
        },
        {
            numero: "4", palavra: "terra", pos: ["34", "44", "54", "64", "74"],
            dica: "O terceiro planeta a partir do Sol em nosso sistema solar."
        },
        {
            numero: "5", palavra: "vento", pos: ["45", "55", "65", "75", "85"],
            dica: "O movimento do ar."
        },
        {
            numero: "6", palavra: "fogo", pos: ["56", "57", "58", "59"],
            dica: "Uma reação química que produz calor e luz."
        },
        {
            numero: "7", palavra: "chuva", pos: ["67", "77", "87", "97", "87"],
            dica: "Precipitação de gotas de água do céu."
        },
        {
            numero: "8", palavra: "neve", pos: ["78", "88", "98", "87"],
            dica: "Precipitação de cristais de gelo."
        },
        {
            numero: "9", palavra: "nuvem", pos: ["89", "99", "98", "97", "96"],
            dica: "Agregado de gotículas de água ou gelo em suspensão na atmosfera."
        },
        {
            numero: "10", palavra: "arco-íris", pos: ["90", "80", "70", "60", "50", "40", "30", "20", "10"],
            dica: "Um fenômeno óptico e meteorológico que causa uma luz multicolorida no céu."
        },

    ],

    acertos: 0,
};