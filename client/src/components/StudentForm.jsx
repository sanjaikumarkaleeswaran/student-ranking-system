// import { useState } from 'react';

// function StudentForm({ onSubmit }) {
//   const [formData, setFormData] = useState({ studentId: '', name: '', score: '', department: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ ...formData, score: parseInt(formData.score) });
//     setFormData({ studentId: '', name: '', score: '', department: '' });
//   };

//   return (
//     <div className="card">
//       <h2>➕ Add Student</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Student ID</label>
//           <input type="text" name="studentId" value={formData.studentId} onChange={(e) => setFormData({...formData, studentId: e.target.value})} placeholder="CS2025001" required />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full name" required />
//         </div>
//         <div className="form-group">
//           <label>Score (0-100)</label>
//           <input type="number" name="score" value={formData.score} onChange={(e) => setFormData({...formData, score: e.target.value})} min="0" max="100" required />
//         </div>
//         <div className="form-group">
//           <label>Department</label>
//           <select name="department" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} required>
//             <option value="">Select</option>
//             <option value="Computer Science">Computer Science</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Civil">Civil</option>
//             <option value="Electrical">Electrical</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Add Student</button>
//       </form>
//     </div>
//   );
// }

// export default StudentForm;



import { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    studentId: '',
    rollNumber: '',
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      studentId: '',
      rollNumber: '',
      name: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      department: ''
    });
  };

  return (
    <div className="card">
      <h2>➕ Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="e.g., CS2025001"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="e.g., 101"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="student@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
