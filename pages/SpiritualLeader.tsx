
import React, { useState, useEffect } from 'react';
import { askMentor } from '../services/geminiService';

const SpiritualLeader: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  // 컴포넌트 마운트 시 저장된 답변이 있는지 확인
  useEffect(() => {
    const savedAnswer = localStorage.getItem('spiritual_mentor_answer');
    if (savedAnswer) {
      setHasAsked(true);
      setAnswer(savedAnswer);
    }
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || hasAsked) return;

    setIsLoading(true);
    try {
      const res = await askMentor(question);
      const finalAnswer = res || "침묵 속에서 길을 찾으시길 바랍니다.";
      
      // 답변 상태 업데이트 및 로컬스토리지 저장
      setAnswer(finalAnswer);
      setHasAsked(true);
      localStorage.setItem('spiritual_mentor_answer', finalAnswer);
    } catch (err) {
      console.error(err);
      alert("고요함이 일시적으로 방해받았습니다. 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-12">영성 지도자란 무엇인가?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-bold mb-4 text-emerald-900">정의 (Definition)</h3>
          <p className="text-stone-700 leading-relaxed">
            영성 지도자는 개인이 자신의 내면 세계를 탐구하고, 고통의 원인을 직시하며, 
            삶의 본질적 의미를 발견하도록 돕는 동반자이자 안내자입니다.
          </p>
        </div>
        <div className="bg-stone-100 p-6 rounded-2xl border border-stone-200">
          <h3 className="text-xl font-bold mb-4 text-stone-900">사회적 역할</h3>
          <p className="text-stone-700 leading-relaxed">
            단순한 종교적 지도자를 넘어, 공동체의 화합을 도모하고 
            현대 사회의 물질 만능주의 속에서 인문학적 성찰을 일깨우는 '의미의 파수꾼'입니다.
          </p>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-stone-800">역사적 맥락과 현대적 변용</h2>
        <div className="prose prose-stone max-w-none text-stone-600 leading-loose">
          <p>
            영성 지도는 고대 사막의 교부들로부터 시작되어 현대의 심층 심리학과 인문학에 이르기까지 
            인간 존재의 근원적 평화를 찾는 모든 과정에 함께해 왔습니다. 오늘날에는 종교의 벽을 넘어 
            개인의 고독과 실존적 불안을 치유하는 보편적 수행으로 자리 잡고 있습니다.
          </p>
        </div>
      </section>

      {/* Interactive AI Mentor Section: Only One Question Allowed */}
      <section className="bg-stone-900 text-white rounded-3xl p-10 shadow-2xl overflow-hidden relative border border-stone-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">The Only Conversation</span>
            <h2 className="text-2xl font-bold">인생에 단 한 번의 문답</h2>
          </div>
          <p className="text-stone-400 mb-8 leading-relaxed">
            진정한 깨달음은 반복되는 질문보다 깊은 한 번의 직면에서 옵니다.<br/>
            오늘 당신의 삶을 관통하는 가장 본질적인 질문 하나를 신중하게 던져보세요.
          </p>

          {!hasAsked ? (
            <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="지금 이 순간, 당신의 영혼이 묻고 싶은 것은 무엇입니까?"
                className="flex-grow bg-stone-800 border border-stone-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-stone-500"
              />
              <button
                disabled={isLoading || !question.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-700 text-white px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap"
              >
                {isLoading ? '깊은 고요 속에서 듣는 중...' : '지혜 구하기'}
              </button>
            </form>
          ) : (
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-2xl mb-8 animate-fade-in backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🕊️</div>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-1">문답이 완료되었습니다</h4>
                  <p className="text-sm text-stone-400">전달받은 답변을 충분히 음미하고 내면화하는 시간을 가져보세요. 새로운 질문보다 중요한 것은 이미 주어진 지혜의 실천입니다.</p>
                </div>
              </div>
            </div>
          )}

          {answer && (
            <div className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/50 animate-fade-in backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                The Mentor's Mirror
              </div>
              <div className="whitespace-pre-wrap leading-loose text-stone-100 font-serif text-lg md:text-xl italic">
                "{answer}"
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpiritualLeader;
