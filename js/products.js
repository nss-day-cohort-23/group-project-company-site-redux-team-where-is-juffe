let products = [
    {

        name: "So you made it",
        description: "This one of those everyday trophies. You earned it, probably",
        price: 125.32,
        url: "imgs/product.imgs/download-1.jpg"
    }, 
    {
        name: "Nice Attempt",
        description: "Of all the days this was one of them. Treat yourself.",
        price: 225.82,
        url: "imgs/product.imgs/download-2.jpg"
    }, 
    {
        name: "Eye of the Turtle",
        description: "Hey you got there, cool.",
        price: 125.32,
        url: "imgs/product.imgs/download-3.jpg"
    }, 
    {
        name: "The Supreme",
        description: "No, its not pizza, bummer.",
        price: 425.32,
        url: "imgs/product.imgs/images-2.jpg"
    }, 
    {
        name: "Product Thingy",
        description: "Kudos Boss or whatever",
        price: 135.36,
        url: "imgs/product.imgs/images-3.jpg"
    }, 
    {
        name: "So Elegant",
        description: "It's like that Alanis Morrisette song, not ironic in any way. Yep, meta",
        price: 55.32,
        url: "imgs/product.imgs/images-4.jpg"
    }, 
    {
        name: "Your Dreams Can Come True",
        description: "Welcome to the Hotel California. Take it easy you earned this nightmare through your apathy. ",
        price: 245.32,
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
