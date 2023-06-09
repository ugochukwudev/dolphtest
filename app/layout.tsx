import Navigation from "@/components/Navigation";
import "./globals.css";
import { Sora } from "next/font/google";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Dolph.js",
  description: "An express.js framework built to make devs live longer 😅",
};
const sora = Sora({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark " lang="en">
      <body
        className={`font-[${sora}]   dark:bg-black dark:text-white text-black bg-white `}
      >
        <Navigation />
        <div className="min-h-[60vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
