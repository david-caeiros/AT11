function checkNumber() {
  const numberInput = document.getElementById("number");
  const number = parseInt(numberInput.value);

  if (!isNaN(number)) {
      const resultElement = document.getElementById("result");
      const parityElement = document.getElementById("parity");

      if (number % 2 === 0) {
          document.body.style.backgroundColor = "blue";
          parityElement.textContent = "par";
      } else {
          document.body.style.backgroundColor = "orange";
          parityElement.textContent = "ímpar";
      }

      resultElement.style.display = "block";
  } else {
      alert("Insira um número válido.");
  }
}
