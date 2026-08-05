const ITEMS = [
  "Lotus Cream Latte",
  "Ssum Matcha",
  "Biscoff Butter Latte",
  "Dubai Chocolate Cookie",
  "Sweet Corn Cream Top",
  "Espresso",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
