interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const wordmark = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const leaf = variant === "light" ? "text-primary-foreground" : "text-primary";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className={`h-7 w-7 ${leaf}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 28C16 18 22 12 29 11C29 21 24 27 16 28Z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M16 28C16 16 9 9 3 9C3 21 8 28 16 28Z"
          fill="currentColor"
        />
        <path
          d="M16 28V14"
          stroke={variant === "light" ? "var(--primary)" : "var(--background)"}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className={`text-lg font-extrabold tracking-tight ${wordmark}`}>
        Mint<span className="font-medium"> CRM</span>
      </span>
    </span>
  );
}
