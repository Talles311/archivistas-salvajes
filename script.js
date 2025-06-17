// Atualizar mês atual no Hero
const updateMonth = () => {
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const today = new Date();
  document.getElementById("current-month").textContent = 
    `${months[today.getMonth()]} ${today.getFullYear()}`;
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  updateMonth();
  
  // Exemplo de interação: Botão "Explorar Archivo"
  const btnExplorar = document.querySelector(".btn-explorar");
  btnExplorar.addEventListener("click", () => {
    alert("¡Redirigiendo al catálogo!"); // Substituir por redirecionamento real
  });
});