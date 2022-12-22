let baseUrl = "http://localhost:8000";
if (process.env.NODE_ENV === "production") {
  baseUrl = "";
}


export {
    baseUrl,
}