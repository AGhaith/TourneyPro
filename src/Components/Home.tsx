import { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#a1fe8b";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="home-container">
      <div className="text-content">
        <h1 className="bold-text">Welcome to TourneyPro</h1>
        <p className="default-text justified-text text-secondary">
          TourneyPro is your premier dynamic sports event organizer,
          specializing in thrilling tournaments. Dive into the world of exciting
          sports events designed to captivate and engage athletes and fans
          alike.
        </p>
      </div>
      <img
        src="../Images/CRISTIANO.jpg"
        alt="cristiano png"
        className="right-image"
      />
    </div>
  );
}

export default Home;
