function CupIcon({ liquid = "#5C6E45" }) {
  return (
    <svg viewBox="0 0 80 80" width="44" height="44" aria-hidden="true">
      <path
        d="M20 30h40l-5 34a10 10 0 0 1-10 8H35a10 10 0 0 1-10-8l-5-34Z"
        fill="#FFFBF5"
        stroke="#2A2019"
        strokeWidth="3"
      />
      <path d="M24 30h32l-2 12H26l-2-12Z" fill={liquid} />
      <path
        d="M58 33c9-2 15 4 15 11s-6 13-16 12"
        fill="none"
        stroke="#2A2019"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CookieIcon() {
  return (
    <svg viewBox="0 0 80 80" width="44" height="44" aria-hidden="true">
      <circle cx="40" cy="40" r="26" fill="#D9A15B" stroke="#2A2019" strokeWidth="3" />
      <circle cx="30" cy="32" r="3.5" fill="#3C2A18" />
      <circle cx="48" cy="30" r="3.5" fill="#3C2A18" />
      <circle cx="52" cy="46" r="3.5" fill="#3C2A18" />
      <circle cx="33" cy="50" r="3.5" fill="#3C2A18" />
      <circle cx="44" cy="42" r="3.5" fill="#3C2A18" />
    </svg>
  );
}

const ITEMS = [
  {
    icon: <CupIcon liquid="#E7CFA8" />,
    name: "Lotus Cream Latte",
    tag: "Popular",
    desc: "Speculoos-spiced espresso finished with a cloud of cream foam.",
  },
  {
    icon: <CupIcon liquid="#5C6E45" />,
    name: "Ssum Matcha",
    tag: "Popular",
    desc: "Hand-whisked ceremonial matcha, smooth with a gentle bitterness.",
  },
  {
    icon: <CupIcon liquid="#B98548" />,
    name: "Biscoff Butter Latte",
    tag: null,
    desc: "Biscoff butter and espresso, topped with foam and a cookie crumble.",
  },
  {
    icon: <CookieIcon />,
    name: "Dubai Chocolate Cookie",
    tag: null,
    desc: "A pistachio-kunafa take on the viral bar, crisp edges, soft center.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">On the counter</span>
          <h2 className="section-title">What people order twice</h2>
        </div>

        <div className="menu__grid">
          {ITEMS.map((item) => (
            <article className="menu__card" key={item.name}>
              {item.tag && <span className="menu__tag">{item.tag}</span>}
              <div className="menu__icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <a
          className="menu__more"
          href="https://ssumcoffee.square.site"
          target="_blank"
          rel="noreferrer"
        >
          See the full menu →
        </a>
      </div>
    </section>
  );
}
