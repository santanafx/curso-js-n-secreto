var box = document.querySelector(".box");

var gerarNumeroRandomico = () => {
  box.innerHTML = parseInt(Math.random() * 100);
};

gerarNumeroRandomico();
