import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shape Plus Results',
  description: 'מערכת מעקב תוצאות אישית לשייפ פלוס'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
