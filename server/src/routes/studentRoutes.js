import express from 'express';
import {
  getAllStudents,
  createStudent,
  deleteStudent,
  sortStudents,
  searchStudent,
  getStatistics,
  loadSampleData,
  getStudentById,
  updateStudent,
  calculateStudentGrade,
  getStudentSubjects,
  addSubject,
  updateSubject,
  deleteSubject
} from '../controllers/studentController.js';

const router = express.Router();

// IMPORTANT: Specific routes BEFORE dynamic :id routes
router.get('/sort', sortStudents);
router.get('/search', searchStudent);
router.get('/statistics', getStatistics);
router.post('/load-sample', loadSampleData);

// General routes
router.get('/', getAllStudents);
router.post('/', createStudent);

// Dynamic :id routes
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.post('/:id/calculate-grade', calculateStudentGrade);

// Subject routes
router.get('/:id/subjects', getStudentSubjects);
router.post('/:id/subjects', addSubject);
router.put('/:id/subjects/:subjectId', updateSubject);
router.delete('/:id/subjects/:subjectId', deleteSubject);

export default router;
