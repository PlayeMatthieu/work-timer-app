import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-projects_tab',
  templateUrl: 'projects_tab.html',
  styleUrls: ['projects_tab.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Projects_tab {

  constructor() {}

}
