import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  addClick(el: HTMLInputElement) {
    if (el.value === undefined || el.value === '') {
      alert('Empty value');
    } else {
      alert(el.value);
    }
  }

  ngOnInit() {
  }

}
