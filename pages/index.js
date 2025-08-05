
export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", color: "#003366" }}>Adnan Hossain</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Biomedical Engineering Graduate | IoT Enthusiast | Healthcare Innovator
      </p>
      
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>About Me</h2>
        <p>
          I’m a Biomedical Engineering graduate from Netaji Subhash Engineering College (CGPA: 8.79/10),
          passionate about building data-driven, patient-centered healthcare technologies. My background includes
          medical imaging, biomedical instrumentation, embedded IoT systems, and smart wearable devices.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Final Year Projects</h2>
        <ul>
          <li><strong>Wireless Digital Stethoscope:</strong> Audio signal processing and FM transmission.</li>
          <li><strong>Biometric Attendance System:</strong> ESP32-based fingerprint tracking with local and cloud sync.</li>
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <a href="/BME%20PROJECT-Final%20Year_final.pdf" target="_blank" rel="noopener noreferrer">
            📄 View Project Report (PDF)
          </a>
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Research</h2>
        <p>
          Contributed to a paper in the 2024 Book of Abstracts focused on biomedical systems.
          <br />
          <a href="/paper.pdf" target="_blank" rel="noopener noreferrer">📄 View Research Abstract</a>
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Resume</h2>
        <p>
          <a href="/adnan_hossain_cv.pdf" target="_blank" rel="noopener noreferrer">📄 Download Resume</a>
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Contact</h2>
        <p>Email: <a href="mailto:adnan.jiaganj@gmail.com">adnan.jiaganj@gmail.com</a></p>
        <p>Phone: +91-7551870768</p>
        <p>Location: Murshidabad, West Bengal – 742123</p>
      </section>
    </main>
  );
}
