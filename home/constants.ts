import { NavItem, CarouselSlide, TimelineEvent, TabOption, ContentData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Docs', href: '#docs' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Models', href: '#models' },
  { label: 'Research', href: '#research' },
  { label: 'GitHub', href: 'https://github.com/AutodiffLabs' },
  { label: 'Timeline', href: '#timeline', isSpecial: true },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Tensor Architectures",
    description: "Core graph engine powering autodiff and tensor ops.",
    imageUrl: "https://images.unsplash.com/photo-1597332503885-fc8d195a99b2?w=1600&q=60&auto=format&fit=crop"
    // imageUrl: "https://picsum.photos/1600/900?random=1"
  },
  {
    id: 2,
    title: "Visual Reasoning",
    description: "Zero-shot classification with multimodal attention heads.",
    imageUrl: './src/assets/himalayas.png'
    // imageUrl: "https://picsum.photos/1600/900?random=2"
  },
  {
    id: 3,
    title: "Compiler Optimization",
    description: "Compiler-level graph fusion & IR design, scheduling, and graph-level transformations.",
    imageUrl: "https://images.unsplash.com/photo-1752079830409-4f13ece09544?w=1600&q=60&auto=format&fit=crop"
    // imageUrl: "https://picsum.photos/1600/900?random=3"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    topic: "Framework",
    title: "HyperGrad",
    description: "A deep learning framework for tensor computation and automatic differentiation."
  },
  {
    topic: "Deep learning model", // "Auto Trained Transformer",
    title: "Model - 1",
    description: "A trained deep learning transformer model built on the HyperGrad Framework"
  }
];

export const TAB_CONTENT: Record<TabOption, ContentData> = {
  [TabOption.DOCUMENTATION]: {
    title: "Comprehensive Guides",
    body: "Our documentation is built for humans. Start with the 'Timeline' programme to understand the core concepts of AutodiffLabs, or dive into the API reference for low-level graph manipulation details.",
    linkText: "Read the Docs"
  },
  [TabOption.PROJECTS]: {
    title: "Lab Bench",
    body: "Explore our open sandbox of experimental layers and functional projects. From non-Euclidean manifolds to quantum-simulated annealing layers, check out what is brewing.",
    linkText: "View Projects"
  },
  [TabOption.MODELS]: {
    title: "Models",
    body: "Pre-trained weights for Vision, NLP, and Audio tasks. Optimized for the Autodiff runtime, ensuring maximum throughput on consumer hardware.",
    linkText: "Browse Models"
  },
  [TabOption.Research]: {
    title: "Research",
    body: "The research outcomes, and the repository of papers published under this projects",
    linkText: "Papers"
  },
};

export const LOGO_PATH = "./src/assets/adl.png";