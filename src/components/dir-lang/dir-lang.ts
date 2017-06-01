import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the DirLangComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dir-lang',
  templateUrl: 'dir-lang.html'
})
export class DirLangComponent {

  dir: string;
  
  constructor(private _plt: Platform) {
    console.log('Hello DirLangComponent Component');
    this.dir = this._plt.isRTL ? 'LTR' : 'RTL';
  }

  changeDir(){
    if(this._plt.isRTL) this._plt.setDir('ltr',true);
    else this._plt.setDir('rtl',true);
  }

}
