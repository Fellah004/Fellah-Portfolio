export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  fullName?: string;
  category: string;
  badge?: string;
  isMajor?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  imageUrl: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  keyLearningAreas: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  institution: string;
  duration?: string;
  scoreLabel: string;
  scoreValue: string;
  isPrimary?: boolean;
  description: string;
}

export interface EducationStatistic {
  value: string;
  label: string;
}

export interface AchievementItem {
  id: string;
  category: 'Certifications' | 'Competitions' | 'Innovation & Awards' | 'Leadership';
  badge: string;
  title: string;
  organization: string;
  year?: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  introduction: string;
  profileSummary: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  photoUrl: string;
  resumeUrl: string;
  degree: string;
  college: string;
  graduationYear: string;
  cgpa: string;
}
