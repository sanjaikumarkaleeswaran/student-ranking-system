function Statistics({ stats }) {
  return (
    <div className="stats">
      <div className="stat-card"><div className="stat-value">{stats.total}</div><div className="stat-label">Total Students</div></div>
      <div className="stat-card"><div className="stat-value">{stats.average}</div><div className="stat-label">Average Score</div></div>
      <div className="stat-card"><div className="stat-value">{stats.highest}</div><div className="stat-label">Highest Score</div></div>
      <div className="stat-card"><div className="stat-value">{stats.lowest}</div><div className="stat-label">Lowest Score</div></div>
    </div>
  );
}

export default Statistics;
