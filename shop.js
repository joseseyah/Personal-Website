async function fetchPrintfulProducts() {
    const apiKey = 'KLSRVwyIPbmWFM7zFBeh1OnNyexSeNAxK1jMQ14x'; 
    const endpoint = 'https://api.printful.com/store/products';

    try {
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

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

