
import React, { useState, useEffect } from 'react';
import { askMentor } from '../services/geminiService';

const MISCONCEPTIONS = [
  {
    wrong: "영성 지도자는 모든 번뇌가 사라진 완벽한 인간이어야 한다.",
    right: "지도자 또한 삶의 파도 속에서 끊임없이 배우고 성장하며, 그 과정을 투명하게 공유하는 도반입니다."
  },
  {
    wrong: "영성 지도는 특정 종교의 교리를 전파하는 행위이다.",
    right: "종교적 형식을 넘어 보편적 인간 존재의 의미와 내적 평화를 탐구하는 인문학적 수행에 가깝습니다."
  },
  {
    wrong: "영성 지도는 현실 도피적이거나 신비주의적인 능력에 집중한다.",
    right: "오히려 복잡한 일상의 한복판에서 깨어있는 의식으로 책임을 다하며 살아가는 힘을 기르는 과정입니다."
  }
];

const SpiritualLeader: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [savedQuestion, setSavedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  useEffect(() => {
    const persistedAnswer = localStorage.getItem('spiritual_mentor_answer');
    const persistedQuestion = localStorage.getItem('spiritual_mentor_question');
    if (persistedAnswer) {
      setHasAsked(true);
      setAnswer(persistedAnswer);
      setSavedQuestion(persistedQuestion || '당신의 질문');
    }
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || hasAsked) return;
    setIsLoading(true);
    const currentQuestion = question.trim();
    try {
      const res = await askMentor(currentQuestion);
      const finalAnswer = res || "침묵 속에서 길을 찾으시길 바랍니다.";
      setAnswer(finalAnswer);
      setSavedQuestion(currentQuestion);
      setHasAsked(true);
      localStorage.setItem('spiritual_mentor_answer', finalAnswer);
      localStorage.setItem('spiritual_mentor_question', currentQuestion);
    } catch (err) {
      console.error(err);
      alert("고요함이 일시적으로 방해받았습니다. 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 animate-fade-in">
      <header className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 font-serif-kr text-stone-800 tracking-tight">영성 지도자란 무엇인가?</h1>
        <p className="text-stone-500 text-xl max-w-2xl mx-auto font-light">
          인간 존재의 깊은 곳을 비추고, 진실한 삶으로 안내하는 등불의 역할을 탐구합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mb-6">🌿</div>
          <h3 className="text-xl font-bold mb-4">정의</h3>
          <p className="text-stone-600 leading-relaxed text-sm">
            타인이 자신의 내면을 깊이 들여다보고, 고통의 원인을 직시하며, 본질적인 삶의 의미를 스스로 발견하도록 돕는 성스러운 동반자입니다.
          </p>
        </div>
        <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mb-6">🤝</div>
          <h3 className="text-xl font-bold mb-4">사회적 역할</h3>
          <p className="text-stone-600 leading-relaxed text-sm">
            파편화된 현대 사회에서 공동체의 영적 건강을 돌보고, 물질적 가치 너머의 인간 존엄성을 수호하는 '의미의 파수꾼' 역할을 수행합니다.
          </p>
        </div>
        <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl mb-6">⏳</div>
          <h3 className="text-xl font-bold mb-4">역사적 맥락</h3>
          <p className="text-stone-600 leading-relaxed text-sm">
            고대 사막의 지혜자들로부터 현대의 심리 상담가에 이르기까지, 인간은 늘 영적 안내자를 필요로 해왔습니다. 오늘날 그 역할은 더욱 현대화되고 보편화되었습니다.
          </p>
        </div>
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center font-serif-kr">오해와 진실</h2>
        <div className="space-y-6">
          {MISCONCEPTIONS.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 bg-stone-100/50 p-8 rounded-2xl border border-stone-200">
              <div className="flex-1">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 block">Common Misconception</span>
                <p className="text-stone-500 italic">" {item.wrong} "</p>
              </div>
              <div className="flex-none hidden md:flex items-center justify-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">→</div>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">The Truth</span>
                <p className="text-stone-800 font-medium">{item.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive AI Mentor Section */}
      <section className="bg-stone-900 text-white rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full -mr-[250px] -mt-[250px] blur-[120px]"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em]">The Only Reflection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif-kr">인생에 단 한 번의 문답</h2>
            </div>
            {hasAsked && <span className="text-emerald-500 text-sm font-medium border border-emerald-500/30 px-4 py-2 rounded-full backdrop-blur-sm">기록 보관됨</span>}
          </div>

          {!hasAsked ? (
            <div className="max-w-2xl">
              <p className="text-stone-400 mb-8 leading-relaxed text-lg">
                진정한 깨달음은 얕은 질문의 반복이 아닌, 단 한 번의 깊은 직면에서 옵니다. <br/>
                지금 당신의 삶을 관통하는 가장 본질적인 질문 하나를 던져보세요.
              </p>
              <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="당신의 영혼이 묻고 싶은 것은 무엇입니까?"
                  className="flex-grow bg-stone-800 border border-stone-700 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-stone-500"
                />
                <button
                  disabled={isLoading || !question.trim()}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-900/30 flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> 고요를 청하는 중...</>
                  ) : '지혜 구하기'}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex justify-end">
                <div className="bg-stone-800 border border-stone-700 p-6 rounded-3xl rounded-tr-none max-w-[85%] shadow-lg">
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-2">Your Deepest Inquiry</span>
                  <p className="text-stone-100 text-lg font-serif-kr italic">" {savedQuestion} "</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-8 text-emerald-400 font-bold text-xs uppercase tracking-[0.3em]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  The Mentor's Mirror
                </div>
                <div className="whitespace-pre-wrap leading-[2.2] text-stone-100 font-serif-kr text-xl md:text-2xl italic">
                  {answer}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpiritualLeader;
