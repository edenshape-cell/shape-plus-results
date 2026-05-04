"use client";

import { client, weightProgress } from '@/lib/mock-data';
import Link from 'next/link';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export default function ClientHomePage() {
  return (
    <main className="phone-frame" dir="rtl">
      <section className="screen">
        <header className="client-header">
          <div>
            <h1>היי {client.name.split(' ')[0]}</h1>
            <p>הנה ההתקדמות שלך להיום</p>
          </div>
          <div className="avatar">ד</div>
        </header>

        <section className="goal-hero">
          <div className="goal-hero-top">
            <div>
              <p className="goal-hero-label">היעד שלך</p>
              <h2 className="goal-hero-target">{client.targetWeight} ק״ג</h2>
            </div>
            <span className="badge green">{client.goalStatus}</span>
          </div>

          <div className="goal-progress-value">{client.progressPercent}%</div>
          <p className="goal-progress-label">התקדמות ליעד</p>
          <div className="goal-progress-track">
            <div className="goal-progress-fill" />
          </div>

          <div className="goal-meta-grid">
            <div className="goal-meta-item"><span>קצב</span><strong>{client.selectedPace}</strong></div>
            <div className="goal-meta-item"><span>יעד משוער</span><strong>24.08.26</strong></div>
            <div className="goal-meta-item"><span>נותרו</span><strong>{client.daysToTarget} ימים</strong></div>
          </div>
        </section>

        <section className="quick-stats">
          <div className="stat-card"><span>מההתחלה</span><strong>-5.2 ק״ג</strong></div>
          <div className="stat-card"><span>מדידה אחרונה</span><strong>{client.currentWeight}</strong><small>{client.lastMeasurementDate}</small></div>
          <div className="stat-card"><span>ליעד</span><strong>6.8 ק״ג</strong></div>
        </section>

        <section className="premium-card">
          <div className="card-head">
            <div>
              <h2>הדרך שלך</h2>
              <p>משקל בפועל מול קצב היעד</p>
            </div>
            <span className="chip">3 חודשים</span>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightProgress} margin={{ top: 18, right: 8, left: 0, bottom: 0 }}>
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#71717a' }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
                <YAxis domain={[78, 92]} hide />
                <Tooltip />
                <Line type="monotone" dataKey="target" stroke="#18181b" strokeDasharray="5 5" strokeWidth={2} dot={false} name="קצב יעד" />
                <Line type="monotone" dataKey="actual" stroke="#E11D2E" strokeWidth={4} dot={{ r: 4, fill: '#fff', strokeWidth: 3 }} activeDot={{ r: 6 }} name="בפועל" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="legend-row">
            <span><span className="source-dot client" /> בפועל</span>
            <span><span className="source-dot staff" /> קצב יעד</span>
          </div>
        </section>

        <section className="premium-card">
          <div className="card-head"><h2>מה השתנה מההתחלה</h2></div>
          <div className="change-row"><span>משקל</span><strong className="positive">-5.2 ק״ג</strong></div>
          <div className="change-row"><span>בטן</span><strong className="positive">-6 ס״מ</strong></div>
          <div className="change-row"><span>אחוז שומן</span><strong className="positive">-2.1%</strong></div>
        </section>

        <section className="latest-message">
          <h2>הודעה אחרונה מהצוות</h2>
          <p className="message-meta">עדן · 04.05.26</p>
          <p>יש התקדמות יפה מהמדידה הראשונה. ממשיכים באותה עקביות.</p>
          <Link className="text-link" href="/client/messages">לכל ההודעות</Link>
        </section>
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
