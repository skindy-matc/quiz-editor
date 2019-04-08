import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';
  myWidth = 250;
  makeImageLarger = () => {
    this.myWidth *= 1.3;
  }
  // read-only/getter property
  get titleColor() {
    // if my width exceeds 400px set title color to red
    // else set to bluey
    return this.myWidth > 400 ? 'red' : 'blue';
  }

  get myWidthBool() {
    return this.myWidth > 400;
  }
}
