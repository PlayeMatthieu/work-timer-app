import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {Weekday} from "../../shared/models/date.model";
import moment from "moment";
import 'moment/locale/nl-be';


@Component({
  selector: 'app-timer_tab',
  templateUrl: 'timer_tab.page.html',
  styleUrls: ['timer_tab.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class Timer_tab implements OnInit{

  public today: Date = moment().toDate();
  public activeDay: Date;
  public weekNumber: number = 1;
  public timeActive: boolean = false;
  public startTime: Date;
  public endTime: Date;
  public timeElapsed: number;
  public weekDays: Weekday[] = [];
  public firstDayOfWeek: Date;
  public lastDayOfWeek: Date;

  constructor() {
    moment().locale('nl-be');
  }

  ngOnInit() {
    this.setToday();
    this.getCurrentWeekNumber(this.activeDay);
    this.getWeekDays();
  }

  // Calculate time between start and end time
  public calculateTimeElapsed() {
    this.timeElapsed = this.endTime.getTime() - this.startTime.getTime();
    // Convert to hours, minutes and seconds
    this.timeElapsed = this.timeElapsed / 1000;
    let hours = Math.floor(this.timeElapsed / 3600);
    let minutes = Math.floor((this.timeElapsed - (hours * 3600)) / 60);
    let seconds = this.timeElapsed - (hours * 3600) - (minutes * 60);
    // Add leading zero's
    let hoursString = hours < 10 ? '0' + hours : hours;
    let minutesString = minutes < 10 ? '0' + minutes : minutes;
    let secondsString = seconds < 10 ? '0' + seconds : seconds;
    console.log(hoursString + ':' + minutesString + ':' + secondsString)
  }

  public toggleTimer() {
    if (this.timeActive) {
      this.timeActive = false;
      this.endTime = new Date();
      this.calculateTimeElapsed();
    } else {
      this.timeActive = true;
      this.startTime = new Date()
    }
  }

  public setToday() {
    // Set active day to today
    this.activeDay = this.today;
    this.getCurrentWeekNumber(this.activeDay);
    this.getWeekDays();
  }

  public setActiveDay(day: Date) {
    this.activeDay = day;
    this.weekDays.forEach((weekday) => {
      weekday.isToday = moment(weekday.date).isSame(this.activeDay, 'day');
    });
  }

  // Get all weekdays of the current week
  private getWeekDays(): void {
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = moment(this.firstDayOfWeek).add(i, 'days').toDate();
      this.weekDays.push({
        name: moment(day).format('dddd'),
        shortName: moment(day).format('dd').charAt(0),
        date: day,
        dayNumber: moment(day).isoWeekday(),
        weekNumber: moment(day).isoWeek(),
        isToday: moment(day).isSame(this.today, 'day'),
        totalTime: '0:15'
      });
    }
  }

  private getCurrentWeekNumber(date: Date): void  {
    this.weekNumber = moment(date).isoWeek();
    this.getFirstAndLastDayOfWeek();
  }

  public setNextWeek() {
    this.weekNumber = this.weekNumber + 1;
    this.getFirstAndLastDayOfWeek();
    this.getWeekDays();
  }

  public setPreviousWeek() {
    this.weekNumber = this.weekNumber - 1;
    this.getFirstAndLastDayOfWeek();
    this.getWeekDays();
  }

  private getFirstAndLastDayOfWeek(): void {
    this.firstDayOfWeek = moment().isoWeek(this.weekNumber).startOf('isoWeek').toDate();
    this.lastDayOfWeek = moment().isoWeek(this.weekNumber).endOf('isoWeek').toDate();
  }
}
