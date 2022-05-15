import { Image } from "../../../components/Image/Image";
import { render, screen } from "@testing-library/react";
import { ImageProps } from "../../../components/Image/Image.interface";

describe("Component: Image", () => {
  const imageData: ImageProps = {
    src: "/test",
    alt: "test",
  };
  it("should render an image", () => {
    render(<Image src={imageData.src} alt={imageData.alt} />);
    screen.getByAltText(imageData.alt);
  });
});
