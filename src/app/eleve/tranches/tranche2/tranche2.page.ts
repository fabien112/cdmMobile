import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UrlHostService} from "../../../services/url-host.service";
import {UserDataService} from "../../../services/user-data.service";
import {ParentService} from "../../../services/parent.service";

@Component({
  selector: 'app-tranche2',
  templateUrl: './tranche2.page.html',
  styleUrls: ['./tranche2.page.scss'],
})
export class Tranche2Page implements OnInit {

    Finance : any;
    Classe:any;
    user = <any> {};
    urlPhoto ='';

    constructor(private userProfile:UserDataService,private parent:ParentService,private apuUrl : UrlHostService ) { }

    ngOnInit() {

        this.Finances();


    }

    Finances(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getAstudentDatailsFinancesInfos(this.user)
            .subscribe(data=>{
                    this.Finance = data
                },err=>{
                    console.log(err);
                },
            );
        this.Classes();
    }

    Classes(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getEleveAndParentInfos(this.user)
            .subscribe(data=>{
                    this.Classe = data
                },err=>{
                    console.log(err);
                },
            );
    }


}
