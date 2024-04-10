const form = document.querySelector("form");
const resultados = document.querySelector("#resultados");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const termo = event.target.elements[0].value;
  buscarResultados(termo);
});

function buscarResultados(termo) {
  resultados.innerHTML = `<p>Resultados para "${termo}":</p>`;
  // Código para buscar os resultados usando uma API ou um arquivo JSON
}