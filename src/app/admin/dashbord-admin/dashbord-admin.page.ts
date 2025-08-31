import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.page.html',
  styleUrls: ['./dashbord-admin.page.scss'],
})
export class DashbordAdminPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }


    details(data){

        localStorage.setItem("cycle",JSON.stringify(data));
        this.router.navigateByUrl('classes-admin')
    }

}
