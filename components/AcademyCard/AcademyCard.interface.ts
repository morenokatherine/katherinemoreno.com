export interface AcademyCardData {
  title: string;
  image: string;
  url: string;
  author: {
    name: string;
    url: string;
  };
  academy: {
    title: string;
    url: string;
    image?: string;
  };
  period: string;
}
export interface AcademyCardProps {
  data: AcademyCardData;
}
