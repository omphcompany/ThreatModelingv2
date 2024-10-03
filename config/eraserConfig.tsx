// src/config/eraserConfig.tsx
import eraser from '@api/eraser';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const apiKey = process.env.ERASER_API_KEY;

if (!apiKey) {
    throw new Error("Eraser API key is not defined in the environment variables.");
}

eraser.auth(apiKey);

export default eraser;