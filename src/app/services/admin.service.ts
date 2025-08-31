import { Injectable } from '@angular/core';
import {UrlHostService} from "./url-host.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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




    public postpic(values)




    {
        return this.http.post<any>(this.apiUrl+'/admin/postpic',values,this.httpOptions);
    }



    public getAdminClasses(values)




    {
        return this.http.post<any>(this.apiUrl+'/admin/getclassesadmin',values,this.httpOptions);
    }

    public getEleveclasse(values)

    {
        return this.http.post<any>(this.apiUrl+'/admin/getEleveclasse',values,this.httpOptions);
    }


    public uploadAdmin(values)

    {
        return this.http.post<any>(this.apiUrl+'/upload-photo',values,this.httpOptions);
    }




}
