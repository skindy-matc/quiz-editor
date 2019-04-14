import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { v4 as uuid } from 'uuid';

interface QuizDisplay {
  id: string;
  name: string;
  questions: object[];
}

interface QuestionDisplay {
  id: string;
  name: string;
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
  selectedQuiz: QuizDisplay;

  selectQuiz = (q: QuizDisplay) => {
    this.selectedQuiz = q;
  }

  addNewQuiz = () => {

    // create new quiz
    const newQuiz: QuizDisplay = {
      id: uuid(),
      name: "Untitled Quiz",
      questions: []
    };
    
    // create new list of quizzes with the new quiz
    this.quizzes = [
      ...this.quizzes,
      newQuiz
    ];

    // update the selected quiz to the new quiz
    this.selectedQuiz = newQuiz;
  }

  addNewQuestion = () => {
    // create new question
    const question: QuestionDisplay = {
      id: uuid(),
      name: "New untitled question"
    }
    this.selectedQuiz.questions = [
      ...this.selectedQuiz.questions,
      question
    ];
  }

  removeQuestion = (question: QuestionDisplay) => {
    this.selectedQuiz.questions = this.selectedQuiz.questions.filter((q: QuestionDisplay) => q.id != question.id);
  }

  serviceDown = false;

  // so use ngOnInit instead
  ngOnInit() {
    // rename numberQuestions property to numberOfQuestions 
    this.qSvc.getQuizzes().subscribe(
      (data) => {
        console.log(data);
        this.quizzes = (<any[]> data).map(x => ({
          id: uuid(),
          name: x.name,
          questions: x.questions
        }));
      },
      (error) => {
        console.log(error);
        this.serviceDown = true;
      }
    );
  }
}
