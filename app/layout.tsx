import "../styles/globals.css";
import Navbar from "./Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-rwBlack text-white  ">
        <Navbar />
        <main className="max-w-screen-xl mx-auto h-[calc(100vh-56px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
