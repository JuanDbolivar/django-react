import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => taskApi.get("/");
export const getTask = (id) => taskApi.get(`/${id}/`);
export const createTasks = (task) => taskApi.post("/", task);
export const updateTasks = (id, task) => taskApi.put(`/${id}/`, task);
export const deleteTasks = (id) => taskApi.delete(`/${id}/`);
