import { getAllProducts } from "./requests/products";

import { createAllProducts } from "./services/markupService";

const list = document.getElementById('allProducts')



getAllProducts().then(({ data: { products } }) => {
    console.log(products)
    const newElements = createAllProducts(products)
    list.innerHTML = newElements
})

