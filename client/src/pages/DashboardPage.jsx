// // // // import Statistics from "../components/Statistics";
// // // // import SearchStudent from "../components/SearchStudent";
// // // // import SortControls from "../components/SortControls";
// // // // import StudentList from "../components/StudentList";
// // // // // Fetch students, stats, etc. (similar logic as your previous App.jsx)

// // // // // export default function DashboardPage() {
// // // // //   // ...Copy relevant state/effects/handlers from your App.jsx except add/edit forms
// // // // //   // Use StudentList, SearchStudent, SortControls, Statistics
// // // // //   return (
// // // // //     <>
// // // // //       <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // // //         <h1>Student Dashboard</h1>
// // // // //         <SearchStudent />
// // // // //       </div>
// // // // //       <Statistics stats={stats} />
// // // // //       <SortControls onSort={handleSort} onLoadSample={handleLoadSample} sortInfo={sortInfo} />
// // // // //       <StudentList students={students} loading={loading} onDelete={handleDeleteStudent} onUpdate={handleUpdateStudent} />
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from "react";
// // // // import StudentList from "../components/StudentList";
// // // // import SearchStudent from "../components/SearchStudent";
// // // // import SortControls from "../components/SortControls";
// // // // import Statistics from "../components/Statistics";
// // // // import { studentService } from "../services/api";

// // // // export default function DashboardPage() {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [sortInfo, setSortInfo] = useState(null);

// // // //   useEffect(() => { fetchStudents(); fetchStatistics(); }, []);

// // // //   const fetchStudents = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setStudents(await studentService.getAll());
// // // //     } catch (error) {
// // // //       alert('Failed to fetch students');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchStatistics = async () => {
// // // //     try {
// // // //       setStats(await studentService.getStatistics());
// // // //     } catch (e) {
// // // //       console.error('Stats error:', e);
// // // //     }
// // // //   };

// // // //   const handleDeleteStudent = async (id) => {
// // // //     if (!window.confirm('Delete this student?')) return;
// // // //     try {
// // // //       await studentService.delete(id);
// // // //       await fetchStudents();
// // // //       await fetchStatistics();
// // // //     } catch (error) {
// // // //       alert('Delete failed');
// // // //     }
// // // //   };

// // // //   const handleUpdateStudent = async (studentId, data) => {
// // // //     try {
// // // //       await studentService.update(studentId, data);
// // // //       await fetchStudents();
// // // //       await fetchStatistics();
// // // //       alert('Student updated successfully!');
// // // //     } catch (error) {
// // // //       alert(error.response?.data?.message || 'Failed to update');
// // // //     }
// // // //   };

// // // //   const handleSort = async (algorithm, sortBy) => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const data = await studentService.sort(algorithm, sortBy);
// // // //       setStudents(data.students);
// // // //       setSortInfo(data.metadata);
// // // //     } catch (error) {
// // // //       alert("Sort failed");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleLoadSample = async () => {
// // // //     if (students.length > 0 && !window.confirm('Clear existing data?')) return;
// // // //     try {
// // // //       setLoading(true);
// // // //       await studentService.loadSampleData();
// // // //       await fetchStudents();
// // // //       await fetchStatistics();
// // // //       alert('Sample data loaded!');
// // // //     } catch (error) {
// // // //       alert('Failed to load sample');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };
// // // // return (
// // // //   <div
// // // //     style={{
// // // //       maxWidth: 1200,
// // // //       margin: "40px auto",
// // // //       background: "#fff",
// // // //       borderRadius: 10,
// // // //       padding: "32px 40px",
// // // //     }}
// // // //   >
// // // //     <div
// // // //       style={{
// // // //         display: "flex",
// // // //         alignItems: "flex-start",
// // // //         justifyContent: "space-between",
// // // //         gap: 48,
// // // //       }}
// // // //     >
// // // //       {/* Left/main column */}
// // // //       <div style={{ flex: "1 1 700px" }}>
// // // //         <h1 style={{ fontSize: 36, marginBottom: 10 }}>
// // // //           🎓 Student Ranking System
// // // //         </h1>
// // // //         <div
// // // //           style={{
// // // //             fontSize: 16,
// // // //             marginBottom: 32,
// // // //             color: "#444",
// // // //           }}
// // // //         >
// // // //           DSA Project - Sorting &amp; Binary Search
// // // //         </div>
// // // //         <Statistics stats={stats} />
// // // //         <div style={{ margin: "32px 0 24px" }}>
// // // //           <SortControls
// // // //             onSort={handleSort}
// // // //             onLoadSample={handleLoadSample}
// // // //             sortInfo={sortInfo}
// // // //           />
// // // //         </div>
// // // //         <StudentList
// // // //           students={students}
// // // //           loading={loading}
// // // //           onDelete={handleDeleteStudent}
// // // //           onUpdate={handleUpdateStudent}
// // // //         />
// // // //       </div>
// // // //       {/* Right/search column */}
// // // //       <div
// // // //         style={{
// // // //           flex: "0 0 320px",
// // // //           background: "#f6f8fa",
// // // //           padding: 24,
// // // //           borderRadius: 8,
// // // //           minWidth: 260,
// // // //         }}
// // // //       >
// // // //         <h2 style={{ fontSize: 24, marginBottom: 18 }}>
// // // //           <span role="img" aria-label="search">
// // // //             🔍
// // // //           </span>{" "}
// // // //           Binary Search
// // // //         </h2>
// // // //         <SearchStudent />
// // // //         <div style={{ fontSize: 14, marginTop: 10, color: "#666" }}>
// // // //           Binary Search - O(log n)
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );
// // // // }




















