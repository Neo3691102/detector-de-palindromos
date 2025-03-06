//1.Recopilacion de elementos HTML
const checkButton = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

//2.Funciones
const btn = () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }
  validarPalindromo(textInput.value);
};

const validarPalindromo = (word) => {
  if (word.length === 1) {
    result.innerHTML = `${textInput.value} is a palindrome`;
  }
  const cadenaLimpia = limpiarCadena(word); //me quede aqui
  if (cadenaLimpia === cadenaLimpia.split("").reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
};

const limpiarCadena = (word) => {
  return word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};

//3.Event Listeners
checkButton.addEventListener("click", btn);
