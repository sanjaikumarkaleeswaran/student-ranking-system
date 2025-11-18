import { Link, Outlet, useLocation } from "react-router-dom";

export default function SidebarLayout() {
  const location = useLocation();
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181a20" }}>
      {/* Sidebar */}
      <aside style={{
        width: 210, background: "#23223b", padding: "28px 0", display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <h2 style={{ color: "#38b6ff", marginBottom: 32 }}>Student App</h2>
        <Link to="/" style={navStyle(location.pathname === "/")}>🏠 Dashboard</Link>
        <Link to="/add-student" style={navStyle(location.pathname === "/add-student")}>➕ Add Student</Link>
        <Link to="/add-subjects" style={navStyle(location.pathname === "/add-subjects")}>📚 Add Subjects</Link>
      </aside>
      {/* Main */}
      <main style={{ flex: 1, padding: "32px 48px", background: "#23272f" }}>
        <Outlet />
      </main>
    </div>
  );
}

function navStyle(active) {
  return {
    color: "#fff",
    background: active ? "#5151e5" : "transparent",
    borderRadius: 6,
    padding: "12px 32px",
    marginBottom: 14,
    marginLeft: 10,
    marginRight: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 17,
    width: '90%',
    textAlign: "center",
    transition: "0.2s"
  };
}