// // // import { useState, useEffect } from "react";
// // // import StudentList from "../components/StudentList";
// // // import SearchStudent from "../components/SearchStudent";
// // // import SortControls from "../components/SortControls";
// // // import Statistics from "../components/Statistics";
// // // import { studentService } from "../services/api";

// // // export default function DashboardPage() {
// // //   const [students, setStudents] = useState([]);
// // //   const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
// // //   const [loading, setLoading] = useState(false);
// // //   const [sortInfo, setSortInfo] = useState(null);

// // //   useEffect(() => { fetchStudents(); fetchStatistics(); }, []);

// // //   const fetchStudents = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setStudents(await studentService.getAll());
// // //     } catch (error) {
// // //       alert('Failed to fetch students');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const fetchStatistics = async () => {
// // //     try {
// // //       setStats(await studentService.getStatistics());
// // //     } catch (e) {
// // //       console.error('Stats error:', e);
// // //     }
// // //   };

// // //   const handleDeleteStudent = async (id) => {
// // //     if (!window.confirm('Delete this student?')) return;
// // //     try {
// // //       await studentService.delete(id);
// // //       await fetchStudents();
// // //       await fetchStatistics();
// // //     } catch (error) {
// // //       alert('Delete failed');
// // //     }
// // //   };

// // //   const handleUpdateStudent = async (studentId, data) => {
// // //     try {
// // //       await studentService.update(studentId, data);
// // //       await fetchStudents();
// // //       await fetchStatistics();
// // //       alert('Student updated successfully!');
// // //     } catch (error) {
// // //       alert(error.response?.data?.message || 'Failed to update');
// // //     }
// // //   };

// // //   const handleSort = async (algorithm, sortBy) => {
// // //     try {
// // //       setLoading(true);
// // //       const data = await studentService.sort(algorithm, sortBy);
// // //       setStudents(data.students);
// // //       setSortInfo(data.metadata);
// // //     } catch (error) {
// // //       alert("Sort failed");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleLoadSample = async () => {
// // //     if (students.length > 0 && !window.confirm('Clear existing data?')) return;
// // //     try {
// // //       setLoading(true);
// // //       await studentService.loadSampleData();
// // //       await fetchStudents();
// // //       await fetchStatistics();
// // //       alert('Sample data loaded!');
// // //     } catch (error) {
// // //       alert('Failed to load sample');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // ... your fetchStudents, fetchStatistics, and handler functions unchanged

