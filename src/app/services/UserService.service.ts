import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }


  getAllUsuaris() : User[]{
    const list = localStorage.getItem("users");
    return list ? JSON.parse(list) : []
  }


  insertUsuari(user: User) : void {
    const list: User[] = this.getAllUsuaris();
    list.push(user);
    localStorage.setItem("users", JSON.stringify(list));
  }

  removeUsuari(i: number) : void {
    let list: User[] = this.getAllUsuaris();
      if (i >= 0 && i < list.length) {
        list = list.filter((_, index) => index !== i);
        localStorage.setItem("users", JSON.stringify(list));
    }
  }

  deleteAllUsuaris() : void{
    localStorage.clear()
  }

  updateUsuari(updatedUser : User, i : number) : void{
    const list: User[] = this.getAllUsuaris();
      if (i >= 0 && i < list.length) {
        list.splice(i, 1, updatedUser);
        localStorage.setItem("users", JSON.stringify(list));
    }    
  }
}
