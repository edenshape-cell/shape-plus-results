import Link from 'next/link';

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
          <h3 className="card-title">משקל לאורך זמן</h3>
          <div className="mini-chart"><div className="bar" style={{height:170}}/><div className="bar target" style={{height:158}}/><div className="bar" style={{height:138}}/><div className="bar target" style={{height:126}}/><div className="bar" style={{height:105}}/></div>
          <div className="row" style={{marginTop:12}}><span>בפועל</span><span>קצב יעד</span></div>
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
