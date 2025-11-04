// // import { useState, useEffect } from 'react';
// // import { studentService } from '../services/api';

// // function SubjectDetails({ studentId, studentName, onClose }) {
// //   const [subjects, setSubjects] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [editingId, setEditingId] = useState(null);
// //   const [showAddForm, setShowAddForm] = useState(false);
// //   const [formData, setFormData] = useState({
// //     semester: '',
// //     courseCode: '',
// //     courseName: '',
// //     credits: '',
// //     grade: ''
// //   });

// //   useEffect(() => {
// //     fetchSubjects();
// //   }, [studentId]);

// //   const fetchSubjects = async () => {
// //     try {
// //       setLoading(true);
// //       const data = await studentService.getSubjects(studentId);
// //       setSubjects(data);
// //     } catch (error) {
// //       console.error('Error fetching subjects:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAdd = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await studentService.addSubject(studentId, {
// //         ...formData,
// //         semester: parseInt(formData.semester),
// //         credits: parseInt(formData.credits)
// //       });
// //       await fetchSubjects();
// //       setShowAddForm(false);
// //       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
// //     } catch (error) {
// //       alert('Failed to add subject');
// //     }
// //   };

// //   const handleUpdate = async (subjectId) => {
// //     try {
// //       await studentService.updateSubject(studentId, subjectId, {
// //         ...formData,
// //         semester: parseInt(formData.semester),
// //         credits: parseInt(formData.credits)
// //       });
// //       await fetchSubjects();
// //       setEditingId(null);
// //       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
// //     } catch (error) {
// //       alert('Failed to update subject');
// //     }
// //   };

// //   const handleDelete = async (subjectId) => {
// //     if (!confirm('Delete this subject?')) return;
// //     try {
// //       await studentService.deleteSubject(studentId, subjectId);
// //       await fetchSubjects();
// //     } catch (error) {
// //       alert('Failed to delete subject');
// //     }
// //   };

// //   const startEdit = (subject) => {
// //     setEditingId(subject._id);
// //     setFormData({
// //       semester: subject.semester,
// //       courseCode: subject.courseCode,
// //       courseName: subject.courseName,
// //       credits: subject.credits,
// //       grade: subject.grade
// //     });
// //   };

// //   return (
// //     <div style={{
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       bottom: 0,
// //       background: 'rgba(0,0,0,0.7)',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       zIndex: 1000
// //     }}>
// //       <div style={{
// //         background: 'var(--color-surface)',
// //         borderRadius: 'var(--radius-lg)',
// //         padding: 'var(--space-24)',
// //         maxWidth: '900px',
// //         width: '90%',
// //         maxHeight: '90vh',
// //         overflow: 'auto'
// //       }}>
// //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
// //           <div>
// //             <h2>📚 Subject Details</h2>
// //             <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
// //               {studentName} ({studentId})
// //             </p>
// //           </div>
// //           <button onClick={onClose} className="btn btn-secondary">✕ Close</button>
// //         </div>

// //         <button 
// //           onClick={() => setShowAddForm(!showAddForm)} 
// //           className="btn btn-primary"
// //           style={{ marginBottom: 'var(--space-16)' }}
// //         >
// //           {showAddForm ? '✕ Cancel' : '+ Add Subject'}
// //         </button>

// //         {showAddForm && (
// //           <form onSubmit={handleAdd} style={{
// //             background: 'var(--color-secondary)',
// //             padding: 'var(--space-16)',
// //             borderRadius: 'var(--radius-base)',
// //             marginBottom: 'var(--space-20)',
// //             display: 'grid',
// //             gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// //             gap: 'var(--space-12)'
// //           }}>
// //             <input
// //               type="number"
// //               placeholder="Semester"
// //               value={formData.semester}
// //               onChange={(e) => setFormData({...formData, semester: e.target.value})}
// //               min="1"
// //               max="8"
// //               required
// //               style={{ padding: 'var(--space-8)' }}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Course Code"
// //               value={formData.courseCode}
// //               onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
// //               required
// //               style={{ padding: 'var(--space-8)' }}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Course Name"
// //               value={formData.courseName}
// //               onChange={(e) => setFormData({...formData, courseName: e.target.value})}
// //               required
// //               style={{ padding: 'var(--space-8)', gridColumn: 'span 2' }}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Credits"
// //               value={formData.credits}
// //               onChange={(e) => setFormData({...formData, credits: e.target.value})}
// //               min="1"
// //               max="10"
// //               required
// //               style={{ padding: 'var(--space-8)' }}
// //             />
// //             <select
// //               value={formData.grade}
// //               onChange={(e) => setFormData({...formData, grade: e.target.value})}
// //               required
// //               style={{ padding: 'var(--space-8)' }}
// //             >
// //               <option value="">Grade</option>
// //               <option value="O">O</option>
// //               <option value="A+">A+</option>
// //               <option value="A">A</option>
// //               <option value="B+">B+</option>
// //               <option value="B">B</option>
// //               <option value="C">C</option>
// //               <option value="D">D</option>
// //               <option value="F">F</option>
// //             </select>
// //             <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
// //               Add Subject
// //             </button>
// //           </form>
// //         )}

// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : subjects.length === 0 ? (
// //           <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>No subjects added yet</p>
// //         ) : (
// //           <div style={{ overflowX: 'auto' }}>
// //             <table className="student-table">
// //               <thead>
// //                 <tr>
// //                   <th>Sem</th>
// //                   <th>Course Code</th>
// //                   <th>Course Name</th>
// //                   <th>Credits</th>
// //                   <th>Grade</th>
// //                   <th>Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {subjects.map((subject) => (
// //                   <tr key={subject._id}>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <input
// //                           type="number"
// //                           value={formData.semester}
// //                           onChange={(e) => setFormData({...formData, semester: e.target.value})}
// //                           style={{ width: '50px', padding: '4px' }}
// //                           min="1"
// //                           max="8"
// //                         />
// //                       ) : subject.semester}
// //                     </td>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <input
// //                           type="text"
// //                           value={formData.courseCode}
// //                           onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
// //                           style={{ width: '100%', padding: '4px' }}
// //                         />
// //                       ) : subject.courseCode}
// //                     </td>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <input
// //                           type="text"
// //                           value={formData.courseName}
// //                           onChange={(e) => setFormData({...formData, courseName: e.target.value})}
// //                           style={{ width: '100%', padding: '4px' }}
// //                         />
// //                       ) : subject.courseName}
// //                     </td>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <input
// //                           type="number"
// //                           value={formData.credits}
// //                           onChange={(e) => setFormData({...formData, credits: e.target.value})}
// //                           style={{ width: '50px', padding: '4px' }}
// //                           min="1"
// //                           max="10"
// //                         />
// //                       ) : subject.credits}
// //                     </td>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <select
// //                           value={formData.grade}
// //                           onChange={(e) => setFormData({...formData, grade: e.target.value})}
// //                           style={{ width: '70px', padding: '4px' }}
// //                         >
// //                           <option value="O">O</option>
// //                           <option value="A+">A+</option>
// //                           <option value="A">A</option>
// //                           <option value="B+">B+</option>
// //                           <option value="B">B</option>
// //                           <option value="C">C</option>
// //                           <option value="D">D</option>
// //                           <option value="F">F</option>
// //                         </select>
// //                       ) : (
// //                         <span className={`grade-${subject.grade.toLowerCase().replace('+', '')}`}>
// //                           {subject.grade}
// //                         </span>
// //                       )}
// //                     </td>
// //                     <td>
// //                       {editingId === subject._id ? (
// //                         <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
// //                           <button onClick={() => handleUpdate(subject._id)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
// //                             Save
// //                           </button>
// //                           <button onClick={() => setEditingId(null)} className="btn btn-small btn-secondary">
// //                             Cancel
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
// //                           <button onClick={() => startEdit(subject)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
// //                             Edit
// //                           </button>
// //                           <button onClick={() => handleDelete(subject._id)} className="btn btn-small delete-btn">
// //                             Delete
// //                           </button>
// //                         </div>
// //                       )}
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default SubjectDetails;
// import { useState, useEffect } from 'react';
// import { studentService } from '../services/api';

