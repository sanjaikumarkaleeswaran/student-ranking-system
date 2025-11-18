import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 120 }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/" style={{ color: "#38b6ff" }}>Back to Dashboard</Link>
    </div>
  );
}
