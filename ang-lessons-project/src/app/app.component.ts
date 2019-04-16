import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-lessons-project_1';
  name = 'Oleh';
  isButtonDisabled = true;

  constructor()  {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
    alert('Enabled');
  }
}
