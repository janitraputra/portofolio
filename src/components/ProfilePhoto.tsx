"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePhoto({
  className = "",
  initials = "CA",
}: {
  className?: string;
  initials?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.25),transparent_55%)] ${className}`}
      >
        <span className="font-display text-5xl font-bold gradient-text">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Foto profil"
      fill
      sizes="(min-width: 1024px) 320px, 60vw"
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
      priority
    />
  );
}
