import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { QuestionnaireService } from '../models/questionnaire.service';
import { Questionnaire } from '../models/questionnaire.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements  OnInit {
  questionnaire: Questionnaire[] = [];
  constructor(private questionnaireService: QuestionnaireService) { }

getQuestionnaire() {
    this.questionnaire = [];

    this.questionnaireService.getQuestionnaire()
      .subscribe(questions => {
        this.questionnaire = questions;
        // this.filterComponent.clear();
        
      });
  }

  ngOnInit() {
  
  }

}
