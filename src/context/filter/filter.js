import whatsapp from '../logica/whatsapp/whatsapp.js'
   export default function filter(){
    let storageValue = JSON.parse(localStorage.getItem("pegarValores"));
    
    var mesa = prompt("Digite N° da MESA ou seu Endereço: ");
   
    //pegar o ultimo valor repetido
    const foodObj = {};

    for (const food of storageValue) {
      [
        (foodObj[food[0]] =  food[0] + " " + food[1] + " Quantidade: " + food[2]),
      ];
    }

   

    
  //transforma em um arry de palavras e criar espaços
    let ListaWhats = [];
    for (let key in foodObj) {
      ListaWhats.push(foodObj[key] + " ");
    }

   
    console.log(ListaWhats  + " Mesa/Endereço: "+ mesa )
    whatsapp(ListaWhats, mesa)

    localStorage.removeItem("pegarValores");

    location.reload(true)

   }