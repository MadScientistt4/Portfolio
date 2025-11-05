import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import PageTransition from "@/components/transitions/PageTransition";
import ThemeStyleInjector from "@/components/ThemeStyleInjector";
import StairTransition from "@/components/transitions/StairTransition";
import FontLoader from "@/components/FontLoader";
// import { JetBrains_Mono } from "next/font/google";

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-jetbrainsMono"
// });

export const metadata = {
  title: "Aditya Mathur | Portfolio",
  description: "Portfolio of Aditya Mathur - Software developer specializing web applications with experience in Python, JavaScript, Java, C++, front-end and back-end technologies.",
  // keywords: ["software developer", "portfolio", "full-stack developer", "backend-developer", "frontend-developer", "Flutter", "Android", C++", "Python", "JavaScript", "Java", "React", "Next.js", "Django"],
  // creator: "AdityaMathur",
  // authors: [{ name: "AdityaMathur" }],
  // formatDetection: {
  //   email: false,
  //   telephone: false,
  // },
  // openGraph: {
  //   title: "AdityaMathur | Software Developer Portfolio",
  //   description: "Software developer with a passion for blending creative problem-solving with technical expertise to deliver solutions that matter.",
  //   url: "https://Aditya.vercel.app/",
  //   siteName: "AdityaMathur Portfolio",
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "AdityaMathur | Software Developer",
  //   description: "Check out my portfolio to see my projects and experience in software development.",
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-robotoMono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <head>
        <ThemeStyleInjector />
      </head>
      <body>
        <ThemeProvider>
          <>
            <FontLoader />
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}