export interface Problem {
  day: number;
  date: string;
  title: string;
  url: string;
  type?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  solutionsPath: string;
}

export interface Solution {
  filename: string;
  author: string;
  language: string;
  path: string;
}

export interface Contributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
  solutionCount: number;
}

export interface TestCase {
  input: Record<string, any>;
  expected: any;
}