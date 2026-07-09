import Image from "next/image";

type Props = {
  /** show wordmark next to mark */
  withWordmark?: boolean;
  /** size of the icon in px */
  size?: number;
  className?: string;
  wordmarkClassName?: string;
  /** app icon (filled) vs line mark */
  variant?: "app" | "mark";
};

export function BrandLogo({
  withWordmark = true,
  size = 32,
  className = "",
  wordmarkClassName = "",
  variant = "app",
}: Props) {
  const src =
    variant === "mark" ? "/images/logo-mark.png" : "/images/app-icon.png";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative shrink-0 overflow-hidden rounded-[22%] shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt="Chevron"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>

      {withWordmark && (
        <span className={`brand-wordmark text-white ${wordmarkClassName}`}>
          Chev<span className="text-primary">ron</span>
        </span>
      )}
    </span>
  );
}
