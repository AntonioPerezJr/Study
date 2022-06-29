import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-methods',
  templateUrl: './rxjs-methods.component.html',
  styleUrls: ['./rxjs-methods.component.scss']
})
export class RxjsMethodsComponent implements OnInit {

  listteste: string[] = ['teste','teste 2', 'teste 3'];
  
  listteste2: string[] = ['teste 4','teste 5', 'teste 6'];

  constructor() { }

  ngOnInit(): void {

    this.listteste = [...this.listteste2, ...this.listteste]
  }

}
