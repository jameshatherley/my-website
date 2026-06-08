import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", fontFamily: "Space Grotesk, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap');
        .btn-linkedin {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          border: 1px solid #4a8a4a;
          color: #7ab87a;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .btn-linkedin:hover { background: #4a8a4a; color: #fff; }
        .btn-cv {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          background: #4a8a4a;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .btn-cv:hover { opacity: 0.8; }
        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 3rem;
          max-width: 500px;
        }
        .highlight-item {
          border: 1px solid #1a2e1a;
          padding: 1.25rem;
          background: #161616;
        }
        .highlight-label {
          color: #4a8a4a;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
      }}>

        {/* Left Side - Text */}
        <div style={{ flex: 1 }}>
          <p style={{ color: "#4a8a4a", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Welcome
          </p>
          <h1 style={{ color: "#fff", fontSize: "3.5rem", fontWeight: 500, lineHeight: 1.1, marginBottom: "1rem" }}>
            James<br />Hatherley
          </h1>
          <p style={{ color: "#4a8a4a", fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2rem" }}>
            BSc Banking & Finance | Cardiff University
          </p>
          <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.8, maxWidth: "480px", marginBottom: "2.5rem" }}>
            Ambitious finance student with experience in wealth management and a passion for markets.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="https://www.linkedin.com/in/james-hatherley-7493aa2ba/" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
              LinkedIn
            </a>
            <a href="/James_Hatherley_CV.pdf" download className="btn-cv">
              Download CV
            </a>
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
              <p className="highlight-label">Scholarship</p>
              <p className="highlight-value">Academic Award</p>
            </div>
          </div>
        </div>

        {/* Right Side - Photos */}
        <div style={{
          flexShrink: 0,
          width: "420px",
          position: "relative",
        }}>

          {/* Main landscape photo */}
          <div style={{
            width: "100%",
            height: "520px",
            position: "relative",
            overflow: "hidden",
          }}>
            <Image
              src="/view.jpg"
              alt="View"
              fill
              sizes="420px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>

          {/* Overlapping portrait - bottom left corner */}
          <div style={{
            position: "absolute",
            bottom: "70px",
            left: "-24px",
            width: "150px",
            height: "180px",
            border: "3px solid #1a2e1a",
            outline: "1px solid #4a8a4a",
            overflow: "hidden",
            zIndex: 10,
            background: "#111",
          }}>
            <Image
              src="/profile.jpg"
              alt="James Hatherley"
              fill
              sizes="150px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Coding credit below photos */}
          <p style={{
            marginTop: "1rem",
            paddingTop: "1rem",
            paddingLeft: "135px",
            color: "#4a8a4a",
            fontSize: "11px",
            letterSpacing: "0.1em",
            lineHeight: 1.8,
            borderTop: "1px solid #1a2e1a",
          }}>
            This website was designed and built by me using Next.js, TypeScript and Tailwind CSS — deployed via Vercel with a custom domain. No website builders were used.
          </p>

        </div>

      </main>
    </div>
  );
}