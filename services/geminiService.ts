import { GoogleGenAI } from "@google/genai";

// Inicializa o cliente da API Gemini corretamente usando process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFashionAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o consultor de estilo oficial da Ipanema para a campanha 'Comece com o pé direito'. 
        Seu objetivo é ajudar as pessoas a se sentirem leves, confiantes e elegantes usando a nova coleção em TONS PASTÉIS (Rosa Glacê, Azul Sereno, Branco Pérola, Verde Menta e Lavanda Suave).
        
        Diretrizes de Resposta:
        1. Tom: Acolhedor, solar, sofisticado e otimista.
        2. Foco: Conforto e moda casual-chic.
        3. Recomendações: Sugira tecidos naturais como linho, algodão e seda que combinem com a leveza das sandálias.
        4. Cores: Enfatize como os tons pastéis da Ipanema trazem calma e frescor ao look, especialmente as novas cores Menta e Lavanda.
        5. Tema: Sempre que possível, inclua uma frase inspiradora sobre começar o dia ou o ano com positividade.
        
        Mantenha as respostas concisas e visualmente organizadas.`,
        temperature: 0.8,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Não consegui formular uma dica agora, mas uma coisa é certa: com sua Ipanema nos pés, você já começou com o pé direito! Tente me perguntar novamente em um instante.";
  }
};