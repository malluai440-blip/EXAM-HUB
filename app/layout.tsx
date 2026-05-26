'use client';

import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Exam Hub - Generate Important Questions" />
        <title>Exam Hub - Question Generator</title>
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}