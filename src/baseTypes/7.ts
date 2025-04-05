/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum DaysOfWeek {
  MONDAY = 'Пн',
  TUESDAY = 'Вт',
  WEDNESDAY = 'Ср',
  THURSDAY = 'Чт',
  FRIDAY = 'Пт',
  SATURDAY = 'Сб',
  SUNDAY = 'Нд',
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY
}