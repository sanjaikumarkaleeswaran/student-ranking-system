// // // // // import mongoose from 'mongoose';

// // // // // const studentSchema = new mongoose.Schema({
// // // // //   studentId: { type: String, required: true, unique: true },
// // // // //   name: { type: String, required: true },
// // // // //   score: { type: Number, required: true, min: 0, max: 100 },
// // // // //   department: { type: String, required: true },
// // // // //   rank: { type: Number, default: 0 }
// // // // // }, { timestamps: true });

// // // // // studentSchema.virtual('grade').get(function() {
// // // // //   if (this.score >= 90) return 'A';
// // // // //   if (this.score >= 80) return 'B';
// // // // //   if (this.score >= 70) return 'C';
// // // // //   if (this.score >= 60) return 'D';
// // // // //   return 'F';
// // // // // });

// // // // // studentSchema.set('toJSON', { virtuals: true });

// // // // // export default mongoose.model('Student', studentSchema);








// // // // import mongoose from 'mongoose';

// // // // const studentSchema = new mongoose.Schema({
// // // //   studentId: {
// // // //     type: String,
// // // //     required: true,
// // // //     unique: true,
// // // //     trim: true
// // // //   },
// // // //   rollNumber: {
// // // //     type: String,
// // // //     required: false,  // Changed to false for backward compatibility
// // // //     trim: true,
// // // //     default: 'N/A'    // Default value for old records
// // // //   },
// // // //   name: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true
// // // //   },
// // // //   score: {
// // // //     type: Number,
// // // //     required: true,
// // // //     min: 0,
// // // //     max: 100
// // // //   },
// // // //   department: {
// // // //     type: String,
// // // //     required: true,
// // // //     enum: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
// // // //   },
// // // //   rank: {
// // // //     type: Number,
// // // //     default: 0
// // // //   }
// // // // }, {
// // // //   timestamps: true
// // // // });

// // // // // Virtual field for grade
// // // // studentSchema.virtual('grade').get(function() {
// // // //   if (this.score >= 90) return 'A';
// // // //   if (this.score >= 80) return 'B';
// // // //   if (this.score >= 70) return 'C';
// // // //   if (this.score >= 60) return 'D';
// // // //   return 'F';
// // // // });

// // // // // Ensure virtuals are included when converting to JSON
// // // // studentSchema.set('toJSON', { virtuals: true });
// // // // studentSchema.set('toObject', { virtuals: true });

// // // // const Student = mongoose.model('Student', studentSchema);

// // // // export default Student;



// // // import mongoose from 'mongoose';

// // // // Subject/Course Schema
// // // const subjectSchema = new mongoose.Schema({
// // //   semester: {
// // //     type: Number,
// // //     required: true,
// // //     min: 1,
// // //     max: 8
// // //   },
// // //   courseCode: {
// // //     type: String,
// // //     required: true,
// // //     trim: true
// // //   },
// // //   courseName: {
// // //     type: String,
// // //     required: true,
// // //     trim: true
// // //   },
// // //   credits: {
// // //     type: Number,
// // //     required: true,
// // //     min: 1,
// // //     max: 10
// // //   },
// // //   grade: {
// // //     type: String,
// // //     required: true,
// // //     enum: ['O', 'A+', 'A', 'B+', 'B', 'C', 'D', 'F'],
// // //     trim: true
// // //   }
// // // }, { _id: true });

// // // // Student Schema
// // // const studentSchema = new mongoose.Schema({
// // //   studentId: {
// // //     type: String,
// // //     required: true,
// // //     unique: true,
// // //     trim: true
// // //   },
// // //   rollNumber: {
// // //     type: String,
// // //     required: false,
// // //     trim: true,
// // //     default: 'N/A'
// // //   },
// // //   name: {
// // //     type: String,
// // //     required: true,
// // //     trim: true
// // //   },
// // //   program: {
// // //     type: String,
// // //     default: 'BSc - SOFTWARE SYSTEMS',
// // //     trim: true
// // //   },
// // //   score: {
// // //     type: Number,
// // //     required: true,
// // //     min: 0,
// // //     max: 100
// // //   },
// // //   department: {
// // //     type: String,
// // //     required: true,
// // //     enum: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
// // //   },
// // //   subjects: [subjectSchema],
// // //   rank: {
// // //     type: Number,
// // //     default: 0
// // //   }
// // // }, {
// // //   timestamps: true
// // // });

