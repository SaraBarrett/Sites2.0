//pp 19

function constWord() {
  let word = "skateboard";

  facialHair = word.slice(5).replace("o", "e");

  console.log(facialHair);
}

//pp 24
function helloUser() {
  let firstName = prompt("qual é o teu primeiro nome?");
  let lastName = prompt("qual é o teu último nome?");

  alert(`Olá ${firstName} ${lastName}!`);
}

//pp 33
function productInfo() {
  let product = {
    name: "caneta",
    price: 1.99,
    inStock: true,
    colors: ["vermelho", "azul", "verde"],
  };

  alert("o preço é " + product.price);
  alert("a cor é " + product.colors[2]);

  product.price = 2.55;
  alert("o preço é " + product.price);
}
