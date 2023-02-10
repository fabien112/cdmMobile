import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsquizz-parent',
  templateUrl: './detailsquizz-parent.page.html',
  styleUrls: ['./detailsquizz-parent.page.scss'],
})
export class DetailsquizzParentPage implements OnInit {

    devoirs : any;
    user = <any> {};
    urlPhoto ='';

    constructor() {

        this.devoirs = JSON.parse(localStorage.getItem('quizz'));
    }

    ngOnInit() {

        console.log(this.devoirs)

    }

}
