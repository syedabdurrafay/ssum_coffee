export default function Visit() {
  const address = "1841 W Lincoln Ave Ste A, Anaheim, CA 92801, United States";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section id="visit" className="visit">
      <div className="wrap visit__inner">
        <div className="visit__copy">
          <span className="eyebrow">Come by</span>
          <h2 className="section-title">Find us on Lincoln Ave</h2>

          <dl className="visit__details">
            <div>
              <dt>Address</dt>
              <dd>{address}</dd>
            </div>
            <div>
              <dt>Today</dt>
              <dd>Open · closes 5 PM</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+17149817877">+1 714-981-7877</a>
              </dd>
            </div>
            <div>
              <dt>Order online</dt>
              <dd>
                <a href="https://ssumcoffee.square.site" target="_blank" rel="noreferrer">
                  ssumcoffee.square.site
                </a>
              </dd>
            </div>
          </dl>

          <div className="hero__cta visit__cta">
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/dir/?api=1&destination=1841+W+Lincoln+Ave+Ste+A,+Anaheim,+CA+92801"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
            <a className="btn btn-ghost" href="tel:+17149817877">
              Call the shop
            </a>
          </div>
        </div>

        <div className="visit__map">
          <iframe
            title="SSUM Coffee location map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
