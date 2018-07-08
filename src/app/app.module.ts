import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { FormComponent } from './form/form.component';
import { DynamicFormQuestionComponent } from './form/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './form/services/question.service';
import { QuestionControlService } from './form/services/question-control.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    DataDisplayComponent,
    DynamicFormComponent,
    FormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
