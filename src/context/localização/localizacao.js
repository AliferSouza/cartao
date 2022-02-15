import { App } from '../../app.js'

export default function Localizacao(){
    navigator.geolocation.watchPosition(sucesso, erro)  
    function sucesso(position){    
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        App(latitude, longitude)  
    }
    function erro  (position) {
        return position
    }
}