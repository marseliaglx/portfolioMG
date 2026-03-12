export interface ContentVariant {
  professional: string;
  nerdy: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  dateRange: {
    start: string;
    end: string;
  };
  location: string;
  mandate: string;
  description: string;
  achievements: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  id: string;
  label: string;
  title: ContentVariant;
  description: string;
  tools: string[];
  icon: string;
  size: 'regular' | 'wide' | 'tall' | 'large';
}

export interface EducationEntry {
  id: string;
  type: 'degree' | 'certification';
  name: string;
  institution: string;
  dateRange: {
    start: string;
    end: string;
  };
  gpa?: string;
  honors?: string;
  highlights: string[];
  credentialId?: string;
}

export interface Achievement {
  id: string;
  metric: string;
  title: ContentVariant;
  description: string[];
  impact: string;
  category: 'awards' | 'milestones' | 'community' | 'technical';
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  blog?: string;
}
