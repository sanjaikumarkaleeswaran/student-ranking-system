// import { useState } from 'react';

// function SortControls({ onSort, onLoadSample, sortInfo }) {
//   const [algorithm, setAlgorithm] = useState('merge');
//   const algoInfo = {
//     merge: { name: 'Merge Sort', complexity: 'O(n log n)' },
//     quick: { name: 'Quick Sort', complexity: 'O(n log n) avg' },
//     bubble: { name: 'Bubble Sort', complexity: 'O(n²)' },
//     insertion: { name: 'Insertion Sort', complexity: 'O(n²)' }
//   };

//   return (
//     <div className="card">
//       <h2>📊 Sort Students</h2>
//       <div className="form-group">
//         <label>Algorithm</label>
//         <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
//           <option value="merge">Merge Sort (Best)</option>
//           <option value="quick">Quick Sort (Fast avg)</option>
//           <option value="bubble">Bubble Sort (Simple)</option>
//           <option value="insertion">Insertion Sort (Small)</option>
//         </select>
//       </div>
//       <div className="btn-group">
//         <button onClick={() => onSort(algorithm, 'score')} className="btn btn-primary">By Score</button>
//         <button onClick={() => onSort(algorithm, 'name')} className="btn btn-secondary">By Name</button>
//         <button onClick={onLoadSample} className="btn btn-secondary">Load Sample</button>
//       </div>
//       {sortInfo && (
//         <div className="algorithm-info" style={{ marginTop: '12px' }}>
//           <strong>{algoInfo[sortInfo.algorithm].name}</strong> in {sortInfo.timeTaken}ms<br />
//           Comparisons: {sortInfo.comparisons} | {algoInfo[sortInfo.algorithm].complexity}<br />
//           Sorted {sortInfo.count} student(s) by {sortInfo.sortBy}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SortControls;
import { useState } from 'react';

// THIS UI IS EXACTLY LIKE YOUR STUDENT CARD (dark, rounded, shadow)
function SortControls({ onSort, onLoadSample, sortInfo }) {
  const [algorithm, setAlgorithm] = useState('merge');
  const algoInfo = {
    merge: { name: 'Merge Sort', complexity: 'O(n log n)' },
    quick: { name: 'Quick Sort', complexity: 'O(n log n) avg' },
    bubble: { name: 'Bubble Sort', complexity: 'O(n²)' },
    insertion: { name: 'Insertion Sort', complexity: 'O(n²)' }
  };

  return (
    <div
      style={{
        background: "#262828",
        borderRadius: 14,
        boxShadow: "0 3px 18px 0 rgba(29, 103, 214, 0.18)",
        padding: "24px 30px",
        color: "#fff",
        minWidth: 320,
        marginBottom: 22
      }}
    >
      <h2 style={{
        fontWeight: 700,
        marginBottom: 18,
        color: "var(--primary, #f3f7faff)",
        fontSize: "1.35rem"
      }}>📊 Sort Students</h2>

      <div style={{ marginBottom: 14 }}>
        <label style={{ fontWeight: 600, letterSpacing: 0.6, marginRight: 12 }}>Algorithm</label>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          style={{
            background: "#262828",
            color: "#fff",
            padding: "7px 14px",
            border: "1px solid #3a3a3cff",
            borderRadius: 6,
            fontSize: 15
          }}>
          <option value="merge">Merge Sort (Best)</option>
          <option value="quick">Quick Sort (Fast avg)</option>
          <option value="bubble">Bubble Sort (Simple)</option>
          <option value="insertion">Insertion Sort (Small)</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 3, marginBottom: 10 }}>
        <button
          onClick={() => onSort(algorithm, 'score')}
          style={btnStylePrimary}
        >By Score</button>
        <button
          onClick={() => onSort(algorithm, 'name')}
          style={btnStyleSecondary}
        >By Name</button>
        <button
          onClick={onLoadSample}
          style={btnStyleSecondary}
        >Load Sample</button>
      </div>

      {sortInfo && (
        <div style={{ marginTop: '12px', fontSize: 13, color: "#aaa" }}>
          <strong style={{ color: "#31B8C6" }}>{algoInfo[sortInfo.algorithm].name}</strong> in {sortInfo.timeTaken}ms<br />
          Comparisons: {sortInfo.comparisons} | {algoInfo[sortInfo.algorithm].complexity}<br />
          Sorted {sortInfo.count} student(s) by {sortInfo.sortBy}
        </div>
      )}
    </div>
  );
}

// MODERN BUTTON STYLES TO MATCH DASHBOARD
const btnStylePrimary = {
  background: "#13c1da",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  padding: "8px 15px",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer"
};
const btnStyleSecondary = {
  background: "#232b36",
  color: "#41b9fa",
  border: "1.5px solid #41b9fa",
  borderRadius: 5,
  padding: "8px 15px",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer"
};

export default SortControls;
