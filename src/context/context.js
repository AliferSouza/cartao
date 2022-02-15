import Card from "../componets/card.js"

export default function Run() {
  let listaDeCartoes = []
  const nome = document.querySelector("#nome");
  const cnpj = document.querySelector("#cnpj");
 
 document.querySelector(".btn").addEventListener("click", function (event) {
      event.preventDefault()
  listaDeCartoes.push({
      nomeCartao: nome.value,
      cnpjCartao: cnpj.value
  })

  localStorage.setItem('cartoes', JSON.stringify(listaDeCartoes))
  Card()


  })
  
}







