
import React, { useState } from 'react';
import { FORM_CONFIG } from '../config/formConfig';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_CONFIG.FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          message: formData.message,
          _subject: `[영성지도자 문의] ${formData.name}님의 새로운 문의입니다.`
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', category: 'general', message: '' });
        // 5초 후 다시 입력 가능하도록 상태 변경
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">문의하기</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-6 text-stone-800">메시지 보내기</h2>
          
          {status === 'SUCCESS' ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center animate-fade-in">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">메시지가 전송되었습니다.</h3>
              <p className="text-emerald-600 mb-4">보내주신 소중한 문의에 대해<br/>최대한 빨리 답변 드리겠습니다.</p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="text-sm font-bold text-emerald-700 underline"
              >
                추가 문의하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">성함</label>
                  <input
                    type="text"
                    required
                    disabled={status === 'SUBMITTING'}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="홍길동"
                    className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-stone-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">이메일</label>
                  <input
                    type="email"
                    required
                    disabled={status === 'SUBMITTING'}
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="example@email.com"
                    className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-stone-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">문의 유형</label>
                <select
                  disabled={status === 'SUBMITTING'}
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-stone-50"
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                >
                  <option value="general">일반 문의</option>
                  <option value="participation">참여/입단 문의</option>
                  <option value="collaboration">협업 제안</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">내용</label>
                <textarea
                  rows={5}
                  required
                  disabled={status === 'SUBMITTING'}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="문의하실 내용을 상세히 적어주세요."
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-stone-50"
                ></textarea>
              </div>
              
              {status === 'ERROR' && (
                <p className="text-red-500 text-sm font-medium">죄송합니다. 전송 중 오류가 발생했습니다. 나중에 다시 시도해주세요.</p>
              )}

              <button 
                disabled={status === 'SUBMITTING'}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-700/20 disabled:bg-stone-400 disabled:shadow-none flex items-center justify-center gap-2"
              >
                {status === 'SUBMITTING' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    전송 중...
                  </>
                ) : '전송하기'}
              </button>
            </form>
          )}
        </div>

        {/* Info & Map */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-stone-800">찾아오시는 길</h2>
          <div className="bg-stone-200 h-80 rounded-3xl mb-8 relative overflow-hidden group shadow-inner">
            <img src="https://picsum.photos/id/40/800/600" alt="Map Placeholder" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl text-center border border-stone-200 transform hover:scale-110 transition-transform">
                <p className="font-bold text-stone-800">커뮤니티 센터</p>
                <p className="text-xs text-stone-500">서울특별시 서초구 어딘가로 123</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700">📍</div>
              <div>
                <h4 className="font-bold text-stone-800">주소</h4>
                <p className="text-stone-600">서울특별시 서초구 어딘가로 123, 가나빌딩 4층</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700">📞</div>
              <div>
                <h4 className="font-bold text-stone-800">전화번호</h4>
                <p className="text-stone-600">02-1234-5678 (평일 09:00 - 18:00)</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700">✉️</div>
              <div>
                <h4 className="font-bold text-stone-800">이메일</h4>
                <p className="text-stone-600">contact@spiritual-leaders.kr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
