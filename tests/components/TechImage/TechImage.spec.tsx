import { AboutMeI } from "../../../pages/index";
import { TechImage } from "../../../components/TechImage/TechImage";
import { render, screen } from "@testing-library/react";
import { TechImageProps } from "../../../components/TechImage/TechImage.interface";

describe("Component: TechImage", () => {
  const imageData: TechImageProps = {
    src: "/test",
    alt: "test",
  };
  it("should render an image", () => {
    render(<TechImage src={imageData.src} alt={imageData.alt} />);
    screen.getByAltText(imageData.alt);
  });
});
