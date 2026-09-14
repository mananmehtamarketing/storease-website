import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Deck | Storease',
  description:
    'Video, brand, campaigns and events for B2B technology companies. The Storease work deck.',
  openGraph: {
    title: 'Work Deck | Storease',
    description:
      'Video, brand, campaigns and events for B2B technology companies. The Storease work deck.',
    url: 'https://storease.ca/workdeck',
    images: ['/workdeck/img/event-poster.jpg'],
  },
};

export default function WorkDeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
