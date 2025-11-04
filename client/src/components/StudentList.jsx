// function StudentList({ students, loading, onDelete }) {
//   if (loading) return <div className="card"><h2>🏆 Rankings</h2><div className="no-data">Loading...</div></div>;
//   if (students.length === 0) return <div className="card"><h2>🏆 Rankings</h2><div className="no-data">No students yet</div></div>;

//   return (
//     <div className="card">
//       <h2>🏆 Student Rankings</h2>
//       <table className="student-table">
//         <thead>
//           <tr><th>Rank</th><th>ID</th><th>Name</th><th>Department</th><th>Score</th><th>Grade</th><th>Actions</th></tr>
//         </thead>
//         <tbody>
//           {students.map((s) => {
//             const rankClass = s.rank === 1 ? 'rank-1' : s.rank === 2 ? 'rank-2' : s.rank === 3 ? 'rank-3' : 'rank-other';
//             return (
//               <tr key={s._id}>
//                 <td><span className={`rank-badge ${rankClass}`}>#{s.rank}</span></td>
//                 <td>{s.studentId}</td>
//                 <td><strong>{s.name}</strong></td>
//                 <td>{s.department}</td>
//                 <td><strong>{s.score}</strong></td>
//                 <td><span className={`grade-${s.grade.toLowerCase()}`}>{s.grade}</span></td>
//                 <td><button onClick={() => onDelete(s.studentId)} className="btn btn-small delete-btn">Delete</button></td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentList;


import { useState } from 'react';
import SubjectDetails from './SubjectDetails';

function StudentList({ students, loading, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ rollNumber: '', name: '', score: '', department: '' });
  const [selectedStudent, setSelectedStudent] = useState(null);

  const startEdit = (student) => {
    setEditingId(student.studentId);
    setEditForm({
      rollNumber: student.rollNumber,
      name: student.name,
      score: student.score,
      department: student.department
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ rollNumber: '', name: '', score: '', department: '' });
  };

  const handleUpdate = async (studentId) => {
    if (!editForm.name || !editForm.score || !editForm.department) {
      return alert('All fields are required');
    }
    
    if (editForm.score < 0 || editForm.score > 100) {
      return alert('Score must be between 0 and 100');
    }

    await onUpdate(studentId, editForm);
    setEditingId(null);
    setEditForm({ rollNumber: '', name: '', score: '', department: '' });
  };

  if (loading) {
    return (
      <div className="card">
        <h2>🏆 Student Rankings</h2>
        <div className="no-data">Loading students...</div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="card">
        <h2>🏆 Student Rankings</h2>
        <div className="no-data">No students added yet. Add students to see rankings.</div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>🏆 Student Rankings</h2>
      <div style={{ overflowX: 'auto' }}>
        <table className="student-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Student ID</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Score</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const rankClass = 
                student.rank === 1 ? 'rank-1' :
                student.rank === 2 ? 'rank-2' :
                student.rank === 3 ? 'rank-3' : 'rank-other';
              
              const gradeClass = `grade-${student.grade?.toLowerCase()}`;
              const isEditing = editingId === student.studentId;

              return (
                <tr key={student._id}>
                  <td>
                    <span className={`rank-badge ${rankClass}`}>
                      #{student.rank}
                    </span>
                  </td>
                  <td>{student.studentId}</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.rollNumber}
                        onChange={(e) => setEditForm({...editForm, rollNumber: e.target.value})}
                        style={{ width: '70px', padding: '4px' }}
                      />
                    ) : (
                      student.rollNumber
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        style={{ width: '100%', padding: '4px' }}
                      />
                    ) : (
                      <strong>{student.name}</strong>
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <select
                        value={editForm.department}
                        onChange={(e) => setEditForm({...editForm, department: e.target.value})}
                        style={{ width: '100%', padding: '4px' }}
                      >
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Electrical">Electrical</option>
                      </select>
                    ) : (
                      student.department
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        value={editForm.score}
                        onChange={(e) => setEditForm({...editForm, score: e.target.value})}
                        min="0"
                        max="100"
                        style={{ width: '70px', padding: '4px' }}
                      />
                    ) : (
                      <strong>{student.score}</strong>
                    )}
                  </td>
                  <td>
                    <span className={gradeClass}>{student.grade}</span>
                  </td>
                  <td>
                    {isEditing ? (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
                        <button
                          onClick={() => handleUpdate(student.studentId)}
                          className="btn btn-small"
                          style={{ background: 'var(--color-primary)', color: 'white' }}
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="btn btn-small btn-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
                        <button
                          onClick={() => startEdit(student)}
                          className="btn btn-small"
                          style={{ background: 'var(--color-primary)', color: 'white' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setSelectedStudent({ id: student.studentId, name: student.name })}
                          className="btn btn-small"
                          style={{ background: '#10b981', color: 'white' }}
                        >
                          Subjects
                        </button>
                        <button
                          onClick={() => onDelete(student.studentId)}
                          className="btn btn-small delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedStudent && (
        <SubjectDetails
          studentId={selectedStudent.id}
          studentName={selectedStudent.name}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}

export default StudentList;
