import "@testing-library/jest-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { generateArtist } from "../factories/artist";
import render from "../tools/customRender";
import { searchArtistsByName } from "../../services/artistsRepository";
import Home from "../../routes/Home/Home";

import messages from "../../locales/en";

jest.mock("../../services/artistsRepository");

describe("Home component", () => {
  it("should return a list of artists when search by artist name", async () => {
    const artistName = "The Beatles";
    const artist = generateArtist({ name: artistName });
    searchArtistsByName.mockResolvedValue([artist]);

    render(<Home />);

    const button = screen.getByText(messages["search.button"]);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(artist.name)).toBeInTheDocument();
    });
  });

  it("shows a not found message when search has no results", async () => {
    searchArtistsByName.mockResolvedValue([]);

    render(<Home />);

    const button = screen.getByText(messages["search.button"]);
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByRole("status", messages["search.no-results"])
      ).toBeInTheDocument();
    });
  });
});
