const FACTS = [
  { label: "Dine-in", detail: "A handful of seats to linger over" },
  { label: "Takeout", detail: "In and out with your order in minutes" },
  { label: "Delivery", detail: "Straight to your door" },
  { label: "Parking", detail: "Open lot out front and around back" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about__inner">
        <div className="about__art" aria-hidden="true">
          <div className="about__blob about__blob--1" />
          <div className="about__blob about__blob--2" />
          <div className="about__stat about__stat--1">
            <strong>4.6</strong>
            <span>average rating</span>
          </div>
          <div className="about__stat about__stat--2">
            <strong>48</strong>
            <span>neighborhood reviews</span>
          </div>
        </div>

        <div className="about__copy">
          <span className="eyebrow">The little shop</span>
          <h2 className="section-title">Cozy, unhurried, tucked in a Lincoln Ave plaza</h2>
          <p>
            SSUM Coffee is a small, warmly lit café folded into a quiet strip
            of Lincoln Avenue — the kind of place regulars find by accident
            and never stop coming back to. Expect friendly service, a short
            but thoughtful drink list, and treats worth planning your order
            around.
          </p>

          <ul className="about__facts">
            {FACTS.map((f) => (
              <li key={f.label}>
                <strong>{f.label}</strong>
                <span>{f.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
