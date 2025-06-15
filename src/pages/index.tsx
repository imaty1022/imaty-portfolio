import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function Home() {
  // プロフィール・スキル・プロジェクト・SNS情報を直接定義
  const profile = {
    name: 'imaty',
    title: 'Webアプリケーションエンジニア',
    summary: [
      '地方銀行向け勘定系システム開発を中心に、要件定義から保守運用まで幅広く経験。',
      '堅牢性・信頼性を重視した設計と、現場視点の業務改善提案が強み。'
    ],
    specialties: [
      'Webアプリケーション開発',
      '要件定義・設計・開発・テスト・運用',
      'プロジェクトマネジメント',
      '業務効率化・自動化'
    ]
  };

  const skills = [
    { name: 'Java', level: '★★★★☆' },
    { name: 'TypeScript', level: '★★★☆☆' },
    { name: 'SQL', level: '★★★☆☆' },
    { name: 'Shell Script', level: '★★★☆☆' },
    { name: 'Next.js', level: '★★★☆☆' },
    { name: 'React', level: '★★★☆☆' }
  ];

  const projects = [
    {
      title: '地方銀行向け勘定系システム刷新',
      period: '2019-2022',
      description: '大規模な基幹システム刷新プロジェクトにて、要件定義・設計・開発・テスト・移行・運用まで一貫して担当。品質・納期・コストのバランスを重視しつつ、現場運用の効率化提案も実施。',
      role: 'リーダー/開発エンジニア'
    },
    {
      title: '情報系システムのAPI化推進',
      period: '2022-2024',
      description: '情報系システムのAPI化・内製化推進。設計・実装・テスト自動化・CI/CD導入などを主導。',
      role: 'サブリーダー/開発エンジニア'
    }
  ];

  const sns = [
    { name: 'GitHub', url: 'https://github.com/imaty' },
    { name: 'X (Twitter)', url: 'https://twitter.com/imaty_dev' }
  ];

  // 画像パス（ダミー画像URLをfallback）
  const imagePath = '/profile/profile.png';
  const fallbackImage = 'https://avatars.githubusercontent.com/u/583231?v=4'; // GitHub Octocat

  return (
    <div className="space-y-16 max-w-2xl mx-auto py-10">
      {/* プロフィールカード */}
      <section>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 relative">
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg bg-gray-100">
            <Image
              src={imagePath}
              alt="imaty プロフィール画像"
              width={112}
              height={112}
              onError={(e) => {
                // Next.js ImageではonErrorは使えないため、画像が無い場合はpublicにダミー画像を置くか、srcを直接変更してください
              }}
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
        <SectionTitle>主なスキル</SectionTitle>
        <ul className="grid grid-cols-2 gap-3">
          {skills.map((s, i) => (
            <li key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
              <span className="font-medium text-gray-700">{s.name}</span>
              <span className="text-accent font-mono text-lg">{s.level}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* プロジェクト */}
      <section>
        <SectionTitle>主なプロジェクト</SectionTitle>
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
              href="https://github.com/imaty"
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
              href="https://twitter.com/imaty_dev"
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
              aria-label="メール"
              className="transition-transform hover:scale-110 hover:shadow-lg rounded-full"
            >
              <Image
                src="/icons/mail.svg"
                alt="メール"
                width={36}
                height={36}
                className="rounded-full bg-white"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

