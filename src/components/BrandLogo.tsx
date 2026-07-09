import Image from "next/image";

type Props = {
  /** show wordmark next to mark */
  withWordmark?: boolean;
  /** size of the icon in px */
  size?: number;
  className?: string;
  wordmarkClassName?: string;
  /** use filled app icon (rounded) vs line mark */
  variant?: "app" | "mark";
};

export function BrandLogo({
  withWordmark = true,
  size = 32,
  className = "",
  wordmarkClassName = "",
  variant = "app",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {variant === "app" ? (
        <span
          className="relative shrink-0 overflow-hidden rounded-[22%]"
          style={{ width: size, height: size }}
        >
          <Image
            src="/images/app-icon.png"
            alt="Chevron"
            fill
            sizes={`${size}px`}
            className="object-cover"
            priority
          />
        </span>
      ) : (
        <span
          className="inline-flex shrink-0 items-center justify-center text-primary"
          style={{ width: size, height: size }}
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-mark.svg"
            alt=""
            width={size}
            height={size}
            className="h-full w-full"
          />
        </span>
      )}

      {withWordmark && (
        <span className={`brand-wordmark text-white ${wordmarkClassName}`}>
          Chev<span className="text-primary">ron</span>
        </span>
      )}
    </span>
  );
}
