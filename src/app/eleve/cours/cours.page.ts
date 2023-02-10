import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {

    cahiers : any;
    user = <any> {};
    urlPhoto ='';

    constructor(private userProfile:UserDataService,private parent:ParentService,private apuUrl : UrlHostService ) { }

    ngOnInit() {

        this.Cahier()

    }

    Cahier(){

        this.urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getAllCoursParentParClasse(this.user)
            .subscribe(data=>{
                    this.cahiers = data
                },err=>{
                    console.log(err);
                },
            );

        console.log(this.cahiers);

    }


}
