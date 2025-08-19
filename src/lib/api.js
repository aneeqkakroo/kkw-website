import axios from "axios";
import { API_BASE_URL } from "../config";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Replace with real backend when ready
export async function fetchNews() {
  return [
    { id: 1, title: "KKW announces scholarships", date: "2025-08-12" },
    { id: 2, title: "Internship cohort launched", date: "2025-08-05" },
  ];
}
