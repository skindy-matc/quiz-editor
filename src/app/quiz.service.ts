import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // have to manually update from str

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private angularHttpClient: HttpClient) { }

  getQuizzes() {
    // dummy array of quiz objects
    return [
      { name: 'Quiz 1', numberQuestions: 3 }
      , { name: 'Quiz 2', numberQuestions: 0 }
    ];
  }
}