// function SubjectDetails({ studentId, studentName, onClose }) {
//   const [student, setStudent] = useState(null);
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [formData, setFormData] = useState({
//     semester: '',
//     courseCode: '',
//     courseName: '',
//     credits: '',
//     grade: ''
//   });

//   useEffect(() => {
//     fetchStudentDetails();
//     fetchSubjects();
//   }, [studentId]);

//   const fetchStudentDetails = async () => {
//     try {
//       const data = await studentService.getById(studentId);
//       setStudent(data);
//     } catch (error) {
//       console.error('Error fetching student:', error);
//     }
//   };

//   const fetchSubjects = async () => {
//     try {
//       setLoading(true);
//       const data = await studentService.getSubjects(studentId);
//       setSubjects(data);
//     } catch (error) {
//       console.error('Error fetching subjects:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       await studentService.addSubject(studentId, {
//         ...formData,
//         semester: parseInt(formData.semester),
//         credits: parseInt(formData.credits)
//       });
//       await fetchSubjects();
//       setShowAddForm(false);
//       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
//     } catch (error) {
//       alert('Failed to add subject');
//     }
//   };

//   const handleUpdate = async (subjectId) => {
//     try {
//       await studentService.updateSubject(studentId, subjectId, {
//         ...formData,
//         semester: parseInt(formData.semester),
//         credits: parseInt(formData.credits)
//       });
//       await fetchSubjects();
//       setEditingId(null);
//       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
//     } catch (error) {
//       alert('Failed to update subject');
//     }
//   };

//   const handleDelete = async (subjectId) => {
//     if (!confirm('Delete this subject?')) return;
//     try {
//       await studentService.deleteSubject(studentId, subjectId);
//       await fetchSubjects();
//     } catch (error) {
//       alert('Failed to delete subject');
//     }
//   };

//   const startEdit = (subject) => {
//     setEditingId(subject._id);
//     setFormData({
//       semester: subject.semester,
//       courseCode: subject.courseCode,
//       courseName: subject.courseName,
//       credits: subject.credits,
//       grade: subject.grade
//     });
//   };

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'rgba(0,0,0,0.7)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000,
//       padding: 'var(--space-16)'
//     }}>
//       <div style={{
//         background: 'var(--color-surface)',
//         borderRadius: 'var(--radius-lg)',
//         padding: 'var(--space-24)',
//         maxWidth: '1000px',
//         width: '95%',
//         maxHeight: '90vh',
//         overflow: 'auto'
//       }}>
//         {/* Header */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
//           <h2>📋 Student Information</h2>
//           <button onClick={onClose} className="btn btn-secondary">✕ Close</button>
//         </div>

//         {/* Student Details Section */}
//         {student && (
//           <div style={{
//             background: 'var(--color-secondary)',
//             padding: 'var(--space-20)',
//             borderRadius: 'var(--radius-base)',
//             marginBottom: 'var(--space-24)'
//           }}>
//             <h3 style={{ marginBottom: 'var(--space-16)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
//               Student Details
//             </h3>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(2, 1fr)',
//               gap: 'var(--space-16)',
//               fontSize: 'var(--font-size-md)'
//             }}>
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Name:</strong>
//                 <span style={{ fontSize: 'var(--font-size-lg)' }}>{student.name}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Student ID:</strong>
//                 <span>{student.studentId}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Roll Number:</strong>
//                 <span>{student.rollNumber}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Department:</strong>
//                 <span>{student.department}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Program:</strong>
//                 <span>{student.program || 'BSc - SOFTWARE SYSTEMS'}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Overall Score:</strong>
//                 <span style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: 'var(--font-size-lg)' }}>
//                   {student.score}/100
//                 </span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Grade:</strong>
//                 <span className={`grade-${student.grade?.toLowerCase()}`} style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>
//                   {student.grade}
//                 </span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Rank:</strong>
//                 <span style={{ fontWeight: 'bold', color: 'var(--color-warning)', fontSize: 'var(--font-size-lg)' }}>
//                   #{student.rank}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Courses/Subjects Section */}
//         <div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-16)' }}>
//             <h3 style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
//               📚 Courses ({subjects.length})
//             </h3>
//             <button 
//               onClick={() => setShowAddForm(!showAddForm)} 
//               className="btn btn-primary"
//             >
//               {showAddForm ? '✕ Cancel' : '+ Add Subject'}
//             </button>
//           </div>

//           {showAddForm && (
//             <form onSubmit={handleAdd} style={{
//               background: 'var(--color-secondary)',
//               padding: 'var(--space-16)',
//               borderRadius: 'var(--radius-base)',
//               marginBottom: 'var(--space-20)',
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//               gap: 'var(--space-12)'
//             }}>
//               <input
//                 type="number"
//                 placeholder="Semester"
//                 value={formData.semester}
//                 onChange={(e) => setFormData({...formData, semester: e.target.value})}
//                 min="1"
//                 max="8"
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <input
//                 type="text"
//                 placeholder="Course Code"
//                 value={formData.courseCode}
//                 onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <input
//                 type="text"
//                 placeholder="Course Name"
//                 value={formData.courseName}
//                 onChange={(e) => setFormData({...formData, courseName: e.target.value})}
//                 required
//                 style={{ padding: 'var(--space-8)', gridColumn: 'span 2' }}
//               />
//               <input
//                 type="number"
//                 placeholder="Credits"
//                 value={formData.credits}
//                 onChange={(e) => setFormData({...formData, credits: e.target.value})}
//                 min="1"
//                 max="10"
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <select
//                 value={formData.grade}
//                 onChange={(e) => setFormData({...formData, grade: e.target.value})}
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               >
//                 <option value="">Grade</option>
//                 <option value="O">O</option>
//                 <option value="A+">A+</option>
//                 <option value="A">A</option>
//                 <option value="B+">B+</option>
//                 <option value="B">B</option>
//                 <option value="C">C</option>
//                 <option value="D">D</option>
//                 <option value="F">F</option>
//               </select>
//               <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
//                 Add Subject
//               </button>
//             </form>
//           )}

//           {loading ? (
//             <p style={{ textAlign: 'center', padding: 'var(--space-24)' }}>Loading courses...</p>
//           ) : subjects.length === 0 ? (
//             <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', padding: 'var(--space-24)', background: 'var(--color-secondary)', borderRadius: 'var(--radius-base)' }}>
//               No courses added yet. Click "Add Subject" to get started.
//             </p>
//           ) : (
//             <div style={{ overflowX: 'auto' }}>
//               <table className="student-table">
//                 <thead>
//                   <tr>
//                     <th>Semester</th>
//                     <th>Course Code</th>
//                     <th>Course Name</th>
//                     <th>Credits</th>
//                     <th>Grade</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {subjects.map((subject) => (
//                     <tr key={subject._id}>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="number"
//                             value={formData.semester}
//                             onChange={(e) => setFormData({...formData, semester: e.target.value})}
//                             style={{ width: '50px', padding: '4px' }}
//                             min="1"
//                             max="8"
//                           />
//                         ) : subject.semester}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="text"
//                             value={formData.courseCode}
//                             onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
//                             style={{ width: '100%', padding: '4px' }}
//                           />
//                         ) : subject.courseCode}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="text"
//                             value={formData.courseName}
//                             onChange={(e) => setFormData({...formData, courseName: e.target.value})}
//                             style={{ width: '100%', padding: '4px' }}
//                           />
//                         ) : subject.courseName}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="number"
//                             value={formData.credits}
//                             onChange={(e) => setFormData({...formData, credits: e.target.value})}
//                             style={{ width: '50px', padding: '4px' }}
//                             min="1"
//                             max="10"
//                           />
//                         ) : subject.credits}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <select
//                             value={formData.grade}
//                             onChange={(e) => setFormData({...formData, grade: e.target.value})}
//                             style={{ width: '70px', padding: '4px' }}
//                           >
//                             <option value="O">O</option>
//                             <option value="A+">A+</option>
//                             <option value="A">A</option>
//                             <option value="B+">B+</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                             <option value="D">D</option>
//                             <option value="F">F</option>
//                           </select>
//                         ) : (
//                           <span className={`grade-${subject.grade.toLowerCase().replace('+', '')}`}>
//                             {subject.grade}
//                           </span>
//                         )}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                             <button onClick={() => handleUpdate(subject._id)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
//                               Save
//                             </button>
//                             <button onClick={() => setEditingId(null)} className="btn btn-small btn-secondary">
//                               Cancel
//                             </button>
//                           </div>
//                         ) : (
//                           <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                             <button onClick={() => startEdit(subject)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
//                               Edit
//                             </button>
//                             <button onClick={() => handleDelete(subject._id)} className="btn btn-small delete-btn">
//                               Delete
//                             </button>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubjectDetails;



// import { useState, useEffect } from 'react';
// import { studentService } from '../services/api';

// function SubjectDetails({ studentId, studentName, onClose }) {
//   const [student, setStudent] = useState(null);
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [formData, setFormData] = useState({
//     semester: '',
//     courseCode: '',
//     courseName: '',
//     credits: '',
//     marks: ''
//   });

//   useEffect(() => {
//     fetchStudentDetails();
//     fetchSubjects();
//   }, [studentId]);

//   const fetchStudentDetails = async () => {
//     try {
//       const data = await studentService.getById(studentId);
//       setStudent(data);
//     } catch (error) {
//       console.error('Error fetching student:', error);
//     }
//   };

//   const fetchSubjects = async () => {
//     try {
//       setLoading(true);
//       const data = await studentService.getSubjects(studentId);
//       setSubjects(data);
//     } catch (error) {
//       console.error('Error fetching subjects:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate CGPA from subjects
//   const calculateCGPA = () => {
//     if (subjects.length === 0) return '0.00';
    
//     const gradePoints = {
//       'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0
//     };
    
//     let totalCredits = 0;
//     let totalGradePoints = 0;
    
//     subjects.forEach(subject => {
//       const gradePoint = gradePoints[subject.grade] || 0;
//       totalGradePoints += gradePoint * subject.credits;
//       totalCredits += subject.credits;
//     });
    
//     return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       await studentService.addSubject(studentId, {
//         ...formData,
//         semester: parseInt(formData.semester),
//         credits: parseInt(formData.credits),
//         marks: parseInt(formData.marks)
//       });
//       await fetchSubjects();
//       setShowAddForm(false);
//       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', marks: '' });
//     } catch (error) {
//       alert('Failed to add subject');
//     }
//   };

//   const handleUpdate = async (subjectId) => {
//     try {
//       await studentService.updateSubject(studentId, subjectId, {
//         ...formData,
//         semester: parseInt(formData.semester),
//         credits: parseInt(formData.credits),
//         marks: parseInt(formData.marks)
//       });
//       await fetchSubjects();
//       setEditingId(null);
//       setFormData({ semester: '', courseCode: '', courseName: '', credits: '', marks: '' });
//     } catch (error) {
//       alert('Failed to update subject');
//     }
//   };

//   const handleDelete = async (subjectId) => {
//     if (!confirm('Delete this subject?')) return;
//     try {
//       await studentService.deleteSubject(studentId, subjectId);
//       await fetchSubjects();
//     } catch (error) {
//       alert('Failed to delete subject');
//     }
//   };

//   const startEdit = (subject) => {
//     setEditingId(subject._id);
//     setFormData({
//       semester: subject.semester,
//       courseCode: subject.courseCode,
//       courseName: subject.courseName,
//       credits: subject.credits,
//       marks: subject.marks
//     });
//   };

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'rgba(0,0,0,0.7)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000,
//       padding: 'var(--space-16)'
//     }}>
//       <div style={{
//         background: 'var(--color-surface)',
//         borderRadius: 'var(--radius-lg)',
//         padding: 'var(--space-24)',
//         maxWidth: '1000px',
//         width: '95%',
//         maxHeight: '90vh',
//         overflow: 'auto'
//       }}>
//         {/* Header */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
//           <h2>📋 Student Information</h2>
//           <button onClick={onClose} className="btn btn-secondary">✕ Close</button>
//         </div>

//         {/* Student Details Section */}
//         {student && (
//           <div style={{
//             background: 'var(--color-secondary)',
//             padding: 'var(--space-20)',
//             borderRadius: 'var(--radius-base)',
//             marginBottom: 'var(--space-24)'
//           }}>
//             <h3 style={{ marginBottom: 'var(--space-16)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
//               Student Details
//             </h3>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(2, 1fr)',
//               gap: 'var(--space-16)',
//               fontSize: 'var(--font-size-md)'
//             }}>
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Name:</strong>
//                 <span style={{ fontSize: 'var(--font-size-lg)' }}>{student.name}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Student ID:</strong>
//                 <span>{student.studentId}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Roll Number:</strong>
//                 <span>{student.rollNumber}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Department:</strong>
//                 <span>{student.department}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Program:</strong>
//                 <span>{student.program || 'BSc - SOFTWARE SYSTEMS'}</span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>CGPA:</strong>
//                 <span style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: 'var(--font-size-2xl)' }}>
//                   {calculateCGPA()} / 10.0
//                 </span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Overall Score:</strong>
//                 <span style={{ fontWeight: 'bold', fontSize: 'var(--font-size-lg)' }}>
//                   {student.score}/100
//                 </span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Grade:</strong>
//                 <span className={`grade-${student.grade?.toLowerCase()}`} style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>
//                   {student.grade}
//                 </span>
//               </div>
              
//               <div>
//                 <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Rank:</strong>
//                 <span style={{ fontWeight: 'bold', color: 'var(--color-warning)', fontSize: 'var(--font-size-lg)' }}>
//                   #{student.rank}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Courses/Subjects Section */}
//         <div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-16)' }}>
//             <h3 style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
//               📚 Courses ({subjects.length})
//             </h3>
//             <button 
//               onClick={() => setShowAddForm(!showAddForm)} 
//               className="btn btn-primary"
//             >
//               {showAddForm ? '✕ Cancel' : '+ Add Subject'}
//             </button>
//           </div>

//           {showAddForm && (
//             <form onSubmit={handleAdd} style={{
//               background: 'var(--color-secondary)',
//               padding: 'var(--space-16)',
//               borderRadius: 'var(--radius-base)',
//               marginBottom: 'var(--space-20)',
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
//               gap: 'var(--space-12)'
//             }}>
//               <input
//                 type="number"
//                 placeholder="Semester"
//                 value={formData.semester}
//                 onChange={(e) => setFormData({...formData, semester: e.target.value})}
//                 min="1"
//                 max="8"
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <input
//                 type="text"
//                 placeholder="Course Code"
//                 value={formData.courseCode}
//                 onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <input
//                 type="text"
//                 placeholder="Course Name"
//                 value={formData.courseName}
//                 onChange={(e) => setFormData({...formData, courseName: e.target.value})}
//                 required
//                 style={{ padding: 'var(--space-8)', gridColumn: 'span 2' }}
//               />
//               <input
//                 type="number"
//                 placeholder="Credits"
//                 value={formData.credits}
//                 onChange={(e) => setFormData({...formData, credits: e.target.value})}
//                 min="1"
//                 max="10"
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <input
//                 type="number"
//                 placeholder="Marks (0-100)"
//                 value={formData.marks}
//                 onChange={(e) => setFormData({...formData, marks: e.target.value})}
//                 min="0"
//                 max="100"
//                 required
//                 style={{ padding: 'var(--space-8)' }}
//               />
//               <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
//                 Add Subject
//               </button>
//             </form>
//           )}

//           {loading ? (
//             <p style={{ textAlign: 'center', padding: 'var(--space-24)' }}>Loading courses...</p>
//           ) : subjects.length === 0 ? (
//             <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', padding: 'var(--space-24)', background: 'var(--color-secondary)', borderRadius: 'var(--radius-base)' }}>
//               No courses added yet. Click "Add Subject" to get started.
//             </p>
//           ) : (
//             <div style={{ overflowX: 'auto' }}>
//               <table className="student-table">
//                 <thead>
//                   <tr>
//                     <th>Semester</th>
//                     <th>Course Code</th>
//                     <th>Course Name</th>
//                     <th>Credits</th>
//                     <th>Marks</th>
//                     <th>Grade</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {subjects.map((subject) => (
//                     <tr key={subject._id}>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="number"
//                             value={formData.semester}
//                             onChange={(e) => setFormData({...formData, semester: e.target.value})}
//                             style={{ width: '50px', padding: '4px' }}
//                             min="1"
//                             max="8"
//                           />
//                         ) : subject.semester}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="text"
//                             value={formData.courseCode}
//                             onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
//                             style={{ width: '100%', padding: '4px' }}
//                           />
//                         ) : subject.courseCode}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="text"
//                             value={formData.courseName}
//                             onChange={(e) => setFormData({...formData, courseName: e.target.value})}
//                             style={{ width: '100%', padding: '4px' }}
//                           />
//                         ) : subject.courseName}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="number"
//                             value={formData.credits}
//                             onChange={(e) => setFormData({...formData, credits: e.target.value})}
//                             style={{ width: '50px', padding: '4px' }}
//                             min="1"
//                             max="10"
//                           />
//                         ) : subject.credits}
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <input
//                             type="number"
//                             value={formData.marks}
//                             onChange={(e) => setFormData({...formData, marks: e.target.value})}
//                             style={{ width: '70px', padding: '4px' }}
//                             min="0"
//                             max="100"
//                           />
//                         ) : <strong>{subject.marks}</strong>}
//                       </td>
//                       <td>
//                         <span className={`grade-${subject.grade.toLowerCase().replace('+', '')}`}>
//                           {subject.grade}
//                         </span>
//                       </td>
//                       <td>
//                         {editingId === subject._id ? (
//                           <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                             <button onClick={() => handleUpdate(subject._id)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
//                               Save
//                             </button>
//                             <button onClick={() => setEditingId(null)} className="btn btn-small btn-secondary">
//                               Cancel
//                             </button>
//                           </div>
//                         ) : (
//                           <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
//                             <button onClick={() => startEdit(subject)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
//                               Edit
//                             </button>
//                             <button onClick={() => handleDelete(subject._id)} className="btn btn-small delete-btn">
//                               Delete
//                             </button>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubjectDetails;




import { useState, useEffect } from 'react';
import { studentService } from '../services/api';

function SubjectDetails({ studentId, studentName, onClose }) {
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    semester: '',
    courseCode: '',
    courseName: '',
    credits: '',
    grade: ''
  });

  useEffect(() => {
    fetchStudentDetails();
    fetchSubjects();
  }, [studentId]);

  const fetchStudentDetails = async () => {
    try {
      const data = await studentService.getById(studentId);
      setStudent(data);
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      const data = await studentService.getSubjects(studentId);
      setSubjects(data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate CGPA from subjects
  const calculateCGPA = () => {
    if (subjects.length === 0) return '0.00';
    
    const gradePoints = {
      'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0
    };
    
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    subjects.forEach(subject => {
      const gradePoint = gradePoints[subject.grade] || 0;
      totalGradePoints += gradePoint * subject.credits;
      totalCredits += subject.credits;
    });
    
    return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await studentService.addSubject(studentId, {
        ...formData,
        semester: parseInt(formData.semester),
        credits: parseInt(formData.credits)
      });
      await fetchSubjects();
      setShowAddForm(false);
      setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
    } catch (error) {
      alert('Failed to add subject');
    }
  };

  const handleUpdate = async (subjectId) => {
    try {
      await studentService.updateSubject(studentId, subjectId, {
        ...formData,
        semester: parseInt(formData.semester),
        credits: parseInt(formData.credits)
      });
      await fetchSubjects();
      setEditingId(null);
      setFormData({ semester: '', courseCode: '', courseName: '', credits: '', grade: '' });
    } catch (error) {
      alert('Failed to update subject');
    }
  };

  const handleDelete = async (subjectId) => {
    if (!confirm('Delete this subject?')) return;
    try {
      await studentService.deleteSubject(studentId, subjectId);
      await fetchSubjects();
    } catch (error) {
      alert('Failed to delete subject');
    }
  };

  const startEdit = (subject) => {
    setEditingId(subject._id);
    setFormData({
      semester: subject.semester,
      courseCode: subject.courseCode,
      courseName: subject.courseName,
      credits: subject.credits,
      grade: subject.grade
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 'var(--space-16)'
    }}>
      <div style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-24)',
        maxWidth: '1000px',
        width: '95%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
          <h2>📋 Student Information</h2>
          <button onClick={onClose} className="btn btn-secondary">✕ Close</button>
        </div>

        {/* Student Details Section */}
        {student && (
          <div style={{
            background: 'var(--color-secondary)',
            padding: 'var(--space-20)',
            borderRadius: 'var(--radius-base)',
            marginBottom: 'var(--space-24)'
          }}>
            <h3 style={{ marginBottom: 'var(--space-16)', color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
              Student Details
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-16)',
              fontSize: 'var(--font-size-md)'
            }}>
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Name:</strong>
                <span style={{ fontSize: 'var(--font-size-lg)' }}>{student.name}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Student ID:</strong>
                <span>{student.studentId}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Roll Number:</strong>
                <span>{student.rollNumber}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Email:</strong>
                <span>{student.email || 'Not provided'}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Phone:</strong>
                <span>{student.phone || 'Not provided'}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Date of Birth:</strong>
                <span>{student.dateOfBirth || 'Not provided'}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Department:</strong>
                <span>{student.department}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Program:</strong>
                <span>{student.program || 'BSc - SOFTWARE SYSTEMS'}</span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>CGPA:</strong>
                <span style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: 'var(--font-size-2xl)' }}>
                  {calculateCGPA()} / 10.0
                </span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Overall Score:</strong>
                <span style={{ fontWeight: 'bold', fontSize: 'var(--font-size-lg)' }}>
                  {student.score}/100
                </span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Grade:</strong>
                <span className={`grade-${student.grade?.toLowerCase()}`} style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>
                  {student.grade}
                </span>
              </div>
              
              <div>
                <strong style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: 'var(--space-4)' }}>Rank:</strong>
                <span style={{ fontWeight: 'bold', color: 'var(--color-warning)', fontSize: 'var(--font-size-lg)' }}>
                  #{student.rank}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Courses/Subjects Section */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-16)' }}>
            <h3 style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-xl)' }}>
              📚 Courses ({subjects.length})
            </h3>
            <button 
              onClick={() => setShowAddForm(!showAddForm)} 
              className="btn btn-primary"
            >
              {showAddForm ? '✕ Cancel' : '+ Add Subject'}
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAdd} style={{
              background: 'var(--color-secondary)',
              padding: 'var(--space-16)',
              borderRadius: 'var(--radius-base)',
              marginBottom: 'var(--space-20)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'var(--space-12)'
            }}>
              <input
                type="number"
                placeholder="Semester"
                value={formData.semester}
                onChange={(e) => setFormData({...formData, semester: e.target.value})}
                min="1"
                max="8"
                required
                style={{ padding: 'var(--space-8)' }}
              />
              <input
                type="text"
                placeholder="Course Code"
                value={formData.courseCode}
                onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
                required
                style={{ padding: 'var(--space-8)' }}
              />
              <input
                type="text"
                placeholder="Course Name"
                value={formData.courseName}
                onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                required
                style={{ padding: 'var(--space-8)', gridColumn: 'span 2' }}
              />
              <input
                type="number"
                placeholder="Credits"
                value={formData.credits}
                onChange={(e) => setFormData({...formData, credits: e.target.value})}
                min="1"
                max="10"
                required
                style={{ padding: 'var(--space-8)' }}
              />
              <select
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                required
                style={{ padding: 'var(--space-8)' }}
              >
                <option value="">Select Grade</option>
                <option value="O">O (Outstanding)</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F (Fail)</option>
              </select>
              <button type="submit" className="btn btn-primary" style={{ gridColumn: 'span 2' }}>
                Add Subject
              </button>
            </form>
          )}

          {loading ? (
            <p style={{ textAlign: 'center', padding: 'var(--space-24)' }}>Loading courses...</p>
          ) : subjects.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', padding: 'var(--space-24)', background: 'var(--color-secondary)', borderRadius: 'var(--radius-base)' }}>
              No courses added yet. Click "Add Subject" to get started.
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="student-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject._id}>
                      <td>
                        {editingId === subject._id ? (
                          <input
                            type="number"
                            value={formData.semester}
                            onChange={(e) => setFormData({...formData, semester: e.target.value})}
                            style={{ width: '50px', padding: '4px' }}
                            min="1"
                            max="8"
                          />
                        ) : subject.semester}
                      </td>
                      <td>
                        {editingId === subject._id ? (
                          <input
                            type="text"
                            value={formData.courseCode}
                            onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
                            style={{ width: '100%', padding: '4px' }}
                          />
                        ) : subject.courseCode}
                      </td>
                      <td>
                        {editingId === subject._id ? (
                          <input
                            type="text"
                            value={formData.courseName}
                            onChange={(e) => setFormData({...formData, courseName: e.target.value})}
                            style={{ width: '100%', padding: '4px' }}
                          />
                        ) : subject.courseName}
                      </td>
                      <td>
                        {editingId === subject._id ? (
                          <input
                            type="number"
                            value={formData.credits}
                            onChange={(e) => setFormData({...formData, credits: e.target.value})}
                            style={{ width: '50px', padding: '4px' }}
                            min="1"
                            max="10"
                          />
                        ) : subject.credits}
                      </td>
                      <td>
                        {editingId === subject._id ? (
                          <select
                            value={formData.grade}
                            onChange={(e) => setFormData({...formData, grade: e.target.value})}
                            style={{ width: '80px', padding: '4px' }}
                          >
                            <option value="O">O</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                          </select>
                        ) : (
                          <span className={`grade-${subject.grade.toLowerCase().replace('+', '')}`}>
                            {subject.grade}
                          </span>
                        )}
                      </td>
                      <td>
                        {editingId === subject._id ? (
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
                            <button onClick={() => handleUpdate(subject._id)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
                              Save
                            </button>
                            <button onClick={() => setEditingId(null)} className="btn btn-small btn-secondary">
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
                            <button onClick={() => startEdit(subject)} className="btn btn-small" style={{ background: 'var(--color-primary)', color: 'white' }}>
                              Edit
                            </button>
                            <button onClick={() => handleDelete(subject._id)} className="btn btn-small delete-btn">
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectDetails;
