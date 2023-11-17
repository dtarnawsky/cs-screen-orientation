import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import {
  ScreenOrientation,
  ScreenOrientationResult,
} from '@capacitor/screen-orientation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  async lock() {
    await ScreenOrientation.lock({ orientation: 'portrait' });
  }

  async unlock() {
    await ScreenOrientation.unlock();
  }
}
