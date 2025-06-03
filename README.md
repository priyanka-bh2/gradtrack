# GradTrack – Internship & Job Tracker for CS Students

## 📦 Setup Instructions

1. Unzip the project folder
2. In your terminal:
```bash
cd gradtrack-complete
npm install
npm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000)

---

## 🚀 Live Demo

👉 https://gradtrack-five.vercel.app/

Experience GradTrack in action — track applications, analyze resumes, and stay interview-ready.

   
---

## 🛠 Tech Stack

| Category             | Technologies Used                          |
|----------------------|--------------------------------------------|
| **Frontend**         | React, TypeScript, Tailwind CSS            |
| **Widget Runtime**   | Browser Extension + PWA (Progressive Web App) |
| **AI Integration**   | OpenAI API (for resume feedback)           |
| **Storage**          | LocalStorage (with optional cloud backup)  |
| **Deployment** | Vercel / Netlify (for PWA version)        |

---

## ✨ Features

**🔍 Job Application Tracker** - Add and manage all your internship and job applications in one place.

**🤖 AI Resume Analyzer**  - Instantly compare your resume against a job description to get keyword match and suggestions.

**📄 Resume Version Control** - Track which resume version you submitted for each application.

**⏰ Auto Follow-Up Reminders** - Automatically reminds you to follow up after a set number of days—no calendar needed.

**📬 Application Status Dashboard** - Quickly view statuses like Applied, Interviewing, or Offer in a clean dashboard.

---

## 1. 🎯 Target Customer

### Who exactly are they?

**Archetype**  
Final-year Computer Science students at mid‐sized universities who are actively applying for tech internships or entry-level roles.

**Persona Example – “Maha”**
- **Name:** Maha  
- **School/Year:** Senior at UTA majoring in Computer Science  
- **GPA:** 3.7  
- **Location:** Arlington, TX  
- **Side Projects:** Personal portfolio site, open-source budgeting app  
- **Career Goal:** Summer internship at a mid‐sized company, ideally in backend/full-stack  

**Why This Persona?**
- Balances coursework, projects, and job applications  
- Limited time — every spreadsheet/edit means less coding/interview prep  
- Her concrete challenges help shape targeted features

---

### 🧭 Maha's Daily Workflow (Mid-October Example)

| Time        | Task |
|-------------|------|
| **7:30 AM** | Morning scroll of LinkedIn/Handshake → Flags 2–3 new roles |
| **9:00 AM** | Classes; reads career fair emails, jots job notes in Notion |
| **11:00 AM**| Customizes resume using Google Docs/VS Code |
| **12:00 PM**| Submits applications, uploads resumes, saves confirmation |
| **1:00 PM** | Lunch + CS podcast; mentally prepping for interviews |
| **2:00 PM** | Attends a virtual career fair; adds notes in Notion |
| **5:00 PM** | Homework + follows up on prior applications |
| **8:00 PM** | Reviews email and Google Sheet statuses; updates progress |

---

### 🧩 Key Takeaways
- Uses **4+ tools** daily (Docs, Sheets, Gmail, Notion)
- Suffers from **context switching & duplication**
- Loses time/energy to small repetitive tasks like updating statuses

---

### 🔄 Constantly Checked Info
- 🧠 Job postings (alerts, career services, Discord)
- 📝 Application status (“Applied,” “Interview,” etc.)
- 📄 Resume version per job
- 📆 Follow-up reminders
- 🧪 Coding challenge/interview dates
- 🚧 Side-project milestones or peer reviews

---

### ⚠️ Frustrating Tasks
- Copy/paste job data into Sheets
- Tailoring resumes manually
- Finding old confirmation emails
- Creating follow-up reminders
- Updating multiple trackers
- Gathering interview prep resources

---

### 🧰 Current Tool Stack
| Tool | Issues |
|------|--------|
| **Notion/Sheets** | Generic; lacks AI feedback or reminders |
| **Docs/Word** | Hard to track which version used where |
| **Gmail/Outlook** | Poor search; easily disorganized |
| **Calendar** | Manual event creation |
| **Slack/Discord** | Noisy, non-structured info |

---

## 2. 🛠 The Perfect Widget

### 🔧 Widget Name  
**GradTrack – The Job Search Copilot for CS Students**

### 💡 Why This Widget?
- Consolidates job tracking in one panel
- Offers instant AI resume feedback
- Auto-sets reminders without a backend
- Tracks resume versions
- Surfaces match % and JD insights

---

### 👩‍💻 Why GradTrack?

| Problem Maha Faces | How GradTrack Solves It |
|--------------------|-------------------------|
| Manual tracking | “+ New Application” form stores all fields |
| Resume tweaks | Compare resume to JD and suggest edits |
| Forgotten follow-ups | Sets auto-reminders (localStorage/browser push) |
| JD analysis | Highlights keyword gaps |
| Mobile context | PWA-ready, no login required |

---

### ✨ Feature Breakdown
- 📋 Job list with tags, dates, status
- 📄 Resume analysis panel with % match and suggestions
- 📎 Resume version tracking
- ⏰ Auto follow-up and challenge reminders
- 📱 PWA/mobile support for class breaks
- 📤 Quick share for mentors & peer review (future)

---

### 🧪 Existing Alternatives & Why They Fall Short

| Tool | Shortcomings |
|------|--------------|
| **Notion** | Manual, generic, no AI |
| **Sheets** | Tedious data entry, no versioning |
| **Huntr** | Too broad; student needs are niche |
| **Trello** | Visual only; lacks JD comparison |
| **Sticky Notes** | Too basic; no structure |
| **Bookmark Folders** | No metadata or reminders |

---

## 3. 🔄 Workflow Comparison

### ❌ Before GradTrack
1. Maha finds job → manually logs info  
2. Customizes resume → uploads → tracks via Sheets  
3. Sets manual calendar events → follows up manually  
4. Seeks AI feedback from random tools  

### ✅ With GradTrack
1. Clicks **+ New Application** → pastes JD  
2. Gets instant match score + keyword gaps  
3. Uploads tailored resume → links to job  
4. Gets browser notification for follow-up  
5. Views real-time dashboard with status + interviews  

---

## 4. 🧭 Strategic Vision

### ⏭ What’s Next?

- 🔁 **Gmail & LinkedIn Integration:**  
  Auto-import roles, confirmations, and LinkedIn applications  

- 🏫 **Campus Portal Connectors:**  
  One-click import from Handshake/Career Fair QR  

- ✍️ **AI Cover Letter Generator:**  
  Generate tailored intros using GitHub/LinkedIn artifacts  

- 🧠 **Smart Interview Prep:**  
  Role-specific flashcards, peer insights, and GitHub-based practice  

- 📊 **Analytics Dashboard:**  
  “Application → Interview → Offer” funnel & benchmarks  

---

### 💡 What Makes It Indispensable?

- 🚫 Zero Manual Overhead  
- 📊 Personalized Insights & Career Trends  
- 🧑‍🤝‍🧑 One-click Peer Feedback & Resume Sharing  
- 🔔 Habit-forming Notifications  
- 🏫 Campus Ecosystem Integration

---

### 🔗 Workflow Connectivity

| Tool | GradTrack Integration |
|------|-----------------------|
| **GitHub** | Auto-suggest projects from repo based on JD |
| **Calendar/To-Do** | Export reminders if needed |
| **University Portals** | Generate reports for advisors, mentors |
| **Study Planner** | Suggest prep sessions if no interviews soon |

---

## 💸 Monetization Ideas

| Feature | Price |
|---------|-------|
| GPT-Powered Resume Rewrite | $5–$8/month |
| Cloud Backup (multi-device) | $3/month |
| Campus-Exclusive Job Feed | $10/semester |
| 1-on-1 Resume Coaching | ~$20/feedback |
| Annual Benchmark Reports | $20/year |

---

## 📌 Summary

**Why It Works:**
- Speaks *specifically* to CS students’ frustrations  
- Captures real workflows with a vivid persona  
- Offers real productivity boost — not just tracking  
- Built for speed, AI insights, and minimal effort  
- Evolves into a central dashboard for job search success

---
