import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="relative mt-12 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {children}
      </h2>
    </div>
  );
}
