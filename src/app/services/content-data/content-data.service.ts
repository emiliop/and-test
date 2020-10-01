import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContentDataService {

  constructor(private db: AngularFireDatabase) { }

  getParticipations() {
    return this.db.object('participations/').valueChanges();
  }

  getNews() {
    return this.db.object('news/').valueChanges();
  }

  getInfo() {
      return this.db.object('info/').valueChanges();
   };

}


