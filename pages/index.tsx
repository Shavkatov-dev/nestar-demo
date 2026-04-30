import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nestar Demo</title>
        <meta name="description" content="Nestar demo project" />
      </Head>

      <div className={`${styles.page} ${inter.variable} ${mono.variable}`}>
        <main className={styles.main}>
          <Image src="/next.svg" alt="Next.js logo" width={100} height={20} />
          <h1>PAGES ROUTER.</h1>
          <h1>Hello Next 14, MIT 35 JACK</h1>
        </main>
      </div>
    </>
  );
}
