import SsumMark from "./SsumMark.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <a href="#top" className="nav__brand footer__brand">
          <SsumMark size={26} />
          <span>
            SSUM <em>COFFEE</em>
          </span>
        </a>

        <nav className="footer__links" aria-label="Footer">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>

        <p className="footer__note">
          Fan-made concept design based on public listing info — not the
          official SSUM Coffee website.
        </p>
      </div>
    </footer>
  );
}
