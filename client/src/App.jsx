import { useState, useEffect } from 'react';
import './styles/App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import SearchStudent from './components/SearchStudent';
import SortControls from './components/SortControls';
import Statistics from './components/Statistics';
import { studentService } from './services/api';

function App() {
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState({ total: 0, average: 0, highest: 0, lowest: 0 });
  const [loading, setLoading] = useState(false);
  const [sortInfo, setSortInfo] = useState(null);

  useEffect(() => { fetchStudents(); fetchStatistics(); }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setStudents(await studentService.getAll());
    } catch (error) {
      alert('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      setStats(await studentService.getStatistics());
    } catch (error) {
      console.error('Stats error:', error);
    }
  };

  const handleAddStudent = async (data) => {
    try {
      await studentService.create(data);
      await fetchStudents();
      await fetchStatistics();
      alert('Student added!');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add');
    }
  };

  const handleUpdateStudent = async (studentId, data) => {
    try {
      await studentService.update(studentId, data);
      await fetchStudents();
      await fetchStatistics();
      alert('Student updated successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update');
    }
  };

  const handleDeleteStudent = async (id) => {
    if (!confirm('Delete this student?')) return;
    try {
      await studentService.delete(id);
      await fetchStudents();
      await fetchStatistics();
    } catch (error) {
      alert('Delete failed');
    }
  };

  const handleSort = async (algorithm, sortBy) => {
    try {
      setLoading(true);
      const data = await studentService.sort(algorithm, sortBy);
      setStudents(data.students);
      setSortInfo(data.metadata);
    } catch (error) {
      alert('Sort failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadSample = async () => {
    if (students.length > 0 && !confirm('Clear existing data?')) return;
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

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>🎓 Student Ranking System</h1>
          <p className="subtitle">DSA Project - Sorting & Binary Search</p>
        </header>
        <Statistics stats={stats} />
        <div className="grid">
          <StudentForm onSubmit={handleAddStudent} />
          <div>
            <SearchStudent />
            <SortControls onSort={handleSort} onLoadSample={handleLoadSample} sortInfo={sortInfo} />
          </div>
        </div>
        <StudentList 
          students={students} 
          loading={loading}
          onDelete={handleDeleteStudent}
          onUpdate={handleUpdateStudent}
        />
      </div>
    </div>
  );
}

export default App;
