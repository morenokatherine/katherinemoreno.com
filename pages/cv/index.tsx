import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AcademyCard } from "../../components/AcademyCard/AcademyCard";
import { AcademyCardData } from "../../components/AcademyCard/AcademyCard.interface";
import { Image } from "../../components/Image/Image";
import { TechImage } from "../../components/TechImage/TechImage";
import { HomeProps } from "../../utils/interfaces/common.interface";

{
  /* <div className="xl:w-8/12 flex items-center mx-auto p-8"> */
}
export const CV: NextPage<HomeProps> = (props) => {
  const { socialList } = props;
  const academyList: AcademyCardData[] = [
    {
      title: "Ironhack - Backend Java Developer",
      url: "https://www.ironhack.com/en/web-development",
      image: "/images/ironhack.png",
      academy: {
        title: "Ironhack",
        url: "https://www.ironhack.com/en",
      },
      author: {
        name: "Ironhack",
        url: "https://www.ironhack.com/en",
      },
      period: "2022",
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
      image: "/images/course-udemy-1.jpeg",
      academy: {
        title: "Udemy",
        url: "https://www.udemy.com/",
      },
      author: {
        name: "Maximilian Schwarzmüller",
        url: "https://www.udemy.com/user/maximilian-schwarzmuller",
      },
      period: "2022",
    },
    {
      title: "Aprende Javascript ES9, HTML, CSS3 y NodeJS",
      url: "https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero",
      image: "/images/course-udemy-2.jpeg",
      academy: {
        title: "Udemy",
        url: "https://www.udemy.com/",
      },
      author: {
        name: "Nicolas Schurmann",
        url: "https://www.udemy.com/user/nicolas-schurmann",
      },
      period: "2021 - 2022",
    },
  ];
  const printPage = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    window.print();
  };
  return (
    <div className="a-underline xl:w-8/12 flex mx-auto p-8 print:p-10 print:h-full print:xl:w-full">
      <NextSeo
        title="Katherine Moreno | CV"
        description={props.seoList[0].description}
        canonical="https://www.katherinemoreno.com/cv"
        openGraph={{
          locale: "es_ES",
          url: "https://www.katherinemoreno.com/cv",
          title: props.seoList[0].title,
          description: props.seoList[0].description,
          images: [
            {
              url: props.seoList[0].image,
              width: 800,
              height: 800,
              alt: "Katherine Moreno",
              type: "image/webp",
            },
          ],
          site_name: "Katherine Moreno",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <main className="relative grid print:grid-cols-7 md:grid-cols-7 rounded-xl border overflow-hidden">
        <div className="print:hidden grid justify-center items-center absolute h-32 w-32 top-0 right-0">
          <div
            role="button"
            onClick={printPage}
            className="text-gray-600 animate-bounce cursor-pointer"
            aria-label="Download"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="h-12 w-12"
            >
              <path
                fill="currentcolor"
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
              />
            </svg>
          </div>
        </div>
        <Head>
          <link rel="icon" href={props.seoList[0].ico} />
        </Head>
        <aside className="shadow-md col-span-1 print:col-span-3 md:col-span-3 bg-slate-50 h-full flex flex-col items-center p-8 gap-2">
          <div className="mb-4 flex-shrink-0 min-w-48 min-h-48 w-48 h-48 grid items-center">
            <Image
              src="/uploads/katherine-moreno.webp"
              alt="Katherine Moreno"
            />
          </div>
          <ol className="flex flex-col gap-8">
            <li>
              <section>
                <h1 className="text-xl mb-2">Profile</h1>
                <p className="text-justify">
                Full stack web developer. I want to join a work team that allows me to grow professionally! I am currently looking for a company that can add value with all knowledge I have acquired to enhance the company&#39;s performance.
                </p>
              </section>
            </li>
            <li>
              <section>
                <h1 className="text-xl mb-4">Contact</h1>
                <ol className="flex flex-col gap-4">
                  {socialList.map((social) => {
                    return (
                      <li key={social.index}>
                        <a
                          className="flex gap-2 items-center"
                          target="_blank"
                          rel="noreferrer"
                          href={social.url}
                        >
                          <span>
                            <TechImage
                              className="h-5 w-5"
                              src={social.image}
                              alt={social.title}
                            />
                          </span>
                          <span className="text-sm">{social.finalUrl}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </section>
            </li>
            <li>
              <section>
                <h1 className="text-xl mb-2">Languages</h1>
                <ul className="">
                  <li className="mb-2">Spanish (Native)</li>
                  <li>English (Medium)</li>
                </ul>
              </section>
            </li>
            <li>
              <section>
                <h1 className="text-xl mb-2">Location</h1>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://goo.gl/maps/LjH478fYoGnx957n9"
                    >
                      Barcelona, Spain
                    </a>
                  </li>
                </ul>
              </section>
            </li>
          </ol>
        </aside>
        <div className="col-span-1 print:col-span-4 md:col-span-4 bg-gray-100 h-full p-8">
          <ol className="flex flex-col gap-8">
            <li>
              <section>
                <h1 className="text-6xl">
                  <span className="">Katherine</span>
                  <span className="block">Moreno Sierra</span>
                </h1>
              </section>
            </li>
            <li>
              <section>
                <h1 className="text-2xl mb-8">Skills</h1>
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <h2 className="text-2xl mb-2">Soft</h2>
                    <ol className="flex flex-col gap-2">
                      {props.technologies
                        .filter((tech) => tech.isSoft)
                        .map((tech) => {
                          return <li key={tech.index}>{tech.title}</li>;
                        })}
                    </ol>
                  </div>

                  <div className="col-span-1">
                    <h2 className="text-2xl mb-2">Hard</h2>
                    <ol className="flex flex-col gap-2">
                      {props.technologies
                        .filter((tech) => !tech.isSoft)
                        .map((tech) => {
                          return <li key={tech.index}>{tech.title}</li>;
                        })}
                    </ol>
                  </div>
                </div>
              </section>
            </li>

            <li>
              <section>
                <h1 className="text-2xl mb-8">Education</h1>
                <ul className="flex flex-col gap-4">
                  {academyList.map((academy) => {
                    return (
                      <li key={academy.url}>
                        <AcademyCard data={academy} />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </li>
            <li>
              <section>
                <h1 className="text-2xl mb-8">Personal Proyects</h1>
                <ul>
                  <li>
                    <b className="font-bold">Web:</b>{" "}
                    <Link href="/">
                      <a className="print:hidden">
                        <span>www.katherinemoreno.com</span>
                      </a>
                    </Link>
                    <a
                      className="hidden print:inline"
                      href="https://www.katherinemoreno.com/"
                    >
                      <span>www.katherinemoreno.com</span>
                    </a>
                  </li>
                </ul>
              </section>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const filesInTechnologies = fs.readdirSync("./content/technologies");
  const filesInSocial = fs.readdirSync("./content/social");
  const filesInSeo = fs.readdirSync("./content/seo");

  const techSeoList = filesInSeo.map((filename) => {
    const file = fs.readFileSync(`./content/seo/${filename}`, "utf8");
    const matterData = matter(file);
    const data = {
      title: matterData.data.title,
      description: matterData.data.description,
      ico: matterData.data.ico,
      image: matterData.data.image,
      jsonLd: JSON.parse(matterData.data.jsonLd),
    };
    return data;
  });

  const techSocialList = filesInSocial
    .map((filename) => {
      const file = fs.readFileSync(`./content/social/${filename}`, "utf8");
      const matterData = matter(file);
      const data = {
        title: matterData.data.title,
        url: matterData.data.url,
        baseUrl: matterData.data.baseUrl,
        finalUrl: matterData.data.finalUrl,
        index: matterData.data.index,
        image: matterData.data.image,
      };
      return data;
    })
    .sort((a, b) => a.index - b.index);

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
        isSoft: matterData.data.isSoft,
      };
      return data;
    })
    .sort((a, b) => b.rating - a.rating);

  const homeProps: Partial<HomeProps> = {
    technologies: technologies,
    socialList: techSocialList,
    seoList: techSeoList,
  };

  return {
    props: homeProps,
  };
}

export default CV;
