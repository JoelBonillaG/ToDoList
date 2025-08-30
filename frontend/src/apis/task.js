import apiClient from "./apiClient";

export const getTasks = async()=>{
const response = await apiClient.get("/task");
return response.data;
}