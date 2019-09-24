import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ralomex.com';
  
  constructor(private translateService:TranslateService){
    this.translateService.setDefaultLang('bg');
  }
}
