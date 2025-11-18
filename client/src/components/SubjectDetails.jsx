
// // // export default SubjectDetails;
// // import { useState, useEffect } from 'react';
// // import { studentService } from '../services/api';

// // function SubjectDetails({ studentId, onClose }) {
// //   const [student, setStudent] = useState(null);
// //   const [subjects, setSubjects] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const fetchStudentDetails = async () => {
// //     try {
// //       const data = await studentService.getById(studentId);
// //       setStudent(data);
// //     } catch (error) {
// //       console.error('Error fetching student:', error);
// //     }
// //   };
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

// //   useEffect(() => {
// //     fetchStudentDetails();
// //     fetchSubjects();
// //   }, [studentId]);

// //   const calculateCGPA = () => {
// //     if (subjects.length === 0) return '0.00';
// //     const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0 };
// //     let totalCredits = 0;
// //     let totalGradePoints = 0;
// //     subjects.forEach(subject => {
// //       const gradePoint = gradePoints[subject.grade] || 0;
// //       totalGradePoints += gradePoint * subject.credits;
// //       totalCredits += subject.credits;
// //     });
// //     return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
// //   };

// //   return (
// //     <div style={{
// //       position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
// //       background: 'rgba(0,0,0,0.75)', display: 'flex',
// //       alignItems: 'center', justifyContent: 'center', zIndex: 1000,
// //       overflowY: 'auto'
// //     }}>
// //       <div style={{
// //         background: '#232b36',
// //         borderRadius: 18,
// //         boxShadow: "0 8px 36px #000c",
// //         width: '98vw',
// //         maxWidth: 700,
// //         padding: 0,
// //         overflow: "hidden"
// //       }}>
// //         {/* Modal Header */}
// //         <div style={{
// //           display: "flex", justifyContent: "space-between", alignItems: "center",
// //           background: "#232b36",
// //           padding: "22px 30px 14px 30px"
// //         }}>
// //           <h2 style={{
// //             fontWeight: 800,
// //             color: "#F5F5F5",
// //             fontSize: "1.7rem",
// //             margin: 0,
// //             letterSpacing: 1
// //           }}>
// //             <span role="img" aria-label="icon">📋</span> Student Information
// //           </h2>
// //           <button
// //             onClick={onClose}
// //             style={{
// //               background: "#323434", color: "#f1ededff", border: 0,
// //               borderRadius: 8, fontWeight: 700, padding: "8px 20px",
// //               fontSize: 18, cursor: "pointer"
// //             }}>✕ Close</button>
// //         </div>

// //         {/* Student Details */}
// //         {student && (
// //           <div style={{
// //             background: "#232b36",
// //             padding: "32px 30px",
// //             display: "grid",
// //             gridTemplateColumns: "1fr 1fr",
// //             rowGap: "20px", columnGap: "30px"
// //           }}>
// //             <div><strong style={{ color: "#79e7fa" }}>Name:</strong> <span>{student.name}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Student ID:</strong> <span>{student.studentId}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Roll Number:</strong> <span>{student.rollNumber}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Email:</strong> <span>{student.email || "Not provided"}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Phone:</strong> <span>{student.phone || "Not provided"}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Date of Birth:</strong> <span>{student.dateOfBirth || "Not provided"}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Department:</strong> <span>{student.department}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Program:</strong> <span>{student.program || "BSc - SOFTWARE SYSTEMS"}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>CGPA:</strong> <span style={{ fontWeight: 700, color: "#21eae3", fontSize: "1.2em" }}>{calculateCGPA()} / 10.0</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Score:</strong> <span style={{ fontWeight: 700 }}>{student.score}/100</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Grade:</strong> <span style={{ fontWeight: 700 }}>{student.grade}</span></div>
// //             <div><strong style={{ color: "#79e7fa" }}>Rank:</strong> <span style={{ fontWeight: 700, color: "#fae66a" }}>#{student.rank}</span></div>
// //           </div>
// //         )}

// //         {/* Courses Section (read-only table) */}
// //         <div style={{
// //           background: "#262828",
// //           borderRadius: "0 0 16px 16px",
// //           padding: "20px 25px 25px 25px"
// //         }}>
// //           <h3 style={{ color: "#43e0ed", fontSize: "1.3rem", marginBottom: "20px" }}>
// //             <span role="img" aria-label="Courses">📚</span> Courses ({subjects.length})
// //           </h3>
// //           {loading ? (
// //             <p style={{ color: "#bbb", textAlign: "center", padding: "20px 0" }}>Loading courses...</p>
// //           ) : (
// //             <div style={{ overflowX: "auto" }}>
// //               <table className="student-table" style={{
// //                 background: "transparent", color: "#fff", minWidth: 700
// //               }}>
// //                 <thead>
// //                   <tr>
// //                     <th>Semester</th>
// //                     <th>Course Code</th>
// //                     <th>Course Name</th>
// //                     <th>Credits</th>
// //                     <th>Grade</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {subjects.map((subject) => (
// //                     <tr key={subject._id} style={{ background: "rgba(40, 45, 60, 0.55)" }}>
// //                       <td>{subject.semester}</td>
// //                       <td>{subject.courseCode}</td>
// //                       <td>{subject.courseName}</td>
// //                       <td>{subject.credits}</td>
// //                       <td>{subject.grade}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SubjectDetails;
// // export default SubjectDetails;
// import { useState, useEffect } from 'react';
// import { studentService } from '../services/api';

