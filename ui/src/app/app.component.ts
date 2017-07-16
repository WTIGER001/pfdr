import { Component } from '@angular/core';
import { Campaign } from './model/campaign';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PathFinder Designer';
  campaign: Campaign
  user: User
}
