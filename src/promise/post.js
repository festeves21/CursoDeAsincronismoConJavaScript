import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';
             

function postDat(urlApi, data){

    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    });

    return response;

}

const data = {
    "title" : "New Product by Franklin Esteves",
    "price": 9999,
    "description": " Descripcion de FE",
    "categoryId" : 1,
    "images" : [ "https://´laceimg.com/640/480/any"]
}



postDat( `${API}/products`,data )
    .then(response => response.json())
    .then(data => console.log(data));