export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';
  dateApplied: string;
}

export interface Reminder {
  id: string;
  message: string;
  date: string;
}
