import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Tab3Page {
  constructor() {}
}
