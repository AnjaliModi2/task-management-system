import axios from "axios";
import { getBasicAuth, getLoggedInUserId, isAdminUser } from "./AuthApiService";

const API_BASE_URL = 'http://localhost:8080/api/v1/tasks';

axios.interceptors.response.use(
  response => response,
  error => {

    console.error('API request error:', error);
    return Promise.reject(error);
  }
  
);

export const retrieveAllTasks = () => {
  const userId = getLoggedInUserId();
  const role = sessionStorage.getItem("role");

  console.log("ROLE:", role);

  if(isAdminUser()) {
    console.log("ADMIN API CALLED")
    return axios.get(`${API_BASE_URL}/all`, {
      headers: {
        Authorization: getBasicAuth()
      }
    });
  }

  console.log("USER API CALLED");

  return axios.get(`${API_BASE_URL}/user/${userId}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });
};

export const createTask = (task) => {
  const userId = getLoggedInUserId();

  return axios.post(`${API_BASE_URL}/user/${userId}`, task, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });
};

export const retrieveTaskById = (taskId) =>
  axios.get(`${API_BASE_URL}/${taskId}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const updateTask = (task, id) =>
  axios.put(`${API_BASE_URL}/${id}`, task, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const deleteTask = (id) =>
  axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const markDone = (id) =>
  axios.patch(`${API_BASE_URL}/${id}/task-done`, null, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });

export const markPending = (id) =>
  axios.patch(`${API_BASE_URL}/${id}/task-pending`, null, {
    headers: {
      'Authorization': getBasicAuth()
    }
  });
