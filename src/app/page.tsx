const lines = [
  { text: "Max Zhang", font: "'Erode', serif", weight: 600, size: "text-5xl md:text-6xl" },
  { text: "Computer Science @ UC Irvine", font: "'Recia', serif", weight: 400, size: "text-2xl md:text-3xl" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center px-24 md:px-32">
      <div>
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
            <p className={`text-white ${line.size} leading-snug tracking-tight`}>
              {line.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
