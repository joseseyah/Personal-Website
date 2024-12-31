async function fetchPrintfulProducts() {
    const endpoint = 'https://api-15lpe44u7-jhs-projects-b0f9866c.vercel.app/api/products';

    try {
        const response = await fetch(endpoint);

        console.log('Response status:', response.status); // Debugging

        const data = await response.json();
        
        if (response.ok) {
            displayProducts(data.result);
        } else {
            console.error('Error fetching products:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProducts(products) {
    const shopContainer = document.getElementById('shop-container');
    shopContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'item';

        productElement.innerHTML = `
            <img src="${product.thumbnail_url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button onclick="window.location.href='${product.url}'">Buy Now</button>
        `;
        shopContainer.appendChild(productElement);
    });
}

// Fetch products when the page loads
fetchPrintfulProducts();
