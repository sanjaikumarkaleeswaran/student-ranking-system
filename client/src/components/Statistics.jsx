// function Statistics({ stats }) {
//   return (
//     <div
//       className="stats"
//       style={{
//         display: "flex",
//         gap: "28px",
//         justifyContent: "space-between",
//         margin: "16px 0 30px 0",
//         flexWrap: "wrap",
//       }}
//     >
//       <div className="stat-card" style={statCardStyle}>
//         <div className="stat-value">{stats.total}</div>
//         <div className="stat-label">Total Students</div>
//       </div>
//       <div className="stat-card" style={statCardStyle}>
//         <div className="stat-value">{stats.average}</div>
//         <div className="stat-label">Average Score</div>
//       </div>
//       <div className="stat-card" style={statCardStyle}>
//         <div className="stat-value">{stats.highest}</div>
//         <div className="stat-label">Highest Score</div>
//       </div>
//       <div className="stat-card" style={statCardStyle}>
//         <div className="stat-value">{stats.lowest}</div>
//         <div className="stat-label">Lowest Score</div>
//       </div>
//     </div>
//   );
// }

// const statCardStyle = {
//   flex: "1 1 120px",
//   background: "#262828",
//   borderRadius: 15,
//   padding: "28px 0 20px 0",
//   color: "#32B8C6",
//   textAlign: "center",
//   minWidth: 135,
// };

// // MODERN BUTTON STYLES TO MATCH DASHBOARD
// const btnStylePrimary = {
//   background: "#46abbbff",
//   color: "#fff",
//   border: "none",
//   borderRadius: 5,
//   padding: "8px 15px",
//   fontWeight: 700,
//   fontSize: 16,
//   cursor: "pointer"
// };
// const btnStyleSecondary = {
//   background: "#232b36",
//   color: "#e4fa41ff",
//   border: "1.5px solid #2a5b75ff",
//   borderRadius: 5,
//   padding: "8px 15px",
//   fontWeight: 600,
//   fontSize: 15,
//   cursor: "pointer"
// };

// export default Statistics;
function Statistics({ stats }) {
  return (
    <div
      className="stats"
      style={{
        display: "flex",
        gap: "28px",
        justifyContent: "center",
        margin: "24px 0 32px 0",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <div className="stat-card" style={statCardStyle}>
        <div className="stat-value" style={statValueStyle}>{stats.total}</div>
        <div className="stat-label">Total Students</div>
      </div>
      <div className="stat-card" style={statCardStyle}>
        <div className="stat-value" style={statValueStyle}>{stats.average}</div>
        <div className="stat-label">Average Score</div>
      </div>
      <div className="stat-card" style={statCardStyle}>
        <div className="stat-value" style={statValueStyle}>{stats.highest}</div>
        <div className="stat-label">Highest Score</div>
      </div>
      <div className="stat-card" style={statCardStyle}>
        <div className="stat-value" style={statValueStyle}>{stats.lowest}</div>
        <div className="stat-label">Lowest Score</div>
      </div>
    </div>
  );
}

const statCardStyle = {
  flex: "1 1 160px",
  background: "#232b36",
  borderRadius: 15,
  padding: "28px 0 18px 0",
  color: "#43e0ed",
  textAlign: "center",
  minWidth: 140,
  boxShadow: "0 2px 12px 0 rgba(30,50,80,0.16)"
};
const statValueStyle = {
  fontWeight: 900,
  fontSize: "2.5rem",
  color: "#5ef3fa",
  marginBottom: 3,
  letterSpacing: 1
};

// Button styles for use elsewhere if needed
export const btnStylePrimary = {
  background: "#46abbb",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  padding: "8px 15px",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer"
};
export const btnStyleSecondary = {
  background: "#232b36",
  color: "#41b9fa",
  border: "1.5px solid #2a5b75",
  borderRadius: 5,
  padding: "8px 15px",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};

export default Statistics;
