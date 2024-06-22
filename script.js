const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsElement = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.parentNode.querySelector('h3').innerText;
        const productPrice = button.parentNode.querySelector('p').innerText;
        
        const li = document.createElement('li');
        li.innerText = `${productName} - ${productPrice}`;
        cartItemsElement.appendChild(li);
    });
});
