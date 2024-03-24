import { getAllProducts } from "./requests/products";

getAllProducts().then(({data:{products}}) => {console.log(products)})