import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss'],
})
export class AbsencesPage implements OnInit {

    Absences : any;
    user = <any> {};
    urlPhoto ='';
    TotalHeure=0;
    nbr=0;


    constructor(private parent:ParentService,
                private apuUrl : UrlHostService,
                private router : Router,

    ) {


    }

    ngOnInit() {

        this.Absence()
    }


    Absence(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getAbensesOfEleveclasseByEleve(this.user)
            .subscribe(data=>{
                    this.Absences = data;
                    this.nbr = this.Absences.length;
                    this.total()
                },err=>{
                    console.log(err);
                },
            );

    }

    total(){

        for(let i=0;i<this.Absences.length;i++) {
          this.TotalHeure = this.TotalHeure + parseInt(this.Absences[i].duree)

        }
    }

}
