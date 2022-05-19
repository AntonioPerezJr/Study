import { Component, OnInit } from '@angular/core';
import { MapIten } from './models/mapModel.model';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})
export class ArrayMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ///.map()
  userList: MapIten[] = [
    { name: 'João', institute: 'sem institute', credit: 500 },
    { name: 'Maria', institute: 'sem institute', credit: 800 },
    { name: 'Gustinho', institute: 'sem institute', credit: 100 }
  ];
  onExecuteMap(): void{
    this.userList.map((user: MapIten, index: number, array: any) => {
      user.credit += 100;
      user.institute = 'University Paulisty';
      console.log('user corrente: ', user);
      console.log('index corrente: ', index);
      console.log('lista completa: ', array);      
    })
    // this.userList.reverse();

    // for (let index = 0; index < this.userList.length; index++) {
    //   const element: MapIten = this.userList[index];
    //   element.credit += 100;
    //   element.institute = 'University Paulisty';
    //   console.log('FOr modelo: ', element);      
    // }

    // this.userList.forEach((element: MapIten) => {
    //     element.credit += 100;
    //     element.institute = 'University Paulisty';
    //     console.log('Foreach modelo: ', element);         
    // });
  }
  userNameList: any[] = [];
  onExecuteMapName(): void{
    this.userNameList = this.userList.map((user: any, index: number, array: any) => {
      return user.name;
    })
  }

}
