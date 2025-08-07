import './globals.js';
import LayoutShell from './components/LayoutShell';

export const metadata = {
  title: 'UP for life',
  description: 'معماری الهام‌بخش زندگی'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
