import "./globals.css";


export const metadata = {
  title: "Miami Nusr-Et Steakhouse | FineDine Menureate Next App",
  description: "Miami Nusr-Et Steakhouse | FineDine Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
