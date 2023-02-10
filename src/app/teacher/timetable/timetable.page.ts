import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  teacherData :string;
  times : any ;
  urlPhoto:any;

    constructor(

                private teacher:TeacherService,
                private apuUrl : UrlHostService ) {

        this.teacherData = JSON.parse(localStorage.getItem("user"));

        this.urlPhoto = this.apuUrl.apiUrlFile

    }

  ngOnInit() {

      this.teacher.getTimetables(this.teacherData)
          .subscribe(data=>{
                  this.times = data
              },err=>{

              },
          );
  }

}
