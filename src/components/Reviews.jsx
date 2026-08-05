const BREAKDOWN = [
  { star: 5, pct: 82 },
  { star: 4, pct: 11 },
  { star: 3, pct: 4 },
  { star: 2, pct: 2 },
  { star: 1, pct: 1 },
];

const TESTIMONIALS = [
  {
    name: "Gina",
    meta: "Local Guide · 58 reviews",
    time: "4 months ago",
    quote:
      "A cute little coffee shop tucked into a small plaza, with easy parking out front and around back.",
  },
  {
    name: "Millena P.",
    meta: "Local Guide · 339 reviews",
    time: "2 months ago",
    quote:
      "Another solid stop on a cafe-hopping day — small lot, but an open spot is usually easy to find.",
  },
  {
    name: "Yurina Kim",
    meta: "2 reviews",
    time: "7 months ago",
    quote:
      "A cozy, welcoming spot with friendly staff and a matcha that's smooth from the very first sip.",
  },
];

function Stars({ count = 5 }) {
  return (
    <span className="reviews__stars" aria-hidden="true">
      {"★".repeat(count)}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">From the neighborhood</span>
          <h2 className="section-title">What regulars are saying</h2>
        </div>

        <div className="reviews__layout">
          <div className="reviews__summary">
            <div className="reviews__score">
              <strong>4.6</strong>
              <div>
                <Stars />
                <span>48 reviews</span>
              </div>
            </div>

            <div className="reviews__bars">
              {BREAKDOWN.map((b) => (
                <div className="reviews__bar-row" key={b.star}>
                  <span>{b.star}</span>
                  <div className="reviews__bar-track">
                    <div
                      className="reviews__bar"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews__grid">
            {TESTIMONIALS.map((t) => (
              <figure className="reviews__card" key={t.name}>
                <Stars />
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="reviews__avatar">{t.name.charAt(0)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.meta}</span>
                  </div>
                  <time>{t.time}</time>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
