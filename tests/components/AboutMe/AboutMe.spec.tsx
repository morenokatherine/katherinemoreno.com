import { AboutMeI } from "../../../pages/index";
import { AboutMe } from "../../../components/AboutMe/AboutMe";
import { render, screen } from "@testing-library/react";

describe("Component: AboutMe", () => {
  const aboutMeData: AboutMeI = {
    image: "image",
    language: "",
    title: "title",
    content: "content",
  };
  it("should render a title", () => {
    render(<AboutMe data={aboutMeData} />);
    screen.getByText(aboutMeData.title);
  });
  it("should render a content", () => {
    render(<AboutMe data={aboutMeData} />);
    screen.getByText(aboutMeData.content);
  });
  it("should render an image", () => {
    render(<AboutMe data={aboutMeData} />);
    screen.getByAltText("Katherine Moreno");
  });
});
