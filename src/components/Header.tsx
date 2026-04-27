'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="customexperiencefragment experiencefragment">
      <div className="cmp-experiencefragment cmp-experiencefragment--global-header">
        <div className="rad-global-nav">
          <div className="rad-global-nav__wrapper">
            <nav aria-label="global" className="rad-global-nav__container">
              <div className="rad-global-nav__menu">
                <button
                  className="rad-icon-button rad-nav-icon-button rad-global-nav__menu-open"
                  type="button"
                  aria-expanded={menuOpen}
                  aria-label="menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <div className="rad-icon-button__text">Menu</div>
                  <div className="rad-icon rad-icon__menu"></div>
                </button>
              </div>

              <div className="rad-global-nav__logo">
                <Link href="/" className="rad-global-nav__static-logo" aria-label="STORK Home">
                  <svg role="img" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>STORK</title>
                    <path d="M0 22.6L17.66 16.03L0 9.13V0L30.24 12.18V19.75L0 32V22.6Z" fill="#00A84F"/>
                  </svg>
                </Link>
                <Link href="/" className="cmp-logo" aria-label="STORK Home">
                  <div className="cmp-logo__svg-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg role="img" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>STORK</title>
                      <path className="cmp-logo__greater-than" d="M0 22.6L17.66 16.03L0 9.13V0L30.24 12.18V19.75L0 32V22.6Z"/>
                    </svg>
                    <span className="cmp-logo__text" style={{ fontFamily: 'Graphik, sans-serif', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.1em' }}>STORK</span>
                  </div>
                </Link>
              </div>

              <div className={`rad-global-nav__primary-nav${menuOpen ? ' rad-global-nav__primary-nav--open' : ''}`} role="toolbar">
                <button
                  className="rad-icon-button rad-icon-button--primary rad-nav-icon-button rad-global-nav__menu-close"
                  type="button"
                  aria-expanded={menuOpen}
                  aria-label="close-menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="rad-icon-button__text">Close Menu</div>
                  <div className="rad-icon rad-icon--compact rad-icon__close" aria-hidden="true"></div>
                </button>
                <ul className="rad-global-nav__menu-items">
                  <li>
                    <Link className="rad-button rad-button--ghost rad-global-nav__l1--link" href="/#services" onClick={() => setMenuOpen(false)}>
                      <div className="rad-button__text">サービス</div>
                    </Link>
                  </li>
                  <li>
                    <Link className="rad-button rad-button--ghost rad-global-nav__l1--link" href="/#ai" onClick={() => setMenuOpen(false)}>
                      <div className="rad-button__text">AIソリューション</div>
                    </Link>
                  </li>
                  <li>
                    <Link className="rad-button rad-button--ghost rad-global-nav__l1--link" href="/#company" onClick={() => setMenuOpen(false)}>
                      <div className="rad-button__text">会社概要</div>
                    </Link>
                  </li>
                  <li>
                    <Link className="rad-button rad-button--ghost rad-global-nav__l1--link" href="/contact" onClick={() => setMenuOpen(false)}>
                      <div className="rad-button__text">お問い合わせ</div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rad-global-nav__utility-nav">
                <div className="rad-header__search">
                  <Link className="rad-icon-button rad-icon-button--primary rad-nav-icon-button rad-header__search-button" href="/contact">
                    <div className="rad-icon-button__text">Contact</div>
                    <div className="rad-icon rad-icon--compact rad-icon__mail" aria-hidden="true"></div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="rad-global-nav__overlay" onClick={() => setMenuOpen(false)}></div>
        </div>
      </div>
    </header>
  )
}
