## Exemplo de Uso

Aqui está um exemplo simples de como configurar o jogo em seu blog:

```javascript
let Game = {
    x:10, y:10,
    respostas:[
        {palavra:"aperitivo",pos:["11","12","13","14","15","16","17","18","19"]},
        {palavra:"sul",pos:["33","43","53"]},
        {palavra:"noticia",pos:["61","62","63","64","65","66","67","68"]},

        {palavra:"mais",pos:["32","33","34","35"]},
        {palavra:"confianca",pos:["01","20","30","40","50","60","70","80","90"]},
    ],
    acertos:0
}
```
## Resultado

![Resultado](resultado.jpg)

### bug conhecidos 

- [x] é possivel marcar pontos marcando a mesma palavra mais de uma vez
