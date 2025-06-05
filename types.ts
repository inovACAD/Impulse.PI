
export enum CourseStatus {
  InProgress = "Em Andamento",
  Completed = "Concluído",
  Recommended = "Recomendado",
  NotStarted = "Não Iniciado",
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string; // e.g., "10 horas"
  imageUrl?: string;
  status: CourseStatus;
  progress?: number; // 0-100
  certificateUrl?: string;
  rating?: number; // 1-5
  provider?: string; // e.g., "Coursera", "Internal"
  skillsDeveloped?: string[];
  level?: 'Básico' | 'Intermediário' | 'Avançado';
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string; // e.g., "3 meses", "Final do Semestre"
  progress: number; // 0-100
  isOrganizational: boolean;
}

export interface Notification {
  id: string;
  message: string;
  type: 'curso' | 'meta' | 'conquista' | 'social';
  timestamp: string;
  isRead: boolean;
  link?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: Course[];
  progress: number; // 0-100
  isRecommended?: boolean;
  category?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string; // Path to SVG or image
  achievedDate?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  xp: number;
  level: string;
  department?: string;
  role?: string;
}

export interface Certification {
  id: string;
  courseName: string;
  institution: string;
  issueDate: string;
  certificateUrl: string;
  validated: boolean;
}

export enum AppRoute {
  Dashboard = "/",
  DiscoverCourses = "/descobrir-cursos",
  LearningHistory = "/historico-aprendizagem",
  MyPaths = "/minhas-jornadas",
  Achievements = "/conquistas",
  Settings = "/configuracoes", // Placeholder
  Profile = "/perfil" // Placeholder
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface CourseFilters {
  modality: FilterOption[];
  duration: FilterOption[];
  level: FilterOption[];
}
    