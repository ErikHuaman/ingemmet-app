import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Todo el día',
    start: TODAY_STR,
  },
  {
    id: createEventId(),
    title: 'Probando',
    start: TODAY_STR + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Probando',
    start: TODAY_STR,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
