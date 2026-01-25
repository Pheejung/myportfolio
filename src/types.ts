
export interface Project {
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impact: string;
  impactLabel: string;
  tech: string[];
  icon: string;
}

export interface SandboxItem {
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  description: string;
  active?: boolean;
}

export interface CertificationItem {
  title: string;
}



export interface ImpactProject {
  id: string;
  title: string;
  category: string;
  impact: string;
  problem: string;
  solution: string;
  tags: string[];
  iconType: 'network' | 'users' | 'chart' | 'settings' | 'route' | 'grid' | 'scanner';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  active: boolean;
}

export interface SecondaryProject {
  title: string;
  description: string;
}
