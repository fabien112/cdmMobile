import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlHostService {

  constructor() { }


    // public apiUrl = 'http://127.0.0.1:8000/api';
    // public apiUrlFile = 'http://127.0.0.1:8000/Photos/Logos/';


      public apiUrl = 'https://cdu.infinitytech-proges.com/api';
      public apiUrlFile = 'https://cdu.infinitytech-proges.com/Photos/Logos/';


    // public apiUrl = 'https://cdu.xschoolinks.com/api';
    // public apiUrlFile = 'https://cdu.xschoolinks.com/Photos/Logos/';



}
