"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;  

const genAI = new GoogleGenerativeAI({
  apiKey: GEMINI_API_KEY,
});

export async function scanPantryImage(formData) {
    try {
        const user = await checkUser();
        if (!user) {
            throw new Error("User not authenticated");
        }
        const isPro = user.subscriptionTier === "pro";

        //APPLY Arcjet rate limit login here
    } catch (error) {
        
    }
}