// function SubjectDetails({ studentId, onClose }) {
//   const [student, setStudent] = useState(null);
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(false);

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

//   useEffect(() => {
//     fetchStudentDetails();
//     fetchSubjects();
//   }, [studentId]);

//   const calculateCGPA = () => {
//     if (subjects.length === 0) return '0.00';
//     const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0 };
//     let totalCredits = 0;
//     let totalGradePoints = 0;

//     subjects.forEach(subject => {
//       const gradePoint = gradePoints[subject.grade] || 0;
//       totalGradePoints += gradePoint * subject.credits;
//       totalCredits += subject.credits;
//     });

//     return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
//   };

//   return (
//     <div style={{
//       position: 'fixed',
//       inset: 0,
//       background: 'rgba(0,0,0,0.75)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//       zIndex: 1000,
//       padding: "20px 0",
//       overflowY: "auto",
//     }}>
//       <div style={{
//         background: '#232b36',
//         width: '100vw',
//         maxWidth: '1250px',
//         borderRadius: 18,
//         boxShadow: "0 8px 36px #000c",
//         paddingBottom: 20,
//         margin: "0 auto",
//       }}>

//         {/* Header */}
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "#232b36",
//           padding: "22px 40px 14px 40px"
//         }}>
//           <h2 style={{
//             fontWeight: 800,
//             color: "#F5F5F5",
//             fontSize: "1.7rem",
//             margin: 0
//           }}>
//             📋 Student Information
//           </h2>

//           <button
//             onClick={onClose}
//             style={{
//               background: "#323434",
//               color: "#fff",
//               border: 0,
//               borderRadius: 8,
//               fontWeight: 700,
//               padding: "8px 20px",
//               fontSize: 18,
//               cursor: "pointer",
//             }}
//           >
//             ✕ Close
//           </button>
//         </div>

//         {/* Student Info */}
//         {student && (
//           <div style={{
//             padding: "32px 40px",
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "20px 40px",
//             background: "#232b36"
//           }}>
//             <div><strong style={{ color: "#79e7fa" }}>Name:</strong> {student.name}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Student ID:</strong> {student.studentId}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Roll Number:</strong> {student.rollNumber}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Email:</strong> {student.email || "Not provided"}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Phone:</strong> {student.phone || "Not provided"}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Date of Birth:</strong> {student.dateOfBirth || "Not provided"}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Department:</strong> {student.department}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Program:</strong> {student.program || "BSc - SOFTWARE SYSTEMS"}</div>
//             <div><strong style={{ color: "#79e7fa" }}>CGPA:</strong>
//               <span style={{ fontWeight: 700, color: "#21eae3", fontSize: "1.2em" }}>
//                 {calculateCGPA()} / 10.0
//               </span>
//             </div>
//             <div><strong style={{ color: "#79e7fa" }}>Score:</strong> {student.score}/100</div>
//             <div><strong style={{ color: "#79e7fa" }}>Grade:</strong> {student.grade}</div>
//             <div><strong style={{ color: "#79e7fa" }}>Rank:</strong>
//               <span style={{ color: "#fae66a" }}>#{student.rank}</span>
//             </div>
//           </div>
//         )}

//         {/* Subjects Table */}
//         <div style={{
//           background: "#262828",
//           padding: "25px 40px",
//           borderRadius: "0 0 16px 16px"
//         }}>
//           <h3 style={{ color: "#43e0ed", fontSize: "1.3rem", marginBottom: "20px" }}>
//             📚 Courses ({subjects.length})
//           </h3>

//           {loading ? (
//             <p style={{ color: "#ccc", textAlign: "center" }}>Loading courses...</p>
//           ) : (
//             <div style={{ overflowX: "auto" }}>
//               <table className="student-table" style={{
//                 width: "100%",
//                 minWidth: 900,
//                 background: "transparent",
//                 color: "#fff"
//               }}>
//                 <thead>
//                   <tr>
//                     <th>Semester</th>
//                     <th>Course Code</th>
//                     <th>Course Name</th>
//                     <th>Credits</th>
//                     <th>Grade</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {subjects.map((subject) => (
//                     <tr key={subject._id} style={{
//                       background: "rgba(40, 45, 60, 0.55)"
//                     }}>
//                       <td>{subject.semester}</td>
//                       <td>{subject.courseCode}</td>
//                       <td>{subject.courseName}</td>
//                       <td>{subject.credits}</td>
//                       <td>{subject.grade}</td>
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

