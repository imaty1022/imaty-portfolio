import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';

export default function Projects() {
  const [selected, setSelected] = useState<number|null>(null);
  return (
    <div>
      <SectionTitle>プロジェクト経験</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onClick={() => setSelected(i)} />
        ))}
      </div>
      {selected !== null && (
        <ProjectModal project={projects[selected]} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
