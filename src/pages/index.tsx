import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  // プロフィール・スキル・プロジェクト・SNS情報を直接定義
  const profile = {
    name: 'imaty',
    title: 'Web Application Developer',
    summary: [
      'Extensive experience in core banking system development for regional banks, covering requirements definition to maintenance and operations.',
      'Specializes in robust and reliable system design, with a strong focus on operational improvement from a field perspective.'
    ],
    specialties: [
      'Web Application Development',
      'Requirements Definition, Design, Development, Testing & Operations',
      'Project Management',
      'Workflow Efficiency & Automation'
    ]
  };

  const skills = [
    { name: 'Java', level: '★★★★☆' },
    { name: 'TypeScript', level: '★★★☆☆' },
    { name: 'SQL', level: '★★★☆☆' },
    { name: 'Shell Script', level: '★★★☆☆' },
    { name: 'Next.js', level: '★★★☆☆' },
    { name: 'React', level: '★★★☆☆' },
    { name: 'Vue.js', level: '★★★☆☆' },
  ];

  const projects = [
    {
      title: 'Core Banking System Modernization for Regional Banks',
      period: '2019-2022',
      description: 'Led a large-scale core system renewal project, overseeing all phases from requirements definition to operations. Focused on balancing quality, delivery, and cost while proposing operational efficiency improvements.',
      role: 'Lead/Development Engineer'
    },
    {
      title: 'API-First Transformation of Information Systems',
      period: '2022-2024',
      description: 'Spearheaded the API-first transformation and in-house development of information systems. Led design, implementation, test automation, and CI/CD pipeline establishment.',
      role: 'Sub-Lead/Development Engineer'
    }
  ];

  const sns = [
    { name: 'GitHub', url: 'https://github.com/imaty' },
    { name: 'X (Twitter)', url: 'https://twitter.com/imaty_dev' }
  ];

  const imagePath = '/images/profile/profile.png';

  return (
    <>
      <ThemeToggle />
      <div className="space-y-16 max-w-2xl mx-auto py-10">
      {/* プロフィールカード */}
      <section>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 relative">
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg bg-gray-100">
            <Image
              src={imagePath}
              alt="imaty Profile Picture"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-1 tracking-wide text-gray-900">{profile.name}</h1>
          <p className="text-primary text-lg mb-3 font-medium">{profile.title}</p>
          <div className="space-y-1 mb-2">
            {profile.summary.map((s, i) => (
              <p key={i} className="text-base text-gray-700">{s}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {profile.specialties.map((s, i) => (
              <span key={i} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* スキル */}
      <section>
        <SectionTitle>Skills</SectionTitle>
        <ul className="grid grid-cols-2 gap-3">
          {skills.map((s, i) => (
            <li key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
              <span className="font-medium text-gray-700">{s.name}</span>
              <span className="text-accent font-mono text-lg">{s.level}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 資格 */}
      <section>
        <SectionTitle>Certification</SectionTitle>
        <ul className="list-disc ml-6 text-base">
          <li>Applied Information Technology Engineer Examination</li>
        </ul>
      </section>

      {/* プロジェクト */}
      <section>
        <SectionTitle>Projects</SectionTitle>
        <ul className="space-y-5">
          {projects.map((p, i) => (
            <li key={i} className="border border-gray-100 rounded-xl p-5 bg-gradient-to-tr from-blue-50 to-white shadow-md">
              <div className="font-bold text-lg mb-1 text-gray-800">{p.title}</div>
              <div className="text-xs text-gray-500 mb-2">{p.period} / {p.role}</div>
              <div className="text-gray-700 text-sm">{p.description}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* コンテクト/SNS */}
      <section>
        <SectionTitle>Contact</SectionTitle>
        <ul className="flex space-x-8 justify-center mb-2">
          <li>
            <a
              href="https://github.com/tomoimai1022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform hover:scale-110 hover:shadow-lg rounded-full"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={36}
                height={36}
                className="rounded-full bg-white"
              />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/imaty1022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="transition-transform hover:scale-110 hover:shadow-lg rounded-full"
            >
              {/* ライトテーマ用 */}
              <Image
                src="/icons/x-black.png"
                alt="X (Twitter)"
                width={36}
                height={36}
                className="rounded-full bg-white block dark:hidden"
                priority
              />
              {/* ダークテーマ用 */}
              <Image
                src="/icons/x-white.png"
                alt="X (Twitter)"
                width={36}
                height={36}
                className="rounded-full bg-white hidden dark:block"
                priority
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:imaty1022@gmail.com"
              aria-label="Email"
              className="transition-transform hover:scale-110 hover:shadow-lg rounded-full"
            >
              <Image
                src="/icons/mail.svg"
                alt="Email"
                width={36}
                height={36}
                className="rounded-full bg-white"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}

