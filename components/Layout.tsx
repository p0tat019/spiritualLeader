
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-stone-800 tracking-tight">영성지도자</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-emerald-700'
                      : 'text-stone-600 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-emerald-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">영성 지도자 커뮤니티</h3>
              <p className="text-sm leading-relaxed">
                우리는 개인의 내적 성찰을 돕고 사회적 평화를 일구는<br />
                영성 지도자들의 성장을 지원합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">링크</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-emerald-400">조직 소개</Link></li>
                <li><Link to="/transparency" className="hover:text-emerald-400">재정 투명성</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400">문의하기</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
              <p className="text-sm">서울특별시 서초구 어딘가로 123</p>
              <p className="text-sm">02-1234-5678</p>
              <p className="text-sm">contact@spiritual-leaders.kr</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-xs">
            © 2024 영성 지도자 커뮤니티. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
