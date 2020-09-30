import { Component, OnInit } from '@angular/core';
import { ContentDataService } from 'src/app/services/content-data/content-data.service';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.component.html',
  styleUrls: ['./informate.component.scss']
})
export class InformateComponent implements OnInit {

  news;

  constructor(
    private contentDataService: ContentDataService,
  ) { }

  ngOnInit() {
    this.retrieveOpinions();
  }

  retrieveOpinions() {
    this.contentDataService.getNews().subscribe((data: any[])=>{
      this.news=data;
      console.log(this.news)
    })
  }
}
