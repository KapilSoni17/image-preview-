import { Component, OnInit } from '@angular/core';
import {SharedService} from './shared.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Image';
   [x: string]: any;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void { }
    sendPicture(event: any){
  //   this.sharedService.sendClickEvent();
   }
   receiveImage(image: ImageData) {
    // your process here
}
   url = '';
   onSelectFile(event:any) {
     if (event.target.files && event.target.files[0]) {
       var reader = new FileReader();

       reader.readAsDataURL(event.target.files[0]); // read file as data url

       reader.onload = (event: any) => { // called once readAsDataURL is completed
         console.log(event);
         this.url = event.target.result;
         this.sharedService.sendClickEvent(this.url);
       }
     }
   }

}
