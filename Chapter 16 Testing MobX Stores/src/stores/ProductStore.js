import { observable, action } from "mobx";

export default function ProductStore(api){
    const products = observable([]);

    const fetchProducts = action(function(){
        return api.fetchProducts()
                .then(resetProducts);
    });
    
    function resetProducts(newProducts){
        products.replace(newProducts);
    }
    
    function getProducts(){
        return products.toJS();
    }

    return Object.freeze({
        getProducts,
        fetchProducts
    });
}