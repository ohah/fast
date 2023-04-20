'use client';

import { RecoilRoot as Recoil } from 'recoil';

interface RecoilProps {
  children: React.ReactNode;
}

export default function RecoilRoot({ children }: RecoilProps) {
  return <Recoil>{children}</Recoil>;
}
