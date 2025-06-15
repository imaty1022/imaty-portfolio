import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold border-l-4 border-accent pl-3 mt-8 mb-4">{children}</h2>
  );
}
