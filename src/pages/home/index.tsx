// Imports
import Head from "next/head";

// UI Imports
import { Layout } from "@/components/layout";
import { Header } from "@/components/home/header";
import { Showcase } from "@/components/home/showcase";
import { Blogs } from "@/components/home/blogs";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Driven</title>
        <meta
          name="description"
          content="Experts in buying, renting or selling properties in Dubai"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Showcase />
        <Blogs />
        <Newsletter />
      </Layout>
    </>
  );
}
