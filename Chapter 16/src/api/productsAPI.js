function toJson(response){
    return response.json();
}

function fetchProducts(){
    return fetch("/products.json")
        .then(toJson);
}

export default { fetchProducts };