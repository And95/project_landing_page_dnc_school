const setaDireita = document.getElementById("seta-direita");
const setaEsquerda = document.getElementById("seta-esquerda");

const leonardo = document.getElementById("Leonardo");
const samantha = document.getElementById("Samantha");
const bruna = document.getElementById("Bruna");

function RolarParaDireita() {
  leonardo.style.display = "none";
  bruna.style.display = "block";

  setaDireita.style.display = "none";
  setaEsquerda.style.display = "block";
}

function RolarParaEsquerda() {
  leonardo.style.display = "block";
  bruna.style.display = "none";

  setaDireita.style.display = "block";
  setaEsquerda.style.display = "none";
}

function ClearInputs() {
  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
  }, 1000);
}
