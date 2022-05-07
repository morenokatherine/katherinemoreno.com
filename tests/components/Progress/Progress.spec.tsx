import { Progress } from "../../../components/Progress/Progress";
import { render, screen } from "@testing-library/react";
import { ProgressProps } from "../../../components/Progress/Progress.interface";

describe("Component: Progress", () => {
  const progressData: ProgressProps = {
    value: 5,
    max: 10,
    min: 0,
  };
  it("should render the component", () => {
    render(
      <Progress
        value={progressData.value}
        max={progressData.max}
        min={progressData.min}
      />
    );
    screen.getByRole("progressbar");
  });
});
