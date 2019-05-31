import ProductStore from "./ProductStore";

test("ProductStore can reset all products", function() {
  //arrange
  const newProducts = [
    {id:1, title: "apple", price: 10},
    {id:2, title: "mango", price: 5}
  ];
  const apiFake = {
    fetchProducts : function(){ return Promise.resolve(newProducts); }
  };
  const store = ProductStore(apiFake);

  //act
  return store.fetchProducts(newProducts)
       .then(function assert(){
          //assert
          const products = store.getProducts();
          expect(products.length).toEqual(2);
       });
});
