import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-devoir-details',
  templateUrl: './devoir-details.page.html',
  styleUrls: ['./devoir-details.page.scss'],
})
export class DevoirDetailsPage implements OnInit {

    devoirDetails:any;
    urlPhoto:any;

  constructor( private activatedRoute:ActivatedRoute,private router:Router, private apuUrl : UrlHostService,) {

     this. urlPhoto = this.apuUrl.apiUrl;

      // this.devoirDetails = JSON.parse(this.activatedRoute.snapshot.paramMap.get('link'));

      this.devoirDetails = JSON.parse(localStorage.getItem('devoir'));


  }

  ngOnInit() {


  }

    backPage(){

        this.router.navigateByUrl('devoir-details');
    }


    }


