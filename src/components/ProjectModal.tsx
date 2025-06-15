import { Project } from '@/utils/types';

export default function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-xl">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-accent text-2xl" onClick={onClose}>&times;</button>
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <div className="mb-2 text-sm text-gray-500">{project.period} / {project.phase} / 規模: {project.size}</div>
        <div className="mb-2 text-sm"><span className="font-semibold">役割:</span> {project.role}</div>
        <div className="mb-2"><span className="font-semibold">概要:</span> {project.summary}</div>
        <div className="mb-2"><span className="font-semibold">詳細:</span>
          {Array.isArray(project.details)
            ? <ul className="list-disc ml-5 mt-1 space-y-1">{(project.details as string[]).map((d: string, i: number) => <li key={i}>{d}</li>)}</ul>
            : <div>{project.details}</div>}
        </div>
        <div className="mb-2"><span className="font-semibold">成果:</span>
          {Array.isArray(project.achievements)
            ? <ul className="list-disc ml-5 mt-1 space-y-1">{(project.achievements as string[]).map((a: string, i: number) => <li key={i}>{a}</li>)}</ul>
            : <div>{project.achievements}</div>}
        </div>
        <div className="mb-2"><span className="font-semibold">環境・言語:</span> <span className="text-sm text-gray-600">{project.env}</span></div>
      </div>
    </div>
  );
}
