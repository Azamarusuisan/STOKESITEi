'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'AI導入の最小プロジェクト規模はどの程度ですか?',
    a: 'PoCであれば4〜8週間、500万円〜が目安です。事業課題やデータの準備状況によって変動するため、まずは無料相談でスコープをご相談ください。',
  },
  {
    q: 'データが整備されていなくても相談できますか?',
    a: 'はい。データ整備の現状診断から伴走可能です。データ基盤の設計、収集・前処理パイプラインの構築、ガバナンス整備までトータルでご支援します。',
  },
  {
    q: '既存システムへの組み込みは可能ですか?',
    a: 'API連携、CRM/ERP連携、社内認証(SSO)、既存DBとの結合など、エンタープライズ向けの統合を多数実績があります。アーキテクチャレビューから対応します。',
  },
  {
    q: 'セキュリティや情報管理はどう担保されていますか?',
    a: 'NDA締結、ISMS準拠運用、データ取扱区分管理、ログ監査の整備を行います。クライアント環境内デプロイ(オンプレ・VPC隔離)にも対応可能です。',
  },
  {
    q: '生成AI（LLM）の社内活用はサポートしていますか?',
    a: 'RAG構築、社内ナレッジ統合、プロンプト最適化、評価ベンチマーク整備、ガードレール導入まで一貫してサポートします。',
  },
  {
    q: '運用フェーズの体制は?',
    a: 'モデル監視、データドリフト検知、定期再学習、機能追加開発を月額契約でご提供。SLAに基づくサポート窓口もご用意しています。',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section section--accent">
      <div className="section__inner section__inner--narrow">
        <header className="section__header">
          <p className="section__eyebrow">FAQ</p>
          <h2 className="section__title">よくあるご質問</h2>
        </header>
        <ul className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={i} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="faq__q-label">Q</span>
                  <span className="faq__q-text">{f.q}</span>
                  <span className="faq__icon" aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq__a" aria-hidden={!isOpen}>
                  <span className="faq__a-label">A</span>
                  <p>{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
