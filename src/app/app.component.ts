import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';


interface QuizDisplay{

  name: string;
  numberOfQuestions: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(private qSVC: QuizService) {
    
    
  }
  quizzes: QuizDisplay[] = [];

  ngOnInit= () => {
    // console.log(this.qSVC.getQuizzes());
    this.quizzes = this.qSVC.getQuizzes();
  }
  title = 'quiz-editor';
  myWidth = 250;

  makeImageLarger() {
    this.myWidth *= 1.3;
  }

  // Read-only/getter property..
  get titleColor() {
    return this.myWidth > 400 ? "red" : "blue";
  }
}
