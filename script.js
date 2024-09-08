let cart = [];
let totalPrice = 0;

function changeImage(image) {
    document.getElementById('mainImage').src = image;
}

document.getElementById('addToCart').addEventListener('click', function() {
    let item = {
        name: "Product Name",
        price: 99.99
    };
    cart.push(item);
    totalPrice += item.price;
    updateCart();
});

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        let div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(div);
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

// Zoom functionality
document.getElementById('mainImage').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.5)';
});

document.getElementById('mainImage').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
