import Link from 'next/link';

export default function AddMeasurementPage() {
  return (
    <main className="phone-frame" dir="rtl">
      <section className="screen">
        <div className="topbar">
          <div>
            <h1 className="hello">הוספת מדידה</h1>
            <p className="muted">עדכון עצמי מהיר</p>
          </div>
        </div>
        <div className="note">הנתונים שתזין יסומנו כמדידת משתמש</div>
        <div className="card">
          <div className="field"><label>תאריך מדידה</label><input type="date" /></div>
          <div className="field"><label>משקל — חובה</label><input placeholder="לדוגמה 84.8" /></div>
        </div>
        <div className="card">
          <h3 className="card-title">היקפים — רשות</h3>
          <div className="field"><label>בטן</label><input placeholder="ס״מ" /></div>
          <div className="field"><label>ירך</label><input placeholder="ס״מ" /></div>
          <div className="field"><label>יד</label><input placeholder="ס״מ" /></div>
          <div className="field"><label>חזה</label><input placeholder="ס״מ" /></div>
        </div>
        <button className="primary-btn">שמירת מדידה</button>
        <div style={{height:10}} />
        <Link href="/client/home" className="secondary-btn" style={{display:'block',textAlign:'center'}}>ביטול</Link>
      </section>
      <nav className="bottom-nav"><Link className="nav-item" href="/client/home">בית</Link><Link className="nav-item" href="/client/progress">התקדמות</Link><Link className="nav-item active" href="/client/add-measurement">מדידה</Link><Link className="nav-item" href="/client/messages">הודעות</Link></nav>
    </main>
  );
}
