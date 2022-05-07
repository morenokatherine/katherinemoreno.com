import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import Head from "next/head";

export interface HomeProps {
  technologies: TechnologyI[];
  aboutMeList: AboutMeI[];
  summaryList: SummaryI[];
}

export interface TechnologyI {
  image: string;
  title: string;
  index: number;
  rating: number;
}

export interface AboutMeI {
  image: string;
  language: string;
  title: string;
  content: string;
}

export interface SummaryI {
  image: string;
  language: string;
  title: string;
  content: string;
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Head>
        <title>
          Katherine Moreno | Developer, Frontend, JavaScript, Typescript, React,
          Jest, RTL, TDD
        </title>
        <meta
          name="description"
          content="Developer, Frontend, JavaScript, Typescript, React, Jest, RTL, TDD"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Hello world!</h1>
    </div>
  );
};

export async function getServerSideProps() {
  const filesInTechnologies = fs.readdirSync("./content/technologies");
  const filesInAboutMe = fs.readdirSync("./content/about-me");
  const filesInSummary = fs.readdirSync("./content/summary");

  const technologies = filesInTechnologies.map((filename) => {
    const file = fs.readFileSync(`./content/technologies/${filename}`, "utf8");
    const matterData = matter(file);
    const data = {
      image: matterData.data.image,
      title: matterData.data.title,
      index: matterData.data.index,
      rating: matterData.data.rating,
    };
    return data;
  });

  const aboutMe = filesInAboutMe.map((filename) => {
    const file = fs.readFileSync(`./content/about-me/${filename}`, "utf8");
    const matterData = matter(file);
    const data = {
      image: matterData.data.image,
      language: matterData.data.language,
      title: matterData.data.title,
      content: matterData.content,
    };
    return data;
  });

  const summary = filesInSummary.map((filename) => {
    const file = fs.readFileSync(`./content/summary/${filename}`, "utf8");
    const matterData = matter(file);
    const data = {
      image: matterData.data.image,
      language: matterData.data.language,
      title: matterData.data.title,
      content: matterData.content,
    };
    return data;
  });

  const homeProps: HomeProps = {
    technologies: technologies,
    aboutMeList: aboutMe,
    summaryList: summary,
  };

  return {
    props: homeProps,
  };
}

export default Home;
