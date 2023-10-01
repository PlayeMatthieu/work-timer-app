import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-settings_tab',
  templateUrl: 'settings_tab.page.html',
  styleUrls: ['settings_tab.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Settings_tabPage {
  constructor() {}
}
