'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Hero video play/pause
    const heroSection = document.getElementsByClassName('hero_custom')[0] as HTMLElement
    if (!heroSection) return

    const video = heroSection.getElementsByClassName('hero_custom__background--video')[0] as HTMLVideoElement
    const btn = heroSection.getElementsByClassName('hero_custom__video_button')[0] as HTMLButtonElement
    if (!video || !btn) return

    const playIcon = btn.getElementsByClassName('hero_custom__video_button--play')[0] as HTMLElement
    const pauseIcon = btn.getElementsByClassName('hero_custom__video_button--pause')[0] as HTMLElement
    const hiddenClass = 'hero_custom__video_button--hidden'

    const play = async () => {
      await video.play()
      btn.title = 'Pause background video'
      playIcon?.classList.add(hiddenClass)
      pauseIcon?.classList.remove(hiddenClass)
    }

    const pause = () => {
      video.pause()
      btn.title = 'Play background video'
      playIcon?.classList.remove(hiddenClass)
      pauseIcon?.classList.add(hiddenClass)
    }

    btn.addEventListener('click', async () => {
      try {
        if (video.paused) await play()
        else pause()
      } catch {}
    })

    // Parallax scroll effect
    const handleScroll = () => {
      const h = heroSection.clientHeight
      const top = heroSection.offsetTop
      const scrolled = Math.max(0, window.scrollY - top)
      const progress = Math.min(1, scrolled / h)
      const grid = heroSection.getElementsByClassName('hero_custom__grid')[0] as HTMLElement
      const headline = heroSection.getElementsByClassName('hero_custom__headline')[0] as HTMLElement
      const body = heroSection.getElementsByClassName('hero_custom__body')[0] as HTMLElement
      const bg = heroSection.getElementsByClassName('hero_custom__background')[0] as HTMLElement

      if (grid) grid.style.transform = `translateY(${h * progress * 0.5}px)`
      if (headline) {
        headline.style.transform = `translateY(${-scrolled * 0.5}px)`
        headline.style.opacity = String(Math.max(0, 1 - progress * 3))
      }
      if (body) {
        body.style.transform = `translateY(${-scrolled * 0.5}px)`
        body.style.opacity = String(Math.max(0, 1 - progress * 3))
      }
      if (bg) {
        bg.style.opacity = String(Math.max(0, 1 - progress * 3))
        bg.style.transform = `translateY(${h * progress * 0.5}px)`
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.addEventListener('scroll', handleScroll)
        } else {
          document.removeEventListener('scroll', handleScroll)
        }
      })
    }, { threshold: 0 })

    observer.observe(heroSection)
    return () => {
      observer.disconnect()
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="custom-html">
      <div className="cmp-custom__html__wrapper" id="reinvent-hero">
        <section id="hero_custom" className="hero_custom">
          <video
            aria-hidden="true"
            role="presentation"
            className="hero_custom__background hero_custom__background--video"
            playsInline
            loop
            autoPlay
            muted
            poster="/images/custom-hero-poster.png"
          >
            <source src="/media/custom-rad-hero-bg-video.mp4" type="video/mp4" />
          </video>
          <div id="hero_headline_h1" style={{ opacity: 0, width: 0, height: 0, position: 'absolute', top: 0 }}>
            <h1>AI × テクノロジーで、ビジネスを変革する</h1>
          </div>
          <a className="hero_custom__cta_1" href="#services" title="サービスを見る">
            <div className="hero_custom__grid">
              <p className="hero_custom__headline">
                <span className="hero_custom__headline__text hero_custom__headline__text--left" role="presentation" aria-hidden="true">
                  AI × Technology
                </span>
                <span className="hero_custom__headline__text hero_custom__headline__text--right" role="presentation" aria-hidden="true">
                  <span>Inno</span>
                  <svg className="hero_custom__headline__text--V" viewBox="0 0 107 118" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 118L107 74.4053V43.5947L0 0V30.8107L69.1887 59L0 87.1893V118Z" />
                  </svg>
                  <span>ation</span>
                </span>
              </p>
              <article className="hero_custom__body">
                <div role="presentation" aria-hidden="true" className="hero_custom__body__border"></div>
                <div className="hero_custom__body__hero_text">
                  <p className="hero_custom__body__hero_text__title">
                    有限会社ストークは、20年以上の実績を持つシステム開発とWEBマーケティングの専門企業です。AIコンサルティングから受託開発、業務改善提案まで、最先端テクノロジーで企業の成長を加速させます。
                  </p>
                  <div className="hero_cta_2">
                    <span className="cta_span">サービスを見る</span>
                    <div className="hero_custom__cta__icon" role="presentation" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M8.16667 15L7 13.8333L10.8333 10L7 6.16667L8.16667 5L13.1667 10L8.16667 15Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </a>
          <button className="hero_custom__video_button" title="Pause background video" aria-hidden>
            <svg className="hero_custom__video_button--pause" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14V0H14V14H8ZM0 14V0H6V14H0Z"></path>
            </svg>
            <svg className="hero_custom__video_button--play hero_custom__video_button--hidden" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 19V5L17.5 12L6.5 19Z"></path>
            </svg>
          </button>
        </section>
      </div>
    </div>
  )
}
