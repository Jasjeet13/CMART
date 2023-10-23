document.addEventListener('DOMContentLoaded', function() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const wishlistList = document.getElementById('wishlist');

    if (wishlist && wishlist.length > 0) {
        wishlist.forEach((item, index) => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.product} - $${item.price}`;

            // Add a "Remove" button for each item in the wishlist
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeFromWishlist(index);
            };

            newItem.appendChild(removeButton);
            wishlistList.appendChild(newItem);
        });
    }
});

function removeFromWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));

    if (index >= 0 && index < wishlist.length) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));

        // Refresh the wishlist display
        const wishlistList = document.getElementById('wishlist');
        wishlistList.innerHTML = ''; // Clear the list
        wishlist.forEach((item, newIndex) => {
            const newItem = document.createElement('li');
            newItem.textContent = `${item.product} - $${item.price}`;

            // Add a "Remove" button for each item in the wishlist
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function() {
                removeFromWishlist(newIndex);
            };

            newItem.appendChild(removeButton);
            wishlistList.appendChild(newItem);
        });
    }
}
// JavaScript function to go to the home page
function goToHome() {
    window.location.href = 'NEWCART.html'; // Replace 'home.html' with the actual URL of your home page
}
