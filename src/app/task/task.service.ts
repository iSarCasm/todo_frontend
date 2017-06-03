import { Injectable } from '@angular/core';

import { NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class TaskService {

  constructor(
    private dateParser: NgbDateParserFormatter,
    private dateName: NgbDatepickerI18n
  ) {}

  prettyDate(deadline: string) : string {
    let date = this.dateParser.parse(deadline);
    return this.dateName.getMonthShortName(date.month) + " " + date.day + ", " + date.year;
  }

  formatDateToString(date: NgbDateStruct) : string {
    return date.year + "-" + date.month + "-" + date.day;
  }

  formatStringToDate(date: string): NgbDateStruct {
    if (date) {
      let ar = date.split('-');
      return { day: parseInt(ar[2]), month: parseInt(ar[1]), year: parseInt(ar[0]) };
    } else {
      return { day: undefined, month: undefined, year: undefined };
    }
  }
}
