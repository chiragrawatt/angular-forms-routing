import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() { 
    let data = localStorage.getItem('users');
    if(data!=null && data.length>0) {
      this.users = JSON.parse(data);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addUser(user: User) {
    let maxId = 0;
    this.users.forEach(user => {
      if(maxId < user.id) {
        maxId = user.id;
      }
    })
    user.id = maxId+1;
    this.users.push(user);
    console.log(this.users);
    this.saveToLocalStorage();
  }

  deleteUser(userId: number) : void {
    this.users = this.users.filter(user => {
      return user.id !== userId;
    });
    this.saveToLocalStorage();
  }

  updateUser(user: any) {
    console.log(user);
    let idx = this.users.findIndex(obj => {
      return obj.id === user.id;
    })

    console.log(idx);

    if(idx==-1) {
      return;
    }

    this.users[idx] = user;
    console.log(this.users);
    console.log(idx);
    console.log(this.users);
  }

  getAllUsers() : User[] {
    return this.users;
  }

  getUserById(userId: number) : User | null {
    return this.users.find(user => {
      return user.id === userId;
    }) || null;
  }
}
