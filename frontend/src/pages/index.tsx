import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} w-full min-h-screen`}>
      <Head>
        <title>LatSat - Off grid satelite network</title>
      </Head>

      <Header />
    </main>
  );
}
