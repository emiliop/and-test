import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { OpinionService } from 'src/app/services/opinion/opinion.service';
import { Opinion } from 'src/app/models/opinion/opinion.model';

@Component({
  selector: 'app-conocer-opinion',
  templateUrl: './conocer-opinion.component.html',
  styleUrls: ['./conocer-opinion.component.scss']
})
export class ConocerOpinionComponent implements OnInit {

  opinionForm: FormGroup;
  opinions: Opinion[];

  constructor(
              private opinionService: OpinionService,
              private formOpinionBuilder: FormBuilder
              ) { 
                this.buildOpinionForm();
              }

private buildOpinionForm() {
    this.opinionForm = this.formOpinionBuilder.group({
    opinions: '', 
    });
}

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data);
    this.createOpinions(data);    
}

  createOpinions(opinions: Opinion){
    this.opinionService.createOpinion(opinions);
}

}
