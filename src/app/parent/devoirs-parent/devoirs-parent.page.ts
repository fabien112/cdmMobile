import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devoirs-parent',
  templateUrl: './devoirs-parent.page.html',
  styleUrls: ['./devoirs-parent.page.scss'],
})
export class DevoirsParentPage implements OnInit {

    devoirs : any;
    user = <any> {};
    urlPhoto ='';


    constructor(private parent:ParentService,
                private apuUrl : UrlHostService,
                private router : Router,

    ) {


    }

    ngOnInit() {

        this.Devoirs()
    }


    Devoirs(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));

        this.parent.getAllDevoirsParentParClasse(this.user)
            .subscribe(data=>{
                    this.devoirs = data
                },err=>{
                    console.log(err);
                },
            );
    }

    details(devoir){

        localStorage.setItem('devoir', JSON.stringify(devoir));

        this.router.navigateByUrl('details-devoirs-parent');
    }


}
