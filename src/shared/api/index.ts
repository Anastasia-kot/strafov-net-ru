import { IFormUser } from "@/entities/user/model";

 
export const UsersAPI = {
  getUsers: async (searchWord?: string) => {
    const searchString = searchWord ? "?searchWord=" + searchWord : "";
    return await fetch(`api/users${searchString}`);
  },

  setUser: async (data: IFormUser) => {
    return await fetch(`api/users`, {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),  
    });
  },
};