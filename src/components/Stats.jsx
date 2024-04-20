import StatItem from "./StatItem";

import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants/constants";

export default function Stats({ text = "" }) {
  const words = text.split(" ").filter((word) => word !== "").length;
  const characters = text.length;
  const instagram = INSTAGRAM_MAX_CHARACTERS - characters;
  const facebook = FACEBOOK_MAX_CHARACTERS - characters;

  return (
    <section className="stats">
      <StatItem item="words" value={words} />
      <StatItem item="characters" value={characters} />
      <StatItem item="instagram" value={instagram} />
      <StatItem item="facebook" value={facebook} />
    </section>
  );
}
