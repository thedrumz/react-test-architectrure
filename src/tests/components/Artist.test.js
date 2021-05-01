import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { generateArtist } from "../factories/artist";
import Artist from "../../components/Artist/Artist";

describe("Artist component", () => {
  it("Should have a name", () => {
    const artist = generateArtist();

    render(<Artist {...artist} name={artist.name} />);

    const artistName = screen.getByRole("heading", { name: artist.name });
    expect(artistName).toBeInTheDocument();
  });

  it("Should have a gender", () => {
    const artist = generateArtist();

    render(<Artist {...artist} gender={artist.gender} />);

    const gender = screen.getByText(artist.gender);
    expect(gender).toBeInTheDocument();
  });
});
