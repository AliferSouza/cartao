import Card from "./componets/card.js";
import Context from "./context/context.js"


const card = document.querySelector(".card");

const App = () => {
  card.innerHTML = Card();
 Context()
};

export { App };
