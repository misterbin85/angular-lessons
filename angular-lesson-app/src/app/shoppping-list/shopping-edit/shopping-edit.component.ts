import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input() test: string;

constructor() { }

  delClick(el: HTMLInputElement) {
    if (this.test !== undefined) {
        alert(this.test);
      }
    if (el.value === undefined || el.value === '') {
      alert('Empty value');
    } else {
      alert(el.value);
    }
  }

  ngOnInit() {
  }

}
