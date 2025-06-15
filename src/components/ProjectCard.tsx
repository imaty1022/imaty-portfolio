import { Project } from '@/utils/types';

export default function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white" onClick={onClick}>
      <div className="font-bold text-lg mb-2">{project.title}</div>
      <div className="text-xs text-gray-500 mb-1">{project.period} / {project.phase}</div>
      <div className="text-sm text-gray-700 mb-2">{project.role}</div>
      <div className="text-xs text-gray-400">{project.summary}</div>
    </div>
  );
}
