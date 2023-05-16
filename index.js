function converter() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = ((fahrenheit - 32) * 5) / 9;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    fahrenheit + "°F equivale a " + celsius.toFixed(2) + "°C.";
  resultado.style.display = "block";
  if (celsius >= -273) {
    if (celsius > 30) {
      document.body.style.backgroundColor = "orange";
    } else {
      document.body.style.backgroundColor = "lightblue";
    }
  }
}

var input = document.getElementById("fahrenheit");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    converter();
  }
});
