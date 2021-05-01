import { render, screen } from "@testing-library/react";
import Home from "../components/Home/Home";

test("renders hello world heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { name: /hello world/i });
  expect(heading).toBeInTheDocument();
});
