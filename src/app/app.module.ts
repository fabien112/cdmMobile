import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { NoteParentPipe } from './parent/note-parent.pipe';
 import { File} from '@awesome-cordova-plugins/file/ngx';
import {Downloader} from "@ionic-native/downloader/ngx";
import {FileChooser} from "@ionic-native/file-chooser/ngx";
import {FilePath} from "@ionic-native/file-path/ngx";
import { DetailsquizzPipe } from './teacher/detailsquizz.pipe';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';



@NgModule({
  declarations: [AppComponent, NoteParentPipe, DetailsquizzPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],

  providers: [

      File,
      Downloader,
      FileChooser,
      FilePath,
      LocalNotifications,

      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}

       ],
  bootstrap: [AppComponent],
})
export class AppModule {}