// // // // Virtual field for overall grade
// // // studentSchema.virtual('grade').get(function() {
// // //   if (this.score >= 90) return 'A';
// // //   if (this.score >= 80) return 'B';
// // //   if (this.score >= 70) return 'C';
// // //   if (this.score >= 60) return 'D';
// // //   return 'F';
// // // });

// // // studentSchema.set('toJSON', { virtuals: true });
// // // studentSchema.set('toObject', { virtuals: true });

// // // const Student = mongoose.model('Student', studentSchema);

// // // export default Student;




// // import mongoose from 'mongoose';

// // // Grade point mapping
// // const gradePoints = {
// //   'O': 10,
// //   'A+': 9,
// //   'A': 8,
// //   'B+': 7,
// //   'B': 6,
// //   'C': 5,
// //   'D': 4,
// //   'F': 0
// // };

// // // Subject/Course Schema with marks
// // const subjectSchema = new mongoose.Schema({
// //   semester: {
// //     type: Number,
// //     required: true,
// //     min: 1,
// //     max: 8
// //   },
// //   courseCode: {
// //     type: String,
// //     required: true,
// //     trim: true
// //   },
// //   courseName: {
// //     type: String,
// //     required: true,
// //     trim: true
// //   },
// //   credits: {
// //     type: Number,
// //     required: true,
// //     min: 1,
// //     max: 10
// //   },
// //   marks: {
// //     type: Number,
// //     required: true,
// //     min: 0,
// //     max: 100
// //   },
// //   grade: {
// //     type: String,
// //     required: true,
// //     enum: ['O', 'A+', 'A', 'B+', 'B', 'C', 'D', 'F'],
// //     trim: true
// //   }
// // }, { _id: true });

// // // Student Schema
// // const studentSchema = new mongoose.Schema({
// //   studentId: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     trim: true
// //   },
// //   rollNumber: {
// //     type: String,
// //     required: false,
// //     trim: true,
// //     default: 'N/A'
// //   },
// //   name: {
// //     type: String,
// //     required: true,
// //     trim: true
// //   },
// //   program: {
// //     type: String,
// //     default: 'BSc - SOFTWARE SYSTEMS',
// //     trim: true
// //   },
// //   score: {
// //     type: Number,
// //     required: true,
// //     min: 0,
// //     max: 100
// //   },
// //   department: {
// //     type: String,
// //     required: true,
// //     enum: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
// //   },
// //   subjects: [subjectSchema],
// //   rank: {
// //     type: Number,
// //     default: 0
// //   }
// // }, {
// //   timestamps: true
// // });

// // // Virtual field for overall grade
// // studentSchema.virtual('grade').get(function() {
// //   if (this.score >= 90) return 'A';
// //   if (this.score >= 80) return 'B';
// //   if (this.score >= 70) return 'C';
// //   if (this.score >= 60) return 'D';
// //   return 'F';
// // });

// // // Virtual field for CGPA calculation
// // studentSchema.virtual('cgpa').get(function() {
// //   if (!this.subjects || this.subjects.length === 0) return 0;
  
// //   let totalCredits = 0;
// //   let totalGradePoints = 0;
  
// //   this.subjects.forEach(subject => {
// //     const gradePoint = gradePoints[subject.grade] || 0;
// //     totalGradePoints += gradePoint * subject.credits;
// //     totalCredits += subject.credits;
// //   });
  
// //   return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
// // });

// // // Helper function to calculate grade from marks
// // studentSchema.statics.calculateGrade = function(marks) {
// //   if (marks >= 90) return 'O';
// //   if (marks >= 80) return 'A+';
// //   if (marks >= 70) return 'A';
// //   if (marks >= 60) return 'B+';
// //   if (marks >= 50) return 'B';
// //   if (marks >= 40) return 'C';
// //   if (marks >= 35) return 'D';
// //   return 'F';
// // };

// // studentSchema.set('toJSON', { virtuals: true });
// // studentSchema.set('toObject', { virtuals: true });

// // const Student = mongoose.model('Student', studentSchema);

// // export default Student;



// import mongoose from 'mongoose';

// // Grade point mapping
// const gradePoints = {
//   'O': 10,
//   'A+': 9,
//   'A': 8,
//   'B+': 7,
//   'B': 6,
//   'C': 5,
//   'D': 4,
//   'F': 0
// };

