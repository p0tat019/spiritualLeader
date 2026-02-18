
import React, { useState, useEffect } from 'react';
import { askMentor } from '../services/geminiService';

const SpiritualLeader: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [savedQuestion, setSavedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  // 컴포넌트 마운트 시 저장된 대화가 있는지 확인
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
      
      // 상태 업데이트
      setAnswer(finalAnswer);
      setSavedQuestion(currentQuestion);
      setHasAsked(true);
      
      // 로컬스토리지에 영구 저장 (브라우저당 1회 제한)
      localStorage.setItem('spiritual_mentor_answer', finalAnswer);
      localStorage.setItem('spiritual_mentor_question', currentQuestion);
    } catch (err) {
      console.error(err);
      alert("고요함이 일시적으로 방해받았습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-6">영성 지도자란 무엇인가?</h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          내면의 지혜를 깨우고 타인의 영적 여정을 돕는 이들의 본질을 탐구합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center gap-2">
            <span>🌿</span> 정의 (Definition)
          </h3>
          <p className="text-stone-700 leading-relaxed">
            영성 지도자는 개인이 자신의 내면 세계를 탐구하고, 고통의 원인을 직시하며, 
            삶의 본질적 의미를 발견하도록 돕는 동반자이자 안내자입니다.
          </p>
        </div>
        <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
          <h3 className="text-xl font-bold mb-4 text-stone-900 flex items-center gap-2">
            <span>🤝</span> 사회적 역할
          </h3>
          <p className="text-stone-700 leading-relaxed">
            단순한 종교적 지도자를 넘어, 공동체의 화합을 도모하고 
            현대 사회의 물질 만능주의 속에서 인문학적 성찰을 일깨우는 '의미의 파수꾼'입니다.
          </p>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-stone-800">역사적 맥락과 현대적 변용</h2>
        <div className="prose prose-stone max-w-none text-stone-600 leading-loose">
          <p className="mb-4">
            영성 지도는 고대 사막의 교부들로부터 시작되어 현대의 심층 심리학과 인문학에 이르기까지 
            인간 존재의 근원적 평화를 찾는 모든 과정에 함께해 왔습니다. 
          </p>
          <p>
            오늘날에는 종교의 벽을 넘어 개인의 고독과 실존적 불안을 치유하는 보편적 수행으로 자리 잡고 있습니다. 
            진정한 지도자는 답을 주는 자가 아니라, 질문자 스스로 답을 찾을 수 있는 '공간'을 마련해주는 사람입니다.
          </p>
        </div>
      </section>

      {/* Interactive AI Mentor Section: Strictly One Conversation */}
      <section className="bg-stone-900 text-white rounded-3xl p-10 shadow-2xl overflow-hidden relative border border-stone-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Single Reflection</span>
              <h2 className="text-2xl font-bold">인생에 단 한 번의 문답</h2>
            </div>
            {hasAsked && <span className="text-emerald-500 text-sm font-medium flex items-center gap-1">🔒 기록됨</span>}
          </div>

          {!hasAsked ? (
            <div className="mb-8">
              <p className="text-stone-400 mb-8 leading-relaxed text-lg">
                진정한 깨달음은 반복되는 질문보다 깊은 한 번의 직면에서 옵니다.<br/>
                오늘 당신의 삶을 관통하는 가장 본질적인 질문 하나를 신중하게 던져보세요.
                <span className="block mt-2 text-sm text-stone-500 italic">* 이 대화는 브라우저에 영구히 기록되며, 추가 질문은 허용되지 않습니다.</span>
              </p>
              <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="지금 이 순간, 당신의 영혼이 묻고 싶은 것은 무엇입니까?"
                  className="flex-grow bg-stone-800 border border-stone-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-stone-500"
                />
                <button
                  disabled={isLoading || !question.trim()}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-700 text-white px-10 py-4 rounded-2xl font-bold transition-all whitespace-nowrap shadow-lg shadow-emerald-900/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      고요를 듣는 중...
                    </span>
                  ) : '지혜 구하기'}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-8 rounded-2xl mb-10 animate-fade-in backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📜</div>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-2 text-lg">문답의 기록</h4>
                  <p className="text-stone-400 leading-relaxed">
                    당신의 영혼이 던진 질문과 그에 대한 울림이 여기에 머뭅니다.<br/>
                    새로운 질문을 찾기보다, 이미 주어진 지혜를 삶으로 번역하는 시간을 가져보세요.
                  </p>
                </div>
              </div>
            </div>
          )}

          {answer && (
            <div className="space-y-8 animate-fade-in">
              {/* User Question Block */}
              <div className="flex justify-end">
                <div className="bg-stone-800 border border-stone-700 p-5 rounded-2xl rounded-tr-none max-w-[80%]">
                  <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">당신의 질문</span>
                  <p className="text-stone-200 italic">"{savedQuestion}"</p>
                </div>
              </div>

              {/* Mentor Answer Block */}
              <div className="bg-stone-800/40 p-8 md:p-12 rounded-3xl border border-stone-700/50 backdrop-blur-md shadow-inner">
                <div className="flex items-center gap-2 mb-8 text-emerald-400 font-bold text-xs uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Mentor's Echo
                </div>
                <div className="whitespace-pre-wrap leading-[2.2] text-stone-100 font-serif text-xl md:text-2xl">
                  {answer}
                </div>
                <div className="mt-12 pt-8 border-t border-stone-700/50 text-center">
                  <p className="text-stone-500 text-sm font-light">
                    이 문답은 당신의 내면에 깊이 뿌리내려 길잡이가 될 것입니다.
                  </p>
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
