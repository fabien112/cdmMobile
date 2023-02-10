import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../../services/user-data.service";
import {ParentService} from "../../../services/parent.service";
import {UrlHostService} from "../../../services/url-host.service";

@Component({
  selector: 'app-tranche1',
  templateUrl: './tranche1.page.html',
  styleUrls: ['./tranche1.page.scss'],
})
export class Tranche1Page implements OnInit {

    Finance: any;
    user = <any> {};
    urlPhoto = '';

    constructor(private userProfile: UserDataService, private parent: ParentService, private apuUrl: UrlHostService) {
    }

    ngOnInit() {

        this.Finances()

    }

    Finances() {

        this.urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("InfosParent"));

        this.parent.getAstudentFinancesInfos(this.user)
            .subscribe(data => {
                    this.Finance = data
                }, err => {
                    console.log(err);
                },
            );


    }

}
