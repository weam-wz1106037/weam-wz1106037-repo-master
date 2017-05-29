import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
import { HifzEditorComponent } from './hifz-editor/hifz-editor.component';
import { HifzListComponent } from './hifz-list/hifz-list.component';
import {RouterModule, Routes} from "@angular/router";
import {DataService} from "./shared/data.service";
import { HifzCompleteComponent } from './hifz-complete/hifz-complete.component';

const appRoutes : Routes=[
  {path :'',component: HifzEditorComponent ,pathMatch:'full'},
  {path :'list',component: HifzListComponent ,pathMatch:'full'},
  {path :'hifz',component: HifzCompleteComponent ,pathMatch:'full'},
  {path :'**',component: HifzEditorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    HifzEditorComponent,
    HifzListComponent,
    HifzCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
