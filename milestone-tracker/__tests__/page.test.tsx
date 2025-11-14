import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the milestone tracker title", () => {
    render(<Home />);
    const title = screen.getByText("MileStone Tracker");
    expect(title).toBeInTheDocument();
  });

  it("has the correct styling classes", () => {
    render(<Home />);
    const title = screen.getByText("MileStone Tracker");
    expect(title).toHaveClass("font-bold", "underline");
  });
});
