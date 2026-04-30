const news = [
  { date: '2026.04.10', tag: 'Press', text: '生成AI活用支援パッケージ「Stork GenAI Starter」をリリース' },
  { date: '2026.03.22', tag: 'Event', text: 'AI EXPO 東京2026 出展のお知らせ (ブース C-12)' },
  { date: '2026.02.14', tag: 'Award', text: 'AI Solution Awards 2026 ベストパートナー賞を受賞' },
  { date: '2026.01.30', tag: 'Press', text: 'CRMサービス「Stork CRM」が累計導入500社を突破' },
  { date: '2025.12.05', tag: 'Notice', text: '年末年始休業のお知らせ' },
]

export default function News() {
  return (
    <section id="news" className="section">
      <div className="section__inner">
        <header className="section__header section__header--row">
          <div>
            <p className="section__eyebrow">News</p>
            <h2 className="section__title">お知らせ</h2>
          </div>
          <a href="#" className="link-cta">一覧を見る<span aria-hidden>→</span></a>
        </header>
        <ul className="news-list">
          {news.map((n, i) => (
            <li key={i} className="news-item">
              <time className="news-item__date">{n.date}</time>
              <span className="news-item__tag">{n.tag}</span>
              <a href="#" className="news-item__text">{n.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
