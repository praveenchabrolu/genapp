import { Component, Input, OnInit, OnChanges }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../model/question-base';
import { QuestionControlService }    from '../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.questions && changes.questions.currentValue) {
      this.form = this.qcs.toFormGroup(changes.questions.currentValue);
    }
    // changes.prop contains the old and the new value...
  }

}
