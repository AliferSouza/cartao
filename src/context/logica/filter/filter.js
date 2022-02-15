import whatsapp from "../whatsapp/whatsapp.js";

export default function filter() {
   //Opcional
  var mesaEndereço = prompt("Digite N° da MESA ou seu Endereço: ");
  let storageValue = JSON.parse(localStorage.getItem("pegarValores"));

  //pegar o ultimo valor repetido
  let foodObj = [];

  for (const food of storageValue) {
    [
      (foodObj[food[0]] =
        food[0] +
        `- Item  Nome: ${food[1]}  Quant: ${food[2]}  Valor Total:  ${food[3]}`),
    ];
  }



  //transforma em um arry de palavras e criar espaços
  let ListaWhats = [];
  for (let key in foodObj) {
    ListaWhats.push(foodObj[key] + " \n ")
  }

  console.log(ListaWhats.join('') + `Mesa: ${mesaEndereço}` )

  whatsapp(ListaWhats.join(''), mesaEndereço);
  
 
}
