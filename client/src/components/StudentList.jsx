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


// import { useState } from 'react';
// import SubjectDetails from './SubjectDetails';

// function StudentList({ students, loading, onDelete, onUpdate }) {
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({ rollNumber: '', name: '', score: '', department: '' });
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const startEdit = (student) => {
//     setEditingId(student.studentId);
//     setEditForm({
//       rollNumber: student.rollNumber,
//       name: student.name,
//       score: student.score,
//       department: student.department
//     });
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditForm({ rollNumber: '', name: '', score: '', department: '' });
//   };

//   const handleUpdate = async (studentId) => {
//     if (!editForm.name || !editForm.score || !editForm.department) {
//       return alert('All fields are required');
//     }
    
//     if (editForm.score < 0 || editForm.score > 100) {
//       return alert('Score must be between 0 and 100');
//     }

//     await onUpdate(studentId, editForm);
//     setEditingId(null);
//     setEditForm({ rollNumber: '', name: '', score: '', department: '' });
//   };

//   if (loading) {
//     return (
//       <div className="card">
//         <h2>🏆 Student Rankings</h2>
//         <div className="no-data">Loading students...</div>
//       </div>
//     );
//   }

//   if (students.length === 0) {
//     return (
//       <div className="card">
//         <h2>🏆 Student Rankings</h2>
//         <div className="no-data">No students added yet. Add students to see rankings.</div>
//       </div>
//     );
//   }

//   return (
//     <div className="card">
//       <h2>🏆 Student Rankings</h2>
//       <div style={{ overflowX: 'auto' }}>
//         <table className="student-table">
//           <thead>
//             <tr>
//               <th>Rank</th>
//               <th>Student ID</th>
//               <th>Roll No</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Score</th>
//               <th>Grade</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => {
//               const rankClass = 
//                 student.rank === 1 ? 'rank-1' :
//                 student.rank === 2 ? 'rank-2' :
//                 student.rank === 3 ? 'rank-3' : 'rank-other';
              
//               const gradeClass = `grade-${student.grade?.toLowerCase()}`;
//               const isEditing = editingId === student.studentId;

//               return (
//                 <tr key={student._id}>
//                   <td>
//                     <span className={`rank-badge ${rankClass}`}>
//                       #{student.rank}
//                     </span>
//                   </td>
//                   <td>{student.studentId}</td>
//                   <td>
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={editForm.rollNumber}
//                         onChange={(e) => setEditForm({...editForm, rollNumber: e.target.value})}
//                         style={{ width: '70px', padding: '4px' }}
//                       />
//                     ) : (
//                       student.rollNumber
//                     )}
//                   </td>
//                   <td>
//                     {isEditing ? (
//                       <input
//                         type="text"
//                         value={editForm.name}
//                         onChange={(e) => setEditForm({...editForm, name: e.target.value})}
//                         style={{ width: '100%', padding: '4px' }}
//                       />
//                     ) : (
//                       <strong>{student.name}</strong>
//                     )}
//                   </td>
//                   <td>
//                     {isEditing ? (
//                       <select
//                         value={editForm.department}
//                         onChange={(e) => setEditForm({...editForm, department: e.target.value})}
//                         style={{ width: '100%', padding: '4px' }}
//                       >
//                         <option value="Computer Science">Computer Science</option>
//                         <option value="Electronics">Electronics</option>
//                         <option value="Mechanical">Mechanical</option>
//                         <option value="Civil">Civil</option>
//                         <option value="Electrical">Electrical</option>
//                       </select>
//                     ) : (
//                       student.department
//                     )}
//                   </td>
//                   <td>
//                     {isEditing ? (
//                       <input
//                         type="number"
//                         value={editForm.score}
//                         onChange={(e) => setEditForm({...editForm, score: e.target.value})}
//                         min="0"
//                         max="100"
//                         style={{ width: '70px', padding: '4px' }}
//                       />
//                     ) : (
//                       <strong>{student.score}</strong>
//                     )}
//                   </td>
//                   <td>
//                     <span className={gradeClass}>{student.grade}</span>
//                   </td>
//                   <td>
//                     {isEditing ? (
//                       <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                         <button
//                           onClick={() => handleUpdate(student.studentId)}
//                           className="btn btn-small"
//                           style={{ background: 'var(--color-primary)', color: 'white' }}
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={cancelEdit}
//                           className="btn btn-small btn-secondary"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                         <button
//                           onClick={() => startEdit(student)}
//                           className="btn btn-small"
//                           style={{ background: '#32B8C6', color: 'whixte' }}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => setSelectedStudent({ id: student.studentId, name: student.name })}
//                           className="btn btn-small"
//                           style={{ background: '#10b981', color: 'white' }}
//                         >
//                           Subjects
//                         </button>
//                         <button
//                           onClick={() => onDelete(student.studentId)}
//                           className="btn btn-small delete-btn"
//                           style={{ background: '#FF5459', color: 'white' }}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {selectedStudent && (
//         <SubjectDetails
//           studentId={selectedStudent.id}
//           studentName={selectedStudent.name}
//           onClose={() => setSelectedStudent(null)}
//         />
//       )}
//     </div>
//   );
// }


// export default StudentList;
import { useState } from "react";
import SubjectDetails from "./SubjectDetails";

function StudentList({ students, loading, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    rollNumber: "",
    name: "",
    score: "",
    department: "",
  });
  const [selectedStudent, setSelectedStudent] = useState(null);

  const startEdit = (student) => {
    setEditingId(student.studentId);
    setEditForm({
      rollNumber: student.rollNumber,
      name: student.name,
      score: student.score,
      department: student.department,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ rollNumber: "", name: "", score: "", department: "" });
  };

  const handleUpdate = async (studentId) => {
    if (!editForm.name || !editForm.score || !editForm.department) {
      return alert("All fields are required");
    }

    if (editForm.score < 0 || editForm.score > 100) {
      return alert("Score must be between 0 and 100");
    }

    await onUpdate(studentId, editForm);
    cancelEdit();
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

      <div className="table-wrapper">
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
                student.rank === 1
                  ? "rank-1"
                  : student.rank === 2
                  ? "rank-2"
                  : student.rank === 3
                  ? "rank-3"
                  : "rank-other";

              const gradeClass = `grade-${student.grade?.toLowerCase()}`;
              const isEditing = editingId === student.studentId;

              return (
                <tr key={student._id}>
                  <td>
                    <span className={`rank-badge ${rankClass}`}>#{student.rank}</span>
                  </td>
                  <td>{student.studentId}</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.rollNumber}
                        onChange={(e) =>
                          setEditForm({ ...editForm, rollNumber: e.target.value })
                        }
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
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />
                    ) : (
                      <strong>{student.name}</strong>
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <select
                        value={editForm.department}
                        onChange={(e) =>
                          setEditForm({ ...editForm, department: e.target.value })
                        }
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
                        onChange={(e) =>
                          setEditForm({ ...editForm, score: e.target.value })
                        }
                        min="0"
                        max="100"
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
                      <>
                        <button
                          onClick={() => handleUpdate(student.studentId)}
                          className="btn primary"
                        >
                          Save
                        </button>
                        <button onClick={cancelEdit} className="btn secondary">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(student)} className="btn info">
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            setSelectedStudent({
                              id: student.studentId,
                              name: student.name,
                            })
                          }
                          className="btn success"
                        >
                          Subjects
                        </button>
                        <button
                          onClick={() => onDelete(student.studentId)}
                          className="btn danger"
                        >
                          Delete
                        </button>
                      </>
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

      {/* -------------- Styles -------------- */}
      <style>{`
        .card {
          background: #1b1c1f;
          padding: 20px;
          border-radius: 12px;
          color: #fff;
          margin: 20px;
        }

        .table-wrapper {
          overflow-x: auto;
          width: 150  %;
        }

        .student-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 10px;
        }

        th, td {
          padding: 14px 16px;
          text-align: left;
          white-space: nowrap;
        }

        thead {
          background: #242528;
        }

        tbody tr {
          background: #2a2d31;
          border-radius: 8px;
        }

        tbody tr td:first-child {
          border-radius: 8px 0 0 8px;
        }
        tbody tr td:last-child {
          border-radius: 0 8px 8px 0;
        }

        .rank-badge {
          background: #facc15;
          color: #000;
          padding: 6px 12px;
          border-radius: 50px;
          font-weight: bold;
        }

        .grade-o { color: #22c55e; }
        .grade-f { color: #ef4444; }

        input, select {
          padding: 6px;
          background: #111;
          color: #fff;
          border: 1px solid #444;
          border-radius: 6px;
        }

        .btn {
          padding: 6px 10px;
          border-radius: 6px;
          margin-right: 6px;
          cursor: pointer;
          font-size: 13px;
          border: none;
        }

        .primary { background: #3b82f6; color: white; }
        .secondary { background: #6b7280; color: white; }
        .info { background: #0ea5e9; color: white; }
        .success { background: #10b981; color: white; }
        .danger { background: #ef4444; color: white; }
      `}</style>
    </div>
  );
}

export default StudentList;
