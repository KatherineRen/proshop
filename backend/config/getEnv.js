import dotenv from 'dotenv';
dotenv.config();

const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

export { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL };
