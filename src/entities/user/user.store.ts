import { makeAutoObservable } from "mobx";
import { IFormUser, IUser } from "./model";
import { UsersAPI } from "@/shared/api";

class UserStore {
  users = [] as IUser[];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
 
  async setUsers(searchWord?: string) {
    try {
      const resp = await UsersAPI.getUsers(searchWord);
      const data = await resp.json();
      this.users = data.data;
    } catch (err) {
      console.log("setUsers error in store");
    }
  }

  async addUser(user: IFormUser) {
    try {
      const resp = await UsersAPI.setUser(user);
      const data = await resp.json();
        console.log(data.data);

      this.users.push(...data.data);
    } catch (err) {
      console.log("addUser error in store");
    }
  }
}

export default new UserStore();
