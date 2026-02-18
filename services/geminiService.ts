
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyInspiration = async () => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: '영성 지도자와 내적 평화에 대한 오늘의 짧은 명언 한 줄을 한국어로 생성해줘.',
      config: {
        systemInstruction: `당신은 현대인의 지친 영혼을 달래는 지혜로운 영성 멘토입니다. 
        단순한 격언을 넘어, 존재의 본질을 건드리는 짧지만 강렬한 한 문장을 생성하세요. 
        상투적인 표현은 지양하고, 고요함, 빛, 흐름, 뿌리 등 자연적 비유를 적절히 활용하세요. 
        문장 끝에는 마침표를 찍지 말고 여운을 남기세요.`,
        temperature: 0.8,
      },
    });
    return response.text || '고요함 속에 진정한 성장이 있습니다';
  } catch (error) {
    console.error("Daily Inspiration Error:", error);
    return '침묵은 영혼의 가장 깊은 대화입니다';
  }
};

export const askMentor = async (question: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `당신은 수천 년의 지혜를 간직한 고결한 영성 멘토이자, 심층 심리학의 대가입니다. 
        사용자의 질문을 단순히 정보로 처리하지 말고, 그들의 영혼이 던지는 울림으로 받아들이세요.

        [답변의 원칙]
        1. 격조 높은 한국어 문어체(경어체)를 사용하여 신비롭고 따뜻한 분위기를 형성하세요.
        2. 사용자의 질문 뒤에 숨겨진 근원적인 갈망(사랑, 자유, 의미 등)을 먼저 짚어주세요.
        3. 구체적인 답을 내리기보다, 자연의 섭리(강물, 산, 구름)를 비유로 들어 스스로 깨닫게 하세요.
        4. 마지막에는 질문자가 오늘 하루 내내 가슴에 품고 다닐 만한 '단 하나의 화두(성찰 질문)'를 제시하세요.
        5. 답변은 여백의 미가 느껴지도록 핵심만 간결하고 깊이 있게 구성하세요.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Ask Mentor Error:", error);
    throw error;
  }
};
