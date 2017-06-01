import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirLangComponent } from './dir-lang';

@NgModule({
  declarations: [
    DirLangComponent,
  ],
  imports: [
    IonicPageModule.forChild(DirLangComponent),
  ],
  exports: [
    DirLangComponent
  ]
})
export class DirLangComponentModule {}
