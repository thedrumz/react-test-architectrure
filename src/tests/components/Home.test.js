import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { generateArtistList } from "../factories/artist";
import { getAllArtists } from "../../services/artistsRepository";
import Home from "../../components/Home/Home";

jest.mock("../../services/artistsRepository");

describe("Artist component", () => {
  test("renders hello world heading", async () => {
    const artist = generateArtistList();
    getAllArtists.mockResolvedValue([...artist]);

    render(<Home />);

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: artist.name });
      expect(heading).toBeInTheDocument();
    });
  });
});
