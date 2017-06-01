import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})


export class ChatPage {
  @ViewChild(Content) content: Content;
  msg: string;
  msgs: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.msg = '';
    this.msgs = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  send() {
    this.msgs.push(this.msg);
    this.msg = '';
    setTimeout(() => this.scrollDown(), 0);

  }

  scrollDown() {
    this.content.scrollToBottom();
  }

}
