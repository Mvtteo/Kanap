const product = window.location.search.split("?").join("");

console.log(product);

let productData = [];

const fetchProduct = async () => {
    await fetch(`http://localhost:3000/api/products/${product}`)
    .then((res) => res.json())
    .then((promise) => {
        productData = promise;
        console.log(productData);
    });
};

const productDisplay = async () => {
    await fetchProduct();

    document.querySelector('article > .item__img').innerHTML = `
    <img src="${productData.imageUrl}" alt="image de canape ${productData.name}"></img>
    `;

    document.getElementById('title').innerHTML = `
    ${productData.name}`

    document.getElementById('price').innerHTML = `
    ${productData.price}`

    document.getElementById('description').innerHTML = `
    ${productData.description}`

    document.querySelector('select').innerHTML = `
    <option value="">--SVP, choisissez une couleur --</option>
    <option value="${productData.colors[0]}">${productData.colors[0]}</option>
    <option value="${productData.colors[1]}">${productData.colors[1]}</option>
    <option value="${productData.colors[2]}">${productData.colors[2]}</option>
    `
};

productDisplay();