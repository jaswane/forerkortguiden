import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

/** Enkel vegmarkering-inspirert logo: en vei med midtstripe i en avrundet firkant. */
export function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label={`${SITE_NAME} – til forsiden`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="30" height="30" rx="7" fill="#17549e" />
        <path d="M12.2 25 17 5h3.6l-4.8 20h-3.6Z" fill="#ffffff" opacity="0.35" />
        <path
          d="M8 25 12.8 5h2.4L10.4 25H8Zm11.6-20h2.4L17.2 25h-2.4l4.8-20Z"
          fill="#ffffff"
          opacity="0"
        />
        <path d="M14.9 8.4h2.7l-.7 3h-2.7l.7-3Z" fill="#fff" />
        <path d="M13.5 14.2h2.7l-.7 3h-2.7l.7-3Z" fill="#fff" />
        <path d="M12.1 20h2.7l-.7 3h-2.7l.7-3Z" fill="#fff" />
      </svg>
      <span>{SITE_NAME}</span>
    </Link>
  );
}
