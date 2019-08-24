import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users').subscribe(c => {
      this.users = c['data'];
      this.users.forEach(user => console.log(user['email']));
      });
  }

}
