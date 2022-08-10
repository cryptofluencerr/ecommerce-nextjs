import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Product from "../utils/models/Product";
import connectDb from "../utils/db";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Container products={products} className="h-[100vh]" />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await Product.find({}).lean();

  // const data = await fetch(`${process.env.URL}/api/products`);
  // const products = await data.json();

  return { props: { products: JSON.parse(JSON.stringify(data)) } };
}
