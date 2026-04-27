'use client'

import { useState } from 'react'

const slides = [
  {
    id: 'slide-1',
    image: '/images/banking-trends-2026.jpg',
    title: '業務プロセスの自動化',
    body: 'AIとRPAを組み合わせた業務自動化により、定型業務の効率を大幅に向上。人的リソースをより創造的な業務に集中させます。',
    cta: '詳しく見る',
    href: '/services/ai-improvement',
  },
  {
    id: 'slide-2',
    image: '/images/platform-strategy.jpg',
    title: 'データ分析・予測',
    body: '大量のビジネスデータからAIが有意義なインサイトを抽出。売上予測、需要予測、リスク分析など、データドリブンな経営を支援します。',
    cta: '詳しく見る',
    href: '/services/ai-consulting',
  },
  {
    id: 'slide-3',
    image: '/images/ever-ready-infra.png',
    title: 'カスタマーサポートAI',
    body: 'AIチャットボットや自然言語処理を活用した顧客対応の自動化・高度化。24時間365日の対応と顧客満足度の向上を実現します。',
    cta: '詳しく見る',
    href: '/services/ai-development',
  },
  {
    id: 'slide-4',
    image: '/images/pulse-of-change.jpg',
    title: 'オーダーメイドAI開発',
    body: 'お客様の独自の課題に合わせたAIモデルの設計・開発。既存システムとの連携も含め、最適なソリューションをフルスクラッチで構築します。',
    cta: '詳しく見る',
    href: '/services/ai-development',
  },
]

export default function ClientCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]

  return (
    <div className="client-carousel">
      <section className="rad-carousel-image-and-text rad-spacing-vertical-md">
        <div className="rad-carousel-image-and-text__custom-controls-wrapper rad-carousel__custom-controls">
          <div className="rad-carousel-image-and-text__play-pause-wrapper"></div>
          <div className="rad-carousel-image-and-text__prev-next-wrapper">
            <button
              className="rad-carousel-image-and-text__prev-button rad-icon-button rad-icon-button--grey rad-icon-button--grey-48 rad-icon-button--icon-size-24"
              onClick={prev}
            >
              <div className="rad-icon-button__text">show previous slide</div>
              <div className="rad-icon rad-icon--compact rad-icon__left" aria-hidden="true"></div>
            </button>
            <div className="rad-carousel__page-numbers">
              <span className="rad-carousel__page-numbers-current">{current + 1}</span>
              <span aria-hidden="true">/</span>
              <span className="rad-carousel__page-numbers-total">{slides.length}</span>
            </div>
            <button
              className="rad-carousel-image-and-text__next-button rad-icon-button rad-icon-button--grey rad-icon-button--grey-48 rad-icon-button--icon-size-24"
              onClick={next}
            >
              <div className="rad-icon-button__text">show next slide</div>
              <div className="rad-icon rad-icon--compact rad-icon__right" aria-hidden="true"></div>
            </button>
          </div>
        </div>
        <div className="rad-carousel-image-and-text__carousel rad-carousel rad-carousel--custom-controls rad-carousel--only-read-active">
          <div className="rad-carousel-image-and-text__slide is-selected" role="group" aria-roledescription="slide">
            <div className="cmp-image">
              <img className="cmp-image__image" src={slide.image} alt={slide.title} />
            </div>
            <div className="rad-carousel-image-and-text__slide-text">
              <h4 className="rad-carousel-image-and-text__slide-title">{slide.title}</h4>
              <p className="rad-carousel-image-and-text__slide-body">{slide.body}</p>
              <a href={slide.href} className="rad-carousel-image-and-text__slide-cta rad-button rad-button--tertiary">
                <div className="rad-button__text">{slide.cta}</div>
                <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
