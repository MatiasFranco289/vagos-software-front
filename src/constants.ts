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
