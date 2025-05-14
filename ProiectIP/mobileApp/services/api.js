const API = 'http://localhost:5000/api'; // sau IP local dacă testezi pe telefon

export const login = (email, password) =>
  axios.post(`${API}/auth/login`, { email, password });

export const getRecommendations = (patientId) =>
  axios.get(`${API}/recommendations/${patientId}`);

export const sendSensorData = (data) =>
  axios.post(`${API}/sensors`, data);

export const getAlerts = (patientId) =>
  axios.get(`${API}/alerts/${patientId}`);

export const sendAlert = (data) =>
  axios.post(`${API}/alerts`, data);
