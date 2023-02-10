import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlHostService} from "./url-host.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public  authenticated : boolean;
  public  isConnected=0;
  public  token ;
  apiUrl = "";

  datas = {}; res ={};

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
  };


  constructor(private httpClient:HttpClient,private UrlHost:UrlHostService){ }

  public  login(values)

  {

    this.apiUrl = this.UrlHost.apiUrl;

    console.log( this.apiUrl);

    return this.httpClient.post<any>(this.apiUrl+'/login',values, this.httpOptions);

  }

    private saveToken() {

    this.token='azerty';
    localStorage.setItem("MyToken",this.token)

    }

    private loadToken(){

      this.token = localStorage.getItem('MyToken');

      if(this.token=='azerty'){

        this.authenticated=true;
      }

      else {

        this.authenticated = false
      }

      return this.authenticated

    }
}
