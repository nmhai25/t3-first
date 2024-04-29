/** @format */

import axios from "axios";
export const instance = axios.create({
  baseURL: "http://local.drizzle.studio/",
  timeout: 8000,
});
