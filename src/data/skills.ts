import { Skill, TechSkill } from '@/utils/types';

const skills: { main: Skill[]; techs: TechSkill[] } = {
  main: [
    {
      title: 'Webアプリケーション開発',
      detail: 'JavaScript（Vue.js）、Java（Spring Boot/Struts）、SQL（Oracle、PostgreSQL、DB2）などを用いたWebアプリケーションの設計/開発。障害対応はフロントエンドからバックエンド、ミドルウェア、インフラまで幅広く対応。Jenkinsを用いたCI/CDパイプラインの構築/運用。',
    },
    {
      title: '顧客コミュニケーション',
      detail: '地方銀行を中心とした金融機関との直接対話を通じて、課題整理や要件抽出、システム設計開発を実施。非エンジニア/エンジニア問わず、相手の理解度に応じた技術的説明/提案が可能。コンサルティングやシステム開発における業務フローやシステム構成、非機能要件などの各種資料の作成。',
    },
    {
      title: 'プロジェクト推進・マネジメント',
      detail: '要件定義、基本設計、詳細設計、実装、テスト、リリース、運用保守までの幅広いフェーズを5～10人規模のチームリーダーとして推進。グランドデザインフェーズでの現行システム分析や業務とシステムのFit&Gap分析。',
    },
  ],
  techs: [
    { name: 'JavaScript', years: '7年', role: 'リーディング/コーディング', level: '★★★★☆' },
    { name: 'TypeScript', years: '2年', role: 'コーディング', level: '★★★☆☆' },
    { name: 'Vue.js', years: '6年', role: 'リーディング/コーディング', level: '★★★★☆' },
    { name: 'React', years: '1年', role: 'コーディング', level: '★★★☆☆' },
    { name: 'Java (Spring Boot/Struts)', years: '7年', role: 'リーディング/コーディング', level: '★★★★☆' },
    { name: 'SQL (Oracle/PostgreSQL/DB2)', years: '7年', role: 'リーディング/コーディング', level: '★★★★☆' },
    { name: 'Jenkins', years: '5年', role: '構築/運用', level: '★★★★☆' },
    { name: 'AWS/GCP', years: '1年', role: '設計/構築', level: '★★★☆☆' },
    { name: 'JP1', years: '4年', role: '運用/リリース', level: '★★★☆☆' },
    { name: 'Git/SVN', years: '5年', role: '構成管理', level: '★★★★☆' },
    { name: 'Redmine', years: '3年', role: '運用', level: '★★★☆☆' },
    { name: 'PowerShell/Windowsバッチ', years: '3年', role: 'コーディング', level: '★★★☆☆' },
    { name: 'Python', years: '1年', role: 'コーディング', level: '★★☆☆☆' }
  ]
};

export default skills;
