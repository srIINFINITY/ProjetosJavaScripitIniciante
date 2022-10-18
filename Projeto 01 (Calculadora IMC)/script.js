const calcular = document.getElementById("calcular");

//  nome.value = 'Mauricio Henrique'
//  Atribuir um valor ao campo

function imc(){
    const nome = document.getElementById("nome").value; //getElementById = pegar o elemento que o ID dele seja (#)
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value; 
    const resultado = document.getElementById("resultado");


    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = ( peso / (altura * altura)).toFixed(2);
        // toFixed => Aredondar um valor fracionado

        let classificacao = '';
        if(valorIMC < 18.5){ //Menor que 18,5 é abaixo do peso
            classificacao = 'Abaixo do peso';
        }else if (valorIMC < 25){  //Menor que 25 é peso ideal
            classificacao = 'com peso ideal. Parabêns';
        }else if (valorIMC < 30){  //Menor que 30 um pouco acima do peso
            classificacao = 'levemente acima do peso';
        }else if (valorIMC < 35){    //Menor que 35 com obsidade 1
            classificacao = 'com obsidade grau I.'
        }else if (valorIMC < 40){    //Menor que 18,5 é abaixo do peso
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;



    }else{
        resultado.textContent = 'Preencha todos os campos'
        //textContent => dicionar um texto no campo
    }
}

calcular.addEventListener('click', imc); 
// addEventListener => esperando uma alguma ação para executar uma função
