import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 初期テーマを必ずダークにする
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      if (!saved) localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/80 shadow hover:shadow-lg transition"
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      type="button"
    >
      {isDark ? (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
      ) : (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.47a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zM18 9a1 1 0 110 2h-2a1 1 0 110-2h2zM5.64 4.89a1 1 0 00-1.42 1.42l1.42 1.42a1 1 0 001.42-1.42L5.64 4.89zM4 9a1 1 0 100 2H2a1 1 0 100-2h2zm1.64 7.11a1 1 0 001.42-1.42l-1.42-1.42a1 1 0 00-1.42 1.42l1.42 1.42zm8.72 0a1 1 0 01-1.42-1.42l1.42-1.42a1 1 0 011.42 1.42l-1.42 1.42zM10 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"/></svg>
      )}
      <span className="text-xs font-medium text-gray-700 dark:text-gray-200 select-none">
        {isDark ? 'ダーク' : 'ブライト'}
      </span>
    </button>
  );
}
