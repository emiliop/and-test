import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Opinion } from 'src/app/models/opinion/opinion.model';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  private dbPath = '/opinions';

  opinionsRef: AngularFireList<Opinion> = null;

  constructor(private db: AngularFireDatabase) { 
    this.opinionsRef = db.list(this.dbPath);
  }
  createOpinion(opinion: Opinion): any {
    return this.opinionsRef.push(opinion);
  }
}
