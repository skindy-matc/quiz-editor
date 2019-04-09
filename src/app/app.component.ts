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
    //use the Quiz service here, but...if it fails, then creation of the component fails
  }

  quizzes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay = undefined;

  selectQuiz(q: QuizDisplay) {
    this.selectedQuiz = q;
  }

  addNewQuiz() {
    //CREATE THE NEW QUIZ
    const newQuiz: QuizDisplay = {
      name: "Untitled Quiz"
      , numberOfQuestions: 0
    };

    //CREATE A NEW QUIZ LIST WITH NEW QUIZ, 
    this.quizzes = [
      ...this.quizzes
      , newQuiz
    ];

    //SELECT THE NEWLY ADDED QUIZ
    this.selectedQuiz = newQuiz;

  }

  ngOnInit() {
    //console.log(this.qSvc.getQuizzes());
    this.quizzes = this.qSvc.getQuizzes();
  };

  title = 'quiz-editor';
  myWidth = 250;

  makeImageLarger() {
    this.myWidth *= 1.3;
  }

  //read only getter property
  get titleColor() {
    return this.myWidth > 400 ? "red" : "blue";
  }




}
