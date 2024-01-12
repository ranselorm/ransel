import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Randy - Full-Stack Developer and Tech Innovator",
  description:
    "Hello! I'm Randy [ranselorm], a Full-Stack Developer with the MERN stack. I specialize in creating impactful, user-friendly web applications that drive digital progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
