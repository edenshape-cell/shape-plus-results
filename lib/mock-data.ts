export const client = {
  name: 'דניאל כהן',
  status: 'פעיל',
  goalType: 'ירידה במשקל',
  startWeight: 90,
  currentWeight: 84.8,
  targetWeight: 78,
  selectedPace: 'רגיל',
  estimatedTargetDate: '24.08.2026',
  goalStatus: 'עומד בקצב',
  lastMeasurementDate: '04.05.2026',
  progressPercent: 43,
  daysToTarget: 112
};

export const weightProgress = [
  { label: 'פתיחה', actual: 90, target: 90, source: 'צוות' },
  { label: 'שבוע 2', actual: 88.9, target: 88.8, source: 'משתמש' },
  { label: 'חודש', actual: 87.4, target: 87.5, source: 'צוות' },
  { label: 'חודש 2', actual: 85.9, target: 85.6, source: 'משתמש' },
  { label: 'היום', actual: 84.8, target: 84.4, source: 'צוות' }
];

export const measurements = [
  { date: '04.05.2026', weight: '84.8 ק״ג', source: 'צוות', status: 'עומד בקצב' },
  { date: '27.04.2026', weight: '85.5 ק״ג', source: 'משתמש', status: 'עומד בקצב' },
  { date: '13.04.2026', weight: '87.4 ק״ג', source: 'צוות', status: 'עומד בקצב' },
  { date: '30.03.2026', weight: '90 ק״ג', source: 'צוות', status: 'תחילת יעד' }
];

export const messages = [
  {
    title: 'עדכון מדידה',
    staff: 'עדן',
    date: '04.05.2026',
    content: 'יש התקדמות יפה מהמדידה הראשונה. ממשיכים באותה עקביות.'
  },
  {
    title: 'לקראת השבוע הקרוב',
    staff: 'צוות Shape Plus',
    date: '01.05.2026',
    content: 'מומלץ להמשיך עם 3 אימונים השבוע ולעדכן מדידה בסוף השבוע.'
  }
];
