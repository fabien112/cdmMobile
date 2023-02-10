import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quizz-parent',
  templateUrl: './quizz-parent.page.html',
  styleUrls: ['./quizz-parent.page.scss'],
})
export class QuizzParentPage implements OnInit {

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

        this.parent.getAllQuizzParentParClasse(this.user)
            .subscribe(data=>{
                    this.devoirs = data
                },err=>{
                    console.log(err);
                },
            );
    }

    details(devoir){

        localStorage.setItem('quizz', JSON.stringify(devoir));
        this.router.navigateByUrl('detailsquizz-parent');
    }

}
