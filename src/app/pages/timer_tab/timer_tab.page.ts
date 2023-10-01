import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-timer_tab',
  templateUrl: 'timer_tab.page.html',
  styleUrls: ['timer_tab.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Timer_tab {

  public today: number = Date.now();
  public weekNumber: number = 1;
  public timeActive: boolean = false;
  public startTime: Date;
  public endTime: Date;
  public timeElapsed: number;

  // Calculate time between start and end time
  public calculateTimeElapsed() {
    this.timeElapsed = this.endTime.getTime() - this.startTime.getTime();
    console.log(this.timeElapsed)
  }

  public toggleTimer() {
    if (this.timeActive) {
      this.timeActive = false;
      this.endTime = new Date();
      console.log(this.endTime)
      this.calculateTimeElapsed();
    } else {
      this.timeActive = true;
      this.startTime = new Date();
      console.log(this.startTime)
    }
  }
}
