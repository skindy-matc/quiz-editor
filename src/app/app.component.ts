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
export class AppComponent implements OnInit{
  constructor(private qSvc: QuizService) {
    //use the quiz service here but if it fails, the
    //creation of the component fails.
  }

  quizes: QuizDisplay[] = [];
  selectedQuiz: QuizDisplay= undefined;
  selectQuiz(q: QuizDisplay) {
    this.selectedQuiz =q;
  }

  ngOnInit() {
    //console.log(this.qSvc.getQuizes());
    this.quizes = this.qSvc.getQuizes();
  };
  title = 'quiz-editor';
  myWidth = 250;

  makeImageLarger(){
    this.myWidth *=1.3;
  }
  //Read only #get Property
  get titleColor() {
    return this.myWidth > 400 ? "red" : "blue";
  }

}
