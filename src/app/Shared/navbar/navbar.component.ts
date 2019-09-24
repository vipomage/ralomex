import { Component } from '@angular/core';
import { FireService } from '../../tools/services/fire.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }
  
  constructor(
    public fireService: FireService,
    public translateService: TranslateService
  ) {}
}
