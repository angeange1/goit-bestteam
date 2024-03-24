export const createAllProducts = (products) => {
    return products.map(({ id, title, price, brand, images, description }) => {
        return `  <li data-product="${id}">
<img src="${images[0]}" alt="${title}">
      <h3>Бренд : ${brand}</h3>
      <h4>Модель : ${title}</h4>
      <p>Опис : ${description}</p>
      <p>Ціна : ${price}</p>
    </li>`
    }).join('')
}

//  <picture>
//                   <source
//                     media="(min-width: 1158px)"
//                     srcset="
//                       ${images[0]}   1x,
//                       ${images[1]} 2x
//                     "
//                     type="image/jpg"
//                   />
//                   <source
//                     media="(min-width: 768px)"
//                     srcset="
//                       ${images[2]}    1x,
//                       ${images[3]} 2x
//                     "
//                     type="image/jpg"
//                   />
//                   <source
//                     media="(max-width: 767px)"
//                     srcset="
//                       ${images[4]}   1x,
//                       ${images[5]} 2x
//                     "
//                     type="image/jpg"
//                   />
//                   <img
//                     src="${images[0]}"
//                     alt="${title}"
//                     width="100%"
//                     height="auto"
//                     loading="lazy"
//                   />
//                 </picture>