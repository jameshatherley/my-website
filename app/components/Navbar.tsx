import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&display=swap');
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .nav-link:hover {
          opacity: 1;
        }
      `}</style>
      <nav style={{
        background: "#1a2e1a",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
      }}>
        <span style={{ color: "#7ab87a", fontSize: "15px", fontWeight: 500, letterSpacing: "0.04em" }}>
          James Hatherley
        </span>
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "2.5rem",
        }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </>
  );
}