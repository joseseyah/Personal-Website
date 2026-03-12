export default async function handler(req, res) {
    const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allows only GET requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allows Content-Type header

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
