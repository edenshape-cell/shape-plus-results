import { messages } from '@/lib/mock-data';
import Link from 'next/link';

export default function MessagesPage() {
  return (
    <main className="phone-frame" dir="rtl">
      <section className="screen">
        <div className="topbar">
          <div>
            <h1 className="hello">הודעות מהצוות</h1>
            <p className="muted">עדכונים אישיים מהליווי שלך</p>
          </div>
        </div>
        {messages.map((message) => (
          <article className="message-card" key={message.title}>
            <h2 className="card-title">{message.title}</h2>
            <p className="message-meta">{message.staff} · {message.date}</p>
            <p style={{ lineHeight: 1.7, marginBottom: 0 }}>{message.content}</p>
          </article>
        ))}
      </section>
      <nav className="bottom-nav"><Link className="nav-item" href="/client/home">בית</Link><Link className="nav-item" href="/client/progress">התקדמות</Link><Link className="nav-item" href="/client/add-measurement">מדידה</Link><Link className="nav-item active" href="/client/messages">הודעות</Link></nav>
    </main>
  );
}
