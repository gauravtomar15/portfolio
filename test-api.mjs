import axios from "axios";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
if (!apiKey) {
  throw new Error("Grog API key not configured. Please add VITE_GROQ_API_KEY to your .env file.");
}

const testAPI = async () => {
  try {
    console.log("🔍 Testing Grog API with llama-3.3-70b-versatile...\n");
    
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant for Gaurav Tomar's portfolio. Help visitors learn about his projects and skills."
          },
          {
            role: "user",
            content: "Tell me about Gaurav's projects"
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        }
      }
    );
    
    console.log("✅ API SUCCESS!");
    console.log("\nAI Response:\n");
    console.log(response.data.choices[0].message.content);
    
  } catch (error) {
    console.log("\n❌ API ERROR!");
    console.log("Status:", error.response?.status);
    console.log("Status Text:", error.response?.statusText);
    console.log("Error Message:", error.response?.data?.error?.message || error.message);
  }
};

testAPI();

