import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/skills', label: 'スキル' },
  { href: '/projects', label: 'プロジェクト' },
  { href: '/contact', label: '連絡先' },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-accent font-medium transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
