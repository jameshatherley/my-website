import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", fontFamily: "Space Grotesk, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap');
        .contact-card {
          border: 1px solid #1a2e1a;
          background: #161616;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: border-color 0.2s;
        }
        .contact-card:hover {
          border-color: #4a8a4a;
        }
        .contact-label {
          color: #4a8a4a;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .contact-value {
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
        }
        .contact-value:hover {
          color: #7ab87a;
        }
      `}</style>

      <Navbar />

      <main style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 2rem",
      }}>
        <p style={{ color: "#4a8a4a", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Get In Touch
        </p>

        <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 500, lineHeight: 1.1, marginBottom: "1rem" }}>
          Contact
        </h1>

        <p style={{ color: "#aaa", fontSize: "16px", lineHeight: 1.8, maxWidth: "480px", marginBottom: "4rem" }}>
          Feel free to reach out whether it's about work experience, opportunities, or just to connect.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "800px" }}>

          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a href="mailto:jameshatherley06@icloud.com" className="contact-value">
              jameshatherley06@icloud.com
            </a>
          </div>

          <div className="contact-card">
            <p className="contact-label">Phone</p>
            <a href="tel:+447562272774" className="contact-value">
              +44 7562 272774
            </a>
          </div>

          <div className="contact-card">
            <p className="contact-label">LinkedIn</p>
            <a href="https://www.linkedin.com/in/james-hatherley-7493aa2ba/" target="_blank" rel="noopener noreferrer" className="contact-value">
              James Hatherley
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}