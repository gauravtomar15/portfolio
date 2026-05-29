/**
 * Grog API Service
 * Handles all communication with the Grog API for AI responses
 */

import axios from "axios";
import { getAIContext, systemPrompt } from "../data/portfolioContext";

const GROG_API_BASE_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Create Grog API client
 */
const grogClient = axios.create({
  baseURL: GROG_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_GROG_API_KEY || ""}`,
  },
});

/**
 * Send a message to the AI and get a response
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessageToAI = async (userMessage, conversationHistory = []) => {
  try {
    // Validate API key
    if (!import.meta.env.VITE_GROG_API_KEY) {
      throw new Error(
        "Grog API key not configured. Please add VITE_GROG_API_KEY to your .env file."
      );
    }

    // Build the conversation messages
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      // Include previous conversation history
      ...conversationHistory.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      // Add current user message
      {
        role: "user",
        content: `Context about Gaurav:
${JSON.stringify(getAIContext(), null, 2)}

User Question: ${userMessage}`,
      },
    ];

    // Call Grog API
    const response = await grogClient.post("", {
      model: "mixtral-8x7b-32768", // Grog's high-performing model
      messages: messages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stop: null,
    });

    // Extract response
    if (
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0
    ) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error("Unexpected response format from Grog API");
    }
  } catch (error) {
    console.error("Error calling Grog API:", error);

    // Handle specific error cases
    if (error.response?.status === 401) {
      return "I'm having trouble with authentication. Please ensure your API key is valid.";
    } else if (error.response?.status === 429) {
      return "I'm receiving too many requests. Please try again in a moment.";
    } else if (error.message.includes("API key not configured")) {
      return error.message;
    }

    return "I'm sorry, I encountered an error processing your request. Please try again.";
  }
};

/**
 * Validate the API key
 * @returns {boolean} - True if API key is configured
 */
export const isAPIKeyConfigured = () => {
  return !!import.meta.env.VITE_GROG_API_KEY;
};

/**
 * Get the configured API endpoint
 * @returns {string} - The API endpoint
 */
export const getAPIEndpoint = () => {
  return GROG_API_BASE_URL;
};

export default {
  sendMessageToAI,
  isAPIKeyConfigured,
  getAPIEndpoint,
};
