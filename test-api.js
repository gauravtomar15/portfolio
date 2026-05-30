const axios = require("axios");

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
if (!apiKey) { throw new Error("Grog API key not configured. Please add VITE_GROQ_API_KEY to your .env file."); }

const testAPI = async () => {
  try {
    console.log("Testing Grog API...");
    console.log("API Key present:", !!apiKey);
    
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant."
          },
          {
            role: "user",
            content: "Say hello!"
          }
        ],
        temperature: 0.7,
        max_tokens: 256
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        }
      }
    );
    
    console.log("\n✅ API SUCCESS!");
    console.log("Response:", response.data.choices[0].message.content);
    
  } catch (error) {
    console.log("\n❌ API ERROR!");
    console.log("Status:", error.response?.status);
    console.log("Error Message:", error.response?.data?.error?.message || error.message);
    console.log("Full Error:", JSON.stringify(error.response?.data, null, 2));
  }
};

testAPI();
