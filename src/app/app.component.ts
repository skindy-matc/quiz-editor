import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: string;
  numberOfQuestions: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private qSvc: QuizService) {
    // could use the quiz service here but if it fails,
    // the creation of the component fails
  }

  quizzes: QuizDisplay[] = [];

  // so use ngOnInit instead
  ngOnInit() {
    this.quizzes = this.qSvc.getQuizzes();
  }

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
