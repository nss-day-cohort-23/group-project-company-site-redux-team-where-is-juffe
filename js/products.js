let products = [
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/download-1.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/download-2.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/download-3.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/images-2.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/images-3.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/images-4.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "imgs/product.imgs/images-5.jpg"
    }
];

function outputProducts(){
    let outputHTML = "";

    for(let i = 0; i < products.length; i++){
        let productCardHTML = "";

        productCardHTML += "<div class='product-card'>"
        productCardHTML += `<img alt="${products[i].name}" src="${products[i].url}"></img>`;
        productCardHTML += `<h1>${products[i].name}</h1>`;
        productCardHTML += `<p>${products[i].price}</p>`;
        productCardHTML += `<p>${products[i].description}</p>`;
        productCardHTML += "</div>";

        outputHTML += productCardHTML;
    }
    document.getElementById("products-output").innerHTML = outputHTML;
}

outputProducts();