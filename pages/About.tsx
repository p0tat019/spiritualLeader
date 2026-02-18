
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">우리는 누구인가</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">설립 배경</h2>
        <p className="text-stone-700 leading-loose mb-6">
          물질적 풍요 속에서도 내적 빈곤을 겪는 현대인들이 늘어남에 따라, 
          올바른 영적 방향을 제시할 수 있는 지도자의 필요성이 대두되었습니다. 
          본 단체는 2018년, 종교를 초월한 보편적 영성의 가치를 확산하고자 하는 
          철학자와 사회 운동가들이 모여 설립하였습니다.
        </p>
        <img src="https://picsum.photos/id/29/800/400" alt="Foundation" className="rounded-xl w-full mb-8 shadow-md" />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">철학</h2>
        <div className="bg-stone-100 p-8 rounded-xl border-l-4 border-emerald-600">
          <p className="text-lg font-serif italic text-stone-800">
            "참된 영성은 산속에 숨어있는 것이 아니라, 복잡한 사회의 갈등 속에서 사랑과 자비를 실천하는 힘이다."
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">윤리 헌장</h2>
        <ul className="space-y-4 text-stone-700">
          <li className="flex gap-4">
            <span className="font-bold text-emerald-600">01.</span>
            <span>지도자는 자신의 사적 이익을 위해 타인의 영적 갈급함을 이용하지 않는다.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-emerald-600">02.</span>
            <span>모든 활동의 과정에서 성별, 인종, 종교에 따른 차별을 배격한다.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-emerald-600">03.</span>
            <span>수행의 성과를 과장하지 않으며, 항상 겸손한 자세로 배움에 임한다.</span>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">운영 및 법적 형태</h2>
        <p className="text-stone-700 leading-relaxed">
          본 단체는 비영리 사단법인으로 등록되어 있으며, 이사회 중심의 민주적 의사결정 구조를 가지고 있습니다. 
          운영위원회는 현직 영성 지도자 7인과 외부 윤리 감사 2인으로 구성됩니다.
        </p>
      </section>
    </div>
  );
};

export default About;
