import Modal from '../../../componets/modal.js'

export default function whatsapp(ListaWhats, mesa) {
  const modal = document.querySelector(".modalPix").innerHTML = Modal()
  const Total = document.querySelector(".button-total").textContent;
  window.open(
    "https://api.whatsapp.com/send?phone=5531993253883&text=" +
      ListaWhats +
      " Mesa/Endereço: " +
      mesa + "Total: "+ Total
  );
}
