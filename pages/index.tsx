import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Katherine Moreno | Developer, Frontend, JavaScript, Typescript, Node,
          React, Jest, TDD
        </title>
        <meta
          name="description"
          content="Developer, Frontend, JavaScript, Typescript, Node, React, Jest, TDD"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Hello world!</h1>
    </div>
  );
};

export default Home;
