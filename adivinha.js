var Numero;
var tentativas;
var limite;
var vidas;
var musicaFundo = new Audio('All Champion Battle Themes V4.mp3'); //Carrega a música assim que o jogador carrega em Iniciar/Recomeçar


function Random() {
	var numAleatorio = parseInt(Math.floor(Math.random() * limite) + 1); //Entre 1 e limite inclusive
	console.log("random number: " + numAleatorio); //Coloca o número na consola
    return numAleatorio;
 }

 //Função que configura o jogo logo no inicio do mesmo
 function Init() {
	musicaFundo.loop = true; //Música em loop
	musicaFundo.volume = 0.15; //Volume de 0 a 1
	musicaFundo.load(); //Reset da música caso tivesse a dar
	musicaFundo.play(); //Play música
	pedirNumMax(); //Função que pede o número máximo ao utilizador
	numSecreto = Random();
	vidas = 5; //Número de vidas
	tentativas = 0; //Número de tentativas
	document.JogoDaAdivinha.Output.value='Estou a pensar num numero entre 0 e ' + (limite) +'. Tenta adivinhar qual é?';
	document.JogoDaAdivinha.Tries.value=tentativas;
	document.JogoDaAdivinha.HighLow.value='';
	document.JogoDaAdivinha.Input.value='';
 }

 //Função que verifica tanto no numero de vidas do jogador, como as tentativas e se o número está abaixo ou acima do número colocado
function Jogo(numero) {
	
	vidas--;
	
	if (vidas==0) {
		console.log("sem vidas");
		alert ("Perdeste") //Envia um alerta a avisar o jogador que este mesmo perdeu
		//Assim que o jogador perder
		Init(); //Reinicia o jogo
	}
	
    else 
		if (isNaN (numero)) {
			alert ("Só são autorizados números!")
			vidas++;
			}
			else {
			if(numero==numSecreto) {
			tentativas++;
			document.JogoDaAdivinha.Output.value='Acertaste em ' + tentativas + ' tentativas! Era o numero ' + numSecreto + '! Clica em Recomeçar para jogar outra vez';
			document.JogoDaAdivinha.HighLow.value='Certoooooooooo!'; 
		}
	
		else {
			tentativas++;
			document.JogoDaAdivinha.Output.value='Não, ' + numero + ' não é o numero em que estou a pensar!';
			document.JogoDaAdivinha.HighLow.value=(numSecreto > numero) ? 'mais alto!' : 'mais baixo!';
			document.JogoDaAdivinha.Tries.value=tentativas;			 
		}
	}
}
 
 // Função que pergunta ao jogador qual o número máximo com que pretende jogar
function pedirNumMax() {
	 var num = parseInt(prompt("Escreve o número máximo"));
	 if (isNaN (num)) { 
		alert ("Só são permitidos números!");
		 pedirNumMax ();
		 }
		 else {
	 console.log("numMax: " + num);
	 limite = num;
	 }
}