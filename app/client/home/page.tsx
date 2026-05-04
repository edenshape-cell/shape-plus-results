"use client";

import { client, weightProgress } from '@/lib/mock-data';
import Link from 'next/link';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default function ClientHomePage() {
  return (
    <main className="phone-frame" dir="rtl">
      <section className="screen">
        <div className="topbar">
          <div>
            <h1 className="hello">היי {client.name.split(' ')[0]}</h1>
            <p className="muted">הנה תמונת ההתקדמות שלך</p>
          </div>
          <span className="badge green">{client.goalStatus}</span>
        </div>

        <div className="goal-card">
          <div className="goal-top">
            <div>
              <p style={{ color: '#bcbcbc', margin: 0 }}>היעד שלך</p>
              <h2>{client.targetWeight} ק״ג</h2>
            </div>
            <span className="badge green">קצב {client.selectedPace}</span>
          </div>
          <div className="progress-number">{client.progressPercent}%</div>
          <div className="progress-track"><div className="progress-fill" /></div>
          <p style={{ color: '#cfcfcf', marginBottom: 0 }}>תאריך יעד משוער: {client.estimatedTargetDate}</p>
        </div>

        <div className="metrics-grid">
          <div className="metric-card"><span className="muted">שינוי</span><div className="value">-5.2 ק״ג</div></div>
          <div className="metric-card"><span className="muted">אחרונה</span><div className="value">84.8</div></div>
          <div className="metric-card"><span className="muted">ליעד</span><div className="value">112 יום</div></div>
        </div>

        <div className="card">
          <div className="row">
            <h3 className="card-title" style={{ margin: 0 }}>ההתקדמות שלי</h3>
            <span className="badge gray">משקל</span>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightProgress} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                <XAxis dataKey="label" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[78, 92]} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="target" stroke="#111111" strokeDasharray="5 5" strokeWidth={2} dot={false} name="קצב יעד" />
                <Line type="monotone" dataKey="actual" stroke="#e11d2e" strokeWidth={4} dot={{ r: 4 }} name="בפועל" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <span><span className="source-dot client" /> בפועל</span>
            <span><span className="source-dot staff" /> קצב יעד</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">מה השתנה מההתחלה</h3>
          <div className="change-row"><span>משקל</span><strong>-5.2 ק״ג</strong></div>
          <div className="change-row"><span>בטן</span><strong>-6 ס״מ</strong></div>
          <div className="change-row"><span>אחוז שומן</span><strong>-2.1%</strong></div>
        </div>
      </section>
      <nav className="bottom-nav">
        <Link className="nav-item active" href="/client/home">בית</Link>
        <Link className="nav-item" href="/client/progress">התקדמות</Link>
        <Link className="nav-item" href="/client/add-measurement">מדידה</Link>
        <Link className="nav-item" href="/client/messages">הודעות</Link>
      </nav>
    </main>
  );
}
