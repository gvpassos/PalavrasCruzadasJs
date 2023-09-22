export function completarGame(time){
    let fimDiv = document.createElement("div");
    fimDiv.classList.add("flex","flex-col","items-center","justify-center","border-4","border-indigo-900","bg-opacity-50","bg-slate-600","rounded-xl","absolute","top-10","left-10","right-10","z-20","h-60");
    fimDiv.id= "fimDiv";
            fimDiv.innerHTML = `<div class='text-4xl font-bold m-2 top-2 text-center text-yellow-400 align-middle inline-block font-sans' >
                Parabéns 
            </div>`;
            fimDiv.innerHTML += `<div class='text-xl font-bold text-center text-white align-middle inline-block m-2 font-sans'> 
                Você acertou todas as respostas! <br> em : ${time}
            </div>`;

    let btn = document.createElement("button");
            btn.classList.add("p-4","items-center","justify-center","my-","z-20","bg-indigo-900","rounded-full","text-white","font-bold","font-sans");
            btn.innerHTML = "Compartilhe o seu resultado!";
            btn.onclick = function(){
                if (navigator.share) { // Verifica se o navegador suporta a API de compartilhamento
                    navigator.share({
                        title: 'Palavras Cruzadas',
                        text: 'Eu fiz as Palavras Cruzadas em ' + time + ' do Jornal o Aperitivo tente bater meu tempo em: ',
                        url: window.location.href
                    })
                    .then(() => console.log('Conteúdo compartilhado com sucesso!'))
                    .catch((error) => console.error('Erro ao compartilhar:', error));
                  } else {
                    // Caso o navegador não suporte a API de compartilhamento, você pode fornecer um link de compartilhamento simples.
                    // Por exemplo, abrir uma nova aba/janela com o link de compartilhamento.
                    window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                  }
            }   
            fimDiv.appendChild(btn);


            return fimDiv;
}