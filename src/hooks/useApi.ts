/* eslint-disable no-unreachable */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const useApi = () => ({
  //------FUNÇÕES NÃO UTILIZADAS NESSE PROJETO-----
  // validateToken: async (token: string) => {
  //   const response = await api.get(`/task/${token}`);
  //   return response.data;
  // },

  signin: async (name: string, pass: string) => {
    const response = await api.post("/user/login", { name, pass });
    return response.data;
  },

  signup: async (name: string, pass: string, Rpass: string) => {
    const response = await api.post("/user", { name, pass, Rpass });
    return response.data;
  },

  logout: async () => {
    return { status: false };
    const response = await api.post("/logout");
    return response.status;
  },

  loadTask: async () => {
    const response = await api.get(`/tasks`);
    return response.data;
  },

  createTask: async (description: string, detail: string) => {
    const response = await api.post("/tasks/", { description, detail });
    return response.data;
  },

  editTask: async (id: string, description: string, detail: string) => {
    const response = await api.put(`/tasks/${id}`, {
      description,
      detail,
    });
    return response.data;
  },

  deletTask: async (id: string) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },
});
