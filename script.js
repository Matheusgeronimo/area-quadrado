const BotaoLadoQuadrado = document.getElementById("BotaoLadoQuadrado");
const TextoLadoQuadrado = document.getElementById("TextoLadoQuadrado");
var resultado;

BotaoLadoQuadrado.onclick = function(){
    console.log("jcbuayhcb")
const gago = document.getElementById("id_resposta").value;
resultado = Math.pow(gago,2);
id_rr.textContent = `A área do quadrado é ${resultado}`;
}