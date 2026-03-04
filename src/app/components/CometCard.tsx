"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function CometCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * 22;
    const rotateY = (x - 0.5) * 22;
    const translateX = (x - 0.5) * 12;
    const translateY = (y - 0.5) * 12;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px) scale(1.04)`,
      transition: "transform 0.08s linear",
    });
    setGlarePos({ x: x * 100, y: y * 100, opacity: 0 });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translate(0,0) scale(1)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    });
    setGlarePos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className="comet-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/portrait.jpg"
        alt="Max Zhang"
        width={320}
        height={400}
        className="about-img"
      />
      <div
        className="comet-glare"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 65%)`,
          transition: glarePos.opacity === 0 ? "background 0.6s ease" : "background 0.08s linear",
        }}
      />
    </div>
  );
}
