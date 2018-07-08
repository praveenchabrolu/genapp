import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataDisplayComponent} from './data-display/data-display.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'data', component: DataDisplayComponent },
  { path: '', redirectTo: '/data', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
