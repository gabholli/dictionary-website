import Header from "./components/Header";
import "./globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Free Dictionary</title>
      <body
        className="font-mono"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
