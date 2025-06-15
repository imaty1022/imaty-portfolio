import { Skill, TechSkill } from '@/utils/types';

export default function SkillList({ skills, isTechList = false }: { skills: (Skill | TechSkill)[], isTechList?: boolean }) {
  if (!isTechList) {
  // Skill[]として扱う
  return (
    <ul className="mb-8 space-y-4">
      {(skills as Skill[]).map((s, i) => (
        <li key={i}>
          <div className="font-bold text-base mb-1">{s.title}</div>
          <div className="text-sm text-gray-700 whitespace-pre-line">{s.detail}</div>
        </li>
      ))}
    </ul>
  );
}
// 技術一覧
return (
  <div className="overflow-x-auto">
    <table className="min-w-full border text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-2 py-1">技術</th>
          <th className="border px-2 py-1">経験年数</th>
          <th className="border px-2 py-1">役割</th>
          <th className="border px-2 py-1">習熟度</th>
        </tr>
      </thead>
      <tbody>
        {(skills as TechSkill[]).map((t, i) => (
          <tr key={i}>
            <td className="border px-2 py-1 font-medium">{t.name}</td>
            <td className="border px-2 py-1">{t.years}</td>
            <td className="border px-2 py-1">{t.role}</td>
            <td className="border px-2 py-1">{t.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
