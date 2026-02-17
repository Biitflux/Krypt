import React from 'react';

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className="bg-app text-app">{children}</body>
    </html>
  );
}
