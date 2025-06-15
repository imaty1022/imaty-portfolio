export type Skill = {
  title: string;
  detail: string;
};

export type TechSkill = {
  name: string;
  years: string;
  role: string;
  level: string; // ★の数などで表現
};

export type Project = {
  title: string;
  period: string;
  phase: string;
  size: string;
  role: string;
  summary: string;
  details: string[] | string;
  achievements: string[] | string;
  env: string;
};
