import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="text-[#f60]">
          cutefcc fist next app with tailwind & ts
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
