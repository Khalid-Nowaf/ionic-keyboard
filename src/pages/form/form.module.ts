import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPage } from './form';
import { DirLangComponent } from '../../components/dir-lang/dir-lang';

@NgModule({
  declarations: [
    FormPage,
    DirLangComponent
  ],
  imports: [
    IonicPageModule.forChild(FormPage),
  ],
  exports: [
    FormPage
  ]
})
export class FormPageModule {}
