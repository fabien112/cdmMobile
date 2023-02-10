import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {EleveService} from "../../services/eleve.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    resp : any;
    user = <any> {};

    urlPhoto : any ;


  constructor(private userProfile:UserDataService,private eleve:EleveService,private url:UrlHostService) {


      this.urlPhoto = this.url.apiUrlFile;


  }

  ngOnInit() {

      this.user = JSON.parse(localStorage.getItem("user"));
      this.Profils()
  }


    Profils(){

        this.eleve.getData(this.user)
            .subscribe((data:any) => {
                    this.resp = data;
                localStorage.setItem("InfosParent",JSON.stringify(this.resp));

                },err=>{
                    console.log(err);
                },
            );

    }


}
