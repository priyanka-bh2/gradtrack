import React, { useState, useEffect } from 'react';
import { Reminder } from '../types';

const ReminderPanel = () => {
  const [reminders, setReminders] = useState<Reminder[]>(() => {
    const saved = localStorage.getItem('gradtrack-reminders');
    return saved ? JSON.parse(saved) : [];
  });

  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    localStorage.setItem('gradtrack-reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = () => {
    if (message && date) {
      const newReminder: Reminder = {
        id: Date.now().toString(),
        message,
        date
      };
      setReminders([...reminders, newReminder]);
      setMessage('');
      setDate('');
    }
  };

  return (
    <div className="mt-10 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">⏰ Reminder Panel</h2>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Reminder message..."
          className="border p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="date"
          className="border p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={addReminder}
        >
          ➕ Add Reminder
        </button>
      </div>
      <ul>
        {reminders.map(rem => (
          <li key={rem.id} className="border p-2 mb-2 rounded">
            {rem.message} on {rem.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderPanel;
