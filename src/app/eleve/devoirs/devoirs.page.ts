import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {ModalController} from "@ionic/angular";
import {DevoirDetailsPage} from "../devoir-details/devoir-details.page";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-devoirs',
  templateUrl: './devoirs.page.html',
  styleUrls: ['./devoirs.page.scss'],
})
export class DevoirsPage implements OnInit {

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

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

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

        this.router.navigateByUrl('devoir-details');
    }


}
