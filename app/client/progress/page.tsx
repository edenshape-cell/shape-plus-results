"use client";

import Link from 'next/link';
import { weightProgress } from '@/lib/mock-data';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const rows = [
  ['04.05.2026', '84.8 ק״ג', 'צוות', 'עומד בקצב'],
  ['27.04.2026', '85.5 ק״ג', 'משתמש', 'עומד בקצב'],
  ['13.04.2026', '87.4 ק״ג', 'צוות', 'עומד בקצב'],
  ['30.03.2026', '90 ק״ג', 'צוות', 'תחילת יעד']
];

export default function ProgressPage() {
  return (
    <main className="phone-frame" dir="rtl">
      <section className="screen">
        <div className="topbar">
          <div>
            <h1 className="hello">פירוט התקדמות</h1>
            <p className="muted">התקדמות בפועל מול קצב היעד</p>
          </div>
          <span className="badge green">עומד בקצב</span>
        </div>
        <div className="tabs"><span className="pill active">משקל</span><span className="pill">הרכבי גוף</span><span className="pill">היקפים</span></div>
        <div className="filters"><span className="pill">חודש</span><span className="pill active">3 חודשים</span><span className="pill">6 חודשים</span><span className="pill">שנה</span></div>
        <div className="card">
          <div className="row"><h3 className="card-title" style={{margin:0}}>משקל לאורך זמן</h3><span className="badge gray">בפועל מול יעד</span></div>
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
          <div className="row" style={{marginTop:8}}><span><span className="source-dot client" /> בפועל</span><span><span className="source-dot staff" /> קצב יעד</span></div>
        </div>
        <h2 className="card-title">היסטוריית מדידות</h2>
        {rows.map((row) => (
          <div className="measurement-card" key={row[0]}>
            <div className="row"><strong>{row[0]}</strong><span className="badge green">{row[3]}</span></div>
            <div className="row" style={{marginTop:10}}><span className="muted">משקל</span><strong>{row[1]}</strong></div>
            <p className="muted" style={{marginBottom:0}}>מקור: {row[2]}</p>
          </div>
        ))}
      </section>
      <nav className="bottom-nav"><Link className="nav-item" href="/client/home">בית</Link><Link className="nav-item active" href="/client/progress">התקדמות</Link><Link className="nav-item" href="/client/add-measurement">מדידה</Link><Link className="nav-item" href="/client/messages">הודעות</Link></nav>
    </main>
  );
}
