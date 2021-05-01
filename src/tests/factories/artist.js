import { Factory } from "fishery";
import { name, music, datatype } from "faker";

const factory = Factory.define(() => ({
  id: datatype.uuid(),
  name: name.firstName(),
  gender: music.genre(),
}));

export const generateArtist = (params) => {
  return factory.build(params);
};

export function generateArtistList(min = 0, max = 10) {
  const length = Math.random() * (max - min) + min;
  return factory.buildList(length);
}
