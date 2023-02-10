import { Component, OnInit } from '@angular/core';
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-dashbord-teacher',
  templateUrl: './dashbord-teacher.page.html',
  styleUrls: ['./dashbord-teacher.page.scss'],
})
export class DashbordTeacherPage implements OnInit {
    resp : any;
    user = <any> {};
    urlPhoto ='';
    datasEnfant:any;



    constructor(private userProfile:UserDataService,private  teacher : TeacherService, private router:Router,private urlData:UrlHostService) {

        this.urlPhoto = this.urlData.apiUrlFile;
    }


    ngOnInit() {

        this.Profils()
    }

    details(data){

        localStorage.setItem("datasClasse",JSON.stringify(data));
        this.router.navigateByUrl('classelist')
    }

    Profils(){

        this.user = JSON.parse(localStorage.getItem("user"));
        this.teacher.getInfosTeacher(this.user)
            .subscribe((data:any) => {
                    this.resp = data;
                },err=>{
                    console.log(err);
                },
            );

    }
}
