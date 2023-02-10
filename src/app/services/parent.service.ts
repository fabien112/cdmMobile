import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlHostService} from "./url-host.service";

@Injectable({
  providedIn: 'root'
})
export class ParentService {

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

    public  getInfosParent(values)

    {

        return this.http.post(this.apiUrl+'/parent/getInfosParent',values);

    }

    public  getAstudentFinancesInfos(values)

    {

        return this.http.post(this.apiUrl+'/locale/getAstudentFinancesInfos',values);

    }

    public  getEleveAndParentInfos(values)

    {

        return this.http.post(this.apiUrl+'/locale/getEleveAndParentInfos',values);

    }

    public  getAstudentDatailsFinancesInfos(values)

    {

        return this.http.post(this.apiUrl+'/locale/getAstudentDatailsFinancesInfos',values);

    }



    public  getAllCahierParentParClasse(values)

    {

        return this.http.post(this.apiUrl+'/parent/getAllCahierParentParClasse',values);

    }

    public  getAllDevoirsParentParClasse(values)

    {

        return this.http.post(this.apiUrl+'/parent/getAllDevoirsParentParClasse',values);

    }

    public  getAbensesOfEleveclasseByEleve(values)

    {

        return this.http.post(this.apiUrl+'/locale/getAbensesOfEleveclasseByEleve',values);

    }

    public  getAllCoursParentParClasse(values)

    {

        return this.http.post(this.apiUrl+'/parent/getAllCoursParentParClasse',values);

    }

    public  getAllQuizzParentParClasse(values)

    {

        return this.http.post(this.apiUrl+'/parent/getAllQuizzParentParClasse',values);

    }

    public  getMessagesParent(values)

    {

        return this.http.post(this.apiUrl+'/parent/getMessagesParent',values);

    }

    public  getMessageEnvoyesParent(values)

    {

        return this.http.post(this.apiUrl+'/locale/getMessageEnvoyesParent',values);

    }

    public  sendMessageByParent(values)

    {

        return this.http.post(this.apiUrl+'/parent/sendMessageByParent',values,this.httpOptions);

    }

    public  updateMessagesParent(values)

    {

        return this.http.post(this.apiUrl+'/parent/updateMessagesParent',values,this.httpOptions);

    }

    public  getAlldiscipline(values)

    {

        return this.http.post(this.apiUrl+'/locale/getAlldiscipline',values,this.httpOptions);

    }

    public  getAllCahierParentParClasse2(values)

    {

        return this.http.post(this.apiUrl+'/parent/getAllCahierParentParClasse',values,this.httpOptions);

    }

       public  getDetailsCahierTexte(values)

    {

        return this.http.post(this.apiUrl+'/parent/getDetailsCahierTexte',values,this.httpOptions);

    }

    public  listeNotifications(values)

    {

        return this.http.post(this.apiUrl+'/parent/listeNotifications',values,this.httpOptions);

    }

    public  updateNotifications(values)

    {

        return this.http.post(this.apiUrl+'/parent/updateNotifications',values,this.httpOptions);

    }






}
