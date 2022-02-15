import totalIntens from '../totalIntens/totalIntens.js'

  
const totalValores = [];  

export default function changeOrder(food, changeType) {    
    let foodQuan = parseInt(food.querySelector(".order-val").textContent);
    let foodPrice = parseFloat(food.querySelector(".food-rate").textContent.replace(/[^\d.-]/g, ""));    

    if (changeType === "dec" && foodQuan > 0) foodQuan--;
    if (changeType === "inc") foodQuan++;

    food.querySelector(".order-val").textContent = foodQuan;
    food.querySelector(".food-total").textContent = `${( foodQuan * foodPrice).toFixed(2)}`;
    
    totalIntens()

    const Id = food.querySelector("h6").textContent;   
    const Titulo = food.querySelector(".Titulo").textContent;
    const Quantidade = food.querySelector(".order-val").textContent; 
    const totalUnidade = food.querySelector(".food-total").textContent;
    
    let pegarValores = [Id, Titulo, Quantidade, totalUnidade];

    totalValores.push(pegarValores);
    
    console.log(pegarValores)
    localStorage.setItem("pegarValores", JSON.stringify(totalValores));
}

     
    


 
    
   
  
