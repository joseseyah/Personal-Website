const endpoint = 'https://printful-proxy-gold.vercel.app/api/products';

async function fetchProducts() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (response.ok) {
            displayProducts(data.result); // Adjust based on your API structure
        } else {
            console.error('Error fetching products:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProducts(products) {
    const shopContainer = document.getElementById('shop-container');
    shopContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'item';

        productElement.innerHTML = `
            <img src="${product.thumbnail_url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>From: $${product.price || 'N/A'}</p>
            <button onclick="window.location.href='${product.url}'">Buy Now</button>
        `;
        shopContainer.appendChild(productElement);
    });
}

// Call the function when the page loads
fetchProducts();
