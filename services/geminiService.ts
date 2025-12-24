
import { GoogleGenAI } from "@google/genai";

export const getFashionAdvice = async (userPrompt: string) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key não encontrada. Verifique as configurações de ambiente.");
      return "Estou quase pronto para te dar dicas! Por favor, certifique-se de que a chave de API está configurada.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o consultor de estilo oficial da Ipanema para a campanha 'Comece com o pé direito'. 
        Seu objetivo é ajudar as pessoas a se sentirem leves, confiantes e elegantes usando a nova coleção em TONS PASTÉIS.
        
        Diretrizes de Resposta:
        1. Tom: Acolhedor, solar, sofisticado e otimista.
        2. Foco: Conforto e moda casual-chic.
        3. Recomendações: Sugira tecidos naturais como linho e algodão.
        4. Cores: Enfatize Rosa Glacê, Azul Sereno, Verde Menta e Lavanda.
        5. Tema: Sempre inclua uma frase inspiradora sobre positividade.
        
        Mantenha as respostas concisas e visualmente organizadas.`,
        temperature: 0.8,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Nossa IA de estilo está descansando sob o sol do Rio. Tente novamente em alguns segundos!";
  }
};
