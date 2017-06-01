import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPage } from './form';
import { DirLangComponentModule } from '../../components/dir-lang/dir-lang.module';

@NgModule({
  declarations: [
    FormPage,
    // DirLangComponent
  ],
  imports: [
    IonicPageModule.forChild(FormPage),
    DirLangComponentModule
  ],
  exports: [
    FormPage
  ]
})
export class FormPageModule {}
