import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#39FF14"; // Ensures text remains visible site-wide
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1 className="fw-bold mb-3" style={{ color: "#a1fe8b" }}>
        Our Mission
      </h1>
      <p className="fs-5 px-md-5 text-secondary">
        At{" "}
        <span className="fw-semibold" style={{ color: "#a1fe8b" }}>
          TourneyPro
        </span>
        , our mission is to transform sports event management by providing
        players, spectators, and organizers with seamless, engaging, and
        professional experiences.
      </p>

      <h1 className="fw-bold mt-5 mb-3" style={{ color: "#a1fe8b" }}>
        Our Vision
      </h1>
      <p className="fs-5 px-md-5 text-secondary">
        We aim to be the leading platform for organizing sporting events,
        fostering inclusivity, enthusiasm, and a spirit of competition
        nationwide—bringing athletes and viewers closer than ever.
      </p>
    </div>
  );
}

export default About;
