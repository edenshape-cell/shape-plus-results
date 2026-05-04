import { client } from '@/lib/mock-data';
import Link from 'next/link';

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
              <p className="muted" style={{ color: '#bcbcbc', margin: 0 }}>היעד שלך</p>
              <h2 style={{ fontSize: 32, margin: '8px 0 0' }}>{client.targetWeight} ק״ג</h2>
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
          <h3 className="card-title">ההתקדמות שלי</h3>
          <div className="mini-chart">
            <div className="bar" style={{ height: 150 }} />
            <div className="bar target" style={{ height: 142 }} />
            <div className="bar" style={{ height: 126 }} />
            <div className="bar target" style={{ height: 118 }} />
            <div className="bar" style={{ height: 104 }} />
            <div className="bar target" style={{ height: 98 }} />
          </div>
          <div className="row" style={{ marginTop: 12 }}>
            <span><span className="source-dot staff" /> בפועל</span>
            <span><span className="source-dot client" /> קצב יעד</span>
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
