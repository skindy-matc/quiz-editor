import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: string;
  numberOfQuestions:number;
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor(private qSvc : QuizService) {
    //Use the quiz service here , but ... If it fails , the creation
    //of the componeb fails : )
  }
  quizzes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay = undefined;
  selectQuiz(quiz:QuizDisplay) {
    this.selectedQuiz = quiz;
  }
  addNewQuiz (){

    //Create the new quiz
  const newQuiz:QuizDisplay = {
    name: "Untiltled Quiz",  numberOfQuestions: 0

  };
  //Create the new quiz list with the new quiz ...

  //a.k. "Add a new quiz to the list"
  this.quizzes = [...this.quizzes, newQuiz];
  this.selectedQuiz = newQuiz;
}

  ngOnInit() {

    // console.log(this.qSvc.getQuizzes());
    this.quizzes = this.qSvc.getQuizzes();

  }

  title = 'quiz-editor';
  myWidth = 250;
  makeImageLarger() {
    this.myWidth *= 1.3; 

    
  }
  //ReadOnly/getter property
  get titleColor () {
    return this.myWidth >400 ? "red": "blue";
  }
}
