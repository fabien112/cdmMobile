import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
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
        this.router.navigateByUrl('devoir-quizz');
    }

}
