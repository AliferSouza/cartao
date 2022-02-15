async function getInfo() {
    let url = 'api.json';
    try {
        let res = await fetch(url); 
        return await res.json();
       
    } catch (error){     
        let storageValue = JSON.parse(localStorage.getItem("API"));
        return await res.json();
        console.log(error)
    }
}


export default getInfo;