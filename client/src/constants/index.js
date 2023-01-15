let baseUrl = '';

if (process.env.NODE_ENV === "production") {
  baseUrl = REACT_APP_BACKEND_URL + "/api";
} else {
  baseUrl = "http://localhost:8000/api";
}

export {
    baseUrl,
}