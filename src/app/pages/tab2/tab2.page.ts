import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Tab2Page {

  constructor() {}

}
