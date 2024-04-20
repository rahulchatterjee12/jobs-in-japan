import { Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata = {
  title: "Work in Japan",
  description:
    "Find your dream job in Japan. Browse job openings, learn about the benefits of working in Japan, and get valuable resources for job seekers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
