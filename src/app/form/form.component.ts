import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import { DropdownQuestion } from './model/question-dropdown';
import { QuestionBase }     from './model/question-base';
import { TextboxQuestion }  from './model/question-textbox';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public questions: any[];

  constructor(private service: QuestionService) {
    this.service.getQuestions().subscribe(data => {
      this.questions = [];
      data.forEach(question => {
        switch(question.details.type) {
         case 'input': {
            //statements;
            this.questions.push(new TextboxQuestion({
                key: question.model,
                label: question.label,
                value: question.value,
                required: question.details.required,
                order: question.Order,
                id: question.id,
                placeholder: question.details.placeholder
              }));
            break;
          }
          case 'select': {
             //statements;
             this.questions.push(new DropdownQuestion({
              key: question.model,
              label: question.label,
              options: question.details.options,
               order: question.Order,
               value: question.value,
               id: question.id,
               placeholder: question.details.placeholder
             }));
             break;
           }
           default: {
              //statements;
              this.questions.push(new TextboxQuestion({
                  key: question.model,
                  label: question.label,
                  value: question.value,
                  required: question.details.required,
                  order: question.Order,
                  id: question.id,
                  placeholder: question.details.placeholder
                }));
              break;
            }
        }
      });
      this.questions.sort((a, b) => a.order - b.order);
    });
  }

  ngOnInit() {

  }

}
