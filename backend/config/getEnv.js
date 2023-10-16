import dotenv from 'dotenv';
dotenv.config();

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_APP_SECRET = process.env.PAYPAL_APP_SECRET;
const PAYPAL_API_URL = process.env.PAYPAL_API_URL;

export { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL };
