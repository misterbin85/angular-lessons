import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [` .myText { color: green; } `]
})
export class AppComponent {
  title = 'ang-lessons-project_1';
  name = 'Oleh';
  isButtonDisabled = true;

  typedText = '';
  allTypedTexts: string[] = [];
  showAll: string[] = [];
  showText = '';

  errorColor = 'red';

  constructor()  {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onButtonClick() {
    if (this.typedText.length > 0) {
      this.showText = 'You typed: ' + this.typedText;
      this.allTypedTexts.push(this.typedText);
    } else {
      this.showText = '';
    }
  }
  onShowAllClick() {
    this.showAll = this.allTypedTexts;
  }

  onMeTyping(event: Event) {
    this.typedText = (event.target as HTMLInputElement ).value;
  }
}
