import About from "./components/About";
import Projects from "./components/Projects";
import ShootingStars from "./components/ShootingStars";
import ScrollArrow from "./components/ScrollArrow";

const lines = [
  { text: "Max Zhang", font: "'Erode', serif", weight: 600, size: "text-5xl md:text-6xl" },
  { text: "Computer Science @ UC Irvine", font: "'Recia', serif", weight: 400, size: "text-2xl md:text-3xl" },
];

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
          {lines.map((line, i) => (
            <div
              key={i}
              className="carpet-roll overflow-hidden"
              style={{
                animationDelay: `${i * 110}ms`,
                fontFamily: line.font,
                fontWeight: line.weight,
              }}
            >
              <p className={`text-white ${line.size} leading-snug tracking-tight text-center`}>
                {line.text}
              </p>
            </div>
          ))}
        </div>
      </main>

      <ScrollArrow />
      <About />
      <Projects />
    </>
  );
}
