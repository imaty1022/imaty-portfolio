import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  // プロフィール・スキル・プロジェクト・SNS情報を直接定義
  const profile = {
    name: 'imaty',
    title: 'Web Application Developer',
    skills: [
      'JavaScript(Vue.js/Nuxt.js)',
      'JavaScript(React)',
      'TypeScript',
      'Java(Spring Boot)',
      'Java(Struts)',
      'SQL',
      'Shell Script',
    ]
  };

  interface WorkItem {
    title: string;
    period: string;
    description: string;
    role: string;
    url?: string;
    technologies?: string[];
  }

  const works: WorkItem[] = [
    {
      title: 'Maternity Blog',
      period: '2022-',
      description: 'Developed and continuously updating a maternity blog website since 2022. The blog provides valuable information and resources for expecting and new mothers, with regular content updates and technical improvements.',
      role: 'Full-stack Developer',
      url: 'https://sakulifeblog.com/',
      technologies: ['Vue.js', 'Nuxt.js', 'microCMS','Vercel']
    },
  ];

  const imagePath = '/images/profile/profile.png';

  return (
    <>
      <ThemeToggle />
      <div className="space-y-16 max-w-2xl mx-auto py-10">
      {/* プロフィール */}
      <section>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 relative">
          <div className="w-28 h-28 mb-4 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg bg-gray-100 dark:bg-gray-700">
            <Image
              src={imagePath}
              alt="imaty Profile Picture"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-1 tracking-wide text-gray-900 dark:text-white">{profile.name}</h1>
          <p className="text-primary dark:text-blue-400 text-lg mb-3 font-medium">{profile.title}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {profile.skills.map((s, i) => (
              <span 
                key={i} 
                className="bg-accent/10 dark:bg-blue-900/30 text-accent dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクト */}
      <section>
        <SectionTitle>Works</SectionTitle>
        <ul className="space-y-5">
          {works.map((p, i) => (
            <li key={i} className="border border-gray-100 dark:border-gray-700 rounded-xl p-5 bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <div className="font-bold text-lg mb-1 text-gray-800 dark:text-white">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-blue-400 transition-colors">
                    {p.title} <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <span className="dark:text-white">{p.title}</span>
                )}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{p.period} / {p.role}</div>
              <div className="text-gray-700 dark:text-gray-200 text-sm mb-3">{p.description}</div>
              {p.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 資格 */}
      <section>
        <SectionTitle>Certification</SectionTitle>
        <ul className="list-disc ml-6 text-base">
          <li>Applied Information Technology Engineer</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <SectionTitle>Contact</SectionTitle>
        <div className="flex justify-center space-x-6 mb-2">
          {/* GitHub */}
          <a
            href="https://github.com/tomoimai1022"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/imaty1022"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:imaty1022@gmail.com"
            aria-label="Email"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}

