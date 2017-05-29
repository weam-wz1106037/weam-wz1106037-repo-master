import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-hifz-editor',
  templateUrl: './hifz-editor.component.html',
  styleUrls: ['./hifz-editor.component.css']
})
export class HifzEditorComponent implements OnInit {

  surahs;

  constructor(private dbs: DataService) {
  }

  ngOnInit() {
    this.getSurahs()
  }

  async getSurahs() {
    this.surahs = await this.dbs.sendRequest("/surahs","GET",{});
  }

  async addHifz(hifzForm: NgForm){

    let hifz = {
      suraName:hifzForm.value.suraName,
      fromAya:hifzForm.value.fromAya,
      toAya:hifzForm.value.toAya,
      taskType:hifzForm.value.taskType,
      completedDate:"",
      hifzLevel:""
    }

    console.log("hifz form submitted:")
    console.log(hifz);

    this.dbs.sendRequest("/api/hifz","POST",hifz);

  }


}
