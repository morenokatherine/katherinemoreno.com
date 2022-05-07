import { render, screen } from "@testing-library/react";
import { TechnologyI } from "../../../pages";
import { Tech } from "../../../components/Tech/Tech";

describe("Component: Tech", () => {
  const techData: TechnologyI = {
    image: "test",
    title: "typescript",
    index: 0,
    rating: 8,
  };
  it("should render a title", () => {
    render(<Tech data={techData} />);
    screen.getByText(techData.title);
  });
  it("should render a image", () => {
    render(<Tech data={techData} />);
    screen.getByAltText(techData.title);
  });
  it("should render a progressbar", () => {
    render(<Tech data={techData} />);
    screen.getByRole("progressbar");
  });
});
