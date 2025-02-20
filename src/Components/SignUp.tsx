import { useEffect } from "react";
import "./SignUp.css";

function SignUp() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#a1fe8b"; // Neon green text
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="signup-container">
      <h2 className="text-center mb-4 ">Sign Up</h2>
      <form className="signup-form">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-neon">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
