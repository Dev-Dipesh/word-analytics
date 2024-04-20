export default function StatItem({ item, value }) {
  return (
    <div className="stat">
      <span
        className={`stat__number ${value < 0 ? "stat__number--limit" : ""}`}
      >
        {value}
      </span>
      <span className="second-heading">{item.toUpperCase()}</span>
    </div>
  );
}
