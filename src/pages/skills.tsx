import SectionTitle from '@/components/SectionTitle';
import SkillList from '@/components/SkillList';
import skills from '@/data/skills';

export default function Skills() {
  return (
    <div>
      <SectionTitle>主な経験・スキル</SectionTitle>
      <SkillList skills={skills.main} />
      <SectionTitle>経験のある技術</SectionTitle>
      <SkillList skills={skills.techs} isTechList />
    </div>
  );
}
