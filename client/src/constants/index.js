let baseUrl = 'http://localhost:8000/api';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://server-eq3c.onrender.com/api';
} 

export {
  baseUrl
}