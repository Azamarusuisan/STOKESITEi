import ImageSlot from './ImageSlot'

const items = [
  {
    slot: 'testimonial-1',
    alt: 'A社(製造業) クライアント担当者の顔写真または企業ロゴ',
    quote: 'PoCから本番運用までのスピード感、そして運用後の継続的な改善提案に大変満足しています。社内のAI活用文化が一気に進みました。',
    author: 'A社 DX推進部 部長',
    industry: '製造業 / 売上1000億円規模',
  },
  {
    slot: 'testimonial-2',
    alt: 'B社(小売) クライアント担当者の顔写真または企業ロゴ',
    quote: '要件定義から伴走いただいたおかげで、既存システムとのスムーズな連携を実現。導入初月から成果が出始めました。',
    author: 'B社 情報システム本部',
    industry: '小売 / 全国200店舗',
  },
  {
    slot: 'testimonial-3',
    alt: 'C社(SaaS) クライアント担当者の顔写真または企業ロゴ',
    quote: '単なる開発ベンダーではなく、ビジネス視点でROIを語れるパートナー。経営会議でも頼りにしています。',
    author: 'C社 取締役 CTO',
    industry: 'SaaS / シリーズB',
  },
]

export default function Testimonials() {
  return (
    <section id="voice" className="section">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Client Voice</p>
          <h2 className="section__title">お客様の声</h2>
        </header>
        <ul className="testimonial-grid">
          {items.map((t) => (
            <li key={t.slot} className="testimonial">
              <span className="testimonial__mark" aria-hidden>“</span>
              <p className="testimonial__quote">{t.quote}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">
                  <ImageSlot id={t.slot} alt={t.alt} ratio="1 / 1" src={`/images/${t.slot}.jpg`} />
                </div>
                <div>
                  <p className="testimonial__name">{t.author}</p>
                  <p className="testimonial__industry">{t.industry}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
