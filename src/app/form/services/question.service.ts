import { Injectable }       from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownQuestion } from '../model/question-dropdown';
import { QuestionBase }     from '../model/question-base';
import { TextboxQuestion }  from '../model/question-textbox';

@Injectable()
export class QuestionService {

  public questions: QuestionBase<any>[];

  constructor(private httpClient: HttpClient) {}

  // TODO: get from a remote source of question metadata
  private formUrl: string = './assets/data/formData.json';

  getQuestions(): Observable<any> {
    return this.httpClient.get(this.formUrl);
  }

  // questions = [
  //
  //   new DropdownQuestion({
  //     key: 'brave',
  //     label: 'Bravery Rating',
  //     options: [
  //       {key: 'solid',  value: 'Solid'},
  //       {key: 'great',  value: 'Great'},
  //       {key: 'good',   value: 'Good'},
  //       {key: 'unproven', value: 'Unproven'}
  //     ],
  //     order: 3
  //   }),
  //
  //   new TextboxQuestion({
  //     key: 'firstName',
  //     label: 'First name',
  //     value: 'Bombasto',
  //     required: true,
  //     order: 1
  //   }),
  //
  //   new TextboxQuestion({
  //     key: 'emailAddress',
  //     label: 'Email',
  //     type: 'email',
  //     order: 2
  //   })
  // ];
}
