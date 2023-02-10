import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../../services/user-data.service";
import {ParentService} from "../../../services/parent.service";
import {UrlHostService} from "../../../services/url-host.service";

@Component({
  selector: 'app-tranche2-parent',
  templateUrl: './tranche2-parent.page.html',
  styleUrls: ['./tranche2-parent.page.scss'],
})
export class Tranche2ParentPage implements OnInit {

    Finance : any;
    Classe:any;
    user = <any> {};
    urlPhoto ='';
    yudsegment:any;

    constructor(private userProfile:UserDataService,private parent:ParentService,private apuUrl : UrlHostService ) { }

    ngOnInit() {

        this.Finances();


    }

    ionViewWillEnter(){
        this.yudsegment = "pin";
    }

    Finances(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));

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

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));

        this.parent.getEleveAndParentInfos(this.user)
            .subscribe(data=>{
                    this.Classe = data
                },err=>{
                    console.log(err);
                },
            );
    }

}
