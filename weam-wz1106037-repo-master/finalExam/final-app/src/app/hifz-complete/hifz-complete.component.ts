import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hifz-complete',
  templateUrl: './hifz-complete.component.html',
  styleUrls: ['./hifz-complete.component.css']
})
export class HifzCompleteComponent implements OnInit {

  hifz;

  constructor(private dbs: DataService, private router: Router) { }

  ngOnInit() {
    this.hifz = this.dbs.hifz;
  }



  async updateHifz(theForm: NgForm){

    this.hifz.completedDate = theForm.value.completedDate;
    this.hifz.hifzLevel = theForm.value.hifzLevel;
    let url ='/api/hifz/complete';
    let r =await this.dbs.sendRequest(url,"POST",this.hifz);
    console.log("the hifz to be updated:")
    console.log(this.hifz);
    this.router.navigate(['/list'])

  }

}
