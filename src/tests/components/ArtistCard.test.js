import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import render from "../tools/customRender";
import { generateArtist } from "../factories/artist";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

describe("ArtistCard component", () => {
  it("Should have a name", () => {
    const artist = generateArtist();

    render(<ArtistCard {...artist} name={artist.name} />);

    const artistName = screen.getByRole("heading", { name: artist.name });
    expect(artistName).toBeInTheDocument();
  });

  it("Should have a gender", () => {
    const artist = generateArtist();

    render(<ArtistCard {...artist} gender={artist.gender} />);

    const gender = screen.getByText(artist.gender);
    expect(gender).toBeInTheDocument();
  });
});
