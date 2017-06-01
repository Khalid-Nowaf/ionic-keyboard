import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { DirLangComponentModule } from '../../components/dir-lang/dir-lang.module';


@NgModule({
  declarations: [
    ChatPage,
    // DirLangComponent
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    DirLangComponentModule
  ],
  exports: [
    ChatPage
  ]
})
export class ChatPageModule {}
