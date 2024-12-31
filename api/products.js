// api/products.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    const PRINTFUL_API_KEY = 'KLSRVwyIPbmWFM7zFBeh1OnNyexSeNAxK1jMQ14x';

    try {
        const response = await fetch('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${PRINTFUL_API_KEY}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json({ error: data.error });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

