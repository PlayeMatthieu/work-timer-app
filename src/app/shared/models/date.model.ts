export interface IWeekday {
  name: string;
  shortName: string;
  date: string;
  dayNumber: number;
  weekNumber: number;
  isToday: boolean;
  totalTime: string;
}

export interface ITimeRegistration {
  id: number;
  projectId: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  pauseTime: Date;
  totalTime: Date;
};

