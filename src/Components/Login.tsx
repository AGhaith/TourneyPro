import { useEffect } from "react";
import "./Login.css";

function Login() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#a1fe8b"; // Neon green text
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Login</h2>
      <form className="login-form">
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
