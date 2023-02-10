import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlHostService {

  constructor() { }


      // public apiUrl = 'http://127.0.0.1:8000/api';
      // public apiUrlFile = 'http://127.0.0.1:8000/Photos/Logos/';

      public apiUrl = 'https://cdm.xschoolinks.com/api';
      public apiUrlFile = 'https://cdm.xschoolinks.com/Photos/Logos/';


}
