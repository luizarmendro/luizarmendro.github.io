/*É uma forma de garantir que o código seja executado no momento certo*/
/*DOM (Modelo de Objeto de Documento)*/
document.addEventListener("DOMContentLoaded", function () {

    /*const: declarar uma variável que tem um valor constante*/
    /*document.querySelectorAll: seleciona todos os elementos <.calcularTotal> no documento*/
    const calcularTotal = document.querySelectorAll(".calcularTotal");

    /*forEach: usada para percorrer elementos de uma coleção*/
    /*button => { ... }: o parâmetro button representa cada botão individual da coleção.*/
    calcularTotal.forEach(button => {

        /*button: isso é uma referência ao elemento do botão ao qual você deseja adicionar o ouvinte de evento.*/
        /*.addEventListener("click", function () { ... }): permite que você registre uma função para ser executada quando um determinado evento ocorrer no elemento. no caso específico, o evento é "click".*/
        /*function () { ... }: isso é uma função anônima, também chamada de função de callback. é o bloco de código que será executado quando o evento de clique ocorrer no botão.*/
        button.addEventListener("click", function () {

            //pega o elemento pai (a div com a classe "prato" lá no html)
            const prato = this.parentElement;

            //seleciona um elemento dentro da div pai, no caso, o input. 
            const quantidadeinserida = prato.querySelector("input");

            //é usada para pegar um valor numérico de um atributo específico em um elemento HTML
            //variável preco-prato, tem um valor definido la no html
            //this: refere-se ao elemento que está acionando o evento
            //getAttribute(...): pega o valor do atributo como uma string
            //parseFloat(...): converte essa string em um número decimal (número de ponto flutuante).
            const preco = parseFloat(this.getAttribute("preco-prato"));

            //você está pegando o valor inserido pelo usuário no campo de entrada e convertendo-o em um número inteiro e atribuímos isso a variável constante (quantidade).
            //parseInt(...): É uma função JavaScript que converte uma string em um número inteiro. 
            //quantidadeinserida: é uma referência a um elemento de entrada HTML (geralmente um campo de texto ou um campo numérico). 
            //.value: é uma propriedade desse elemento que retorna o valor atual inserido pelo usuário como uma string.
            const quantidade = parseInt(quantidadeinserida.value);

            //com o preço já definido no html e recebido pela variável preco, multiplicamos pela variável quantidade e temos o valor total
            const total = preco * quantidade;

            //a variavel valortotal está procurando um elemento com a classe "total" que recebe o produto de preco * quantidade. 
            const valortotal = this.parentElement.querySelector(".total");

            if (quantidade > 0) {
                //textContent: significa que você deseja manipular o texto dentro do elemento referenciado por valortotal
                //.toFixed(2): é usado para formatar um número com duas casas decimais.
                valortotal.textContent = `Sua continha ficou apenas: R$ ${(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`; //toda essa frase é somente para formatar o valor em BR
            }
            else{
                valortotal.textContent = `Ops, insira uma quantidade válida.`
            }

        });
    });
});