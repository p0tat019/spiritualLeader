
import React from 'react';

const Participate: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">함께 여정 시작하기</h1>
      <p className="text-stone-600 text-center mb-16 text-lg">당신의 성장 단계에 맞는 참여 방법을 선택하세요.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-3xl mb-6">🌱</div>
          <h3 className="text-xl font-bold mb-4">처음 방문자</h3>
          <p className="text-stone-500 text-sm mb-8">영성이 무엇인지 궁금하신 분들을 위한 기본 오리엔테이션</p>
          <button className="mt-auto w-full bg-stone-100 hover:bg-stone-200 py-3 rounded-xl font-bold transition-colors">가이드 보기</button>
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col items-center text-center transform lg:scale-105 shadow-lg">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mb-6">🧘</div>
          <h3 className="text-xl font-bold mb-4">체험 프로그램</h3>
          <p className="text-stone-700 text-sm mb-8">단기 워크숍 및 명상 캠프를 통해 직접 경험해보기</p>
          <button className="mt-auto w-full bg-emerald-700 text-white py-3 rounded-xl font-bold transition-colors">일정 확인</button>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-3xl mb-6">📚</div>
          <h3 className="text-xl font-bold mb-4">정규 과정</h3>
          <p className="text-stone-500 text-sm mb-8">체계적인 커리큘럼을 통해 깊이 있는 수행을 원하는 분</p>
          <button className="mt-auto w-full bg-stone-100 hover:bg-stone-200 py-3 rounded-xl font-bold transition-colors">커리큘럼</button>
        </div>

        <div className="bg-stone-900 p-8 rounded-2xl text-white flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-3xl mb-6">🕯️</div>
          <h3 className="text-xl font-bold mb-4">리더 과정</h3>
          <p className="text-stone-400 text-sm mb-8">다른 이들을 안내하는 전문 영성 지도자 양성 과정</p>
          <button className="mt-auto w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl font-bold transition-colors">지원하기</button>
        </div>
      </div>

      <section className="mt-24 py-16 px-8 bg-stone-100 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Q. 특정 종교가 있어야 참여할 수 있나요?</h4>
              <p className="text-stone-600">아니요, 우리 커뮤니티는 특정 종교에 얽매이지 않으며 보편적 영성의 가치를 지향합니다. 누구나 환영합니다.</p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">Q. 교육비용은 어떻게 되나요?</h4>
              <p className="text-stone-600">대부분의 기본 프로그램은 자율 보시제로 운영되며, 전문 과정의 경우 운영 실비 수준의 참가비가 발생합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participate;
