import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  unoElements = [];
  values = '';
  name='';

  constructor() { }

  ngOnInit(): void {
  }

  addToUno() {
    this.unoElements.push(this.name);
    console.log('aggiunto a uno: ' + this.name);
    this.name = '';
  }
  
  onDestroy(element) {
    console.log('distruggi ' + element);
  }

}
