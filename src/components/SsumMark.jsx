export default function SsumMark({ size = 40, animated = false, className = "" }) {
  return (
    <svg
      className={`ssum-mark ${animated ? "ssum-mark--animated" : ""} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle className="ssum-mark__a" cx="38" cy="50" r="30" fill="var(--matcha)" />
      <circle className="ssum-mark__b" cx="62" cy="50" r="30" fill="var(--blush)" fillOpacity="0.88" />
    </svg>
  );
}
