import 'app/globals.css';
import { Recoil as RecoilRoot, ReactQueryClientProvider } from 'components';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RecoilRoot>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </RecoilRoot>
        <div id="portal" />
      </body>
    </html>
  );
}
