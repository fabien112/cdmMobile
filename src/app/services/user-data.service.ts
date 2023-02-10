import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  users ;

  constructor() { }


  dataUser(){

      if (localStorage.users) {
          this.users = JSON.parse(localStorage.getItem("user"));
      }

      return this.users
  }


}
