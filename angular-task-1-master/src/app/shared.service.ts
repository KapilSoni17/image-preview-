import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new BehaviorSubject<any>('');

  sendClickEvent(data:string){
   this.subject.next(data);
  }
  
  getClickEvent():Observable<any>{
    return this.subject.asObservable();

  }

}

