import Background from "./Background";

export default function Header() {
  return (
    <header>
      <Background />
      <h1 className="first-heading">
        WORD <span className="first-heading--thin">ANALYTICS</span>
      </h1>
    </header>
  );
}
