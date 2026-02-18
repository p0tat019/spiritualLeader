
import React, { useState } from 'react';
import { askMentor } from '../services/geminiService';

const SpiritualLeader: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    try {
      const res = await askMentor(question);
      setAnswer(res || "답변을 가져올 수 없었습니다.");
    } catch (err) {
      setAnswer("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">영성 지도자란 무엇인가?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-emerald-900">정의 (Definition)</h3>
          <p className="text-stone-700 leading-relaxed">
            영성 지도자는 한 개인이 자신의 내면 세계를 탐구하고, 고통의 원인을 직시하며, 
            삶의 본질적 의미를 발견하도록 돕는 동반자이자 안내자입니다.
          </p>
        </div>
        <div className="bg-stone-100 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-stone-900">사회적 역할</h3>
          <p className="text-stone-700 leading-relaxed">
            단순한 종교적 지도자를 넘어, 공동체의 화합을 도모하고 
            현대 사회의 물질 만능주의 속에서 인문학적 성찰을 일깨우는 '의미의 파수꾼' 역할을 수행합니다.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">오해와 진실</h2>
        <div className="space-y-4">
          <div className="border border-stone-200 rounded-lg p-5">
            <p className="font-bold text-red-600 mb-2">오해: 영성 지도자는 신비한 능력을 가진 초능력자이다?</p>
            <p className="text-stone-600">진실: 영성 지도자는 초능력이 아닌, 깊은 공감 능력과 성찰적 지혜를 통해 사람들과 소통합니다.</p>
          </div>
          <div className="border border-stone-200 rounded-lg p-5">
            <p className="font-bold text-red-600 mb-2">오해: 영성 지도 활동은 특정 종교 신자들만 하는 것이다?</p>
            <p className="text-stone-600">진실: 영성은 종교 유무와 상관없이 인간이라면 누구나 가진 근원적 성질이며, 이를 지도하는 것은 보편적 인문 수행입니다.</p>
          </div>
        </div>
      </section>

      {/* Interactive AI Mentor Section */}
      <section className="bg-stone-900 text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">영성 멘토에게 물어보세요</h2>
          <p className="text-stone-400 mb-8">영성 지도자의 자질이나 내적 성찰에 대해 궁금한 점이 있으신가요? AI 멘토가 답변해 드립니다.</p>
          <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="예: 영성 지도자가 되기 위해 가장 필요한 덕목은 무엇인가요?"
              className="flex-grow bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <button
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-700 text-white px-8 py-3 rounded-xl font-bold transition-colors"
            >
              {isLoading ? '생각 중...' : '질문하기'}
            </button>
          </form>
          {answer && (
            <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700 animate-fade-in">
              <p className="whitespace-pre-wrap leading-relaxed text-stone-200">
                {answer}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpiritualLeader;
