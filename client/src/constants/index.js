let baseUrl = "http://localhost:8000";

if (process.env.NODE_ENV === "production") {
  baseUrl = window.location.origin + "/api";
}


export {
    baseUrl,
}