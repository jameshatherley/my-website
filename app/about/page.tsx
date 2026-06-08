import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", fontFamily: "Space Grotesk, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap');
      `}</style>

      <Navbar />

      <main style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
      }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: "#4a8a4a", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            About Me
          </p>

          <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.1, marginBottom: "2rem" }}>
            James<br />Hatherley
          </h1>

          <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            I am a first-year Banking & Finance student at Cardiff University with a passion for financial markets, investment, and wealth management.
          </p>

          <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Prior to university I gained hands-on experience at St. James's Place, one of the UK's leading wealth management firms, where I developed a strong foundation in client relationships and financial planning.
          </p>

          <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.8 }}>
            Outside of finance I enjoy golf, fitness, and music. I am based in Dorset and currently studying in Cardiff.
          </p>
        </div>

        <div style={{ flexShrink: 0, width: "320px", height: "400px", position: "relative", overflow: "hidden" }}>
          <Image
            src="/profile.jpg"
            alt="James Hatherley"
            fill
            sizes="320px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>
      </main>
    </div>
  );
}