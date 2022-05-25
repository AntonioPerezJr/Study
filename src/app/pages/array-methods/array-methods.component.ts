import { Component, OnInit } from '@angular/core';
import { EveryIten } from './models/everyModel.model';
import { ReduceIten } from './models/everyModel.model copy';
import { FilterIten } from './models/filterModel.model';
import { FinsIndexIten } from './models/findIndexModel.model';
import { FindIten } from './models/findModel.model';
import { ForeachIten } from './models/foreachModel.model';
import { MapIten } from './models/mapModel.model';
import { SomeIten } from './models/someModel.model';
import { SortIten } from './models/sortModel.model';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})
export class ArrayMethodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Implement .map()
  */
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
  }
  userNameList: any[] = [];
  onExecuteMapName(): void{
    this.userNameList = this.userList.map((user: MapIten) => {
      return user.name;
    })
  }
  
  /**
  * Implement .filter()
  */
  userFilterList: FilterIten[] = [
    { name: 'João', occupationName: 'operator', idOccupation: 10 },
    { name: 'Maria', occupationName: 'analist', idOccupation: 20 },
    { name: 'Gustinho', occupationName: 'operator', idOccupation: 10 }
  ];
  usersFilteredList: FilterIten[] = [];
  onFilteredInstitute(): void{
    this.usersFilteredList = this.userFilterList.filter((user: FilterIten) => user.idOccupation == 10);
  }
  
  /**
  * Implement .filter()
  */
  userFindList: FindIten[] = [
    { name: 'João', occupationName: 'operator', idOccupation: 10 },
    { name: 'Maria', occupationName: 'analist', idOccupation: 20 },
    { name: 'Gustinho', occupationName: 'operator', idOccupation: 10 }
  ];
  usersFindList: FindIten[] = [];
  onFindName(): void{
    this.usersFindList = this.userFindList.filter((user: FilterIten) => user.name == 'Maria');
  }
  
  /**
  * Implement .some()
  */
  userSomeList: SomeIten[] = [
    { name: 'João', occupationName: 'operator', idOccupation: 10 },
    { name: 'Maria', occupationName: 'analist', idOccupation: 20 },
    { name: 'Gustinho', occupationName: 'operator', idOccupation: 10 }
  ];
  userSomeExist: boolean = false;
  onSomeName(): void{
    this.userSomeExist = this.userSomeList.some((user: FilterIten) => user.idOccupation === 10);
  }
  
  /**
  * Implement .findIndex()
  */
  userFinsIndexList: FinsIndexIten[] = [
    { name: 'João', occupationName: 'operator', idOccupation: 10 },
    { name: 'Maria', occupationName: 'analist', idOccupation: 20 },
    { name: 'Gustinho', occupationName: 'designer', idOccupation: 30 }
  ];
  userFinsIndexExist: number = 0;
  onFinsIndexName(): void{
    this.userFinsIndexExist = this.userFinsIndexList.findIndex((user: FinsIndexIten) => user.idOccupation === 30);
  }

  /**
  * Implement .every()
  */
  userEveryList: EveryIten[] = [
    { name: 'João', occupationName: 'operator', idOccupation: 10, remuneration: 1000 },
    { name: 'Maria', occupationName: 'analist', idOccupation: 20, remuneration: 3000 },
    { name: 'Gustinho', occupationName: 'designer', idOccupation: 30, remuneration: 5000 }
  ];
  userEveryCheck: boolean = false;
  onEveryCheck(): void{
    this.userEveryCheck = this.userEveryList.every((user: EveryIten) => user.remuneration > 500);
  }

  /**
  * Implement .sort()
  */
  numberList: number[] = [ 5, 2 ,7, 12];
  onSortList(): void{
    /**
     * Simple way
     */
    // this.numberList.sort((a, b) => {
    //   if(a < b){
    //     return -1;
    //   } else if(a > b){
    //     return 1;
    //   }
    //   return 0;
    // })
    /**
     * Other way
     */
    this.numberList.sort((a: number, b: number) => a - b )
  }
  onSortListDesc(): void{
    this.numberList.sort((a, b) => a > b ? -1 : 1 );
  }

  userSortList: SortIten[] = [
    { name: 'Maria', occupationName: 'analist', idOccupation: 20, remuneration: 3000 },
    { name: 'João', occupationName: 'operator', idOccupation: 10, remuneration: 1000 },
    { name: 'Gustinho', occupationName: 'designer', idOccupation: 30, remuneration: 5000 }
  ];
  userSortListObject: SortIten[] = [];
  onSortListObjects(): void{
    this.userSortList.sort((a: SortIten, b: SortIten) => a.remuneration - b.remuneration);
  }
  
  /**
  * Implement .reduce()
  */
  array1: any[] = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  initialValue = 0;
  sumWithInitial = 0
  onReduceCheck(){
    this.sumWithInitial = this.array1.reduce((previousValue, currentValue) => previousValue + currentValue, this.initialValue);
  }

  /**
  * Implement .foreach()
  */
  userForeachList: ForeachIten[] = [
    { name: 'Maria', occupationName: 'analist', idOccupation: 20, remuneration: 3000 },
    { name: 'João', occupationName: 'operator', idOccupation: 10, remuneration: 1000 },
    { name: 'Gustinho', occupationName: 'designer', idOccupation: 30, remuneration: 5000 }
  ];
  resultUserForeachList: string[] = [];
  onForeachCheck(){
    this.userForeachList.forEach(element => {
      this.resultUserForeachList.push(element.name);
    });
  }

  /**
  * Implement .join()
  */
  listItensJoin: string[] = ['Carro', 'Moto', 'Bicicleta'];
  joinSeparatorDefault: string = '';
  joinSeparatorDot: string = '';
  joinSeparatorTrace: string = '';

  onJoinCheck(){
    this.joinSeparatorDefault = this.listItensJoin.join();
    // expected output: "Carro,Moto,Bicicleta"    
    this.joinSeparatorDot = this.listItensJoin.join('. ');
    // expected output: "CarroMotoBicicleta"    
    this.joinSeparatorTrace = this.listItensJoin.join('-');
    // expected output: "Carro-Moto-Bicicleta"
  }

  /**
  * Implement .split()
  */
  splitString = 'Usando o Split em uma string qualquer!';
  splitResultList: string[] = []
  onSplitCheck(){
    this.splitResultList = this.splitString.split(' ');
    // expected output: [ "Usando", "o", "Split", "em", "uma", "string", "qualquer!" ]
  }

  /**
  * Implement Spread Operator
  */
  listSpreadFirst: number[] = [1, 2, 3];
  listSpreadSecond: number[] = [10, 20, 30];
  listSpreadThird: number[] = [4, 5, 6];
  listSpreadResult: number[] = [];

  onSpreadCheck(){
    this.listSpreadResult = [...this.listSpreadFirst, ...this.listSpreadSecond];
  }

  onSpreadCheckPosition(){
    this.listSpreadResult = [...this.listSpreadFirst, ...this.listSpreadThird,...this.listSpreadSecond];
  }
}
