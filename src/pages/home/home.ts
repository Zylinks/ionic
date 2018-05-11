import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ServiceDataProvider } from "../../providers/service-data/service-data";
import { UserdataProvider } from "../../providers/userdata/userdata";
import { NewPage } from '../new/new';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user:User[];
  selectedItem: any;
  //icons: string[];
  //name: string[];
  items: Array<{title: string, note: string, icon: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:UserdataProvider) {
    this.service.getData().subscribe((response)=>{
      //console.log(response);
      this.user = response;
    });
    // this.selectedItem = navParams.get('item');

    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];
    // this.name = ['โครงการวิจัย','วารสารวิชาการ (ระดับชาติ)','วารสารวิชาการ (ระดับนานาชาติ)','PROCEEDINGS (ระดับชาติ)'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'T T' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  TestNewPage(event,user){ 
    this.navCtrl.push(NewPage, { 
      user: user
    });
  }
}

interface User{
  id:number;
  name:string;
  email:string;
}
