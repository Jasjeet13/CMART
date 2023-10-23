let cart = [];
let wishlist = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';

    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');
    const newItem = document.createElement('li');
    newItem.textContent = `${product} - $${price}`;
    cartList.appendChild(newItem);
    totalDisplay.textContent = total;

}

// Initialize the cart when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');

    let storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        total = cart.reduce((acc, item) => acc + item.price, 0);

        cart.forEach(item => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.product} - $${item.price}`;
            cartList.appendChild(newItem);
        });

        totalDisplay.textContent = total;
    }
});

function addToWishlist(product, price) {
    wishlist.push({ product, price });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Redirect to the cart page
    window.location.href = 'wishlist.html';

    const wishlistList = document.getElementById('wishlist');
    const newItem = document.createElement('li');
    newItem.textContent = `${product} - $${price}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove from Wishlist';
    removeButton.className = 'button-remove';
    removeButton.onclick = function() {
        removeFromWishlist(product);
    };
    newItem.appendChild(removeButton);
    wishlistList.appendChild(newItem);
}

function removeFromWishlist(product) {
    const index = wishlist.findIndex(item => item.product === product);

    if (index !== -1) {
        wishlist.splice(index, 1);
        const wishlistList = document.getElementById('wishlist');
        wishlistList.removeChild(wishlistList.children[index]);
    }
}


