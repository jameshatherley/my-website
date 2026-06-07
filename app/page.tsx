import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: "Space Grotesk, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap');
        .btn-linkedin {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          border: 1px solid #fff;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .btn-linkedin:hover { background: #fff; color: #000; }
        .btn-cv {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          background: #fff;
          color: #000;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .btn-cv:hover { opacity: 0.8; }
        .highlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 3rem;
          max-width: 480px;
        }
        .highlight-item {
          border: 1px solid #222;
          padding: 1.25rem;
        }
        .highlight-label {
          color: #888;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }
        .highlight-value {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>

      <Navbar />

      <main style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 2rem",
      }}>
        <p style={{ color: "#888", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Welcome
        </p>
        <h1 style={{ color: "#fff", fontSize: "3.5rem", fontWeight: 500, lineHeight: 1.1, marginBottom: "1rem" }}>
          James<br />Hatherley
        </h1>
        <p style={{ color: "#888", fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2rem" }}>
          BSc Banking & Finance | Cardiff University
        </p>
        <p style={{ color: "#ccc", fontSize: "16px", lineHeight: 1.8, maxWidth: "480px", marginBottom: "2.5rem" }}>
          Ambitious finance student with experience in wealth management and a passion for markets.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://www.linkedin.com/in/james-hatherley-7493aa2ba/" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
            LinkedIn
          </a>
          <Link href="/cv" className="btn-cv">
            View My CV
          </Link>
        </div>

        <div className="highlight-grid">
          <div className="highlight-item">
            <p className="highlight-label">Education</p>
            <p className="highlight-value">Cardiff University</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Experience</p>
            <p className="highlight-value">St. James's Place</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Degree</p>
            <p className="highlight-value">BSc Banking & Finance</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Award</p>
            <p className="highlight-value">Academic Scholarship</p>
          </div>
        </div>
      </main>
    </div>
  );
}