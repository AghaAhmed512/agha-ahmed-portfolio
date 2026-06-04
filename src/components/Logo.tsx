export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="512" height="512" rx="112" fill="#0a0f14" />
      <rect
        x="40"
        y="40"
        width="432"
        height="432"
        rx="88"
        stroke="#34d399"
        strokeWidth="28"
      />
      <text
        x="256"
        y="310"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="200"
        fontWeight="700"
        fill="#34d399"
        textAnchor="middle"
      >
        AM
      </text>
    </svg>
  );
}
