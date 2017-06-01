import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { DirLangComponent } from '../../components/dir-lang/dir-lang';


@NgModule({
  declarations: [
    ChatPage,
    DirLangComponent
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],
  exports: [
    ChatPage
  ]
})
export class ChatPageModule {}
