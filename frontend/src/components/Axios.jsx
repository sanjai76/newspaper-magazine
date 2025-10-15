import axios from "axios";

// ✅ Create a reusable axios instance
const AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Django backend URL
  timeout: 5000, // optional (5 seconds)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ Optional: Add interceptors for debugging or auth later
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);

export default AxiosInstance;