// // //   return (
// // //     <div
// // //       style={{
// // //         maxWidth: 1200,
// // //         margin: "40px auto",
// // //         background: "#fff",
// // //         borderRadius: 10,
// // //         padding: "32px 40px",
// // //       }}
// // //     >
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           alignItems: "flex-start",
// // //           justifyContent: "space-between",
// // //           gap: 48,
// // //         }}
// // //       >
// // //         {/* Left/main column */}
// // //         <div style={{ flex: "1 1 700px" }}>
// // //           <h1 style={{ fontSize: 36, marginBottom: 10 }}>
// // //             🎓 Student Ranking System
// // //           </h1>
// // //           <div style={{
// // //             fontSize: 16,
// // //             marginBottom: 32,
// // //             color: "#444",
// // //           }}>
// // //             DSA Project - Sorting & Binary Search
// // //           </div>
// // //           <Statistics stats={stats} />
// // //           <div style={{ margin: "32px 0 24px" }}>
// // //             <SortControls
// // //               onSort={handleSort}
// // //               onLoadSample={handleLoadSample}
// // //               sortInfo={sortInfo}
// // //             />
// // //           </div>
// // //           <StudentList
// // //             students={students}
// // //             loading={loading}
// // //             onDelete={handleDeleteStudent}
// // //             onUpdate={handleUpdateStudent}
// // //           />
// // //         </div>
// // //         {/* Right/search column */}
// // //         <div
// // //           style={{
// // //             flex: "0 0 320px",
// // //             background: "#f6f8fa",
// // //             padding: 24,
// // //             borderRadius: 8,
// // //             minWidth: 260,
// // //           }}
// // //         >
// // //           <h2 style={{ fontSize: 24, marginBottom: 18 }}>
// // //             <span role="img" aria-label="search">
// // //               🔍
// // //             </span>{" "}
// // //             Binary Search
// // //           </h2>
// // //           <SearchStudent />
// // //           <div style={{ fontSize: 14, marginTop: 10, color: "#666" }}>
// // //             Binary Search - O(log n)
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState, useEffect } from "react";
// // import StudentList from "../components/StudentList";
// // import SearchStudent from "../components/SearchStudent";
// // import SortControls from "../components/SortControls";
// // import Statistics from "../components/Statistics";
// // import { studentService } from "../services/api";

// // export default function DashboardPage() {
// //   const [students, setStudents] = useState([]);
// //   const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
// //   const [loading, setLoading] = useState(false);
// //   const [sortInfo, setSortInfo] = useState(null);

// //   useEffect(() => { fetchStudents(); fetchStatistics(); }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       setLoading(true);
// //       setStudents(await studentService.getAll());
// //     } catch (error) {
// //       alert('Failed to fetch students');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchStatistics = async () => {
// //     try {
// //       setStats(await studentService.getStatistics());
// //     } catch (e) {
// //       console.error('Stats error:', e);
// //     }
// //   };

// //   const handleDeleteStudent = async (id) => {
// //     if (!window.confirm('Delete this student?')) return;
// //     try {
// //       await studentService.delete(id);
// //       await fetchStudents();
// //       await fetchStatistics();
// //     } catch (error) {
// //       alert('Delete failed');
// //     }
// //   };

// //   const handleUpdateStudent = async (studentId, data) => {
// //     try {
// //       await studentService.update(studentId, data);
// //       await fetchStudents();
// //       await fetchStatistics();
// //       alert('Student updated successfully!');
// //     } catch (error) {
// //       alert(error.response?.data?.message || 'Failed to update');
// //     }
// //   };

// //   const handleSort = async (algorithm, sortBy) => {
// //     try {
// //       setLoading(true);
// //       const data = await studentService.sort(algorithm, sortBy);
// //       setStudents(data.students);
// //       setSortInfo(data.metadata);
// //     } catch (error) {
// //       alert("Sort failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleLoadSample = async () => {
// //     if (students.length > 0 && !window.confirm('Clear existing data?')) return;
// //     try {
// //       setLoading(true);
// //       await studentService.loadSampleData();
// //       await fetchStudents();
// //       await fetchStatistics();
// //       alert('Sample data loaded!');
// //     } catch (error) {
// //       alert('Failed to load sample');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // The grid/flex layout for the dashboard
// //   return (
// //     <div
// //       style={{
// //         maxWidth: 1300,
// //         margin: "40px auto",
// //         padding: "36px 32px",
// //         background: "#fff",
// //         borderRadius: 12,
// //         boxShadow: "0 2px 20px 0 rgba(30,50,80,0.08)"
// //       }}
// //     >
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "flex-start",
// //           alignItems: "flex-start",
// //           gap: 44
// //         }}
// //       >
// //         {/* Main column */}
// //         <div style={{
// //           flex: 3,
// //           minWidth: 0 // allow shrinking
// //         }}>
// //           <h1 style={{ fontSize: 36, marginBottom: 10 }}>🎓 Student Ranking System</h1>
// //           <div style={{ fontSize: 17, marginBottom: 34, color: "#497" }}>
// //             DSA Project - Sorting &amp; Binary Search
// //           </div>
// //           <Statistics stats={stats} />
// //           <div style={{ margin: "32px 0 24px" }}>
// //             <SortControls
// //               onSort={handleSort}
// //               onLoadSample={handleLoadSample}
// //               sortInfo={sortInfo}
// //             />
// //           </div>
// //           <StudentList
// //             students={students}
// //             loading={loading}
// //             onDelete={handleDeleteStudent}
// //             onUpdate={handleUpdateStudent}
// //           />
// //         </div>
// //         {/* Right/search card */}
// //         <div style={{
// //           flex: 1,
// //           minWidth: 310,
// //           background: "#f7fafd",
// //           padding: 30,
// //           borderRadius: 10,
// //           boxShadow: "0 3px 20px 0 rgba(30,60,130,0.06)"
// //         }}>
// //           <h2 style={{
// //             fontSize: 21,
// //             fontWeight: 700,
// //             marginBottom: 18,
// //             color: "#163865"
// //           }}>
// //             <span role="img" aria-label="search">🔍</span> Binary Search
// //           </h2>
// //           <SearchStudent />
// //           <div style={{
// //             fontSize: 13, marginTop: 16, color: "#888"
// //           }}>
// //             Binary Search - O(log n)
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import StudentList from "../components/StudentList";
// import SortControls from "../components/SortControls";
// import Statistics from "../components/Statistics";
// import { studentService } from "../services/api";

