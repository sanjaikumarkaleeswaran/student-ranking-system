import { useState } from 'react';
import { studentService } from '../services/api';

function SearchStudent() {
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    if (!searchId.trim()) return alert('Enter student ID');
    try {
      setResult(await studentService.search(searchId));
    } catch (error) {
      alert('Search failed');
    }
  };

  return (
    <div className="card" style={{ marginBottom: '24px' }}>
      <h2>🔍 Binary Search</h2>
      <div className="form-group">
        <label>Student ID</label>
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Enter ID" onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
      </div>
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
      {result && (
        <div style={{ marginTop: '32px', padding: '32px', background: '#232B36', borderRadius: '8px', borderLeft: `8px solid ${result.found ? 'var(--color-primary)' : 'var(--color-red-400)'}` }}>
          {result.found ? (
            <>
              <h3>{result.student.name}</h3>
              <p><strong>ID:</strong> {result.student.studentId}</p>
              <p><strong>Score:</strong> {result.student.score} | <strong>Grade:</strong> {result.student.grade}</p>
              <p style={{ marginTop: '50px', fontSize: '50px', color: 'var(--color-text-secondary)' }}>Found in {result.comparisons} comparisons</p>
            </>
          ) : (
            <p>Not found ({result.comparisons} comparisons)</p>
          )}
        </div>
      )}
      <div className="algorithm-info">Binary Search - O(log n)</div>
    </div>
  );
}

export default SearchStudent;
