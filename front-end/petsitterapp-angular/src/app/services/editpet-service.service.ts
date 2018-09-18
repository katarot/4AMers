import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditpetServiceService {

  // Observable number source
  private dataSource = new BehaviorSubject<number>(52);

  // Observable number stream
  myNumber = this.dataSource.asObservable();

  constructor() {}
  // Service number holder

  changeNumber(id: number) {
    console.log(id);
    this.dataSource.next(id);
  }
}
