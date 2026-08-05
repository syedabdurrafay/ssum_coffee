import SsumMark from "./SsumMark.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Anaheim, CA · open now, closes 5 PM</span>
          <h1 className="hero__title">
            Where flavor
            <br />
            starts to <span className="hero__title-accent">ssum.</span>
          </h1>
          <p className="hero__sub">
            A pocket-sized coffee shop tucked into a Lincoln Ave plaza, pouring
            Korean-inspired lattes, hand-whisked matcha and pastries built for
            slow mornings. Come sit a while — the good stuff takes a minute.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn-primary"
              href="https://ssumcoffee.square.site"
              target="_blank"
              rel="noreferrer"
            >
              Order ahead
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.google.com/maps/dir/?api=1&destination=1841+W+Lincoln+Ave+Ste+A,+Anaheim,+CA+92801"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__rating">
              <span className="hero__stars" aria-hidden="true">★★★★★</span>
              <strong>4.6</strong>
              <span>· 48 reviews</span>
            </div>
            <div className="hero__meta-divider" />
            <span>1841 W Lincoln Ave Ste A · $1–10 per person</span>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <SsumMark size={340} animated className="hero__blob" />

          <div className="hero__sticky">
            <span>Lotus Cream Latte</span>
          </div>

          <svg
            className="hero__cup"
            viewBox="0 0 240 260"
            width="260"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="120" cy="238" rx="70" ry="10" fill="rgba(42,32,25,0.12)" />
            <path
              d="M46 96h148l-14 118a20 20 0 0 1-20 18H80a20 20 0 0 1-20-18L46 96Z"
              fill="#FFFBF5"
              stroke="#2A2019"
              strokeWidth="4"
            />
            <path
              d="M52 108h136"
              stroke="#2A2019"
              strokeOpacity="0.15"
              strokeWidth="3"
            />
            <path
              d="M188 112c22-4 40 10 40 30s-18 34-42 30"
              fill="none"
              stroke="#2A2019"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M50 96c4-30 22-48 70-48s66 18 70 48"
              fill="#5C6E45"
              stroke="#2A2019"
              strokeWidth="4"
            />
            <path
              d="M64 96c6-20 20-30 56-30s50 10 56 30"
              fill="none"
              stroke="#F1E4D2"
              strokeWidth="3"
              strokeDasharray="1 9"
              strokeLinecap="round"
            />
            <g className="hero__steam">
              <path d="M96 44c-10-14 10-18 0-34" fill="none" stroke="#2A2019" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
              <path d="M124 44c-10-14 10-18 0-34" fill="none" stroke="#2A2019" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
              <path d="M152 44c-10-14 10-18 0-34" fill="none" stroke="#2A2019" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
