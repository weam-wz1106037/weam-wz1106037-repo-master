import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hifz-list',
  templateUrl: './hifz-list.component.html',
  styleUrls: ['./hifz-list.component.css']
})
export class HifzListComponent implements OnInit {

  hifz;

  constructor(private dbs: DataService, private router: Router) { }

  ngOnInit() {
    this.getHifz()
  }

  completeHifz(h){
    this.dbs.setHifz(h);
    this.router.navigate(['/hifz'])
  }

  async getHifz(){
    this.hifz = await this.dbs.sendRequest('/api/hifz',"GET",{});

  }

}
