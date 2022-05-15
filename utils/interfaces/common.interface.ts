export interface HomeProps {
  technologies: TechnologyI[];
  aboutMeList: AboutMeI[];
  summaryList: SummaryI[];
  seoList: SeoI[];
  socialList: SocialI[];
  techSectionList: TechSectionI[];
  footerList: FooterI[];
}

export interface TechnologyI {
  title: string;
  index: number;
  rating: number;
  image?: string;
  isSoft?: boolean;
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

export interface FooterI {
  title: string;
  description: string;
  quote: string;
}

export interface SeoI {
  title: string;
  description: string;
  ico: string;
  image: string;
  jsonLd: string;
}

export interface SocialI {
  title: string;
  url: string;
  baseUrl: string;
  finalUrl: string;
  index: number;
  image: string;
}

export interface TechSectionI {
  header: string;
  description: string;
  footer: string;
}
