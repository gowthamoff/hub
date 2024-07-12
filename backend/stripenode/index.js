const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    try {
        const { products } = req.body;

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.dish,
                    images: [product.imgdata]
                },
                unit_amount: product.price * 100,
            },
            quantity: product.qnty
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// Export the serverless function
module.exports.handler = serverless(app);
