import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private builtInAngularHttpClient: HttpClient) { }

  getQuizzes() {
    return [
      {name: 'Quiz 1', numberQuestions: 3}
      , {name: 'Quiz 2', numberQuestions: 0}
    ];
  }
}
