import { Assistant } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

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
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: 'url("/images/bg.jpg")',
            backgroundSize: "cover",
            contain: "content",
            backgroundRepeat: "no-repeat",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
