import { Component, OnInit } from '@angular/core';
import {UrlHostService} from "../../services/url-host.service";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-studentsalls',
  templateUrl: './studentsalls.page.html',
  styleUrls: ['./studentsalls.page.scss'],
})
export class StudentsallsPage implements OnInit {
    Classes : any;
    cycle : any = {
        data: ""
    };

    urlPhoto ='';
    TotalHeure=0;
    nbr=0;

    constructor(private router:Router,private admin  : AdminService,private apuUrl : UrlHostService ) { }


    ngOnInit() {

        this.Loadclasses();
    }

    async  Loadclasses(){

          this. urlPhoto = this.apuUrl.apiUrlFile;

        this.nbr = JSON.parse(localStorage.getItem("classeId"));

        this.cycle.data =  this.nbr;

        console.log( this.cycle)

        await this.admin.getEleveclasse(this.cycle)
            .subscribe(data=>{
                    this.Classes = data.content;
                },err=>{
                    console.log(err);
                },
            );

    }

    details(data){

        localStorage.setItem("infos",JSON.stringify(data));
        this.router.navigateByUrl('students-admin')
    }

}
