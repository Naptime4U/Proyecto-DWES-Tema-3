import localFont from "next/font/local";
import "./globals.css";
import MenuPincipal from "@/components/menu-principal";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff", //hemos cambiado la ruta de fonts y por eso hemos cambiado esta ruta
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff", //hemos cambiado la ruta de fonts y por eso hemos cambiado esta ruta
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}
      >
        <div className="grid grid-cols-6">
        <aside className="col-span-1">
          <MenuPincipal />
        </aside>
        <main className="col-span-5">
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}
