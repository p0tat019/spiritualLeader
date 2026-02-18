
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getDailyInspiration = async () => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: '영성 지도자와 내적 평화에 대한 오늘의 짧은 명언 한 줄을 한국어로 생성해줘.',
    config: {
      systemInstruction: '당신은 지혜로운 영성 멘토입니다. 따뜻하고 통찰력 있는 짧은 메시지를 전달하세요.',
      temperature: 0.7,
    },
  });
  return response.text;
};

export const askMentor = async (question: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: question,
    config: {
      systemInstruction: '당신은 영성 지도자 커뮤니티의 안내자입니다. 영성 지도자의 역할, 철학, 또는 개인적인 성찰에 대한 질문에 품격 있고 친절하게 답변하세요.',
    },
  });
  return response.text;
};
