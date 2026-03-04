import About from "./components/About";
import Projects from "./components/Projects";
import ShootingStars from "./components/ShootingStars";
import ScrollArrow from "./components/ScrollArrow";
import TypingAnimation from "./components/TypingAnimation";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-10 py-5 md:py-6 z-50">
        <span className="text-white text-sm tracking-widest uppercase opacity-60 select-none">
          MZ
        </span>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white text-sm tracking-wide opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="hero min-h-screen flex items-center justify-center px-6">
        <ShootingStars />
        <div className="relative z-10">
          <div className="carpet-roll overflow-hidden" style={{ fontFamily: "'Erode', serif", fontWeight: 600 }}>
            <p className="text-white text-5xl md:text-6xl leading-snug tracking-tight text-center">
              Max Zhang
            </p>
          </div>
          <p className="text-white text-2xl md:text-3xl leading-snug tracking-tight text-center"
            style={{ fontFamily: "'Recia', serif", fontWeight: 400 }}>
            <TypingAnimation text="Computer Science @ UC Irvine" delay={500} duration={45} />
          </p>
        </div>
      </main>

      <ScrollArrow />
      <About />
      <Projects />
    </>
  );
}
