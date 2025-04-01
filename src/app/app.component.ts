import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentry-poc';

  throwError() {
    throw new Error('This is a test error from the app component');
  }
}
