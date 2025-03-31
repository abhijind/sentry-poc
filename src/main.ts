import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";
import { AppModule } from './app/app.module';

Sentry.init({
  dsn: process.env['SENTRY_DSN']
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
