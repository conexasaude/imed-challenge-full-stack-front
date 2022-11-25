import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Links {
  route?: string;
  shape?: string;
  label: string;
  linkActive: string;
  visble?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  collapsible: boolean = false;
  links: Links[] = [];

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['pt', 'en']);
    // translateService.use(this.getBrowserLanguage());
    translateService.use('en');
    this.setLinks();
  }

  ngOnInit(): void { }

  getCollapsible(): boolean {
    return !this.collapsible;
  }

  getBrowserLanguage(): string {
    const browserLanguage = this.translateService.getBrowserLang();
    if (browserLanguage != undefined && browserLanguage.match(/en|pt/))
      return browserLanguage;
    return 'en';
  }

  setLinks(): void {
    this.links = [
      {
        route: '/my-app/dashboard',
        shape: 'dashboard',
        label: 'homepage.menu_dashboard',
        linkActive: 'active',
        visble: true,
      },
      {
        route: '/my-app/attendance',
        shape: 'list',
        label: 'homepage.menu_attendance',
        linkActive: 'active',
        visble: true,
      },
      {
        route: '/my-app/user',
        shape: 'users',
        label: 'homepage.menu_user',
        linkActive: 'active',
        visble: false,
      },
      {
        route: '/my-app/product',
        shape: 'list',
        label: 'homepage.menu_product',
        linkActive: 'active',
        visble: false,
      },
      {
        route: '/my-app/order',
        shape: 'shopping-cart',
        label: 'homepage.menu_order',
        linkActive: 'active',
        visble: false,
      },
    ];
  }
}
