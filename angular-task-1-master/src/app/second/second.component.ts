import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent implements OnInit {
  url: void;
  constructor(private sharedService:SharedService,) {

  }

  ngOnInit(): void {
    this.sharedService.getClickEvent().subscribe(res=>{
      if(res != ''){
        this.url = res;
      }
    })
  }
 }
