// // // // import StudentForm from "../components/StudentForm";
// // // // import { studentService } from "../services/api";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function AddStudentPage() {
// // // //   const navigate = useNavigate();

// // // //   const handleAddStudent = async (data) => {
// // // //     try {
// // // //       await studentService.create(data);
// // // //       alert("Student added!");
// // // //       navigate("/");
// // // //     } catch (error) {
// // // //       alert(error.response?.data?.message || "Failed to add");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ maxWidth: 500, margin: "40px auto", padding: 32, background: "#23272f", borderRadius: 12 }}>
// // // //       <h2 style={{ textAlign: "center", marginBottom: 26 }}>Add New Student</h2>
// // // //       <StudentForm onSubmit={handleAddStudent} />
// // // //     </div>
// // // //   );
// // // // }









// // // import StudentForm from "../components/StudentForm";
// // // import { useNavigate } from "react-router-dom";
// // // import { studentService } from "../services/api";

// // // export default function AddStudentPage() {
// // //   const navigate = useNavigate();

// // //   const handleAddStudent = async (data) => {
// // //     try {
// // //       await studentService.create(data);
// // //       alert("Student added!");
// // //       navigate("/");
// // //     } catch (error) {
// // //       alert(error.response?.data?.message || "Failed to add");
// // //     }
// // //   };

// // //   return (
// // //     <div style={{
// // //       maxWidth: 500, margin: "40px auto", background: "#23272f", padding: 32, borderRadius: 16
// // //     }}>
// // //       <h2 style={{ textAlign: "center", marginBottom: 28 }}>Add New Student</h2>
// // //       <StudentForm onSubmit={handleAddStudent} />
// // //     </div>
// // //   );
// // // }



// // import { useState } from "react";
// // import { studentService } from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // export default function AddStudentPage() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     studentId: "",
// //     rollNumber: "",
// //     name: "",
// //     email: "",
// //     phone: "",
// //     dateOfBirth: "",
// //     department: "",
// //   });

// //   const handleAddStudent = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await studentService.create(formData);
// //       setFormData({
// //         studentId: "",
// //         rollNumber: "",
// //         name: "",
// //         email: "",
// //         phone: "",
// //         dateOfBirth: "",
// //         department: "",
// //       });
// //       alert("Student added!");
// //       navigate("/");
// //     } catch (error) {
// //       alert(error.response?.data?.message || "Failed to add");
// //     }
// //   };

// //   return (
// //     <div style={{
// //       maxWidth: 500,
// //       margin: "40px auto",
// //       background: "#23272f",
// //       padding: 32,
// //       borderRadius: 16,
// //       boxShadow: "0 1px 14px rgba(30, 50, 130, 0.14)"
// //     }}>
// //       <h2 style={{ textAlign: "center", marginBottom: 28 }}>Add New Student</h2>
// //       <form onSubmit={handleAddStudent} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
// //         <input
// //           type="text"
// //           placeholder="Student ID"
// //           value={formData.studentId}
// //           onChange={e => setFormData({ ...formData, studentId: e.target.value })}
// //           required
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Roll Number"
// //           value={formData.rollNumber}
// //           onChange={e => setFormData({ ...formData, rollNumber: e.target.value })}
// //           required
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={formData.name}
// //           onChange={e => setFormData({ ...formData, name: e.target.value })}
// //           required
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={formData.email}
// //           onChange={e => setFormData({ ...formData, email: e.target.value })}
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Phone"
// //           value={formData.phone}
// //           onChange={e => setFormData({ ...formData, phone: e.target.value })}
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="date"
// //           placeholder="Date of Birth"
// //           value={formData.dateOfBirth}
// //           onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Department"
// //           value={formData.department}
// //           onChange={e => setFormData({ ...formData, department: e.target.value })}
// //           required
// //           style={{ padding: 9, fontSize: 16 }}
// //         />
// //         <button
// //           type="submit"
// //           style={{
// //             width: "100%",
// //             background: "#10b981",
// //             color: "#fff",
// //             padding: 12,
// //             border: "none",
// //             borderRadius: 6,
// //             fontSize: 16,
// //             fontWeight: "bold"
// //           }}>
// //           Add Student
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { studentService } from "../services/api";
// import { useNavigate } from "react-router-dom";

// export default function AddStudentPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     studentId: "",
//     rollNumber: "",
//     name: "",
//     email: "",
//     phone: "",
//     dateOfBirth: "",
//     department: "" // must match enum exactly
//   });

//   const handleAddStudent = async (e) => {
//     e.preventDefault();
//     try {
//       await studentService.create(formData);
//       setFormData({
//         studentId: "",
//         rollNumber: "",
//         name: "",
//         email: "",
//         phone: "",
//         dateOfBirth: "",
//         department: ""
//       });
//       alert("Student added!");
//       navigate("/");
//     } catch (error) {
//       alert(error.response?.data?.message || "Failed to add");
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: 1200,
//       margin: "40px auto",
//       background: "#232B36",
//       padding: 32,
//       borderRadius: 16,
//       boxShadow: "0 1px 14px rgba(186, 140, 48, 0.14)"
//     }}>
//       <h2 style={{ textAlign: "center", marginBottom: 28,color:"white"}}>Add New Student</h2>
//       <form onSubmit={handleAddStudent} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//         <input
//           type="text"
//           placeholder="Student ID"
//           value={formData.studentId}
//           onChange={e => setFormData({ ...formData, studentId: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="text"
//           placeholder="Roll Number"
//           value={formData.rollNumber}
//           onChange={e => setFormData({ ...formData, rollNumber: e.target.value })}
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={e => setFormData({ ...formData, name: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={e => setFormData({ ...formData, email: e.target.value })}
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={e => setFormData({ ...formData, phone: e.target.value })}
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <input
//           type="date"
//           placeholder="Date of Birth"
//           value={formData.dateOfBirth}
//           onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
//           style={{ padding: 9, fontSize: 16 }}
//         />
//         <select
//           value={formData.department}
//           onChange={e => setFormData({ ...formData, department: e.target.value })}
//           required
//           style={{ padding: 9, fontSize: 16 }}
//         >
//           <option value="">Select Department</option>
//           <option value="Computer Science">Computer Science</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Mechanical">Mechanical</option>
//           <option value="Civil">Civil</option>
//           <option value="Electrical">Electrical</option>
//         </select>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             background: "#10a0b9ff",
//             color: "#fff",
//             padding: 12,
//             border: "none",
//             borderRadius: 6,
//             fontSize: 16,
//             fontWeight: "bold"
//           }}>
//           Add Student
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { studentService } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddStudentPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    rollNumber: "",
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    department: ""
  });

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await studentService.create(formData);

      setFormData({
        studentId: "",
        rollNumber: "",
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        department: ""
      });

      alert("Student added!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add");
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
          Add New Student
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleAddStudent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px"
          }}
        >
          {/* INPUT STYLES */}
          {[
            ["Student ID", "studentId"],
            ["Roll Number", "rollNumber"],
            ["Name", "name"],
            ["Email", "email"],
            ["Phone", "phone"]
          ].map(([label, field]) => (
            <input
              key={field}
              type="text"
              placeholder={label}
              value={formData[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              required={field === "studentId" || field === "name"}
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #3a4652",
                background: "#1e252d",
                color: "#fff"
              }}
            />
          ))}

          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #3a4652",
              background: "#1e252d",
              color: "#fff"
            }}
          />

          {/* SELECT */}
          <select
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
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
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>

          {/* SUBMIT BUTTON */}
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
            Add Student
          </button>
        </form> 
      </div>
    </div>
  );
}
