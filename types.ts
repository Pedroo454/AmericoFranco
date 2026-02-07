// Define types for the student portal
export type Page = 'home' | 'announcements' | 'school' | 'studies' | 'interclasses' | 'gallery' | 'about';

export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface EventDate {
  id: number;
  title: string;
  date: string;
  type: string;
}

export interface RecommendedBook {
  title: string;
  author: string;
  grade: string;
}

export interface GameResult {
  teamA: string;
  scoreA: number;
  teamB: string;
  scoreB: number;
  status: string;
  date: string;
}
