  const totalValores = [];  
  export default function pegarValoresDoDom(Id,Titulo, totalUnidade, Quantidade){   
      
    let pegarValores = [Id, Titulo, Quantidade, totalUnidade ];
    totalValores.push(pegarValores);
    localStorage.setItem("pegarValores", JSON.stringify(totalValores));
  }