// export default function DashboardPage() {
//   const [students, setStudents] = useState([]);
//   const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
//   const [loading, setLoading] = useState(false);
//   const [sortInfo, setSortInfo] = useState(null);

//   useEffect(() => { fetchStudents(); fetchStatistics(); }, []);

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       setStudents(await studentService.getAll());
//     } catch (error) {
//       alert('Failed to fetch students');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchStatistics = async () => {
//     try {
//       setStats(await studentService.getStatistics());
//     } catch (e) {
//       console.error('Stats error:', e);
//     }
//   };

//   const handleDeleteStudent = async (id) => {
//     if (!window.confirm('Delete this student?')) return;
//     try {
//       await studentService.delete(id);
//       await fetchStudents();
//       await fetchStatistics();
//     } catch (error) {
//       alert('Delete failed');
//     }
//   };

//   const handleUpdateStudent = async (studentId, data) => {
//     try {
//       await studentService.update(studentId, data);
//       await fetchStudents();
//       await fetchStatistics();
//       alert('Student updated successfully!');
//     } catch (error) {
//       alert(error.response?.data?.message || 'Failed to update');
//     }
//   };

//   const handleSort = async (algorithm, sortBy) => {
//     try {
//       setLoading(true);
//       const data = await studentService.sort(algorithm, sortBy);
//       setStudents(data.students);
//       setSortInfo(data.metadata);
//     } catch (error) {
//       alert("Sort failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadSample = async () => {
//     if (students.length > 0 && !window.confirm('Clear existing data?')) return;
//     try {
//       setLoading(true);
//       await studentService.loadSampleData();
//       await fetchStudents();
//       await fetchStatistics();
//       alert('Sample data loaded!');
//     } catch (error) {
//       alert('Failed to load sample');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "90vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#1F2121"
//       }}
//     >
//       <div
//         style={{
//           background: "#1F2121",
//           borderRadius: 20,
//           width: 5660,
//           maxWidth: "vw",
//           padding: "42px 40px 36px 40px",
//           boxShadow: "#1F2121"
//         }}
//       >
//         <h1 style={{ 
//           textAlign: "center", 
//           color: "#fff", 
//           marginBottom: 20,
//           fontWeight: 700,
//           fontSize: "2.2rem" 
//         }}>
//           🎓 Student Dashboard
//         </h1>

//         <div style={{ marginBottom: 26 }}>
//           <Statistics stats={stats} />
//         </div>

//         <SortControls
//           onSort={handleSort}
//           onLoadSample={handleLoadSample}
//           sortInfo={sortInfo}
//         />

//         <div style={{ marginTop: 24 }}>
//           <StudentList
//             students={students}
//             loading={loading}
//             onDelete={handleDeleteStudent}
//             onUpdate={handleUpdateStudent}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import StudentList from "../components/StudentList";
import Statistics from "../components/Statistics";
import { studentService } from "../services/api";
import SubjectDetails from "../components/SubjectDetails";

