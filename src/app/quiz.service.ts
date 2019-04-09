import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private builtInAngularHttpClient: HttpClient) { }
  getQuizes() {
    return [
      {name: 'quiz 1', numberQuestion: 3}
      ,{name: 'quiz 2', numberQuestion: 0} 
    ];
  }
}