// // Subject/Course Schema - using grade directly
// const subjectSchema = new mongoose.Schema({
//   semester: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 8
//   },
//   courseCode: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   courseName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   credits: {
//     type: Number,
//     required: true,
//     min: 1,
//     max: 10
//   },
//   grade: {
//     type: String,
//     required: true,
//     enum: ['O', 'A+', 'A', 'B+', 'B', 'C', 'D', 'F'],
//     trim: true
//   }
// }, { _id: true });

// // Student Schema
// const studentSchema = new mongoose.Schema({
//   studentId: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   rollNumber: {
//     type: String,
//     required: false,
//     trim: true,
//     default: 'N/A'
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     trim: true,
//     default: ''
//   },
//   phone: {
//     type: String,
//     trim: true,
//     default: ''
//   },
//   dateOfBirth: {
//     type: String,
//     trim: true,
//     default: ''
//   },
//   program: {
//     type: String,
//     default: 'BSc - SOFTWARE SYSTEMS',
//     trim: true
//   },
//   score: {
//     type: Number,
//     default: 0,
//     min: 0,
//     max: 100
//   },
//   department: {
//     type: String,
//     required: true,
//     enum: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
//   },
//   subjects: [subjectSchema],
//   rank: {
//     type: Number,
//     default: 0
//   }
// }, {
//   timestamps: true
// });

// // Virtual field for overall grade
// studentSchema.virtual('grade').get(function() {
//   if (this.score >= 90) return 'A';
//   if (this.score >= 80) return 'B';
//   if (this.score >= 70) return 'C';
//   if (this.score >= 60) return 'D';
//   return 'F';
// });

// // Virtual field for CGPA calculation
// studentSchema.virtual('cgpa').get(function() {
//   if (!this.subjects || this.subjects.length === 0) return 0;
  
//   let totalCredits = 0;
//   let totalGradePoints = 0;
  
//   this.subjects.forEach(subject => {
//     const gradePoint = gradePoints[subject.grade] || 0;
//     totalGradePoints += gradePoint * subject.credits;
//     totalCredits += subject.credits;
//   });
  
//   return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
// });

// studentSchema.set('toJSON', { virtuals: true });
// studentSchema.set('toObject', { virtuals: true });

// const Student = mongoose.model('Student', studentSchema);

// export default Student;





import mongoose from 'mongoose';

// Grade point mapping
const gradePoints = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'D': 4,
  'F': 0
};

// Subject/Course Schema - using grade directly
const subjectSchema = new mongoose.Schema({
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  courseCode: {
    type: String,
    required: true,
    trim: true
  },
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  credits: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  grade: {
    type: String,
    required: true,
    enum: ['O', 'A+', 'A', 'B+', 'B', 'C', 'D', 'F'],
    trim: true
  }
}, { _id: true });

// Student Schema
const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  rollNumber: {
    type: String,
    required: false,
    trim: true,
    default: 'N/A'
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: ''
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  dateOfBirth: {
    type: String,
    trim: true,
    default: ''
  },
  program: {
    type: String,
    default: 'BSc - SOFTWARE SYSTEMS',
    trim: true
  },
  score: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  department: {
    type: String,
    required: true,
    enum: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical']
  },
  subjects: [subjectSchema],
  rank: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Virtual field for CGPA calculation
studentSchema.virtual('cgpa').get(function() {
  if (!this.subjects || this.subjects.length === 0) return 0;
  
  let totalCredits = 0;
  let totalGradePoints = 0;
  
  this.subjects.forEach(subject => {
    const gradePoint = gradePoints[subject.grade] || 0;
    totalGradePoints += gradePoint * subject.credits;
    totalCredits += subject.credits;
  });
  
  return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
});

// Virtual field for overall grade - CALCULATED FROM CGPA (not score)
studentSchema.virtual('grade').get(function() {
  const cgpa = parseFloat(this.cgpa);
  
  if (cgpa >= 9.0) return 'O';   // O: 9.0-10.0
  if (cgpa >= 8.0) return 'A+';  // A+: 8.0-8.9
  if (cgpa >= 7.0) return 'A';   // A: 7.0-7.9
  if (cgpa >= 6.0) return 'B+';  // B+: 6.0-6.9
  if (cgpa >= 5.0) return 'B';   // B: 5.0-5.9
  if (cgpa >= 4.0) return 'C';   // C: 4.0-4.9
  if (cgpa > 0) return 'D';      // D: >0-3.9
  return 'F';                     // F: 0
});

studentSchema.set('toJSON', { virtuals: true });
studentSchema.set('toObject', { virtuals: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
