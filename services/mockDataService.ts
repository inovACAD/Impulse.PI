
import { Course, Goal, Notification, LearningPath, Badge, UserProfile, CourseStatus, Certification, FilterOption, CourseFilters } from '../types';

export const mockUserProfile: UserProfile = {
  name: "Usuário Exemplo",
  email: "usuario@example.com",
  avatarUrl: "https://picsum.photos/seed/user/100/100",
  xp: 7500,
  level: "Especialista Nível 3",
  department: "Tecnologia",
  role: "Desenvolvedor Frontend Sênior",
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: "React Avançado com TypeScript",
    description: "Domine React com as melhores práticas e TypeScript.",
    category: "Desenvolvimento Web",
    duration: "40 horas",
    imageUrl: "https://picsum.photos/seed/react/300/200",
    status: CourseStatus.InProgress,
    progress: 65,
    provider: "Internal",
    skillsDeveloped: ["React", "TypeScript", "State Management"],
    level: 'Avançado',
  },
  {
    id: '2',
    title: "Liderança Ágil para Times",
    description: "Aprenda a liderar equipes com metodologias ágeis.",
    category: "Gestão e Liderança",
    duration: "25 horas",
    imageUrl: "https://picsum.photos/seed/leadership/300/200",
    status: CourseStatus.Completed,
    progress: 100,
    certificateUrl: "#",
    provider: "Coursera Partner",
    skillsDeveloped: ["Liderança", "Agile", "Scrum"],
    level: 'Intermediário',
    rating: 5,
  },
  {
    id: '3',
    title: "Introdução à Inteligência Artificial",
    description: "Conceitos fundamentais de IA e Machine Learning.",
    category: "Inteligência Artificial",
    duration: "15 horas",
    imageUrl: "https://picsum.photos/seed/ai/300/200",
    status: CourseStatus.Recommended,
    provider: "Udemy Partner",
    skillsDeveloped: ["IA", "Machine Learning"],
    level: 'Básico',
    rating: 4,
  },
   {
    id: '4',
    title: "Design Thinking para Inovação",
    description: "Aplique o Design Thinking para resolver problemas complexos.",
    category: "Inovação",
    duration: "20 horas",
    imageUrl: "https://picsum.photos/seed/design/300/200",
    status: CourseStatus.NotStarted,
    provider: "Internal",
    skillsDeveloped: ["Design Thinking", "Prototipagem"],
    level: 'Intermediário',
  },
   {
    id: '5',
    title: "Comunicação Eficaz para Líderes",
    description: "Desenvolva habilidades de comunicação assertiva.",
    category: "Comunicação",
    duration: "12 horas",
    imageUrl: "https://picsum.photos/seed/communication/300/200",
    status: CourseStatus.Recommended,
    provider: "LinkedIn Learning",
    skillsDeveloped: ["Comunicação", "Oratória"],
    level: 'Intermediário',
    rating: 5,
  },
];

export const mockGoals: Goal[] = [
  { id: 'g1', title: "Adquirir competência em Liderança Ágil", description: "Concluir curso e aplicar em projeto.", deadline: "3 meses", progress: 60, isOrganizational: false },
  { id: 'g2', title: "Concluir 20h de capacitação este semestre", description: "Foco em novas tecnologias.", deadline: "Final do Semestre", progress: 30, isOrganizational: false },
  { id: 'g3', title: "Certificação AWS Cloud Practitioner", description: "Meta organizacional para o time.", deadline: "2 meses", progress: 10, isOrganizational: true },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', message: "Novo curso 'Python para Data Science' recomendado para você!", type: 'curso', timestamp: "Há 2 horas", isRead: false, link: "/descobrir-cursos" },
  { id: 'n2', message: "Sua meta 'Liderança Ágil' está com 60% de progresso.", type: 'meta', timestamp: "Ontem", isRead: true },
  { id: 'n3', message: "Você desbloqueou a conquista 'Maratonista de Cursos'!", type: 'conquista', timestamp: "Há 3 dias", isRead: false, link: "/conquistas" },
  { id: 'n4', message: "Lembrete: Curso 'React Avançado' - Prazo final em 2 semanas.", type: 'curso', timestamp: "Há 5 horas", isRead: false },
];

export const mockLearningPaths: LearningPath[] = [
  {
    id: 'lp1',
    title: "Jornada Desenvolvedor Full Stack",
    description: "Torne-se um desenvolvedor Full Stack completo.",
    courses: [mockCourses[0], mockCourses[3]],
    progress: 45,
    isRecommended: true,
    category: "Desenvolvimento Web",
  },
  {
    id: 'lp2',
    title: "Fundamentos de Liderança",
    description: "Desenvolva habilidades essenciais para líderes.",
    courses: [mockCourses[1], mockCourses[4]],
    progress: 70,
    category: "Liderança",
  },
];

export const mockBadges: Badge[] = [
  { id: 'b1', name: "Maratonista de Cursos", description: "Concluiu 5 cursos em um mês.", iconUrl: "https://picsum.photos/seed/badge1/50/50", achievedDate: "2024-07-15" },
  { id: 'b2', name: "Mestre em React", description: "Concluiu a trilha de React com excelência.", iconUrl: "https://picsum.photos/seed/badge2/50/50", achievedDate: "2024-06-20" },
  { id: 'b3', name: "Pioneiro", description: "Um dos primeiros a concluir um novo curso.", iconUrl: "https://picsum.photos/seed/badge3/50/50" },
  { id: 'b4', name: "Contribuidor da Comunidade", description: "Ajudou 10 colegas nos fóruns.", iconUrl: "https://picsum.photos/seed/badge4/50/50", achievedDate: "2024-07-01"  },
];

export const mockCertifications: Certification[] = [
    { id: 'c1', courseName: 'Liderança Ágil para Times', institution: 'Coursera Partner', issueDate: '2024-05-20', certificateUrl: '#', validated: true },
    { id: 'c2', courseName: 'Workshop de Design Thinking', institution: 'Empresa Xyz', issueDate: '2023-11-10', certificateUrl: '#', validated: true },
    { id: 'c3', courseName: 'Curso Online de Python', institution: 'Python Institute', issueDate: '2024-01-15', certificateUrl: '#', validated: false },
];

export const mockCourseFilters: CourseFilters = {
    modality: [
        { id: 'ead-async', label: 'EAD Assíncrono' },
        { id: 'ead-sync', label: 'EAD Síncrono' },
        { id: 'hybrid', label: 'Híbrido' },
        { id: 'presential', label: 'Presencial' },
    ],
    duration: [
        { id: 'short', label: 'Curta (até 10h)' },
        { id: 'medium', label: 'Média (10-40h)' },
        { id: 'long', label: 'Longa (40h+)' },
    ],
    level: [
        { id: 'basic', label: 'Básico' },
        { id: 'intermediate', label: 'Intermediário' },
        { id: 'advanced', label: 'Avançado' },
    ]
};
    