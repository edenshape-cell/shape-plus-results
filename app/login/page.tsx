import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="center-screen" dir="rtl">
      <section className="login-card">
        <div className="brand-mark">SP</div>
        <h1 className="title">Shape Plus Results</h1>
        <p className="subtitle">מערכת מעקב תוצאות אישית</p>
        <div className="field">
          <label>טלפון</label>
          <input placeholder="05X-XXXXXXX" />
        </div>
        <div className="field">
          <label>תעודת זהות / סיסמה</label>
          <input placeholder="הכנס סיסמה" type="password" />
        </div>
        <Link href="/client/home" className="primary-btn" style={{ display: 'block', textAlign: 'center' }}>
          כניסה
        </Link>
        <p className="subtitle" style={{ fontSize: 13, marginBottom: 0 }}>
          הכניסה מתבצעת באמצעות טלפון ותעודת זהות
        </p>
      </section>
    </main>
  );
}
