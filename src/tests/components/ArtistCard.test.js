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

  it("Should have a country", () => {
    const artist = generateArtist();

    render(<ArtistCard {...artist} country={artist.country} />);

    const country = screen.getByText(artist.country);
    expect(country).toBeInTheDocument();
  });

  it("Should have a disambiguation", () => {
    const artist = generateArtist();
    render(<ArtistCard {...artist} disambiguation={artist.disambiguation} />);

    const disambiguation = screen.getByText(artist.disambiguation);
    expect(disambiguation).toBeInTheDocument();
  });
});
