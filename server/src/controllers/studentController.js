// // // // // // import Student from '../models/Student.js';
// // // // // // import { SortingAlgorithms } from './sortingAlgorithms.js';

// // // // // // const assignRanks = (students) => {
// // // // // //   let currentRank = 1;
// // // // // //   for (let i = 0; i < students.length; i++) {
// // // // // //     if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
// // // // // //     students[i].rank = currentRank;
// // // // // //   }
// // // // // //   return students;
// // // // // // };

// // // // // // export const getAllStudents = async (req, res) => {
// // // // // //   try {
// // // // // //     const students = await Student.find().sort({ score: -1 });
// // // // // //     const ranked = assignRanks(students);
// // // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // // //     res.json(ranked);
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const createStudent = async (req, res) => {
// // // // // //   try {
// // // // // //     const { studentId, name, score, department } = req.body;
// // // // // //     const existing = await Student.findOne({ studentId });
// // // // // //     if (existing) return res.status(400).json({ message: 'Student ID exists' });
// // // // // //     const student = await new Student({ studentId, name, score, department }).save();
// // // // // //     const all = await Student.find().sort({ score: -1 });
// // // // // //     const ranked = assignRanks(all);
// // // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // // //     res.status(201).json(student);
// // // // // //   } catch (error) {
// // // // // //     res.status(400).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const deleteStudent = async (req, res) => {
// // // // // //   try {
// // // // // //     await Student.deleteOne({ studentId: req.params.id });
// // // // // //     const all = await Student.find().sort({ score: -1 });
// // // // // //     const ranked = assignRanks(all);
// // // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // // //     res.json({ message: 'Deleted successfully' });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const sortStudents = async (req, res) => {
// // // // // //   try {
// // // // // //     const { algorithm, sortBy } = req.query;
// // // // // //     const students = (await Student.find()).map(s => s.toObject());
// // // // // //     const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
// // // // // //     const start = Date.now();
// // // // // //     let sorted;
// // // // // //     switch (algorithm) {
// // // // // //       case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
// // // // // //       case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
// // // // // //       case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
// // // // // //       case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
// // // // // //       default: return res.status(400).json({ message: 'Invalid algorithm' });
// // // // // //     }
// // // // // //     if (sortBy !== 'name') assignRanks(sorted);
// // // // // //     res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const searchStudent = async (req, res) => {
// // // // // //   try {
// // // // // //     const { studentId } = req.query;
// // // // // //     if (!studentId) return res.status(400).json({ message: 'Student ID required' });
// // // // // //     const students = (await Student.find()).map(s => s.toObject());
// // // // // //     const result = SortingAlgorithms.binarySearch(students, studentId);
// // // // // //     res.json({ found: !!result.student, student: result.student, comparisons: result.comparisons, message: result.student ? '' : 'Not found' });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const getStatistics = async (req, res) => {
// // // // // //   try {
// // // // // //     const students = await Student.find();
// // // // // //     if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
// // // // // //     const scores = students.map(s => s.score);
// // // // // //     res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const loadSampleData = async (req, res) => {
// // // // // //   try {
// // // // // //     await Student.deleteMany({});
// // // // // //     const samples = [
// // // // // //       { studentId: 'CS2025001', name: 'Aarav Kumar', score: 95, department: 'Computer Science' },
// // // // // //       { studentId: 'EC2025015', name: 'Diya Sharma', score: 88, department: 'Electronics' },
// // // // // //       { studentId: 'ME2025023', name: 'Arjun Patel', score: 92, department: 'Mechanical' },
// // // // // //       { studentId: 'CS2025007', name: 'Ananya Singh', score: 96, department: 'Computer Science' },
// // // // // //       { studentId: 'EE2025019', name: 'Rohan Gupta', score: 85, department: 'Electrical' },
// // // // // //       { studentId: 'CV2025031', name: 'Priya Reddy', score: 90, department: 'Civil' },
// // // // // //       { studentId: 'CS2025012', name: 'Vivaan Mehta', score: 94, department: 'Computer Science' },
// // // // // //       { studentId: 'EC2025008', name: 'Ishaan Verma', score: 87, department: 'Electronics' },
// // // // // //       { studentId: 'ME2025045', name: 'Aisha Khan', score: 91, department: 'Mechanical' },
// // // // // //       { studentId: 'CS2025003', name: 'Advait Joshi', score: 89, department: 'Computer Science' }
// // // // // //     ];
// // // // // //     const students = await Student.insertMany(samples);
// // // // // //     const sorted = students.sort((a, b) => b.score - a.score);
// // // // // //     const ranked = assignRanks(sorted);
// // // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // // //     res.json({ message: 'Sample data loaded', count: students.length });
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const getStudentById = async (req, res) => {
// // // // // //   try {
// // // // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // // // //     res.json(student);
// // // // // //   } catch (error) {
// // // // // //     res.status(500).json({ message: error.message });
// // // // // //   }
// // // // // // };

// // // // // // export const updateStudent = async (req, res) => {
// // // // // //   try {
// // // // // //     const { name, score, department } = req.body;
// // // // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // // // //     if (name) student.name = name;
// // // // // //     if (score !== undefined) student.score = score;
// // // // // //     if (department) student.department = department;
// // // // // //     await student.save();
// // // // // //     const all = await Student.find().sort({ score: -1 });
// // // // // //     const ranked = assignRanks(all);
// // // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // // //     res.json(student);
// // // // // //   } catch (error) {
// // // // // //     res.status(400).json({ message: error.message });
// // // // // //   }
// // // // // // };



// // // // // import Student from '../models/Student.js';
// // // // // import { SortingAlgorithms } from './sortingAlgorithms.js';

// // // // // const assignRanks = (students) => {
// // // // //   let currentRank = 1;
// // // // //   for (let i = 0; i < students.length; i++) {
// // // // //     if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
// // // // //     students[i].rank = currentRank;
// // // // //   }
// // // // //   return students;
// // // // // };

// // // // // export const getAllStudents = async (req, res) => {
// // // // //   try {
// // // // //     const students = await Student.find().sort({ score: -1 });
// // // // //     const ranked = assignRanks(students);
// // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // //     res.json(ranked);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const createStudent = async (req, res) => {
// // // // //   try {
// // // // //     const { studentId, rollNumber, name, score, department } = req.body;
// // // // //     const existing = await Student.findOne({ studentId });
// // // // //     if (existing) return res.status(400).json({ message: 'Student ID exists' });
// // // // //     const student = await new Student({ studentId, rollNumber, name, score, department }).save();
// // // // //     const all = await Student.find().sort({ score: -1 });
// // // // //     const ranked = assignRanks(all);
// // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // //     res.status(201).json(student);
// // // // //   } catch (error) {
// // // // //     res.status(400).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const deleteStudent = async (req, res) => {
// // // // //   try {
// // // // //     await Student.deleteOne({ studentId: req.params.id });
// // // // //     const all = await Student.find().sort({ score: -1 });
// // // // //     const ranked = assignRanks(all);
// // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // //     res.json({ message: 'Deleted successfully' });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const sortStudents = async (req, res) => {
// // // // //   try {
// // // // //     const { algorithm, sortBy } = req.query;
// // // // //     const students = (await Student.find()).map(s => s.toObject());
// // // // //     const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
// // // // //     const start = Date.now();
// // // // //     let sorted;
// // // // //     switch (algorithm) {
// // // // //       case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
// // // // //       case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
// // // // //       case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
// // // // //       case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
// // // // //       default: return res.status(400).json({ message: 'Invalid algorithm' });
// // // // //     }
// // // // //     if (sortBy !== 'name') assignRanks(sorted);
// // // // //     res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const searchStudent = async (req, res) => {
// // // // //   try {
// // // // //     const { studentId } = req.query;
// // // // //     if (!studentId) return res.status(400).json({ message: 'Student ID required' });
    
// // // // //     const searchTerm = studentId.trim().toLowerCase();
// // // // //     const allStudents = await Student.find();
// // // // //     const studentsArray = allStudents.map(s => s.toObject());
    
// // // // //     const binaryResult = SortingAlgorithms.binarySearch(studentsArray, studentId);
    
// // // // //     if (binaryResult.student) {
// // // // //       return res.json({ 
// // // // //         found: true, 
// // // // //         student: binaryResult.student, 
// // // // //         comparisons: binaryResult.comparisons,
// // // // //         method: 'Binary Search (Exact Match)',
// // // // //         message: `Found exact match using Binary Search in ${binaryResult.comparisons} comparison(s)`
// // // // //       });
// // // // //     }
    
// // // // //     let partialMatches = [];
// // // // //     let linearComparisons = 0;
    
// // // // //     for (let student of studentsArray) {
// // // // //       linearComparisons++;
// // // // //       const idLower = student.studentId.toLowerCase();
// // // // //       const nameLower = student.name.toLowerCase();
// // // // //       const rollLower = student.rollNumber?.toLowerCase() || '';
      
// // // // //       if (idLower.includes(searchTerm) || nameLower.includes(searchTerm) || rollLower.includes(searchTerm)) {
// // // // //         partialMatches.push({
// // // // //           ...student,
// // // // //           matchType: idLower.includes(searchTerm) ? 'ID' : rollLower.includes(searchTerm) ? 'Roll Number' : 'Name',
// // // // //           relevance: idLower === searchTerm || nameLower === searchTerm || rollLower === searchTerm ? 1 : 0.5
// // // // //         });
// // // // //       }
// // // // //     }
    
// // // // //     if (partialMatches.length > 0) {
// // // // //       partialMatches.sort((a, b) => b.relevance - a.relevance);
// // // // //       return res.json({
// // // // //         found: true,
// // // // //         student: partialMatches[0],
// // // // //         allMatches: partialMatches,
// // // // //         comparisons: linearComparisons,
// // // // //         method: 'Linear Search (Partial Match)',
// // // // //         message: `Found ${partialMatches.length} match(es) using Linear Search in ${linearComparisons} comparison(s)`
// // // // //       });
// // // // //     }
    
// // // // //     res.json({ 
// // // // //       found: false, 
// // // // //       student: null,
// // // // //       comparisons: binaryResult.comparisons + linearComparisons,
// // // // //       method: 'Binary + Linear Search',
// // // // //       message: `No matches found after checking all ${linearComparisons} student(s)`
// // // // //     });
    
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const getStatistics = async (req, res) => {
// // // // //   try {
// // // // //     const students = await Student.find();
// // // // //     if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
// // // // //     const scores = students.map(s => s.score);
// // // // //     res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const loadSampleData = async (req, res) => {
// // // // //   try {
// // // // //     await Student.deleteMany({});
// // // // //     const samples = [
// // // // //       { studentId: 'CS2025001', rollNumber: '101', name: 'Aarav Kumar', score: 95, department: 'Computer Science' },
// // // // //       { studentId: 'EC2025015', rollNumber: '102', name: 'Diya Sharma', score: 88, department: 'Electronics' },
// // // // //       { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', score: 92, department: 'Mechanical' },
// // // // //       { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', score: 96, department: 'Computer Science' },
// // // // //       { studentId: 'EE2025019', rollNumber: '105', name: 'Rohan Gupta', score: 85, department: 'Electrical' },
// // // // //       { studentId: 'CV2025031', rollNumber: '106', name: 'Priya Reddy', score: 90, department: 'Civil' },
// // // // //       { studentId: 'CS2025012', rollNumber: '107', name: 'Vivaan Mehta', score: 94, department: 'Computer Science' },
// // // // //       { studentId: 'EC2025008', rollNumber: '108', name: 'Ishaan Verma', score: 87, department: 'Electronics' },
// // // // //       { studentId: 'ME2025045', rollNumber: '109', name: 'Aisha Khan', score: 91, department: 'Mechanical' },
// // // // //       { studentId: 'CS2025003', rollNumber: '110', name: 'Advait Joshi', score: 89, department: 'Computer Science' }
// // // // //     ];
// // // // //     const students = await Student.insertMany(samples);
// // // // //     const sorted = students.sort((a, b) => b.score - a.score);
// // // // //     const ranked = assignRanks(sorted);
// // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // //     res.json({ message: 'Sample data loaded', count: students.length });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const getStudentById = async (req, res) => {
// // // // //   try {
// // // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // // //     res.json(student);
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ message: error.message });
// // // // //   }
// // // // // };

// // // // // export const updateStudent = async (req, res) => {
// // // // //   try {
// // // // //     const { rollNumber, name, score, department } = req.body;
// // // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // // //     if (rollNumber) student.rollNumber = rollNumber;
// // // // //     if (name) student.name = name;
// // // // //     if (score !== undefined) student.score = score;
// // // // //     if (department) student.department = department;
// // // // //     await student.save();
// // // // //     const all = await Student.find().sort({ score: -1 });
// // // // //     const ranked = assignRanks(all);
// // // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // // //     res.json(student);
// // // // //   } catch (error) {
// // // // //     res.status(400).json({ message: error.message });
// // // // //   }
// // // // // };




// // // // import Student from '../models/Student.js';
// // // // import { SortingAlgorithms } from './sortingAlgorithms.js';

// // // // const assignRanks = (students) => {
// // // //   let currentRank = 1;
// // // //   for (let i = 0; i < students.length; i++) {
// // // //     if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
// // // //     students[i].rank = currentRank;
// // // //   }
// // // //   return students;
// // // // };

// // // // export const getAllStudents = async (req, res) => {
// // // //   try {
// // // //     const students = await Student.find().sort({ score: -1 });
// // // //     const ranked = assignRanks(students);
// // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // //     res.json(ranked);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const createStudent = async (req, res) => {
// // // //   try {
// // // //     const { studentId, rollNumber, name, score, department } = req.body;
// // // //     const existing = await Student.findOne({ studentId });
// // // //     if (existing) return res.status(400).json({ message: 'Student ID exists' });
// // // //     const student = await new Student({ studentId, rollNumber, name, score, department }).save();
// // // //     const all = await Student.find().sort({ score: -1 });
// // // //     const ranked = assignRanks(all);
// // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // //     res.status(201).json(student);
// // // //   } catch (error) {
// // // //     res.status(400).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const deleteStudent = async (req, res) => {
// // // //   try {
// // // //     await Student.deleteOne({ studentId: req.params.id });
// // // //     const all = await Student.find().sort({ score: -1 });
// // // //     const ranked = assignRanks(all);
// // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // //     res.json({ message: 'Deleted successfully' });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const sortStudents = async (req, res) => {
// // // //   try {
// // // //     const { algorithm, sortBy } = req.query;
// // // //     const students = (await Student.find()).map(s => s.toObject());
// // // //     const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
// // // //     const start = Date.now();
// // // //     let sorted;
// // // //     switch (algorithm) {
// // // //       case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
// // // //       case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
// // // //       case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
// // // //       case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
// // // //       default: return res.status(400).json({ message: 'Invalid algorithm' });
// // // //     }
// // // //     if (sortBy !== 'name') assignRanks(sorted);
// // // //     res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const searchStudent = async (req, res) => {
// // // //   try {
// // // //     const { studentId } = req.query;
// // // //     if (!studentId) return res.status(400).json({ message: 'Student ID required' });
    
// // // //     const searchTerm = studentId.trim().toLowerCase();
// // // //     const allStudents = await Student.find();
// // // //     const studentsArray = allStudents.map(s => s.toObject());
    
// // // //     const binaryResult = SortingAlgorithms.binarySearch(studentsArray, studentId);
    
// // // //     if (binaryResult.student) {
// // // //       return res.json({ 
// // // //         found: true, 
// // // //         student: binaryResult.student, 
// // // //         comparisons: binaryResult.comparisons,
// // // //         method: 'Binary Search (Exact Match)',
// // // //         message: `Found exact match using Binary Search in ${binaryResult.comparisons} comparison(s)`
// // // //       });
// // // //     }
    
// // // //     let partialMatches = [];
// // // //     let linearComparisons = 0;
    
// // // //     for (let student of studentsArray) {
// // // //       linearComparisons++;
// // // //       const idLower = student.studentId.toLowerCase();
// // // //       const nameLower = student.name.toLowerCase();
// // // //       const rollLower = student.rollNumber?.toLowerCase() || '';
      
// // // //       if (idLower.includes(searchTerm) || nameLower.includes(searchTerm) || rollLower.includes(searchTerm)) {
// // // //         partialMatches.push({
// // // //           ...student,
// // // //           matchType: idLower.includes(searchTerm) ? 'ID' : rollLower.includes(searchTerm) ? 'Roll Number' : 'Name',
// // // //           relevance: idLower === searchTerm || nameLower === searchTerm || rollLower === searchTerm ? 1 : 0.5
// // // //         });
// // // //       }
// // // //     }
    
// // // //     if (partialMatches.length > 0) {
// // // //       partialMatches.sort((a, b) => b.relevance - a.relevance);
// // // //       return res.json({
// // // //         found: true,
// // // //         student: partialMatches[0],
// // // //         allMatches: partialMatches,
// // // //         comparisons: linearComparisons,
// // // //         method: 'Linear Search (Partial Match)',
// // // //         message: `Found ${partialMatches.length} match(es) using Linear Search in ${linearComparisons} comparison(s)`
// // // //       });
// // // //     }
    
// // // //     res.json({ 
// // // //       found: false, 
// // // //       student: null,
// // // //       comparisons: binaryResult.comparisons + linearComparisons,
// // // //       method: 'Binary + Linear Search',
// // // //       message: `No matches found after checking all ${linearComparisons} student(s)`
// // // //     });
    
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const getStatistics = async (req, res) => {
// // // //   try {
// // // //     const students = await Student.find();
// // // //     if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
// // // //     const scores = students.map(s => s.score);
// // // //     res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const loadSampleData = async (req, res) => {
// // // //   try {
// // // //     await Student.deleteMany({});
// // // //     const samples = [
// // // //       { 
// // // //         studentId: 'CS2025001', 
// // // //         rollNumber: '101', 
// // // //         name: 'Aarav Kumar', 
// // // //         score: 95, 
// // // //         department: 'Computer Science',
// // // //         program: 'BSc - Computer Science',
// // // //         subjects: [
// // // //           { semester: 2, courseCode: '22BCC21', courseName: 'Communicative English - II', credits: 4, marks: 85, grade: 'A+' },
// // // //           { semester: 2, courseCode: '22BCC22', courseName: 'Mathematics - II', credits: 4, marks: 92, grade: 'O' },
// // // //           { semester: 2, courseCode: '22BCT21', courseName: 'Advanced C Programming', credits: 3, marks: 88, grade: 'A+' },
// // // //           { semester: 2, courseCode: '22BCT22', courseName: 'Java Programming', credits: 3, marks: 90, grade: 'O' }
// // // //         ]
// // // //       },
// // // //       { 
// // // //         studentId: 'EC2025015', 
// // // //         rollNumber: '102', 
// // // //         name: 'Diya Sharma', 
// // // //         score: 88, 
// // // //         department: 'Electronics',
// // // //         program: 'BSc - Electronics',
// // // //         subjects: [
// // // //           { semester: 2, courseCode: '22BEC21', courseName: 'Circuit Theory', credits: 4, marks: 78, grade: 'A' },
// // // //           { semester: 2, courseCode: '22BEC22', courseName: 'Digital Electronics', credits: 4, marks: 85, grade: 'A+' }
// // // //         ]
// // // //       },
// // // //       { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', score: 92, department: 'Mechanical' },
// // // //       { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', score: 96, department: 'Computer Science' }
// // // //     ];
// // // //     const students = await Student.insertMany(samples);
// // // //     const sorted = students.sort((a, b) => b.score - a.score);
// // // //     const ranked = assignRanks(sorted);
// // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // //     res.json({ message: 'Sample data loaded with subjects and marks', count: students.length });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const getStudentById = async (req, res) => {
// // // //   try {
// // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // //     res.json(student);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const updateStudent = async (req, res) => {
// // // //   try {
// // // //     const { rollNumber, name, score, department } = req.body;
// // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // // //     if (rollNumber) student.rollNumber = rollNumber;
// // // //     if (name) student.name = name;
// // // //     if (score !== undefined) student.score = score;
// // // //     if (department) student.department = department;
// // // //     await student.save();
// // // //     const all = await Student.find().sort({ score: -1 });
// // // //     const ranked = assignRanks(all);
// // // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // // //     res.json(student);
// // // //   } catch (error) {
// // // //     res.status(400).json({ message: error.message });
// // // //   }
// // // // };

// // // // // Subject operations
// // // // export const getStudentSubjects = async (req, res) => {
// // // //   try {
// // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // //     if (!student) return res.status(404).json({ message: 'Student not found' });
// // // //     res.json(student.subjects || []);
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };
// // // // export const addSubject = async (req, res) => {
// // // //   try {
// // // //     const { semester, courseCode, courseName, credits, marks } = req.body;
// // // //     const student = await Student.findOne({ studentId: req.params.id });
    
// // // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // // //     // Calculate grade from marks
// // // //     const grade = Student.calculateGrade(marks);
    
// // // //     student.subjects.push({ semester, courseCode, courseName, credits, marks, grade });
// // // //     await student.save();
    
// // // //     res.status(201).json(student.subjects);
// // // //   } catch (error) {
// // // //     res.status(400).json({ message: error.message });
// // // //   }
// // // // };

// // // // export const updateSubject = async (req, res) => {
// // // //   try {
// // // //     const { semester, courseCode, courseName, credits, marks } = req.body;
// // // //     const student = await Student.findOne({ studentId: req.params.id });
    
// // // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // // //     const subject = student.subjects.id(req.params.subjectId);
// // // //     if (!subject) return res.status(404).json({ message: 'Subject not found' });
    
// // // //     if (semester) subject.semester = semester;
// // // //     if (courseCode) subject.courseCode = courseCode;
// // // //     if (courseName) subject.courseName = courseName;
// // // //     if (credits) subject.credits = credits;
// // // //     if (marks !== undefined) {
// // // //       subject.marks = marks;
// // // //       subject.grade = Student.calculateGrade(marks);
// // // //     }
    
// // // //     await student.save();
// // // //     res.json(student.subjects);
// // // //   } catch (error) {
// // // //     res.status(400).json({ message: error.message });
// // // //   }
// // // // };
// // // // export const deleteSubject = async (req, res) => {
// // // //   try {
// // // //     const student = await Student.findOne({ studentId: req.params.id });
// // // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // // //     // Use pull instead of remove (Mongoose 6+ compatible)
// // // //     student.subjects.pull(req.params.subjectId);
// // // //     await student.save();
    
// // // //     res.json({ message: 'Subject deleted', subjects: student.subjects });
// // // //   } catch (error) {
// // // //     res.status(500).json({ message: error.message });
// // // //   }
// // // // };



// // // import Student from '../models/Student.js';
// // // import { SortingAlgorithms } from './sortingAlgorithms.js';

// // // const assignRanks = (students) => {
// // //   let currentRank = 1;
// // //   for (let i = 0; i < students.length; i++) {
// // //     if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
// // //     students[i].rank = currentRank;
// // //   }
// // //   return students;
// // // };

// // // export const getAllStudents = async (req, res) => {
// // //   try {
// // //     const students = await Student.find().sort({ score: -1 });
// // //     const ranked = assignRanks(students);
// // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // //     res.json(ranked);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const createStudent = async (req, res) => {
// // //   try {
// // //     const { studentId, rollNumber, name, score, department } = req.body;
// // //     const existing = await Student.findOne({ studentId });
// // //     if (existing) return res.status(400).json({ message: 'Student ID exists' });
// // //     const student = await new Student({ studentId, rollNumber, name, score, department }).save();
// // //     const all = await Student.find().sort({ score: -1 });
// // //     const ranked = assignRanks(all);
// // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // //     res.status(201).json(student);
// // //   } catch (error) {
// // //     res.status(400).json({ message: error.message });
// // //   }
// // // };

// // // export const deleteStudent = async (req, res) => {
// // //   try {
// // //     await Student.deleteOne({ studentId: req.params.id });
// // //     const all = await Student.find().sort({ score: -1 });
// // //     const ranked = assignRanks(all);
// // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // //     res.json({ message: 'Deleted successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const sortStudents = async (req, res) => {
// // //   try {
// // //     const { algorithm, sortBy } = req.query;
// // //     const students = (await Student.find()).map(s => s.toObject());
// // //     const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
// // //     const start = Date.now();
// // //     let sorted;
// // //     switch (algorithm) {
// // //       case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
// // //       case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
// // //       case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
// // //       case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
// // //       default: return res.status(400).json({ message: 'Invalid algorithm' });
// // //     }
// // //     if (sortBy !== 'name') assignRanks(sorted);
// // //     res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const searchStudent = async (req, res) => {
// // //   try {
// // //     const { studentId } = req.query;
// // //     if (!studentId) return res.status(400).json({ message: 'Student ID required' });
    
// // //     const searchTerm = studentId.trim().toLowerCase();
// // //     const allStudents = await Student.find();
// // //     const studentsArray = allStudents.map(s => s.toObject());
    
// // //     const binaryResult = SortingAlgorithms.binarySearch(studentsArray, studentId);
    
// // //     if (binaryResult.student) {
// // //       return res.json({ 
// // //         found: true, 
// // //         student: binaryResult.student, 
// // //         comparisons: binaryResult.comparisons,
// // //         method: 'Binary Search (Exact Match)',
// // //         message: `Found exact match using Binary Search in ${binaryResult.comparisons} comparison(s)`
// // //       });
// // //     }
    
// // //     let partialMatches = [];
// // //     let linearComparisons = 0;
    
// // //     for (let student of studentsArray) {
// // //       linearComparisons++;
// // //       const idLower = student.studentId.toLowerCase();
// // //       const nameLower = student.name.toLowerCase();
// // //       const rollLower = student.rollNumber?.toLowerCase() || '';
      
// // //       if (idLower.includes(searchTerm) || nameLower.includes(searchTerm) || rollLower.includes(searchTerm)) {
// // //         partialMatches.push({
// // //           ...student,
// // //           matchType: idLower.includes(searchTerm) ? 'ID' : rollLower.includes(searchTerm) ? 'Roll Number' : 'Name',
// // //           relevance: idLower === searchTerm || nameLower === searchTerm || rollLower === searchTerm ? 1 : 0.5
// // //         });
// // //       }
// // //     }
    
// // //     if (partialMatches.length > 0) {
// // //       partialMatches.sort((a, b) => b.relevance - a.relevance);
// // //       return res.json({
// // //         found: true,
// // //         student: partialMatches[0],
// // //         allMatches: partialMatches,
// // //         comparisons: linearComparisons,
// // //         method: 'Linear Search (Partial Match)',
// // //         message: `Found ${partialMatches.length} match(es) using Linear Search in ${linearComparisons} comparison(s)`
// // //       });
// // //     }
    
// // //     res.json({ 
// // //       found: false, 
// // //       student: null,
// // //       comparisons: binaryResult.comparisons + linearComparisons,
// // //       method: 'Binary + Linear Search',
// // //       message: `No matches found after checking all ${linearComparisons} student(s)`
// // //     });
    
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const getStatistics = async (req, res) => {
// // //   try {
// // //     const students = await Student.find();
// // //     if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
// // //     const scores = students.map(s => s.score);
// // //     res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const loadSampleData = async (req, res) => {
// // //   try {
// // //     await Student.deleteMany({});
// // //     const samples = [
// // //       { 
// // //         studentId: 'CS2025001', 
// // //         rollNumber: '101', 
// // //         name: 'Aarav Kumar', 
// // //         score: 95, 
// // //         department: 'Computer Science',
// // //         program: 'BSc - Computer Science',
// // //         subjects: [
// // //           { semester: 2, courseCode: '22BCC21', courseName: 'Communicative English - II', credits: 4, marks: 85, grade: 'A+' },
// // //           { semester: 2, courseCode: '22BCC22', courseName: 'Mathematics - II', credits: 4, marks: 92, grade: 'O' },
// // //           { semester: 2, courseCode: '22BCT21', courseName: 'Advanced C Programming', credits: 3, marks: 88, grade: 'A+' },
// // //           { semester: 2, courseCode: '22BCT22', courseName: 'Java Programming', credits: 3, marks: 90, grade: 'O' }
// // //         ]
// // //       },
// // //       { 
// // //         studentId: 'EC2025015', 
// // //         rollNumber: '102', 
// // //         name: 'Diya Sharma', 
// // //         score: 88, 
// // //         department: 'Electronics',
// // //         program: 'BSc - Electronics',
// // //         subjects: [
// // //           { semester: 2, courseCode: '22BEC21', courseName: 'Circuit Theory', credits: 4, marks: 78, grade: 'A' },
// // //           { semester: 2, courseCode: '22BEC22', courseName: 'Digital Electronics', credits: 4, marks: 85, grade: 'A+' }
// // //         ]
// // //       },
// // //       { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', score: 92, department: 'Mechanical' },
// // //       { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', score: 96, department: 'Computer Science' }
// // //     ];
// // //     const students = await Student.insertMany(samples);
// // //     const sorted = students.sort((a, b) => b.score - a.score);
// // //     const ranked = assignRanks(sorted);
// // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // //     res.json({ message: 'Sample data loaded with subjects and marks', count: students.length });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const getStudentById = async (req, res) => {
// // //   try {
// // //     const student = await Student.findOne({ studentId: req.params.id });
// // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // //     res.json(student);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const updateStudent = async (req, res) => {
// // //   try {
// // //     const { rollNumber, name, score, department } = req.body;
// // //     const student = await Student.findOne({ studentId: req.params.id });
// // //     if (!student) return res.status(404).json({ message: 'Not found' });
// // //     if (rollNumber) student.rollNumber = rollNumber;
// // //     if (name) student.name = name;
// // //     if (score !== undefined) student.score = score;
// // //     if (department) student.department = department;
// // //     await student.save();
// // //     const all = await Student.find().sort({ score: -1 });
// // //     const ranked = assignRanks(all);
// // //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// // //     res.json(student);
// // //   } catch (error) {
// // //     res.status(400).json({ message: error.message });
// // //   }
// // // };

// // // // Subject operations
// // // export const getStudentSubjects = async (req, res) => {
// // //   try {
// // //     const student = await Student.findOne({ studentId: req.params.id });
// // //     if (!student) return res.status(404).json({ message: 'Student not found' });
// // //     res.json(student.subjects || []);
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };

// // // export const addSubject = async (req, res) => {
// // //   try {
// // //     const { semester, courseCode, courseName, credits, marks } = req.body;
// // //     const student = await Student.findOne({ studentId: req.params.id });
    
// // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // //     // Calculate grade from marks
// // //     const grade = Student.calculateGrade(marks);
    
// // //     student.subjects.push({ semester, courseCode, courseName, credits, marks, grade });
// // //     await student.save();
    
// // //     res.status(201).json(student.subjects);
// // //   } catch (error) {
// // //     res.status(400).json({ message: error.message });
// // //   }
// // // };

// // // export const updateSubject = async (req, res) => {
// // //   try {
// // //     const { semester, courseCode, courseName, credits, marks } = req.body;
// // //     const student = await Student.findOne({ studentId: req.params.id });
    
// // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // //     const subject = student.subjects.id(req.params.subjectId);
// // //     if (!subject) return res.status(404).json({ message: 'Subject not found' });
    
// // //     if (semester) subject.semester = semester;
// // //     if (courseCode) subject.courseCode = courseCode;
// // //     if (courseName) subject.courseName = courseName;
// // //     if (credits) subject.credits = credits;
// // //     if (marks !== undefined) {
// // //       subject.marks = marks;
// // //       subject.grade = Student.calculateGrade(marks);
// // //     }
    
// // //     await student.save();
// // //     res.json(student.subjects);
// // //   } catch (error) {
// // //     res.status(400).json({ message: error.message });
// // //   }
// // // };

// // // // FIXED DELETE FUNCTION
// // // export const deleteSubject = async (req, res) => {
// // //   try {
// // //     const student = await Student.findOne({ studentId: req.params.id });
// // //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// // //     // Use pull() instead of .id().remove() - Mongoose 6+ compatible
// // //     student.subjects.pull(req.params.subjectId);
// // //     await student.save();
    
// // //     res.json({ message: 'Subject deleted', subjects: student.subjects });
// // //   } catch (error) {
// // //     res.status(500).json({ message: error.message });
// // //   }
// // // };



// // export const createStudent = async (req, res) => {
// //   try {
// //     const { studentId, rollNumber, name, email, phone, dateOfBirth, department } = req.body;
// //     const existing = await Student.findOne({ studentId });
// //     if (existing) return res.status(400).json({ message: 'Student ID exists' });
// //     const student = await new Student({ 
// //       studentId, 
// //       rollNumber, 
// //       name, 
// //       email, 
// //       phone, 
// //       dateOfBirth, 
// //       score: 0, // Default score
// //       department 
// //     }).save();
// //     const all = await Student.find().sort({ score: -1 });
// //     const ranked = assignRanks(all);
// //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// //     res.status(201).json(student);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // export const updateStudent = async (req, res) => {
// //   try {
// //     const { rollNumber, name, email, phone, dateOfBirth, score, department } = req.body;
// //     const student = await Student.findOne({ studentId: req.params.id });
// //     if (!student) return res.status(404).json({ message: 'Not found' });
// //     if (rollNumber) student.rollNumber = rollNumber;
// //     if (name) student.name = name;
// //     if (email) student.email = email;
// //     if (phone) student.phone = phone;
// //     if (dateOfBirth) student.dateOfBirth = dateOfBirth;
// //     if (score !== undefined) student.score = score;
// //     if (department) student.department = department;
// //     await student.save();
// //     const all = await Student.find().sort({ score: -1 });
// //     const ranked = assignRanks(all);
// //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// //     res.json(student);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // export const addSubject = async (req, res) => {
// //   try {
// //     const { semester, courseCode, courseName, credits, grade } = req.body;
// //     const student = await Student.findOne({ studentId: req.params.id });
    
// //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// //     student.subjects.push({ semester, courseCode, courseName, credits, grade });
// //     await student.save();
    
// //     res.status(201).json(student.subjects);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // export const updateSubject = async (req, res) => {
// //   try {
// //     const { semester, courseCode, courseName, credits, grade } = req.body;
// //     const student = await Student.findOne({ studentId: req.params.id });
    
// //     if (!student) return res.status(404).json({ message: 'Student not found' });
    
// //     const subject = student.subjects.id(req.params.subjectId);
// //     if (!subject) return res.status(404).json({ message: 'Subject not found' });
    
// //     if (semester) subject.semester = semester;
// //     if (courseCode) subject.courseCode = courseCode;
// //     if (courseName) subject.courseName = courseName;
// //     if (credits) subject.credits = credits;
// //     if (grade) subject.grade = grade;
    
// //     await student.save();
// //     res.json(student.subjects);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // export const loadSampleData = async (req, res) => {
// //   try {
// //     await Student.deleteMany({});
// //     const samples = [
// //       { 
// //         studentId: 'CS2025001', 
// //         rollNumber: '101', 
// //         name: 'Aarav Kumar',
// //         email: 'aarav@example.com',
// //         phone: '9876543210',
// //         dateOfBirth: '2003-05-15',
// //         score: 95, 
// //         department: 'Computer Science',
// //         program: 'BSc - Computer Science',
// //         subjects: [
// //           { semester: 2, courseCode: '22BCC21', courseName: 'Communicative English - II', credits: 4, grade: 'A+' },
// //           { semester: 2, courseCode: '22BCC22', courseName: 'Mathematics - II', credits: 4, grade: 'O' },
// //           { semester: 2, courseCode: '22BCT21', courseName: 'Advanced C Programming', credits: 3, grade: 'A+' },
// //           { semester: 2, courseCode: '22BCT22', courseName: 'Java Programming', credits: 3, grade: 'O' }
// //         ]
// //       },
// //       { 
// //         studentId: 'EC2025015', 
// //         rollNumber: '102', 
// //         name: 'Diya Sharma',
// //         email: 'diya@example.com',
// //         phone: '9876543211',
// //         dateOfBirth: '2003-08-20',
// //         score: 88, 
// //         department: 'Electronics',
// //         program: 'BSc - Electronics',
// //         subjects: [
// //           { semester: 2, courseCode: '22BEC21', courseName: 'Circuit Theory', credits: 4, grade: 'A' },
// //           { semester: 2, courseCode: '22BEC22', courseName: 'Digital Electronics', credits: 4, grade: 'A+' }
// //         ]
// //       },
// //       { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', email: 'arjun@example.com', phone: '9876543212', dateOfBirth: '2003-12-10', score: 92, department: 'Mechanical' },
// //       { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', email: 'ananya@example.com', phone: '9876543213', dateOfBirth: '2003-03-25', score: 96, department: 'Computer Science' }
// //     ];
// //     const students = await Student.insertMany(samples);
// //     const sorted = students.sort((a, b) => b.score - a.score);
// //     const ranked = assignRanks(sorted);
// //     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
// //     res.json({ message: 'Sample data loaded with subjects', count: students.length });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };



// import Student from '../models/Student.js';
// import { SortingAlgorithms } from './sortingAlgorithms.js';

// const assignRanks = (students) => {
//   let currentRank = 1;
//   for (let i = 0; i < students.length; i++) {
//     if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
//     students[i].rank = currentRank;
//   }
//   return students;
// };

// export const getAllStudents = async (req, res) => {
//   try {
//     const students = await Student.find().sort({ score: -1 });
//     const ranked = assignRanks(students);
//     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
//     res.json(ranked);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const createStudent = async (req, res) => {
//   try {
//     const { studentId, rollNumber, name, email, phone, dateOfBirth, department } = req.body;
//     const existing = await Student.findOne({ studentId });
//     if (existing) return res.status(400).json({ message: 'Student ID exists' });
//     const student = await new Student({ 
//       studentId, 
//       rollNumber, 
//       name, 
//       email, 
//       phone, 
//       dateOfBirth, 
//       score: 0,
//       department 
//     }).save();
//     const all = await Student.find().sort({ score: -1 });
//     const ranked = assignRanks(all);
//     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
//     res.status(201).json(student);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const deleteStudent = async (req, res) => {
//   try {
//     await Student.deleteOne({ studentId: req.params.id });
//     const all = await Student.find().sort({ score: -1 });
//     const ranked = assignRanks(all);
//     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
//     res.json({ message: 'Deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const sortStudents = async (req, res) => {
//   try {
//     const { algorithm, sortBy } = req.query;
//     const students = (await Student.find()).map(s => s.toObject());
//     const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
//     const start = Date.now();
//     let sorted;
//     switch (algorithm) {
//       case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
//       case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
//       case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
//       case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
//       default: return res.status(400).json({ message: 'Invalid algorithm' });
//     }
//     if (sortBy !== 'name') assignRanks(sorted);
//     res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const searchStudent = async (req, res) => {
//   try {
//     const { studentId } = req.query;
//     if (!studentId) return res.status(400).json({ message: 'Student ID required' });
    
//     const searchTerm = studentId.trim().toLowerCase();
//     const allStudents = await Student.find();
//     const studentsArray = allStudents.map(s => s.toObject());
    
//     const binaryResult = SortingAlgorithms.binarySearch(studentsArray, studentId);
    
//     if (binaryResult.student) {
//       return res.json({ 
//         found: true, 
//         student: binaryResult.student, 
//         comparisons: binaryResult.comparisons,
//         method: 'Binary Search (Exact Match)',
//         message: `Found exact match using Binary Search in ${binaryResult.comparisons} comparison(s)`
//       });
//     }
    
//     let partialMatches = [];
//     let linearComparisons = 0;
    
//     for (let student of studentsArray) {
//       linearComparisons++;
//       const idLower = student.studentId.toLowerCase();
//       const nameLower = student.name.toLowerCase();
//       const rollLower = student.rollNumber?.toLowerCase() || '';
      
//       if (idLower.includes(searchTerm) || nameLower.includes(searchTerm) || rollLower.includes(searchTerm)) {
//         partialMatches.push({
//           ...student,
//           matchType: idLower.includes(searchTerm) ? 'ID' : rollLower.includes(searchTerm) ? 'Roll Number' : 'Name',
//           relevance: idLower === searchTerm || nameLower === searchTerm || rollLower === searchTerm ? 1 : 0.5
//         });
//       }
//     }
    
//     if (partialMatches.length > 0) {
//       partialMatches.sort((a, b) => b.relevance - a.relevance);
//       return res.json({
//         found: true,
//         student: partialMatches[0],
//         allMatches: partialMatches,
//         comparisons: linearComparisons,
//         method: 'Linear Search (Partial Match)',
//         message: `Found ${partialMatches.length} match(es) using Linear Search in ${linearComparisons} comparison(s)`
//       });
//     }
    
//     res.json({ 
//       found: false, 
//       student: null,
//       comparisons: binaryResult.comparisons + linearComparisons,
//       method: 'Binary + Linear Search',
//       message: `No matches found after checking all ${linearComparisons} student(s)`
//     });
    
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getStatistics = async (req, res) => {
//   try {
//     const students = await Student.find();
//     if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
//     const scores = students.map(s => s.score);
//     res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const loadSampleData = async (req, res) => {
//   try {
//     await Student.deleteMany({});
//     const samples = [
//       { 
//         studentId: 'CS2025001', 
//         rollNumber: '101', 
//         name: 'Aarav Kumar',
//         email: 'aarav@example.com',
//         phone: '9876543210',
//         dateOfBirth: '2003-05-15',
//         score: 95, 
//         department: 'Computer Science',
//         program: 'BSc - Computer Science',
//         subjects: [
//           { semester: 2, courseCode: '22BCC21', courseName: 'Communicative English - II', credits: 4, grade: 'A+' },
//           { semester: 2, courseCode: '22BCC22', courseName: 'Mathematics - II', credits: 4, grade: 'O' },
//           { semester: 2, courseCode: '22BCT21', courseName: 'Advanced C Programming', credits: 3, grade: 'A+' },
//           { semester: 2, courseCode: '22BCT22', courseName: 'Java Programming', credits: 3, grade: 'O' }
//         ]
//       },
//       { 
//         studentId: 'EC2025015', 
//         rollNumber: '102', 
//         name: 'Diya Sharma',
//         email: 'diya@example.com',
//         phone: '9876543211',
//         dateOfBirth: '2003-08-20',
//         score: 88, 
//         department: 'Electronics',
//         program: 'BSc - Electronics',
//         subjects: [
//           { semester: 2, courseCode: '22BEC21', courseName: 'Circuit Theory', credits: 4, grade: 'A' },
//           { semester: 2, courseCode: '22BEC22', courseName: 'Digital Electronics', credits: 4, grade: 'A+' }
//         ]
//       },
//       { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', email: 'arjun@example.com', phone: '9876543212', dateOfBirth: '2003-12-10', score: 92, department: 'Mechanical' },
//       { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', email: 'ananya@example.com', phone: '9876543213', dateOfBirth: '2003-03-25', score: 96, department: 'Computer Science' }
//     ];
//     const students = await Student.insertMany(samples);
//     const sorted = students.sort((a, b) => b.score - a.score);
//     const ranked = assignRanks(sorted);
//     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
//     res.json({ message: 'Sample data loaded with subjects', count: students.length });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getStudentById = async (req, res) => {
//   try {
//     const student = await Student.findOne({ studentId: req.params.id });
//     if (!student) return res.status(404).json({ message: 'Not found' });
//     res.json(student);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const updateStudent = async (req, res) => {
//   try {
//     const { rollNumber, name, email, phone, dateOfBirth, score, department } = req.body;
//     const student = await Student.findOne({ studentId: req.params.id });
//     if (!student) return res.status(404).json({ message: 'Not found' });
//     if (rollNumber) student.rollNumber = rollNumber;
//     if (name) student.name = name;
//     if (email) student.email = email;
//     if (phone) student.phone = phone;
//     if (dateOfBirth) student.dateOfBirth = dateOfBirth;
//     if (score !== undefined) student.score = score;
//     if (department) student.department = department;
//     await student.save();
//     const all = await Student.find().sort({ score: -1 });
//     const ranked = assignRanks(all);
//     await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
//     res.json(student);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Subject operations
// export const getStudentSubjects = async (req, res) => {
//   try {
//     const student = await Student.findOne({ studentId: req.params.id });
//     if (!student) return res.status(404).json({ message: 'Student not found' });
//     res.json(student.subjects || []);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const addSubject = async (req, res) => {
//   try {
//     const { semester, courseCode, courseName, credits, grade } = req.body;
//     const student = await Student.findOne({ studentId: req.params.id });
    
//     if (!student) return res.status(404).json({ message: 'Student not found' });
    
//     student.subjects.push({ semester, courseCode, courseName, credits, grade });
//     await student.save();
    
//     res.status(201).json(student.subjects);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const updateSubject = async (req, res) => {
//   try {
//     const { semester, courseCode, courseName, credits, grade } = req.body;
//     const student = await Student.findOne({ studentId: req.params.id });
    
//     if (!student) return res.status(404).json({ message: 'Student not found' });
    
//     const subject = student.subjects.id(req.params.subjectId);
//     if (!subject) return res.status(404).json({ message: 'Subject not found' });
    
//     if (semester) subject.semester = semester;
//     if (courseCode) subject.courseCode = courseCode;
//     if (courseName) subject.courseName = courseName;
//     if (credits) subject.credits = credits;
//     if (grade) subject.grade = grade;
    
//     await student.save();
//     res.json(student.subjects);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const deleteSubject = async (req, res) => {
//   try {
//     const student = await Student.findOne({ studentId: req.params.id });
//     if (!student) return res.status(404).json({ message: 'Student not found' });
    
//     // Use pull() instead of .id().remove() - Mongoose 6+ compatible
//     student.subjects.pull(req.params.subjectId);
//     await student.save();
    
//     res.json({ message: 'Subject deleted', subjects: student.subjects });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



import Student from '../models/Student.js';
import { SortingAlgorithms } from './sortingAlgorithms.js';

const assignRanks = (students) => {
  let currentRank = 1;
  for (let i = 0; i < students.length; i++) {
    if (i > 0 && students[i].score < students[i - 1].score) currentRank = i + 1;
    students[i].rank = currentRank;
  }
  return students;
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ score: -1 });
    const ranked = assignRanks(students);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
    res.json(ranked);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { studentId, rollNumber, name, email, phone, dateOfBirth, department } = req.body;
    const existing = await Student.findOne({ studentId });
    if (existing) return res.status(400).json({ message: 'Student ID exists' });
    const student = await new Student({ 
      studentId, 
      rollNumber, 
      name, 
      email, 
      phone, 
      dateOfBirth, 
      score: 0,
      department 
    }).save();
    const all = await Student.find().sort({ score: -1 });
    const ranked = assignRanks(all);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ studentId: req.params.id });
    const all = await Student.find().sort({ score: -1 });
    const ranked = assignRanks(all);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sortStudents = async (req, res) => {
  try {
    const { algorithm, sortBy } = req.query;
    const students = (await Student.find()).map(s => s.toObject());
    const compareFunc = sortBy === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.score - a.score;
    const start = Date.now();
    let sorted;
    switch (algorithm) {
      case 'merge': sorted = SortingAlgorithms.mergeSort(students, compareFunc); break;
      case 'quick': sorted = SortingAlgorithms.quickSort(students, compareFunc); break;
      case 'bubble': sorted = SortingAlgorithms.bubbleSort(students, compareFunc); break;
      case 'insertion': sorted = SortingAlgorithms.insertionSort(students, compareFunc); break;
      default: return res.status(400).json({ message: 'Invalid algorithm' });
    }
    if (sortBy !== 'name') assignRanks(sorted);
    res.json({ students: sorted, metadata: { algorithm, sortBy, comparisons: SortingAlgorithms.comparisons, timeTaken: Date.now() - start, count: sorted.length }});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchStudent = async (req, res) => {
  try {
    const { studentId } = req.query;
    if (!studentId) return res.status(400).json({ message: 'Student ID required' });
    
    const searchTerm = studentId.trim().toLowerCase();
    const allStudents = await Student.find();
    const studentsArray = allStudents.map(s => s.toObject());
    
    const binaryResult = SortingAlgorithms.binarySearch(studentsArray, studentId);
    
    if (binaryResult.student) {
      return res.json({ 
        found: true, 
        student: binaryResult.student, 
        comparisons: binaryResult.comparisons,
        method: 'Binary Search (Exact Match)',
        message: `Found exact match using Binary Search in ${binaryResult.comparisons} comparison(s)`
      });
    }
    
    let partialMatches = [];
    let linearComparisons = 0;
    
    for (let student of studentsArray) {
      linearComparisons++;
      const idLower = student.studentId.toLowerCase();
      const nameLower = student.name.toLowerCase();
      const rollLower = student.rollNumber?.toLowerCase() || '';
      
      if (idLower.includes(searchTerm) || nameLower.includes(searchTerm) || rollLower.includes(searchTerm)) {
        partialMatches.push({
          ...student,
          matchType: idLower.includes(searchTerm) ? 'ID' : rollLower.includes(searchTerm) ? 'Roll Number' : 'Name',
          relevance: idLower === searchTerm || nameLower === searchTerm || rollLower === searchTerm ? 1 : 0.5
        });
      }
    }
    
    if (partialMatches.length > 0) {
      partialMatches.sort((a, b) => b.relevance - a.relevance);
      return res.json({
        found: true,
        student: partialMatches[0],
        allMatches: partialMatches,
        comparisons: linearComparisons,
        method: 'Linear Search (Partial Match)',
        message: `Found ${partialMatches.length} match(es) using Linear Search in ${linearComparisons} comparison(s)`
      });
    }
    
    res.json({ 
      found: false, 
      student: null,
      comparisons: binaryResult.comparisons + linearComparisons,
      method: 'Binary + Linear Search',
      message: `No matches found after checking all ${linearComparisons} student(s)`
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStatistics = async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length === 0) return res.json({ total: 0, average: 0, highest: 0, lowest: 0 });
    const scores = students.map(s => s.score);
    res.json({ total: students.length, average: +(scores.reduce((a,b) => a+b, 0) / students.length).toFixed(1), highest: Math.max(...scores), lowest: Math.min(...scores) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loadSampleData = async (req, res) => {
  try {
    await Student.deleteMany({});
    const samples = [
      { 
        studentId: 'CS2025001', 
        rollNumber: '101', 
        name: 'Aarav Kumar',
        email: 'aarav@example.com',
        phone: '9876543210',
        dateOfBirth: '2003-05-15',
        score: 95, 
        department: 'Computer Science',
        program: 'BSc - Computer Science',
        subjects: [
          { semester: 2, courseCode: '22BCC21', courseName: 'Communicative English - II', credits: 4, grade: 'A+' },
          { semester: 2, courseCode: '22BCC22', courseName: 'Mathematics - II', credits: 4, grade: 'O' },
          { semester: 2, courseCode: '22BCT21', courseName: 'Advanced C Programming', credits: 3, grade: 'A+' },
          { semester: 2, courseCode: '22BCT22', courseName: 'Java Programming', credits: 3, grade: 'O' }
        ]
      },
      { 
        studentId: 'EC2025015', 
        rollNumber: '102', 
        name: 'Diya Sharma',
        email: 'diya@example.com',
        phone: '9876543211',
        dateOfBirth: '2003-08-20',
        score: 88, 
        department: 'Electronics',
        program: 'BSc - Electronics',
        subjects: [
          { semester: 2, courseCode: '22BEC21', courseName: 'Circuit Theory', credits: 4, grade: 'A' },
          { semester: 2, courseCode: '22BEC22', courseName: 'Digital Electronics', credits: 4, grade: 'A+' }
        ]
      },
      { studentId: 'ME2025023', rollNumber: '103', name: 'Arjun Patel', email: 'arjun@example.com', phone: '9876543212', dateOfBirth: '2003-12-10', score: 92, department: 'Mechanical' },
      { studentId: 'CS2025007', rollNumber: '104', name: 'Ananya Singh', email: 'ananya@example.com', phone: '9876543213', dateOfBirth: '2003-03-25', score: 96, department: 'Computer Science' }
    ];
    const students = await Student.insertMany(samples);
    const sorted = students.sort((a, b) => b.score - a.score);
    const ranked = assignRanks(sorted);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
    res.json({ message: 'Sample data loaded with subjects', count: students.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) return res.status(404).json({ message: 'Not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { rollNumber, name, email, phone, dateOfBirth, score, department } = req.body;
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) return res.status(404).json({ message: 'Not found' });
    if (rollNumber) student.rollNumber = rollNumber;
    if (name) student.name = name;
    if (email) student.email = email;
    if (phone) student.phone = phone;
    if (dateOfBirth) student.dateOfBirth = dateOfBirth;
    if (score !== undefined) student.score = score;
    if (department) student.department = department;
    await student.save();
    const all = await Student.find().sort({ score: -1 });
    const ranked = assignRanks(all);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Calculate grade and update rankings
export const calculateStudentGrade = async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    if (!student.subjects || student.subjects.length === 0) {
      return res.status(400).json({ message: 'No subjects found. Add subjects first.' });
    }

    const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0 };
    let totalCredits = 0;
    let totalGradePoints = 0;

    student.subjects.forEach(subject => {
      const gradePoint = gradePoints[subject.grade] || 0;
      totalGradePoints += gradePoint * subject.credits;
      totalCredits += subject.credits;
    });

    const cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    const calculatedScore = Math.round(parseFloat(cgpa) * 10);

    student.score = calculatedScore;
    await student.save();

    const all = await Student.find().sort({ score: -1 });
    const ranked = assignRanks(all);
    await Promise.all(ranked.map(s => Student.findByIdAndUpdate(s._id, { rank: s.rank })));

    const updatedStudent = await Student.findOne({ studentId: req.params.id });

    res.json({
      message: 'Grade calculated successfully',
      cgpa: cgpa,
      score: calculatedScore,
      student: updatedStudent
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Subject operations
export const getStudentSubjects = async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student.subjects || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addSubject = async (req, res) => {
  try {
    const { semester, courseCode, courseName, credits, grade } = req.body;
    const student = await Student.findOne({ studentId: req.params.id });
    
    if (!student) return res.status(404).json({ message: 'Student not found' });
    
    student.subjects.push({ semester, courseCode, courseName, credits, grade });
    await student.save();
    
    res.status(201).json(student.subjects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { semester, courseCode, courseName, credits, grade } = req.body;
    const student = await Student.findOne({ studentId: req.params.id });
    
    if (!student) return res.status(404).json({ message: 'Student not found' });
    
    const subject = student.subjects.id(req.params.subjectId);
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    
    if (semester) subject.semester = semester;
    if (courseCode) subject.courseCode = courseCode;
    if (courseName) subject.courseName = courseName;
    if (credits) subject.credits = credits;
    if (grade) subject.grade = grade;
    
    await student.save();
    res.json(student.subjects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    
    student.subjects.pull(req.params.subjectId);
    await student.save();
    
    res.json({ message: 'Subject deleted', subjects: student.subjects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
