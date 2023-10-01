import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-home_tab',
  templateUrl: 'home_tab.page.html',
  styleUrls: ['home_tab.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Home_tabPage {
  constructor() {}
}
