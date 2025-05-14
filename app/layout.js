import {
  Inter,
  Orbitron,
  Rajdhani,
  Space_Mono,
  Poppins,
  Montserrat,
  Pacifico,
  Playfair_Display,
} from "next/font/google";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";
import ErrorBoundary from "./components/client/ErrorBoundary";
import Loading from "./components/client/Loading";
import "./globals.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize all fonts
const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
});

// Get the base URL based on environment
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Paul Nnaemeka - Software Engineer",
    template: "%s | Paul Nnaemeka",
  },
  description:
    "Full-stack software engineer specializing in frontend & backend development. I build scalable, secure, and user-friendly web applications.",
  keywords: [
    "software engineer",
    "web developer",
    "full-stack developer",
    "React",
    "Node.js",
    "JavaScript",
  ],
  authors: [{ name: "Paul Nnaemeka" }],
  creator: "Paul Nnaemeka",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Paul Nnaemeka - Software Engineer",
    description:
      "Full-stack software engineer. I build scalable, secure, and user-friendly web applications.",
    siteName: "Paul Nnaemeka Portfolio",
    images: [
      {
        url: "/assets/images/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Nnaemeka - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Nnaemeka - Software Engineer",
    description:
      "Full-stack software engineer. I build scalable, secure, and user-friendly web applications.",
    creator: "@Emekapaul302",
    images: ["/assets/images/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth scroll-pt-25 ${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} ${poppins.variable} ${montserrat.variable} ${pacifico.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
