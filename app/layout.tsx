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
      <body className="bg-rwBlack text-white px-5 lg:px-4">
        <Navbar />
        <main className="max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
