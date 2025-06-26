import React from "react";

import "../../styles/game.css";

export const metadata = {
  title: "Intelligence Game",
  description: "A modern, eye-catching intelligence game built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-black text-white">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}
