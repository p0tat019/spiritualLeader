
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

const COLORS = ['#047857', '#10b981', '#6ee7b7', '#a7f3d0', '#ecfdf5'];

const Transparency: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">투명성 리포트</h1>
      <p className="text-stone-600 mb-12 text-lg">우리는 모든 후원과 집행 내역을 투명하게 공개하여 공동체의 신뢰를 쌓습니다.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">후원금 사용처 (비율)</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={FINANCIAL_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {FINANCIAL_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">월별 재정 흐름 (단위: 만원)</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_REPORTS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" name="수입" fill="#047857" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" name="지출" fill="#9ca3af" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">활동 보고서 아카이브</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[2024, 2023, 2022].map(year => (
            <div key={year} className="bg-white p-6 rounded-xl border border-emerald-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">{year}년 연간 보고서</h3>
              <p className="text-stone-500 text-sm mb-4">주요 활동 실적 및 회계 결산 포함</p>
              <button className="text-emerald-700 font-bold text-sm hover:underline">PDF 다운로드 →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transparency;
