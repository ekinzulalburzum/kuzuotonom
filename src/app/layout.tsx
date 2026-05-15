import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'KuzuTakip - Yerel Kayıt Sistemi',
    description: 'Akıllı kuzu sağlığı ve aşılama takibi',
    };

    export const viewport: Viewport = {
      themeColor: '#15803d',
        width: 'device-width',
          initialScale: 1,
            viewportFit: 'cover',
            };

            export default function RootLayout({ children }: { children: React.ReactNode }) {
              return (
                  <html lang="tr" className="dark">
                        <body className="min-h-screen relative bg-black">
                                {children}
                                        <Toaster />
                                              </body>
                                                  </html>
                                                    );
                                                    }