function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    // O QUERYSELECTOR SERÁ FEITO NA VARIÁVEL QUE DEFINIMOS NO FILTRO ACIMA E NÃO EM DOCUMENT
    let imagem =gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');

    //Se está disponível
    
    if( botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        imagem.classList.remove("dashboard__item__img--rented")
        console.log(botao);
    } else{
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
        imagem.classList.add("dashboard__item__img--rented")
        console.log(botao);
    }
  
    }
     


