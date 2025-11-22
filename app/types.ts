export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TimelineEvent {
  topic: string;
  title: string;
  description: string;
}

export enum TabOption {
  DOCUMENTATION = 'Documentation',
  PROJECTS = 'Projects',
  MODELS = 'Models',
  Research = 'Research',
}

export interface ContentData {
  title: string;
  body: string;
  image?: string;
  linkText?: string;
}

export interface GitHubFile {
  name: string
  content: string
}