import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shoppping-list',
  templateUrl: './shoppping-list.component.html',
  styleUrls: ['./shoppping-list.component.css']
})
export class ShopppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  defValue = 'NiceTry';
  users: JSON[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users').subscribe(c => {
      this.users = c['data'];
      this.users.forEach(user => console.log(user['email']));
      });
  }

}
