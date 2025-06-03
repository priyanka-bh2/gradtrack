import React from 'react'
import ApplicationTracker from './components/ApplicationTracker'
import ResumeAnalyzer from './components/ResumeAnalyzer'
import ReminderPanel from './components/ReminderPanel'

const App = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎓 GradTrack</h1>
      <ApplicationTracker />
      <ResumeAnalyzer />
      <ReminderPanel />
    </div>
  )
}

export default App
