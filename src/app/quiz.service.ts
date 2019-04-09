import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  getQuizes() {
    return [
      {name: 'quiz 1', numberOfQuestions: 3}
      ,{name: 'quiz 2', numberOfQuestions: 0} 
    ];
  }
}
