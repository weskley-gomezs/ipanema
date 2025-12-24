
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client correctly using process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFashionAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Você é um especialista em moda da Ipanema. O tema da campanha é 'Comece com o pé direito'. Use um tom acolhedor, leve e elegante. Sugira combinações de roupas que fiquem bem com sandálias em tons rosa pastel, azul pastel e branco. Mantenha o foco em conforto e estilo casual-chic.",
        temperature: 0.7,
      },
    });
    // Accessing .text property directly as per the guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema ao buscar sua dica de moda. Mas lembre-se: comece sempre com o pé direito!";
  }
};
