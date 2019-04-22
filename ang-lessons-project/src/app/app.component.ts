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
  typedText = '';
  showText = '';

  constructor()  {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onButtonClick() {
    // window.alert('Button clicked!');
    if (this.typedText.length > 0) {
      this.showText = 'You typed: ' + this.typedText;
    } else {
      this.showText = '';
    }
  }

  onMeTyping(event: Event) {
    this.typedText = (event.target as HTMLInputElement ).value;
  }

}
