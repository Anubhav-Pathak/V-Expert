if (process.env.NODE_ENV !== 'production') {
  const baseUrl = 'http://localhost:8000/api';
} else {
  const baseUrl = 'https://server-eq3c.onrender.com/api';
}

export {
  baseUrl
}