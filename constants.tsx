
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '우리는 누구인가', path: '/about' },
  { label: '영성 지도자란?', path: '/spiritual-leader' },
  { label: '활동', path: '/activities' },
  { label: '참여하기', path: '/participate' },
  { label: '투명성', path: '/transparency' },
  { label: '문의', path: '/contact' },
];

export const CORE_VALUES = [
  {
    title: '진정성 (Authenticity)',
    description: '내면의 진실과 삶의 모습이 일치하는 삶을 지향합니다.',
    icon: '✨'
  },
  {
    title: '공동체 (Community)',
    description: '개별적 성장을 넘어 서로를 지지하는 연결의 가치를 믿습니다.',
    icon: '🤝'
  },
  {
    title: '투명성 (Transparency)',
    description: '모든 의사결정과 재정 운영을 명확하게 공개합니다.',
    icon: '💎'
  }
];
