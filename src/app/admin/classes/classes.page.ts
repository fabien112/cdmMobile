import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

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

       //  this. urlPhoto = this.apuUrl.apiUrl;

        this.nbr = JSON.parse(localStorage.getItem("cycle"));

        this.cycle.data =  this.nbr;

        console.log( this.cycle)

        await this.admin.getAdminClasses(this.cycle)
            .subscribe(data=>{
                    this.Classes = data;
                },err=>{
                    console.log(err);
                },
            );

    }

    details(data){

        localStorage.setItem("classeId",JSON.stringify(data));
        this.router.navigateByUrl('studentsalls')
    }

}
