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
import Navbar from "./components/Navbar";
import "./globals.css";

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

export const metadata = {
  title: "Software Engineer Portfolio",
  description:
    "A beautiful portfolio showcasing my work as a Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} ${poppins.variable} ${montserrat.variable} ${pacifico.variable} ${playfair.variable}`}
    >
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
