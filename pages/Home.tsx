
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CORE_VALUES } from '../constants';
import { getDailyInspiration } from '../services/geminiService';

const Home: React.FC = () => {
  const [inspiration, setInspiration] = useState<string>('');
  const [isLoadingInspiration, setIsLoadingInspiration] = useState(true);

  useEffect(() => {
    getDailyInspiration()
      .then((res) => {
        setInspiration(res);
        setIsLoadingInspiration(false);
      })
      .catch(() => {
        setInspiration('고요함 속에 진정한 성장이 있습니다');
        setIsLoadingInspiration(false);
      });
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600"
          alt="Peaceful Zen Garden"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/20 to-stone-900/60"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif-kr tracking-tight leading-tight">
            내면의 고요가<br/>세상을 바꿉니다
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            영성 지도자 커뮤니티는 한 사람의 진실한 성찰이<br className="hidden md:block" /> 
            우리 사회의 선한 영향력으로 이어지도록 돕습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/participate"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-xl shadow-emerald-900/20"
            >
              커뮤니티 입문하기
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full text-lg font-medium transition-all"
            >
              우리의 철학 읽기
            </Link>
          </div>
        </div>
      </section>

      {/* AI Inspiration */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-emerald-300"></span>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em]">AI Reflection</span>
            <span className="w-8 h-px bg-emerald-300"></span>
          </div>
          {isLoadingInspiration ? (
            <div className="h-10 w-2/3 mx-auto shimmer rounded-lg opacity-50"></div>
          ) : (
            <p className="text-2xl md:text-3xl font-serif-kr text-stone-800 italic leading-snug">
              "{inspiration}"
            </p>
          )}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-stone-900 mb-4 font-serif-kr">핵심 가치</h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">{value.icon}</div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-loose text-lg font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Summary */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-3xl -rotate-2 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800" 
                alt="Meditation Group" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" 
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-stone-900 mb-8 font-serif-kr">변화를 만드는 활동들</h2>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed font-light">
                매주 진행되는 명상 수행부터 사회 지도자들을 위한 영성 캠프까지, 
                우리는 다양한 방식으로 영성의 가치를 현장에 적용하고 있습니다.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  '연간 50회 이상의 정기 수행 프로그램',
                  '사회 혁신가를 위한 특별 영성 캠프',
                  '국내외 영성 학술 컨퍼런스 개최'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-700">
                    <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs">✓</div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/activities" 
                className="inline-flex items-center text-emerald-700 text-lg font-bold hover:gap-2 transition-all group"
              >
                활동 전체 보기 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