function SubjectDetails({ studentId, onClose }) {
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching student and subjects
  useEffect(() => {
    async function fetchAll() {
      try {
        setLoading(true);
        const data = await studentService.getById(studentId);
        setStudent(data);
        setSubjects(await studentService.getSubjects(studentId));
      } catch (e) {
        setStudent(null);
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, [studentId]);

  // CGPA Calculation
  const calculateCGPA = () => {
    if (subjects.length === 0) return '0.00';
    const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0 };
    let totalCredits = 0, totalGradePoints = 0;
    subjects.forEach(subject => {
      const gp = gradePoints[subject.grade] || 0;
      totalGradePoints += gp * subject.credits;
      totalCredits += subject.credits;
    });
    return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      zIndex: 2000,
      overflowY: 'auto',
      padding: "32px 0"
    }}>
      <div style={{
        background: '#232b36',
        width: '98vw',
        maxWidth: 1240,
        borderRadius: 18,
        boxShadow: "0 8px 36px #000c",
        paddingBottom: 0,
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#232b36",
          padding: "22px 40px 18px 40px"
        }}>
          <h2 style={{
            fontWeight: 800,
            color: "#FFF",
            fontSize: "1.7rem",
            margin: 0,
            letterSpacing: 1
          }}>📋 Student Information</h2>
          <button
            onClick={onClose}
            style={{
              background: "#323434",
              color: "#fff",
              border: 0,
              borderRadius: 8,
              fontWeight: 700,
              padding: "8px 22px",
              fontSize: 18,
              cursor: "pointer"
            }}>
            ✕ Close
          </button>
        </div>
        {/* Student Info */}
        {student && (
          <div style={{
            padding: "32px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px 42px",
            background: "#232b36"
          }}>
            <div><strong style={{ color: "#79e7fa" }}>Name:</strong> {student.name}</div>
            <div><strong style={{ color: "#79e7fa" }}>Student ID:</strong> {student.studentId}</div>
            <div><strong style={{ color: "#79e7fa" }}>Roll Number:</strong> {student.rollNumber}</div>
            <div><strong style={{ color: "#79e7fa" }}>Email:</strong> {student.email || "Not provided"}</div>
            <div><strong style={{ color: "#79e7fa" }}>Phone:</strong> {student.phone || "Not provided"}</div>
            <div><strong style={{ color: "#79e7fa" }}>Date of Birth:</strong> {student.dateOfBirth || "Not provided"}</div>
            <div><strong style={{ color: "#79e7fa" }}>Department:</strong> {student.department}</div>
            <div><strong style={{ color: "#79e7fa" }}>Program:</strong> {student.program || "BSc - SOFTWARE SYSTEMS"}</div>
            <div><strong style={{ color: "#79e7fa" }}>CGPA:</strong>
              <span style={{ fontWeight: 700, color: "#21eae3", fontSize: "1.2em" }}>
                {calculateCGPA()} / 10.0
              </span>
            </div>
            <div><strong style={{ color: "#79e7fa" }}>Score:</strong> {student.score}/100</div>
            <div><strong style={{ color: "#79e7fa" }}>Grade:</strong> {student.grade}</div>
            <div><strong style={{ color: "#79e7fa" }}>Rank:</strong>
              <span style={{ color: "#fae66a", fontWeight: 700 }}>#{student.rank}</span>
            </div>
          </div>
        )}
        {/* Subjects Table */}
        <div style={{
          background: "#262828",
          padding: "26px 40px",
          borderRadius: "0 0 18px 18px"
        }}>
          <h3 style={{ color: "#43e0ed", fontSize: "1.3rem", marginBottom: "20px" }}>
            📚 Courses ({subjects.length})
          </h3>
          {loading ? (
            <p style={{ color: "#ccc", textAlign: "center" }}>Loading courses...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className="student-table" style={{
                width: "100%",
                minWidth: 900,
                background: "transparent",
                color: "#fff",
                fontSize: "1.05rem"
              }}>
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject._id} style={{
                      background: "rgba(32,38,48,0.77)",
                      borderRadius: 7
                    }}>
                      <td>{subject.semester}</td>
                      <td>{subject.courseCode}</td>
                      <td>{subject.courseName}</td>
                      <td>{subject.credits}</td>
                      <td>{subject.grade}</td>
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
