export interface SolutionCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  fileNumber: string;
  client: string;
  status: string;
  sector: string;
  location: string;
  website: string;
  engagement: string;
  challenge: string;
  univensRole: string;
  tags: string[];
  quote: string;
  image: string;
  logoIcon?: string;
  brandColor?: string;
  impactStat?: string;
  impactLabel?: string;
}

export interface ExecutionStep {
  step: number;
  title: string;
  description: string;
}

export interface SpecialistChip {
  id: string;
  title: string;
  description: string;
  icon: string;
  stackTags?: string[];
  badgeText?: string;
  gradient?: string;
  logoBadges?: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingState {
  date: string;
  time: string;
  duration: '15 min' | '30 min' | '45 min' | '60 min';
  note: string;
  name: string;
  email: string;
  company: string;
}

export interface ChatMessage {
  id: string;
  sender: 'gaurav' | 'user';
  text: string;
  timestamp: string;
}