function DashboardPage() {
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
  const [loading, setLoading] = useState(false);
  const [sortInfo, setSortInfo] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
    fetchStatistics();
  }, []);
  const fetchStudents = async () => {
    try {
      setLoading(true);
      setStudents(await studentService.getAll());
    } catch (error) {
      alert("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };
  const fetchStatistics = async () => {
    try {
      setStats(await studentService.getStatistics());
    } catch (e) {
      console.error("Stats error:", e);
    }
  };
  const handleDeleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;
    try {
      await studentService.delete(id);
      await fetchStudents();
      await fetchStatistics();
    } catch (error) {
      alert("Delete failed");
    }
  };
  const handleUpdateStudent = async (studentId, data) => {
    try {
      await studentService.update(studentId, data);
      await fetchStudents();
      await fetchStatistics();
      alert("Student updated successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update");
    }
  };

  // SORTING
  const [algorithm, setAlgorithm] = useState("merge");
  const handleSort = async (algorithm, sortBy) => {
    try {
      setLoading(true);
      const data = await studentService.sort(algorithm, sortBy);
      setStudents(data.students);
      setSortInfo(data.metadata);
    } catch (error) {
      alert("Sort failed");
    } finally {
      setLoading(false);
    }
  };
  const handleLoadSample = async () => {
    if (students.length > 0 && !window.confirm('Clear existing data?')) return;
    try {
      setLoading(true);
      await studentService.loadSampleData();
      await fetchStudents();
      await fetchStatistics();
      alert('Sample data loaded!');
    } catch (error) {
      alert('Failed to load sample');
    } finally {
      setLoading(false);
    }
  };

  // SEARCH: Filter students client-side
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.studentId.toLowerCase().includes(search.toLowerCase()) ||
    (s.department && s.department.toLowerCase().includes(search.toLowerCase()))
  );

  // STYLES
  const sortBtnStyle = {
    background: "#232b36",
    border: "2px solid #41b9fa",
    color: "#41b9fa",
    padding: "10px 22px",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 8,
    marginRight: 10,
    cursor: "pointer"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#171b21",
        padding: "44px 0"
      }}
    >
      <h1 style={{
        textAlign: "center", marginBottom: 30, fontWeight: 700,
        color: "#fff", fontSize: "2.5rem", letterSpacing: 1, textShadow: "0 2px 8px #0006"
      }}>
        🎓 Student Dashboard
      </h1>

      {/* Statistics (top row) */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 32
      }}>
        <Statistics stats={stats} />
      </div>

      {/* Search and Sort Controls */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 22,
        margin: "0 auto 40px auto",
        maxWidth: 1200,
      }}>
        <input
          type="text"
          placeholder="Search by name, ID, department..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            minWidth: "260px",
            padding: "12px 20px",
            borderRadius: 8,
            border: "2px solid #41b9fa",
            background: "#181d29",
            color: "#fff",
            fontSize: 16,
            marginRight: 8,
            outline: "none"
          }}
        />
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <label style={{ marginRight: 10, fontWeight: 600, color: "#fff" }}>Algorithm</label>
          <select
            value={algorithm}
            onChange={e => setAlgorithm(e.target.value)}
            style={{
              background: "#181d29",
              color: "#fff",
              padding: "9px 18px",
              border: "1.5px solid #41b9fa",
              borderRadius: 8,
              fontSize: 15,
              marginRight: 14,
              minWidth: 120
            }}>
            <option value="merge">Merge Sort (Best)</option>
            <option value="quick">Quick Sort (Fast avg)</option>
            <option value="bubble">Bubble Sort (Simple)</option>
            <option value="insertion">Insertion Sort (Small)</option>
          </select>
        </div>
        <button
          onClick={() => handleSort(algorithm, "score")}
          style={sortBtnStyle}>
          By Score
        </button>
        <button
          onClick={() => handleSort(algorithm, "name")}
          style={sortBtnStyle}>
          By Name
        </button>
        {/* <button
          onClick={handleLoadSample}
          style={{ ...sortBtnStyle, background: '#15a3d2', color: '#fff', border: 'none' }}>
          Load Sample
        </button> */}
      </div>

      {/* Rankings Table */}
      <div style={{
        display: "flex", justifyContent: "center", width: "100%"
      }}>
        <div style={{
          background: "#232b36",
          borderRadius: 18,
          padding: "36px 26px",
          boxShadow: "0 3px 32px 0 rgba(30,50,80,0.20)",
          width: "92vw",
          maxWidth: 1300,
          margin: "0 auto"
        }}>
          <StudentList
            students={filteredStudents}
            loading={loading}
            onDelete={handleDeleteStudent}
            onUpdate={handleUpdateStudent}
            onView={studentId => setSelectedStudent({ id: studentId })}
          />
        </div>
      </div>

      {/* View-only modal for student subjects/details */}
      {selectedStudent && (
        <SubjectDetails
          studentId={selectedStudent.id}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}

export default DashboardPage;
