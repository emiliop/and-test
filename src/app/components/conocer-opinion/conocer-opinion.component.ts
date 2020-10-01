import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { ContentDataService } from 'src/app/services/content-data/content-data.service';
import { OpinionService } from 'src/app/services/opinion/opinion.service';
import { Opinion } from 'src/app/models/opinion/opinion.model';

@Component({
  selector: 'app-conocer-opinion',
  templateUrl: './conocer-opinion.component.html',
  styleUrls: ['./conocer-opinion.component.scss']
})
export class ConocerOpinionComponent implements OnInit {

  participations;
  opinionForm: FormGroup;
  opinions: Opinion[];

  constructor(
              private contentDataService: ContentDataService,
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

  ngOnInit() {
    this.retrieveParticipations();
  }

  onSubmit(data) {
    console.log(data);
    this.createOpinions(data);    
}

retrieveParticipations() {
  this.contentDataService.getParticipations().subscribe((data: any[])=>{
    this.participations=data;
    console.log(this.participations)
    
  })
}

  createOpinions(opinions: Opinion){
    this.opinionService.createOpinion(opinions).then(() => {
      console.log('Created new opinion successfully!');
      alert("Su opinion se ha recibido exitosamente")
    });
    
}

}
