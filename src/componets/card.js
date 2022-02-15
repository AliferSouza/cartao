function cardFoods() {
let valorCartoes = JSON.parse(localStorage.getItem("cartoes"));
     
  let cardFoods = ``;

  valorCartoes.forEach((dado) => {   
    console.log(dado)    
    cardFoods += `
    <div  class="Cartao">
        <div>${dado.nomeCartao}<div>
        <div>${dado.cnpjCartao}<div>

        </div>

`;
  });

  return cardFoods;
}
export default cardFoods;
