import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-cahiers',
  templateUrl: './cahiers.page.html',
  styleUrls: ['./cahiers.page.scss'],
})
export class CahiersPage implements OnInit {

    cahiers : any;
    user = <any> {};
    urlPhoto ='';

  constructor(private userProfile:UserDataService,private parent:ParentService,private apuUrl : UrlHostService ) { }

    ngOnInit() {

        this.Cahiers()

    }

    Cahiers(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getAllCahierParentParClasse(this.user)
            .subscribe(data=>{
                    this.cahiers = data
                },err=>{
                    console.log(err);
                },
            );

        console.log(this.cahiers);

    }

}
