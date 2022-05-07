import fs from "fs";
import matter from "gray-matter";
import type { NextPage } from "next";
import Head from "next/head";
import { Progress } from "../components/Progress/Progress";
import { Tech } from "../components/Tech/Tech";
import { Image } from "../components/Image/Image";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Summary } from "../components/Summary/Summary";

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
    <div className="container flex flex-col mx-auto">
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
      <main className="flex flex-col gap-10 p-4 sm:p-8 xl:pt-10 xl:px-64">
        <section>
          <AboutMe data={props.aboutMeList[1]} />
        </section>
        <hr />
        <section>
          <Summary data={props.summaryList[0]} />
        </section>
        <section>
          <ol className="flex flex-col gap-4">
            {props.technologies.map((tech) => {
              return (
                <li key={tech.index}>
                  <Tech data={tech} />
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const filesInTechnologies = fs.readdirSync("./content/technologies");
  const filesInAboutMe = fs.readdirSync("./content/about-me");
  const filesInSummary = fs.readdirSync("./content/summary");

  const technologies = filesInTechnologies
    .map((filename) => {
      const file = fs.readFileSync(
        `./content/technologies/${filename}`,
        "utf8"
      );
      const matterData = matter(file);
      const data = {
        image: matterData.data.image,
        title: matterData.data.title,
        index: matterData.data.index,
        rating: matterData.data.rating,
      };
      return data;
    })
    .sort((a, b) => b.rating - a.rating);

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
