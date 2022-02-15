
const pegarValoresdeLocalização = []
function Localização(){
    navigator.geolocation.watchPosition(sucesso, erro)
  
    function sucesso(position){    
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        let pegarValoresLatLog = [latitude, longitude];
        pegarValoresdeLocalização.push(pegarValoresLatLog);     
  
    }
    function erro  (position) {
        return position
    }




}




export default Localização;

