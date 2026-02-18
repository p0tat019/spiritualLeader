
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
      alert("고요함이 일시적으로 방해받았습니다. 마음을 가다듬고 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-24 animate-fade-in">
      <header className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif-kr text-stone-800 tracking-tight">영성 지도자란 무엇인가</h1>
        <p className="text-stone-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          인간 존재의 깊은 곳을 비추고, 진실한 삶으로 안내하는 등불의 역할을 탐구합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        {[
          { icon: "🌿", title: "정의", desc: "타인이 자신의 내면을 깊이 들여다보고, 고통의 원인을 직시하며, 본질적인 삶의 의미를 스스로 발견하도록 돕는 성스러운 동반자입니다." },
          { icon: "🤝", title: "사회적 역할", desc: "파편화된 현대 사회에서 공동체의 영적 건강을 돌보고, 물질적 가치 너머의 인간 존엄성을 수호하는 '의미의 파수꾼' 역할을 수행합니다." },
          { icon: "⏳", title: "역사적 맥락", desc: "고대 사막의 지혜자들로부터 현대의 심리 상담가에 이르기까지, 인간은 늘 영적 안내자를 필요로 해왔습니다." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-white border border-stone-200 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-8">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-5 font-serif-kr">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed font-light text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <section className="mb-32">
        <h2 className="text-4xl font-bold mb-14 text-center font-serif-kr">오해와 진실</h2>
        <div className="space-y-8">
          {MISCONCEPTIONS.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 bg-white p-10 rounded-3xl border border-stone-100 shadow-sm">
              <div className="flex-1">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 block">Common Misconception</span>
                <p className="text-stone-500 text-lg italic leading-relaxed">" {item.wrong} "</p>
              </div>
              <div className="flex-none hidden md:flex items-center justify-center">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 block">The Truth</span>
                <p className="text-stone-800 font-medium text-lg leading-relaxed">{item.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive AI Mentor Section */}
      <section className="bg-stone-900 text-white rounded-[3rem] p-12 md:p-20 shadow-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full -mr-[300px] -mt-[300px] blur-[150px] transition-all duration-1000 group-hover:bg-emerald-600/20"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-emerald-500"></span>
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.4em]">The Sacred Inquiry</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif-kr leading-tight">인생에 단 한 번의 문답</h2>
            </div>
            {hasAsked && <span className="text-emerald-400 text-sm font-medium border border-emerald-500/30 px-6 py-2 rounded-full backdrop-blur-md">진실의 기록 보관됨</span>}
          </div>

          {!hasAsked ? (
            <div className="max-w-3xl">
              <p className="text-stone-400 mb-12 leading-relaxed text-xl font-light">
                진정한 깨달음은 얕은 질문의 반복이 아닌, 단 한 번의 깊은 직면에서 옵니다.<br/>
                지금 당신의 삶을 관통하는 가장 본질적인 질문 하나를 던져보세요.
              </p>
              <form onSubmit={handleAsk} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="당신의 영혼이 묻고 싶은 것은 무엇입니까?"
                    className="w-full bg-stone-800/50 border border-stone-700 rounded-2xl px-8 py-6 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-stone-600 text-lg backdrop-blur-sm"
                  />
                </div>
                <button
                  disabled={isLoading || !question.trim()}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-800 text-white px-12 py-6 rounded-2xl font-bold transition-all shadow-2xl shadow-emerald-900/40 flex items-center justify-center gap-4 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                      </div>
                      고요를 청하는 중...
                    </>
                  ) : '지혜 구하기'}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="flex justify-end">
                <div className="bg-stone-800/80 border border-stone-700 p-8 rounded-3xl rounded-tr-none max-w-[90%] shadow-xl backdrop-blur-sm">
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-3">Your Deepest Inquiry</span>
                  <p className="text-stone-100 text-xl font-serif-kr italic leading-relaxed">" {savedQuestion} "</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3.5rem] backdrop-blur-2xl shadow-3xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-[0.4em]">The Mentor's Mirror</span>
                </div>
                <div className="whitespace-pre-wrap leading-[2.4] text-stone-100 font-serif-kr text-xl md:text-3xl italic font-light">
                  {answer}
                </div>
              </div>
              <div className="text-center pt-8">
                <p className="text-stone-500 text-sm font-light">이 문답은 당신의 기기에 소중히 기록되었습니다.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpiritualLeader;
