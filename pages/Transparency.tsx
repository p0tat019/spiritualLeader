
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const FINANCIAL_DATA = [
  { name: '프로그램 운영비', value: 45 },
  { name: '공동체 장학금', value: 25 },
  { name: '조직 관리비', value: 15 },
  { name: '연구 및 아카이브', value: 10 },
  { name: '사회 기부', value: 5 },
];

const MONTHLY_REPORTS = [
  { month: '1월', income: 1200, expense: 1000 },
  { month: '2월', income: 1500, expense: 1100 },
  { month: '3월', income: 1300, expense: 1250 },
  { month: '4월', income: 1800, expense: 1400 },
];

const COLORS = ['#064e3b', '#059669', '#34d399', '#a7f3d0', '#f0fdf4'];

const Transparency: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 animate-fade-in">
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-6 font-serif-kr">투명성 리포트</h1>
        <p className="text-stone-500 text-xl font-light">우리는 모든 후원과 집행 내역을 투명하게 공개하여 공동체의 신뢰를 쌓습니다.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 font-serif-kr">후원금 사용처 (비율)</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={FINANCIAL_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {FINANCIAL_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 font-serif-kr">월별 재정 흐름 (단위: 만원)</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_REPORTS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f5f5f4'}}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="income" name="수입" fill="#059669" radius={[6, 6, 0, 0]} barSize={40} />
                <Bar dataKey="expense" name="지출" fill="#d6d3d1" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-emerald-900 text-white rounded-[3rem] p-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-serif-kr">활동 보고서 아카이브</h2>
            <p className="text-emerald-100/70 font-light">우리는 매년 감사를 통해 투명한 재정 상태를 유지합니다.</p>
          </div>
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Updated: Oct 2024</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[2024, 2023, 2022].map(year => (
            <div key={year} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
              <h3 className="font-bold text-xl mb-3">{year}년 연간 보고서</h3>
              <p className="text-emerald-100/50 text-sm mb-8 leading-relaxed font-light">주요 활동 실적 및 외부 회계 결산 자료가 포함되어 있습니다.</p>
              <button className="text-emerald-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                PDF 다운로드 <span>↓</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transparency;
