import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Questionnaire } from './questionnaire.model';
import { CONFIG } from '../core/config';

let questionnaireUrl = CONFIG.baseUrls.questionnaire;

@Injectable()
export class QuestionnaireService {

  constructor(private http: Http) { }
getQuestionnaire() {
    return <Observable<Questionnaire[]>>this.http
      .get(questionnaireUrl)
      .map(res => this.extractData<Questionnaire[]>(res))
  }

private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
  
}
