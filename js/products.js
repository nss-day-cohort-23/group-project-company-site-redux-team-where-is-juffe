let products = [
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
    {
        name: "Product Name",
        description: "Product Description",
        price: 25.32,
        url: "bullying.jpg"
    }, 
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