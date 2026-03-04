"use client";

import { useEffect, useRef } from "react";
import CometCard from "./CometCard";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="about-section">
      <div className="about-inner">
        <div className="about-portrait">
          <CometCard />
          <svg className="about-wave" viewBox="0 0 200 24" fill="none">
            <path
              d="M0 12 Q25 2 50 12 Q75 22 100 12 Q125 2 150 12 Q175 22 200 12"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="about-content">
          <span className="about-label">A bit about me</span>
          <p className="about-bio">
            Hi, I&apos;m <strong>Max Zhang</strong> — a Computer Science student at{" "}
            <strong>UC Irvine</strong>. I&apos;m passionate about building software
            that sits at the intersection of thoughtful design and clean engineering.
            I enjoy working on problems that are both technically interesting and
            meaningful to the people using them.
          </p>
          <p className="about-cta">
            Want to connect?{" "}
            <a href="mailto:maxzhang@uci.edu" className="about-link">
              Drop me a line.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
