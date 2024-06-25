import axios from "axios";

export interface UserCredentials {
  internalScopes: string;
  internalStatus: string;
  userInfo: UserInfo;
}

export interface UserInfo {
  email: string;
  name: string;
  username: string;
  picture: string;
}

export const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
  withCredentials: true,
});

interface ProjectStatusApi {
  createdAt: string;
  project_status_id: number;
  status_name: string;
  updatedAt: string;
}

export interface ProjectTagApi {
  createdAt: string;
  tag_id: number;
  tag_name: string;
  updatedAt: string;
}

export interface ApiProject {
  createdAt: string;
  created_by: number;
  description: string;
  endDate: string;
  project_id: number;
  project_status: ProjectStatusApi;
  project_status_id: number;
  startDate: string;
  tags: Array<ProjectTagApi>;
  thumbnail: string;
  title: string;
  updatedAt: string;
}
