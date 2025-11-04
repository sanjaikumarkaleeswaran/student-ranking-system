// // import axios from 'axios';

// // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
// // const api = axios.create({ baseURL: API_URL, headers: { 'Content-Type': 'application/json' } });

// // export const studentService = {
// //   getAll: async () => (await api.get('/students')).data,
// //   getById: async (id) => (await api.get(`/students/${id}`)).data,
// //   create: async (data) => (await api.post('/students', data)).data,
// //   update: async (id, data) => (await api.put(`/students/${id}`, data)).data,
// //   delete: async (id) => (await api.delete(`/students/${id}`)).data,
// //   search: async (studentId) => (await api.get('/students/search', { params: { studentId }})).data,
// //   sort: async (algorithm, sortBy) => (await api.get('/students/sort', { params: { algorithm, sortBy }})).data,
// //   getStatistics: async () => (await api.get('/students/stats')).data,
// //   loadSampleData: async () => (await api.post('/students/sample-data')).data,
// // };



// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
// const api = axios.create({ baseURL: API_URL, headers: { 'Content-Type': 'application/json' } });

// export const studentService = {
//   getAll: async () => (await api.get('/students')).data,
//   getById: async (id) => (await api.get(`/students/${id}`)).data,
//   create: async (data) => (await api.post('/students', data)).data,
//   update: async (id, data) => (await api.put(`/students/${id}`, data)).data,
//   delete: async (id) => (await api.delete(`/students/${id}`)).data,
//   search: async (studentId) => (await api.get('/students/search', { params: { studentId }})).data,
//   sort: async (algorithm, sortBy) => (await api.get('/students/sort', { params: { algorithm, sortBy }})).data,
//   getStatistics: async () => (await api.get('/students/stats')).data,
//   loadSampleData: async () => (await api.post('/students/sample-data')).data,
  
//   // Subject operations
//   getSubjects: async (studentId) => (await api.get(`/students/${studentId}/subjects`)).data,
//   addSubject: async (studentId, data) => (await api.post(`/students/${studentId}/subjects`, data)).data,
//   updateSubject: async (studentId, subjectId, data) => (await api.put(`/students/${studentId}/subjects/${subjectId}`, data)).data,
//   deleteSubject: async (studentId, subjectId) => (await api.delete(`/students/${studentId}/subjects/${subjectId}`)).data,
// };



const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const apiRequest = async (url, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_URL}${url}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  
  return response.json();
};

export const studentService = {
  getAll: () => apiRequest('/api/students'),
  
  getById: (id) => apiRequest(`/api/students/${id}`),
  
  create: (data) => apiRequest('/api/students', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  
  update: (id, data) => apiRequest(`/api/students/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  
  delete: (id) => apiRequest(`/api/students/${id}`, {
    method: 'DELETE'
  }),
  
  sort: (algorithm, sortBy) => 
    apiRequest(`/api/students/sort?algorithm=${algorithm}&sortBy=${sortBy}`),
  
  search: (studentId) => 
    apiRequest(`/api/students/search?studentId=${encodeURIComponent(studentId)}`),
  
  getStatistics: () => apiRequest('/api/students/statistics'),
  
  loadSample: () => apiRequest('/api/students/load-sample', {
    method: 'POST'
  }),

  calculateGrade: (studentId) => 
    apiRequest(`/api/students/${studentId}/calculate-grade`, {
      method: 'POST'
    }),
  
  // Subject operations
  getSubjects: (studentId) => 
    apiRequest(`/api/students/${studentId}/subjects`),
  
  addSubject: (studentId, data) => 
    apiRequest(`/api/students/${studentId}/subjects`, {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  updateSubject: (studentId, subjectId, data) => 
    apiRequest(`/api/students/${studentId}/subjects/${subjectId}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  
  deleteSubject: (studentId, subjectId) => 
    apiRequest(`/api/students/${studentId}/subjects/${subjectId}`, {
      method: 'DELETE'
    })
};
