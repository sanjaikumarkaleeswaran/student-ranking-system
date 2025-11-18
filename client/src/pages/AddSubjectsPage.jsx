// import { useNavigate } from "react-router-dom";
// // You can import and use your subject form here

// export default function AddSubjectsPage() {
//   const navigate = useNavigate();

//   const handleAddSubject = async (data) => {
//     // Send subject data to your backend/service
//     alert("Subject added (stub handler)!");
//     navigate("/");
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "40px auto", padding: 32, background: "#23272f", borderRadius: 12 }}>
//       <h2 style={{ textAlign: "center", marginBottom: 26 }}>Add Subject</h2>
//       {/* Replace below with your real subject form */}
//       <form onSubmit={e => { e.preventDefault(); handleAddSubject({ /* gather data here */ }); }}>
//         <input required placeholder="Subject Name" style={{ width: "100%", marginBottom: 18, padding: 9 }} />
//         <input type="number" required placeholder="Marks or Credits" style={{ width: "100%", marginBottom: 18, padding: 9 }} />
//         <button type="submit" style={{ width: "100%", background: "#10b981", color: "#fff", padding: 12, border: "none", borderRadius: 6, fontSize: 16 }}>
//           Add Subject
//         </button>
//       </form>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { studentService } from "../services/api";

// export default function AddSubjectsPage() {
//   const [students, setStudents] = useState([]);
//   const [formData, setFormData] = useState({
//     studentId: "",
//     semester: "",
//     courseCode: "",
//     courseName: "",
//     credits: "",
//     grade: "",
//   });

//   // Fetch all students for dropdown
//   useEffect(() => {
//     async function fetchStudents() {
//       try {
//         const all = await studentService.getAll(); // your API should give list of all students
//         setStudents(all);
//       } catch (e) {
//         setStudents([]);
//       }
//     }
//     fetchStudents();
//   }, []);

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       await studentService.addSubject(formData.studentId, {
//         semester: parseInt(formData.semester),
//         courseCode: formData.courseCode,
//         courseName: formData.courseName,
//         credits: parseInt(formData.credits),
//         grade: formData.grade,
//       });
//       setFormData({
//         studentId: "",
//         semester: "",
//         courseCode: "",
//         courseName: "",
//         credits: "",
//         grade: "",
//       });
//       alert("Subject added!");
//     } catch (error) {
//       alert("Failed to add subject");
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: 1200,
//       margin: "40px auto",
//       background: "#232B36",
//       padding: 32,
//       borderRadius: 16,
//       boxShadow: "0 1px 14px rgba(30, 50, 130, 0.14)"
//     }}>
//       <h2 style={{ textAlign: "center", marginBottom: 28 }}>Add Subject</h2>
//       <form onSubmit={handleAdd} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//         <select
//           value={formData.studentId}
//           onChange={e => setFormData({ ...formData, studentId: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         >
//           <option value="">Select Student</option>
//           {students.map(student => (
//             <option value={student.studentId} key={student.studentId}>
//               {student.studentId} - {student.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           placeholder="Semester"
//           value={formData.semester}
//           onChange={e => setFormData({ ...formData, semester: e.target.value })}
//           min={1}
//           max={8}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="text"
//           placeholder="Course Code"
//           value={formData.courseCode}
//           onChange={e => setFormData({ ...formData, courseCode: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="text"
//           placeholder="Course Name"
//           value={formData.courseName}
//           onChange={e => setFormData({ ...formData, courseName: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="number"
//           placeholder="Credits"
//           value={formData.credits}
//           onChange={e => setFormData({ ...formData, credits: e.target.value })}
//           min={1}
//           max={10}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <select
//           required
//           value={formData.grade}
//           onChange={e => setFormData({ ...formData, grade: e.target.value })}
//           style={{ padding: 9, fontSize: 16 }}
//         >
//           <option value="">Select Grade</option>
//           <option value="O">O (Outstanding)</option>
//           <option value="A+">A+</option>
//           <option value="A">A</option>
//           <option value="B+">B+</option>
//           <option value="B">B</option>
//           <option value="C">C</option>
//           <option value="D">D</option>
//           <option value="F">F (Fail)</option>
//         </select>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             background: "#10b981",
//             color: "#fff",
//             padding: 12,
//             border: "none",
//             borderRadius: 6,
//             fontSize: 16,
//             fontWeight: "bold"
//           }}>
//           Add Subject
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { studentService } from "../services/api";

export default function AddSubjectsPage() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    studentId: "",
    semester: "",
    courseCode: "",
    courseName: "",
    credits: "",
    grade: "",
  });

  // Fetch all students
  useEffect(() => {
    async function fetchStudents() {
      try {
        const all = await studentService.getAll();
        setStudents(all);
      } catch (e) {
        setStudents([]);
      }
    }
    fetchStudents();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await studentService.addSubject(formData.studentId, {
        semester: parseInt(formData.semester),
        courseCode: formData.courseCode,
        courseName: formData.courseName,
        credits: parseInt(formData.credits),
        grade: formData.grade,
      });

      setFormData({
        studentId: "",
        semester: "",
        courseCode: "",
        courseName: "",
        credits: "",
        grade: "",
      });

      alert("Subject added!");
    } catch (error) {
      alert("Failed to add subject");
    }
  };

  return (
<div
  style={{
    width: "100%",
    padding: "16px 0 32px 0",
    background: "#1a1f25",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  }}
    >
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          background: "#232B36",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 1px 14px rgba(186, 140, 48, 0.14)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "28px",
            color: "#fff",
            fontSize: "26px",
            fontWeight: "600"
          }}
        >
          Add Subject
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleAdd}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >

          {/* Student Dropdown */}
          <select
            value={formData.studentId}
            onChange={(e) =>
              setFormData({ ...formData, studentId: e.target.value })
            }
            required
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          >
            <option value="">Select Student</option>
            {students.map((student) => (
              <option key={student.studentId} value={student.studentId}>
                {student.studentId} - {student.name}
              </option>
            ))}
          </select>

          {/* Inputs */}
          <input
            type="number"
            placeholder="Semester"
            value={formData.semester}
            onChange={(e) =>
              setFormData({ ...formData, semester: e.target.value })
            }
            required
            min={1}
            max={8}
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          />

          <input
            type="text"
            placeholder="Course Code"
            value={formData.courseCode}
            onChange={(e) =>
              setFormData({ ...formData, courseCode: e.target.value })
            }
            required
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          />

          <input
            type="text"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={(e) =>
              setFormData({ ...formData, courseName: e.target.value })
            }
            required
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          />

          <input
            type="number"
            placeholder="Credits"
            value={formData.credits}
            onChange={(e) =>
              setFormData({ ...formData, credits: e.target.value })
            }
            required
            min={1}
            max={10}
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          />

          {/* Grade Dropdown */}
          <select
            value={formData.grade}
            onChange={(e) =>
              setFormData({ ...formData, grade: e.target.value })
            }
            required
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
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

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#38B6FF",
              color: "#fff",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Add Subject
          </button>
        </form>
      </div>
    </div>
  );
}
