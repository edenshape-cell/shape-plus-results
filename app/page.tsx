import Link from 'next/link';

export default function Page() {
  return (
    <main className="center-screen" dir="rtl">
      <section className="login-card">
        <div className="brand-mark">SP</div>
        <h1 className="title">Shape Plus Results</h1>
        <p className="subtitle">מערכת מעקב תוצאות אישית לשייפ פלוס</p>
        <Link href="/login" className="primary-btn" style={{ display: 'block', textAlign: 'center' }}>
          כניסה למערכת
        </Link>
        <Link href="/client/home" className="page-link">
          צפייה בדמו מתאמן
        </Link>
      </section>
    </main>
  );
}
