import { Factory } from "fishery";
import { name, address, datatype, lorem } from "faker";

const factory = Factory.define(() => ({
  id: datatype.uuid(),
  name: name.firstName(),
  country: address.countryCode(),
  disambiguation: lorem.words(),
  tags: Array(randQuantity(0, 10))
    .fill()
    .map(() => ({
      count: randQuantity(1, 20),
      name: lorem.word(),
    })),
}));

export const generateArtist = (params) => {
  return factory.build(params);
};

export function generateArtistList(min = 0, max = 10) {
  const length = randQuantity(min, max);
  return factory.buildList(length);
}

const randQuantity = (min = 0, max = 10) =>
  parseInt(Math.random() * (max - min) + min);
