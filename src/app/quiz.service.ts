import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }
  getQuizes() {
    return [
      {name: 'quiz 1', numberQuestion: 3}
      ,{name: 'quiz 2', numberQuestion: 0} 
    ];
  }
}
