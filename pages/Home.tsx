
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CORE_VALUES } from '../constants';
import { getDailyInspiration } from '../services/geminiService';

const Home: React.FC = () => {
  const [inspiration, setInspiration] = useState<string>('오늘의 영감을 불러오는 중...');

  useEffect(() => {
    getDailyInspiration().then(setInspiration).catch(() => setInspiration('고요함 속에 진정한 성장이 있습니다.'));
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-stone-200 overflow-hidden">
        <img
          src="https://picsum.photos/id/1015/1600/900"
          alt="Peaceful nature"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 drop-shadow-sm">
            내면의 고요가 세상을 바꿉니다.
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            영성 지도자 커뮤니티는 한 사람의 진실한 성찰이<br className="hidden md:block" /> 
            우리 사회의 선한 영향력으로 이어지도록 돕습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/participate"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-emerald-200/50"
            >
              커뮤니티 입문하기
            </Link>
            <Link
              to="/about"
              className="bg-white/80 hover:bg-white text-stone-800 border border-stone-300 px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              우리의 철학 읽기
            </Link>
          </div>
        </div>
      </section>

      {/* AI Inspiration */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">AI Reflection</span>
          <p className="text-2xl font-serif text-stone-700 italic leading-relaxed">
            "{inspiration}"
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">핵심 가치</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Summary */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img src="https://picsum.photos/id/10/800/600" alt="Activity" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">변화를 만드는 활동들</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                매주 진행되는 명상 수행부터 사회 지도자들을 위한 영성 캠프까지, 
                우리는 다양한 방식으로 영성의 가치를 현장에 적용하고 있습니다.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>연간 50회 이상의 정기 수행 프로그램</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>사회 혁신가를 위한 특별 영성 캠프</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>국내외 영성 학술 컨퍼런스 개최</span>
                </li>
              </ul>
              <Link to="/activities" className="text-emerald-700 font-bold hover:underline">활동 전체 보기 →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
