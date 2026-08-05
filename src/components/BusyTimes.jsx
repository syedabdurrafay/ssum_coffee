const HOURS = [
  { label: "6a", value: 10 },
  { label: "7a", value: 22 },
  { label: "8a", value: 38 },
  { label: "9a", value: 55 },
  { label: "10a", value: 70 },
  { label: "11a", value: 82 },
  { label: "12p", value: 90 },
  { label: "1p", value: 78 },
  { label: "2p", value: 60 },
  { label: "3p", value: 48 },
  { label: "4p", value: 30 },
  { label: "5p", value: 14 },
];

export default function BusyTimes() {
  return (
    <section className="busy">
      <div className="wrap busy__inner">
        <div className="busy__copy">
          <span className="eyebrow">Right now</span>
          <h2 className="section-title">Not too busy</h2>
          <p>
            A rough shape of a typical Wednesday, so you know when to expect
            a quiet corner versus a short line. Mornings fill up first.
          </p>
          <span className="pill busy__live">
            <span className="busy__dot" /> Live · not too busy
          </span>
        </div>

        <div className="busy__chart" role="img" aria-label="Typical Wednesday traffic, busiest around noon">
          {HOURS.map((h) => (
            <div className="busy__col" key={h.label}>
              <div className="busy__bar-track">
                <div
                  className="busy__bar"
                  style={{ height: `${h.value}%` }}
                />
              </div>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
