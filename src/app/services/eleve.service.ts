import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlHostService} from "./url-host.service";

@Injectable({
  providedIn: 'root'
})
export class EleveService {

      apiUrl = "";
      apiDatas = "";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

  constructor(private http: HttpClient, private UrlHost:UrlHostService) {

      this.apiUrl = this.UrlHost.apiUrl;
      this. apiDatas  = this.UrlHost.apiUrlFile;

  }

    public  getData(values)

    {

        return this.http.post<any>(this.apiUrl+'/eleve/getEleveInfos',values,this.httpOptions);

    }

public getInfosParent(values)

{
    return this.http.post<any>(this.apiUrl+'/parent/getInfosParent',values,this.httpOptions);
}


}
