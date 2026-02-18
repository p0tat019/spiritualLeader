
export interface NavItem {
  label: string;
  path: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  category: 'program' | 'event' | 'lecture' | 'archive';
  description: string;
  imageUrl: string;
}

export interface FinancialData {
  name: string;
  value: number;
}
