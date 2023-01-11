import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-data-sender';
  cookieValue = '';

  constructor(private cookieService: CookieService)
    {
      this.cookieService.set('Test', 'Hello World');
      this.cookieValue = this.cookieService.get('Test');
    }
}
