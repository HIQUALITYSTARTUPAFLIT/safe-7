import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  template = [
    {
      "title": "Keypad Timeout",
      "type": "number"
    },
    {
      "title": "Emergency Contact Number",
      "type": "tel"
    },
    {
      "title": "Custom message",
      "type": "text"
    },
    {
      "title": "Send location",
      "type": "bool"
    }
  ];

  result : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appPreferences: AppPreferences) {
    this.result = {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  useInputTag(t){
    return ["text", "password", "email", "number", "search", "tel", "url"].includes(t);
  }

  useCheckBox(t){
    return ["bool"].includes(t);
  }

  save(){
    console.log(this.result);
    for(let key in this.result){
      this.appPreferences.store(key, this.result[key])
      .then(d => console.log(d))
      .catch(e => console.error(e));
    }
  }
}
