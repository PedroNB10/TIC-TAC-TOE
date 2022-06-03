
//refências 01: https://www.youtube.com/watch?v=0EiX9c4vzRs
//refências 02: https://platzi.com.br/blog/jogo-da-velha-javascript/



let classe_board = document.getElementById('board_id').className
let classe_caixa_conteudo = document.getElementById('caixa_conteudo-id').className
let isCircleTurn;
const cellElements = document.querySelectorAll("[data-cell]");
let board = document.querySelector("[data-board]");
let cell;
let classToAdd;



//area de teste




const startGame = () => {


	for (const cell of cellElements) {
		cell.classList.remove("circle");
		cell.classList.remove("x");
		cell.addEventListener("click", handleClick, { once: true })

	}

	isCircleTurn = false;
	board.classList.add("x");



};



const placeMark = (cell, classToAdd) => {
	cell.classList.add(classToAdd);
};

const swapTurns = () => {
	isCircleTurn = !isCircleTurn;

	board.classList.remove('circle');
	board.classList.remove('x');


	if (isCircleTurn) {

		board.classList.add("circle");
	}

	else {

		board.classList.add("x");
	}


};

const handleClick = (e) => {
	// Colocar a marca (X ou Círculo)

	cell = e.target; //essa linha está diferente do exemplo do video, que era uma constante e foi definida como váriavel no começo do código
	classToAdd = isCircleTurn ? "circle" : "x";//essa linha está diferente do exemplo do video, que era uma constante e foi definida como váriavel no começo do código

	placeMark(cell, classToAdd);

	// Verificar por vitória

	// Mudar símbolo
	swapTurns();

};



startGame()





//area de teste


//Elementos DOM
const casas = document.getElementsByTagName('input')// pega todos os inputs do HTML e define na variável casas
const b_reiniciar = document.getElementById('reiniciar') //pega o botão de reiniciar(elemento=button) por meio do ID dado no html 
const label_jogador = document.getElementById('jogador') //pegar o label do jogador(elemento=span) que usaremos para mostrar qual jogador tem a vez
//label_jogador é o X ou a O
const res = document.getElementById('res') //pega o resultado do jogo(empate ou ganho de X ou O), está invisível inicialmente pelo css

//Definindo variáveis de estado do jogo
var jogador = '_' //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_' //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var numero_de_jogadas = 0 //serve para descobrirmos se houve ou não empate (número de jogadas=9, tem empate)
var existe_vencedor = false//serve para verificar se houve ou não vencedor, impedindo que haja mais de um ganhador em uma partida
//aqui eu peguei todos os nomes de cada div das casas



SelecionarJogador()//Define qual jogador começa o jogo ao rodar o programa


function SelecionarJogador() { //Além de escolher quem inicia o jogo( no caso é a "O"), possibilita que troque a vez do jogador, mostrando no  canto inferior da tela


	if (jogador == '_') { // Ao rodar o programa pela primeira vez, a O começa o jogo
		jogador = "X" //define o jogador O como atual
		label_jogador.innerText = "X" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca
	} else if (jogador == 'O') {
		jogador = "X"//define o jogador X como atual
		label_jogador.innerText = "X" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff'//deixa o texto na cor branca
	}

	else {
		jogador = "O" //define o jogador O como atual
		label_jogador.innerText = "O" //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca
	}





}

//Element.addEventListener() registra quando um elemento sofre um evento, podendo colocar o tipo de evento e chamando uma função específica para cada um.


function casa_0() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[0].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[0].value = jogador //preenche a casa com X ou O

		console.log(casas[0].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0

	}


}

function casa_1() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[1].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[1].value = jogador //preenche a casa com X ou O

		console.log(casas[1].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}

function casa_2() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[2].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[2].value = jogador //preenche a casa com X ou O

		console.log(casas[2].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}
function casa_3() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[3].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[3].value = jogador //preenche a casa com X ou O

		console.log(casas[3].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}

function casa_4() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[4].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[4].value = jogador //preenche a casa com X ou O

		console.log(casas[4].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0

	}


}

function casa_5() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[5].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[5].value = jogador //preenche a casa com X ou O

		console.log(casas[5].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}

function casa_6() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[6].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[6].value = jogador //preenche a casa com X ou O

		console.log(casas[6].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}

function casa_7() { // Quando clicar em um input, será atribuído O ou X por essa function
	//casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[7].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[7].value = jogador //preenche a casa com X ou O

		console.log(casas[7].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}


}

function casa_8() { // Quando clicar em um input, será atribuído O ou X por essa function

	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[8].value == '_') && (vencedor != 'O') && (vencedor != 'X') && existe_vencedor == false) {
		casas[8].value = jogador //preenche a casa com X ou O

		console.log(casas[8].value)
		const som_jogada=new Audio('som/clique-jogada.mp3');
		som_jogada.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}


	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		numero_de_jogadas = 0
	}

}




//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', reiniciar_partida)


function reiniciar_partida() {

	document.getElementById('caixa_conteudo-id').classList.remove("caixa-conteudo-class-not")
	clean_game()
	res.style.color = 'transparent'
	existe_vencedor = false
	numero_de_jogadas = 0

	for (var i = 0; i < 9; i++) {
		casas[i].value = '_' //Limpa todas as casas
		casas[i].style.color = 'transparent' //Torna o valor _ invisível
	}

	vencedor = '_' //Reseta o vencedor

}


//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
function verificador_vitoria() {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[0].value



	} else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[3].value} venceu`
		console.log(`${casas[3].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[3].value

	} else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[6].value} venceu`
		console.log(`${casas[6].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[6].value

	} else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[0].value

	} else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[1].value} venceu`
		console.log(`${casas[1].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[1].value

	} else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[2].value

	} else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[0].value

	} else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_' && existe_vencedor == false) {

		res.style.color = '#ffffff'
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		document.getElementById('caixa_conteudo-id').classList.toggle("caixa-conteudo-class-not")
		return casas[2].value
	}

	else {//se não houve vencedor
		numero_de_jogadas++

		return '_'
	}

}

function clean_game() {
	
	for (const cell of cellElements) {
		cell.classList.remove("circle");
		cell.classList.remove("x");
		cell.addEventListener("click", handleClick, { once: true })
	}
}

