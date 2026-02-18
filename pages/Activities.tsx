
import React from 'react';

const PROGRAM_LIST = [
  {
    title: '새벽 침묵 수행',
    category: '정기 프로그램',
    desc: '매일 아침 6시, 온라인/오프라인 병행으로 진행되는 고요의 시간입니다.',
    img: 'https://picsum.photos/id/1018/600/400'
  },
  {
    title: '비폭력 대화 워크숍',
    category: '강의/수련',
    desc: '내면의 목소리를 경청하고 평화로운 관계를 맺는 대화 기술을 배웁니다.',
    img: 'https://picsum.photos/id/1019/600/400'
  },
  {
    title: '2024 영성 지도자 컨퍼런스',
    category: '특별 행사',
    desc: '전국 각지의 지도자들이 모여 현대적 영성의 실천적 과제를 논의합니다.',
    img: 'https://picsum.photos/id/1020/600/400'
  },
];

const Activities: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">우리의 활동</h1>
          <p className="text-stone-600">내적 평화와 사회적 기여를 위한 다양한 여정입니다.</p>
        </div>
        <div className="flex gap-2">
          {['전체', '정기', '행사', '강의', '아카이브'].map(filter => (
            <button key={filter} className="px-4 py-1 rounded-full border border-stone-200 text-sm hover:bg-stone-100 transition-colors">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {PROGRAM_LIST.map((prog, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 group">
            <div className="h-48 overflow-hidden">
              <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-emerald-600 mb-2 block">{prog.category}</span>
              <h3 className="text-xl font-bold mb-3">{prog.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">{prog.desc}</p>
              <button className="text-stone-900 font-bold border-b-2 border-emerald-600 pb-0.5 text-sm hover:text-emerald-700 transition-colors">상세 정보</button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-stone-900 text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">지난 활동 아카이브</h2>
        <p className="text-stone-400 mb-10 max-w-2xl mx-auto">우리가 지나온 발자취를 기록하고 공유합니다. 지난 수련의 사진과 영상, 강의 자료를 확인하실 수 있습니다.</p>
        <button className="bg-white text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-stone-200 transition-colors">아카이브 방문하기</button>
      </section>
    </div>
  );
};

export default Activities;
