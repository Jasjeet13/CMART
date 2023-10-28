// Retrieve cart data from localStorage and display it on the cart page
document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');

    let storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        total = cart.reduce((acc, item) => acc + item.price, 0);

        cart.forEach((item, index) => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.product} - ${item.price}`;
            
            // Add a "Remove" button for each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'button-remove';
            removeButton.onclick = function() {
                removeFromCart(index);
            };

            newItem.appendChild(removeButton);
            cartList.appendChild(newItem);
        });

        totalDisplay.textContent = total;
    }
});

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        total -= cart[index].price;
        cart.splice(index, 1);

        // Store updated cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Refresh the cart display
        const cartList = document.getElementById('cart');
        const totalDisplay = document.getElementById('total');
        cartList.innerHTML = ''; // Clear the list
        cart.forEach((item, newIndex) => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.product} - $${item.price}`;

            // Add a "Remove" button for each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'button-remove';
            removeButton.onclick = function() {
                removeFromCart(newIndex);
            };

            newItem.appendChild(removeButton);
            cartList.appendChild(newItem);
        });

        totalDisplay.textContent = total;
    }
}
// JavaScript function to go to the home page
function goToHome() {
    window.location.href = 'papers.html'; // Replace 'home.html' with the actual URL of your home page
}

