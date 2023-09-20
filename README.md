# Jogo de Palavras Cruzadas e Caça Palavras em JavaScript

## Descrição

Este é um projeto de um jogo de Palavras Cruzadas e Caça Palavras desenvolvido em JavaScript, projetado para ser usado em blogs do Blogspot. O jogo oferece uma experiência interativa e desafiadora para os usuários, permitindo a criação de vários jogos diferentes com facilidade por meio do objeto Game.

### Funcionalidades
- O jogo suporta tanto Palavras Cruzadas quanto Caça Palavras.
- O código foi escrito inteiramente em JavaScript, tornando-o compatível com a plataforma Blogspot.
- O objeto Game é responsável por definir as seguintes informações:
  - Tamanho do tabuleiro (X = Linhas e Y = Colunas).
  - Locais das casas de indicação (onde as dicas serão exibidas).
  - Dicas e respostas para o jogo.
- O projeto utiliza o framework Tailwind CSS para personalizar o layout do jogo.
- Salva o progresso do jogador localmente, aproveitando a tag <abbr> do Blogger para armazenar informações de data da postagem.
- Possui um cronômetro para medir o tempo gasto desde o início até o término do jogo.

## Como Usar
- voce pode clonar o codigo para seu pc
```shell
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

- O codigo importa os arquivos JS diretamente do link no github pages assim é possivel copiar o exemplo do index.html e colar em no post do blogger
  - lembre-se de que precisa alterar a objeto Game para criar o seu propio codigo

## Exemplo de Uso

Aqui está um exemplo simples de como configurar o jogo em seu blog:

```javascript
// Definir as configurações do jogo
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
// casas onde nao a nenhuma informação sao geradas espacos em branco 
for(let i = 0; i < 10; i++){ 
    for(let j = 0; j < 10; j++){
        if(letras[i+''+j]===undefined)letras[i+""+j] = " ";
    }
}
 var Game ={
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
    acertos:0,// o jogo inicia sem nenhum acerto e temina com acertos == respostas.length
};

```
## Resultado

![Resultado](resultado.jpg)

## Contribuição

Sinta-se à vontade para contribuir para este projeto aberto. Se você encontrar problemas ou tiver ideias para melhorias, por favor, abra uma issue ou envie um pull request.

Divirta-se jogando e personalizando o jogo de Palavras Cruzadas e Caça Palavras em seu blog!