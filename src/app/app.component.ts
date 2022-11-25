import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'imed-challenge-front';

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['pt', 'en']);
    // translateService.use(this.getBrowserLanguage());
    translateService.use('en');
  }

  getBrowserLanguage(): string {
    const browserLanguage = this.translateService.getBrowserLang();
    if (browserLanguage != undefined && browserLanguage.match(/en|pt/))
      return browserLanguage;
    return 'en';
  }
}
