import React from 'react';
import { Announcement, NewsItem, EventDate, RecommendedBook, GameResult } from './types';

// Global school name used throughout the application
export const SCHOOL_NAME = "EE Américo Franco";

// Announcements data for the portal
export const ANNOUNCEMENTS: Announcement[] = [
  { id: 1, title: "Início das Aulas - 1º Semestre 2024", date: "05/02/2024", category: "Geral", content: "Sejam bem-vindos! As aulas iniciam oficialmente para todos os períodos. Compareçam uniformizados e com documento de identificação." },
  { id: 2, title: "Atualização Cadastral Necessária", date: "10/02/2024", category: "Urgente", content: "Todos os alunos devem atualizar o endereço e telefone na secretaria para fins de emissão do cartão transporte." },
  { id: 3, title: "Reunião do Grêmio Estudantil", date: "15/02/2024", category: "Evento", content: "Primeira reunião aberta do ano no pátio central durante o intervalo do período matutino e vespertino." },
  { id: 4, title: "Entrega de Kit Escolar", date: "20/02/2024", category: "Geral", content: "A entrega dos kits enviados pelo estado será realizada por ordem alfabética na biblioteca." },
];

// News feed data for the homepage
export const NEWS: NewsItem[] = [
  { id: 1, title: "Novo Portal do Aluno Entra no Ar", excerpt: "A EE Américo Franco agora conta com um canal digital exclusivo para os estudantes acompanharem tudo o que acontece na unidade.", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop", date: "Fev 2024" },
  { id: 2, title: "Preparação para o ENEM 2024", excerpt: "Professores da área de linguagens iniciam ciclo de oficinas focadas em redação nota mil. Confira os horários das monitorias.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", date: "Fev 2024" },
  { id: 3, title: "Revitalização da Quadra Poliesportiva", excerpt: "Com apoio do Grêmio, a quadra recebeu nova pintura para os jogos interclasses que se aproximam.", image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop", date: "Jan 2024" },
];

// Calendar event dates for sidebar and agenda
export const EVENT_DATES: EventDate[] = [
  { id: 1, title: "Conselho de Classe (Sem Aula)", date: "25/03", type: "Evento" },
  { id: 2, title: "Inscrições Interclasses", date: "01/04", type: "Evento" },
  { id: 3, title: "Simulado 1º Bimestre", date: "15/04", type: "Prova" },
  { id: 4, title: "Prazo Isenção ENEM", date: "10/05", type: "Vestibular" },
];

// Recommended books for the studies page
export const RECOMMENDED_BOOKS: RecommendedBook[] = [
  { title: "Dom Casmurro", author: "Machado de Assis", grade: "1ª Série" },
  { title: "Vidas Secas", author: "Graciliano Ramos", grade: "2ª Série" },
  { title: "Angústia", author: "Graciliano Ramos", grade: "3ª Série" },
  { title: "Quincas Borba", author: "Machado de Assis", grade: "3ª Série" },
  { title: "Capitães da Areia", author: "Jorge Amado", grade: "2ª Série" },
  { title: "A Relíquia", author: "Eça de Queirós", grade: "3ª Série" },
];

// Results for the interclasses competitions
export const FUTSAL_RESULTS: GameResult[] = [
  { teamA: "3º A", scoreA: 5, teamB: "3º B", scoreB: 2, status: "Finalizado", date: "15/11/23" },
  { teamA: "2º C", scoreA: 1, teamB: "1º A", scoreB: 4, status: "Finalizado", date: "16/11/23" },
  { teamA: "3º C", scoreA: 0, teamB: "2º A", scoreB: 0, status: "Agendado", date: "05/04/24" },
];

export const CHESS_RESULTS: GameResult[] = [];

// Shared SVG components for the UI
export const Icons = {
  School: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  Studies: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  )
};
