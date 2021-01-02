import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild('chatElement', { static: true }) chatElement: any;
@ViewChild(IonContent) content: IonContent;
  constructor() {}
  logScrollStart(){
  	var scroll=this.chatElement.ElementRefnativeElement.scrollHeight
  	console.log(scroll)
  }
	logScrolling(event){
		console.log(event)
	}
	logScrollEnd(){
		var scroll=this.chatElement.scrollTop
  	console.log(scroll)
	}

}
