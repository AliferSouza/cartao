import header from "./header.js"


export default function Modal() {
    const modal = ` 
  <main class="container">
  ${header()}
  </br> 
  <h2>Login</h2>
  <form action="">
      <div class="input-field">
          <input type="text" name="username" id="nome"
              placeholder="Nome da Empresa">
          <div class="underline"></div>
      </div>

      <div class="input-field">
          <input type="number" name="password" id="cnpj"
              placeholder="CNPJ">
          <div class="underline"></div>
      </div>

      <button type="submit" value="Continue" class="btn">Gerar cartão</button>
  </form>

  <div class="footer">
      <span>Direitos reservados Atacadao S.A</span>
      </br> 
      </br> 
      </br> 
          </div>       

</main>
     `;
    return modal;
}

