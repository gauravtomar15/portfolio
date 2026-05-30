/**
 * Grog API Service
 * Handles all communication with the Grog API for AI responses
 */

import axios from "axios";
import { getAIContext, systemPrompt } from "../data/portfolioContext";

const GROG_API_BASE_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Send a message to the AI and get a response
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessageToAI = async (userMessage, conversationHistory = []) => {
  try {
    // Validate API key
    const apiKey = import.meta.env.VITE_GROG_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Grog API key not configured. Please add VITE_GROG_API_KEY to your .env file."
      );
    }

    // Build conversation with simplified context
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      // Add context about Gaurav
      {
        role: "user",
        content: `Context - I am Gaurav Tomar, a Full-Stack Developer. My skills: React, Node.js, MongoDB, Express, Next.js, TypeScript, Tailwind CSS. Projects: Smart Education System, College Management System, Real-time Chat App, E-Commerce Platform. I'm open to opportunities.`,
      },
      {
        role: "assistant",
        content: "Got it! I have the context about your profile and projects. I'm ready to answer questions about you.",
      },
      // Include previous conversation history (without first 2 context messages)
      ...conversationHistory.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      // Add current user message
      {
        role: "user",
        content: userMessage,
      },
    ];

    console.log("Sending message to Grog API:", {
      model: "mixtral-8x7b-32768",
      messagesCount: messages.length,
      apiKeyPresent: !!apiKey,
    });

    // Call Grog API with correct parameters
    const response = await axios.post(GROG_API_BASE_URL, {
      model: "llama-3.3-70b-versatile",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1024,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    console.log("Grog API Response:", response.data);

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
    console.error("Error details:", {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
    });

    // Handle specific error cases
    if (error.response?.status === 401) {
      return "I'm having trouble with authentication. Please check your API key is valid.";
    } else if (error.response?.status === 429) {
      return "I'm receiving too many requests. Please try again in a moment.";
    } else if (error.response?.status === 400) {
      return "Request format error. Please try again or contact support.";
    } else if (error.response?.status === 500) {
      return "The Groq API server is having issues. Please try again shortly.";
    } else if (error.message.includes("API key not configured")) {
      return error.message;
    } else if (error.message.includes("Network Error") || error.message.includes("ECONNABORTED")) {
      return "Network error. Please check your internet connection and try again.";
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
