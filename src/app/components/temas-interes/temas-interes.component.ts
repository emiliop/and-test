import { Component, OnInit } from '@angular/core';
import { ContentDataService } from 'src/app/services/content-data/content-data.service';

@Component({
  selector: 'app-temas-interes',
  templateUrl: './temas-interes.component.html',
  styleUrls: ['./temas-interes.component.scss']
})
export class TemasInteresComponent implements OnInit {

  information

  constructor(
    private contentDataService: ContentDataService,
  ) { }

  ngOnInit() {
    this.retrieveOpinions();
  }

  retrieveOpinions() {
    this.contentDataService.getInfo().subscribe((data: any[])=>{
      this.information=data;
      console.log(this.information)
    })
  }

}
