import { useState } from 'react';

function SortControls({ onSort, onLoadSample, sortInfo }) {
  const [algorithm, setAlgorithm] = useState('merge');
  const algoInfo = {
    merge: { name: 'Merge Sort', complexity: 'O(n log n)' },
    quick: { name: 'Quick Sort', complexity: 'O(n log n) avg' },
    bubble: { name: 'Bubble Sort', complexity: 'O(n²)' },
    insertion: { name: 'Insertion Sort', complexity: 'O(n²)' }
  };

  return (
    <div className="card">
      <h2>📊 Sort Students</h2>
      <div className="form-group">
        <label>Algorithm</label>
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="merge">Merge Sort (Best)</option>
          <option value="quick">Quick Sort (Fast avg)</option>
          <option value="bubble">Bubble Sort (Simple)</option>
          <option value="insertion">Insertion Sort (Small)</option>
        </select>
      </div>
      <div className="btn-group">
        <button onClick={() => onSort(algorithm, 'score')} className="btn btn-primary">By Score</button>
        <button onClick={() => onSort(algorithm, 'name')} className="btn btn-secondary">By Name</button>
        <button onClick={onLoadSample} className="btn btn-secondary">Load Sample</button>
      </div>
      {sortInfo && (
        <div className="algorithm-info" style={{ marginTop: '12px' }}>
          <strong>{algoInfo[sortInfo.algorithm].name}</strong> in {sortInfo.timeTaken}ms<br />
          Comparisons: {sortInfo.comparisons} | {algoInfo[sortInfo.algorithm].complexity}<br />
          Sorted {sortInfo.count} student(s) by {sortInfo.sortBy}
        </div>
      )}
    </div>
  );
}

export default SortControls;
